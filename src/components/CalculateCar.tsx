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
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [loanTerm, setLoanTerm] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [baseLoanAmount, setBaseLoanAmount] = useState<number>(0);
  const [selectedDownPayment, setSelectedDownPayment] = useState<number | null>(null);
const [selectedLoanTerm, setSelectedLoanTerm] = useState<number | null>(null);
const [basePrice, setBasePrice] = useState<number>(0);
const [downPayment, setDownPayment] = useState<number>(0);
const [loanAmount, setLoanAmount] = useState<number>(0);
const [customDownPayment, setCustomDownPayment] = useState('');


  
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
        setBasePrice(Number(data.colorprice)); // Set the base price here
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchColorDetail();
  }, [selectedColor]);

  useEffect(() => {
    if (loanAmount > 0 && loanTerm > 0) {
      // Parse the custom down payment, ensuring empty string becomes zero
      const parsedCustomDownPayment = parseFloat(customDownPayment) || 0;
      calculatePayment(loanAmount, loanTerm, parsedCustomDownPayment);
    }
  }, [loanAmount, loanTerm, customDownPayment]);

  const calculatePayment = (amount: number, term: number) => {
    console.log('Calculating payment with:', { amount, term, customDownPayment });
    const monthlyInterestRate = interestRate;
  
    const parsedCustomDownPayment = parseFloat(customDownPayment) || 0;
    const downPaymentAmount = parsedCustomDownPayment !== 0 ?
    parsedCustomDownPayment : (downPaymentPercentage / 100) * amount;

    const loanAmount = amount - downPaymentAmount;
    const totalPayments = term;
    
 
    if (totalPayments === 0 || loanAmount === 0) {
      setMonthlyPayment(0);
      return;
    }
  
    if (monthlyInterestRate === 0) {
      setMonthlyPayment(loanAmount / totalPayments);
    } else {
      const payment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
      setMonthlyPayment(payment);
    }
  };
  
  const handleSerieSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const serieId = parseInt(event.target.value, 10);
    setSelectedSerie(serieId);
  };

  const handleModelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = parseInt(event.target.value, 10);
    setSelectedModel(modelId);
  };


  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const annualInterestRate = Number(e.target.value);
    const monthlyInterestRate = annualInterestRate / 1200; // Convert to decimal and monthly rate
    setInterestRate(monthlyInterestRate); // Save the monthly interest rate to state
  };
  const handlePercentageSelect = (percentage) => {
    setSelectedDownPayment(percentage);
    setCustomDownPayment(0); // Clear custom input
    calculatePayment(); // Call the calculate function here
    setDownPaymentPercentage(percentage);
    calculatePayment(basePrice, loanTerm, (percentage / 100) * basePrice);
  };
  const handleCustomDownPaymentChange = (event) => {
    setCustomDownPayment(event.target.value);
    setSelectedDownPayment(null); // Clear selected percentage
  // Call the calculate function here
  };
  const handleCalculateClick = () => {
    // You need to call calculatePayment with the current loan amount and term
    calculatePayment(loanAmount, loanTerm);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };
  const handleColorSelect = async (color: Color) => {
    setSelectedColor(color.id);
    try {
      const response = await fetch(`http://toyotathonburi.co.th/api/colordetail/${color.id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setColorDetail(data); // Set color details here
      if (data && data.colorprice) {
        const price = Number(data.colorprice);
        setBasePrice(price); // Set the base price when a color is selected
        // You can now call handleDownPaymentSelect with the new base price
        handleDownPaymentSelect(downPaymentPercentage);
       
      }
    } catch (err) {
      console.error('Error fetching color details:', err);
    }
  };
  const handleDownPaymentSelect = (percentage: number) => {
    const calculatedDownPayment = (percentage / 100) * basePrice;
    setDownPayment(calculatedDownPayment);
    const calculatedLoanAmount = basePrice - calculatedDownPayment;
    setLoanAmount(calculatedLoanAmount);
    // คำนวณ Monthly Payment ใหม่หากมีการเลือก % เงินดาวน์
  
    
  };
  
  const handleLoanTermSelect = (months: number) => {
    setSelectedLoanTerm(months);
    // คำนวณ Monthly Payment ใหม่หากมีการเลือกจำนวนเดือนผ่อน
    let effectiveDownPayment = customDownPayment || (downPaymentPercentage / 100) * basePrice;
    calculatePayment(basePrice, months, effectiveDownPayment);
  };
  return (
    <div className={styles.calculateCarContainercomponent}>
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
    <div className={styles.colorSelector}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={styles.colorOption}
          style={{ backgroundColor: color.colorcode }}
          onClick={() => handleColorSelect(color)}
        >
          {/* Color circle button */}
        </button>
      ))}
    </div>
  </>
)}

      {colorDetail && (
        <div className={styles.colorDetail}>
         
          <img
           src={`http://toyotathonburi.co.th/${colorDetail.srcImg}${colorDetail.filename}`}
            alt={colorDetail.colorname}
            className={styles.colorImage}
          />
          <p>สี: {colorDetail.colorname}</p>
          <p>ราคา: {colorDetail.colorprice}</p>
        </div>
      )}

      {/* {selectedSerie && <div>Selected Serie ID: {selectedSerie}</div>}
      {selectedModel && <div>Selected Model ID: {selectedModel}</div>}
      {selectedColor && <div>Selected Color ID: {selectedColor}</div>} */}
 
      
     
      
      {/* Display the result */}
     
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.percentageButtonContainer}>
      {
  [5, 10, 15, 20, 25, 30].map((percentage) => (
    <button
    key={percentage}
    className={selectedDownPayment === percentage ? styles.selectedButton : styles.percentageButton}
    onClick={() => handlePercentageSelect(percentage)}
  >
    {percentage}%
  </button>
))}
    <input
        type="number"
        value={customDownPayment}
        onChange={handleCustomDownPaymentChange}
        placeholder="Enter down payment amount"
      />

      {/* Display the selected percentage or custom amount */}
      {selectedDownPayment && <p>Selected Percentage: {selectedDownPayment}%</p>}
      {customDownPayment && <p>Custom Down Payment: {customDownPayment}</p>}
</div>
      {/* Interest Rate Input */}
      
      <div className={styles.interestRateContainer}>
  <label htmlFor="annualInterestRate">ดอกเบี้ยที่กำหนด:</label>
  <input
    type="number"
    id="annualInterestRate"
    value={interestRate * 1200}
    onChange={handleInterestRateChange}
    placeholder="Annual Interest Rate (%)"
  />
</div>

      {/* Loan Term Buttons */}
      <div className={styles.percentageButtonContainer}>
  {[48, 60, 72, 84].map((months) => (
    <button
      key={months}
      // The ternary condition should be for the selected state, similar to the first snippet
      className={`${selectedLoanTerm === months ? styles.selectedButton : styles.colorOptionpercent}`}
      onClick={() => handleLoanTermSelect(months)}
    >
      {months} 
    </button>
  ))}
</div>
      {/* Calculate Button */}
    {monthlyPayment !== null && <p>Monthly Payment: {monthlyPayment.toFixed(2)}</p>}
      
      {/* Display the result */}
      
     
    </div>
  );
};

export default CalculateCar;
