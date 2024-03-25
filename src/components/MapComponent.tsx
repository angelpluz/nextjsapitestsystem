import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getDistance } from 'geolib'; // Make sure geolib is installed

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 13.7563, // Default center for Bangkok
  lng: 100.5018
};

const MapComponent = () => {
  const [branches, setBranches] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [nearestBranch, setNearestBranch] = useState(defaultCenter);
  const [selectedBranchId, setSelectedBranchId] = useState(null); // New state for selected branch ID
  const [loaded, setLoaded] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    // Fetch branches data
    const fetchData = async () => {
      try {
        const response = await fetch('http://110.78.166.170/api/locations');
        const data = await response.json();
        if (data.success) {
          const branchesData = data.data.map(branch => ({
            ...branch,
            location: {
              lat: parseFloat(branch.location.split(',')[0]),
              lng: parseFloat(branch.location.split(',')[1])
            }
          }));
          setBranches(branchesData);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    // Find the nearest branch
    if (userLocation && branches.length) {
      const closestBranch = branches.reduce((prev, curr) => {
        const prevDistance = getDistance(
          { latitude: prev.location.lat, longitude: prev.location.lng },
          userLocation
        );
        const currDistance = getDistance(
          { latitude: curr.location.lat, longitude: curr.location.lng },
          userLocation
        );
        return prevDistance < currDistance ? prev : curr;
      });
      setNearestBranch(closestBranch.location);
    }
  }, [branches, userLocation]);

  const handleLoad = () => setLoaded(true);

  // New function to handle marker clicks
  const handleMarkerClick = (branchId) => {
    const branch = branches.find(branch => branch.id.toString() === branchId.toString());
    setSelectedBranchId(branchId);
    setSelectedBranch(branch); // Store the whole branch object
  };
  const handleSelectChange = (event) => {
    const branchId = event.target.value;
    const branch = branches.find(branch => branch.id.toString() === branchId);
    setSelectedBranchId(branchId);
    setSelectedBranch(branch); // Store the whole branch object
  };

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onLoad={handleLoad}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={nearestBranch}
          zoom={10}
        >
          {loaded && branches.map(branch => (
            <Marker
              key={branch.id}
              position={branch.location}
              icon={{
                url: 'images/logo_map.png', // Make sure this path is correct
                scaledSize: new window.google.maps.Size(30, 30) // Adjust size as needed
              }}
              onClick={() => handleMarkerClick(branch.id)}
            />
          ))}
        </GoogleMap>
        <button onClick={() => setNearestBranch(userLocation)}>คนหาที่ใกล้ของฉัน</button>
      </LoadScript>
      <select onChange={handleSelectChange} value={selectedBranchId}>
        <option value="">Select a Branch</option>
        {branches.map(branch => (
          <option key={branch.id} value={branch.id}>
            {branch.website_name}
          </option>
        ))}
      </select>
      {selectedBranch && (
  <div>
    {/* Display details from the selectedBranch object */}
    <p>{selectedBranch.website_name}</p>
    {/* Add more details as needed */}
  </div>
)}
    </>
  );
};

export default React.memo(MapComponent);
