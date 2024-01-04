import React, { useState, useEffect } from 'react';
import styles from '../styles/CalculateCar.module.css'; // Make sure this path is correct

interface Serie {
  serie_id: number;
  name: string;
}

interface Model {
  id: number;
  name: string;
}

interface Color {
  id: number;
  colorcode: string;
  sequence: number;
}

interface ColorDetail {
  id: number;
  srcImg: string;
  filename: string;
  colorname: string;
  colorprice: string;
}

const CalculateCar = () => {
  const [series, setSeries] = useState<Serie[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [colorDetail, setColorDetail] = useState<ColorDetail | null>(null);
  const [selectedSerie, setSelectedSerie] = useState<number | null>(null);
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('http://toyotathonburi.co.th/api/serieall');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSeries(data.series);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSeries();
  }, []);

  useEffect(() => {
    if (!selectedSerie) {
      setModels([]);
      setSelectedModel(null);
      return;
    }

    const fetchModels = async () => {
      try {
        const response = await fetch(`http://toyotathonburi.co.th/api/seriemodel/${selectedSerie}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setModels(data.series);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchModels();
  }, [selectedSerie]);

  useEffect(() => {
    if (!selectedModel) {
      setColors([]);
      setSelectedColor(null);
      return;
    }

    const fetchColors = async () => {
      try {
        const response = await fetch(`http://toyotathonburi.co.th/api/modelcolor/${selectedModel}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setColors(data.series);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchColors();
  }, [selectedModel]);

  useEffect(() => {
    if (!selectedColor) {
      setColorDetail(null);
      return;
    }

    const fetchColorDetail = async () => {
      try {
        const response = await fetch(`http://toyotathonburi.co.th/api/colordetail/${selectedColor}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setColorDetail(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchColorDetail();
  }, [selectedColor]);

  const handleSerieSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const serieId = parseInt(event.target.value, 10);
    setSelectedSerie(serieId);
  };

  const handleModelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = parseInt(event.target.value, 10);
    setSelectedModel(modelId);
  };

  const handleColorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const colorId = parseInt(event.target.value, 10);
    setSelectedColor(colorId);
  };

  return (
    <div className={styles.calculateCarContainer}>
      <h2>Select a Series</h2>
      <select onChange={handleSerieSelect} value={selectedSerie || ""} className={styles.dropdown}>
        <option value="">Select Series</option>
        {series.map((serie) => (
          <option key={serie.serie_id} value={serie.serie_id}>
            {serie.name}
          </option>
        ))}
      </select>

      {selectedSerie && models.length > 0 && (
        <>
          <h2>Select a Model</h2>
          <select onChange={handleModelSelect} value={selectedModel || ""} className={styles.dropdown}>
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedModel && colors.length > 0 && (
        <>
          <h2>Select a Color</h2>
          <select onChange={handleColorSelect} value={selectedColor || ""} className={styles.dropdown}>
            <option value="">Select Color</option>
            {colors.map((color) => (
              <option key={color.id} value={color.id} style={{ backgroundColor: color.colorcode }}>
                {color.colorcode}
              </option>
            ))}
          </select>
        </>
      )}

      {colorDetail && (
        <div className={styles.colorDetail}>
          <h2>Color Details</h2>
          <img
           src={`http://toyotathonburi.co.th/${colorDetail.srcImg}${colorDetail.filename}`}
            alt={colorDetail.colorname}
            className={styles.colorImage}
          />
          <p>Color Name: {colorDetail.colorname}</p>
          <p>Color Price: {colorDetail.colorprice}</p>
        </div>
      )}

      {/* {selectedSerie && <div>Selected Serie ID: {selectedSerie}</div>}
      {selectedModel && <div>Selected Model ID: {selectedModel}</div>}
      {selectedColor && <div>Selected Color ID: {selectedColor}</div>} */}

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default CalculateCar;
