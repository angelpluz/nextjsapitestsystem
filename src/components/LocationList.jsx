import React, { useEffect, useState } from 'react';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://toyotathonburi.co.th/api/locations')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.data); // เนื่องจากข้อมูลอยู่ใน property "data"
      })
      .catch((error) => console.error('เกิดข้อผิดพลาด:', error));
  }, []);

  return (
    <div>
      <h2>รายการสถานที่</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.website_seq}>
            <h3>{location.website_name}</h3>
            <p>ที่อยู่: {location.address}</p>
            <p>ประเภท: {location.type}</p>
            <p>เบอร์โทร: {location.tel}</p>
            <p>ตำแหน่ง: {location.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
