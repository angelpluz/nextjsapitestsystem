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
  const [showMockupSelects, setShowMockupSelects] = useState(true);
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
const [showCustomInput, setShowCustomInput] = useState(false);

const [isCustomInputEnabled, setIsCustomInputEnabled] = useState(false);
const [customDownPayment, setCustomDownPayment] = useState('');
const downPaymentAmountNum = parseFloat(customDownPayment) || 0;
const downPaymentPercentageCalc = basePrice > 0
  ? (downPaymentAmountNum / basePrice) * 100
  : 0;


  
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
    // Simultaneously fetch all series, models, and colors data
    // Assume fetchAllData is a function that fetches everything and returns an object
    // with series, models, and colors arrays
    const fetchAllData = async () => {
      try {
        const seriesResponse = await fetch('http://toyotathonburi.co.th/api/serieall');
        const seriesData = await seriesResponse.json();
        // Similar fetches for models and colors, then set state with all data
        setSeries(seriesData.series);
        // Assume setAllModels and setAllColors set state with all models and colors respectively
      } catch (error) {
        console.error('Fetching error:', error);
        setError(error.toString());
      }
    };
  
    fetchAllData();
  }, []);
  useEffect(() => {
    if (loanAmount > 0 && loanTerm > 0) {
      // Parse the custom down payment, ensuring empty string becomes zero
      const parsedCustomDownPayment = parseFloat(customDownPayment) || 0;
      calculatePayment(loanAmount, loanTerm, parsedCustomDownPayment);
    }
  }, [loanAmount, loanTerm, customDownPayment]);

  const calculatePayment = (amount: number, term: number) => {
    // Fixed annual interest rate at 2.00%
    const annualInterestRate = 2.00;
    // Convert the annual interest rate to a monthly rate and decimal form for calculation
    const monthlyInterestRate = annualInterestRate / 1200;
  
    console.log('Calculating payment with:', { amount, term, customDownPayment });
  
    const downPaymentPercentageCalc = customDownPayment && basePrice > 0
      ? (parseFloat(customDownPayment) / basePrice) * 100
      : 0;
    const parsedCustomDownPayment = parseFloat(customDownPayment) || 0;
    const downPaymentAmount = parsedCustomDownPayment !== 0
      ? parsedCustomDownPayment
      : (downPaymentPercentage / 100) * amount;
  
    const loanAmount = amount - downPaymentAmount;
    const totalPayments = term;
  
    if (totalPayments === 0 || loanAmount === 0) {
      setMonthlyPayment(0);
      return;
    }
  
    // Calculate the monthly payment
    const payment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyPayment(payment);
  };
  
  const handleSerieSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const serieId = parseInt(event.target.value, 10);
    setSelectedSerie(serieId);
    setShowMockupSelects(false);
  };

  const handleModelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = parseInt(event.target.value, 10);
    setSelectedModel(modelId);
  };

  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = isFocused 
  ? customDownPayment 
  : formatNumberWithCommas(customDownPayment);
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
  const handleDownPaymentSelection = (e) => {
    const value = e.target.value;
    if (value === 'Custom') {
      setSelectedDownPayment(null); // Indicate that a custom down payment will be entered
      setShowCustomInput(true); // Show the custom input field
    } else {
      const percentage = Number(value);
      setSelectedDownPayment(percentage); // Set the selected down payment percentage
      setCustomDownPayment(''); // Clear any custom down payment value
      setShowCustomInput(false); // Hide the custom input field
    }
  };




  return (
<div className={styles.calculateCarContainercomponent}>

  {colorDetail && (
        <div className={styles.colorDetail}>
         
          <img
           src={`http://toyotathonburi.co.th/${colorDetail.srcImg}${colorDetail.filename}`}
            alt={colorDetail.colorname}
            className={styles.colorImage}
          />
          
<p className={styles.colorName}>สี: {colorDetail.colorname}</p>
<div className={styles.priceContainer}>
  <p className={styles.priceLabel}>ราคา:</p>
  <p className={styles.carPrice}>
    {new Intl.NumberFormat('en-US').format(Number(colorDetail.colorprice.replace(/,/g, '')))}
  </p>
</div>

        </div>
      )}
  <select onChange={handleSerieSelect} value={selectedSerie || ""} className={styles.dropdown}>
    <option value="">เลือก รุ่นรถยนต์</option>
    {series.map((serie) => (
      <option key={serie.serie_id} value={serie.serie_id}>
        {serie.name}
      </option>
    ))}
  </select>


  {showMockupSelects && (
  <>
    <select disabled className={styles.dropdown}>
      <option>เลือก โมเดล</option>
    </select>

  </>
)}


      {selectedSerie && models.length > 0 && (
        <>
          <h2>เลือก โมเดล</h2>
  <select 
    onChange={handleModelSelect} 
    value={selectedModel || ""} 
    className={styles.dropdown} 
    disabled={!selectedSerie}
  >
    <option value="">เลือกรุ่น</option>
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
    <h2>เลือกสี</h2>
    <div className={styles.colorSelector}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={styles.colorOption}
          style={{ background : color.colorcode }}
          onClick={() => handleColorSelect(color)}
        >
          {/* Color circle button */}
        </button>
      ))}
    </div>
  </>
)}

  

      {/* {selectedSerie && <div>Selected Serie ID: {selectedSerie}</div>}
      {selectedModel && <div>Selected Model ID: {selectedModel}</div>}
      {selectedColor && <div>Selected Color ID: {selectedColor}</div>} */}
 
      
     
      
      {/* Display the result */}
  <div>
    {!selectedDownPayment && (
      <input
        type={isFocused ? "number" : "text"}
        value={displayValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleCustomDownPaymentChange}
        placeholder="จำนวนเงินดาว"
        className={styles.customInput}
      />
    )}
  </div>
  <h1>จำนวนเงินดาว</h1>
      <div className={styles.percentageSelectContainer}>
  <label htmlFor="downPaymentSelection"></label>
  <select
    id="downPaymentSelection"
    value={selectedDownPayment ? selectedDownPayment.toString() : customDownPayment ? 'Custom' : ''}
    onChange={(e) => {
      const value = e.target.value;
      if (value === 'Custom') {
        // Handle selection of "Custom" option
        setSelectedDownPayment(null); // This indicates a custom down payment is being entered
      } else {
        // Parse and set the selected down payment percentage
        const percentage = Number(value);
        handlePercentageSelect(percentage); // Assuming this function correctly updates the state
        setCustomDownPayment(''); // Clear any custom down payment value
      }
    }}
    className={styles.dropdown}
  >
    <option value="">หรือ เลือก</option>
    {[5, 10, 15, 20, 25, 30].map((percentage) => (
      <option key={percentage} value={percentage}>{percentage}%</option>
    ))}
   
  </select>
</div>

{/* Display the custom input field only if "Custom" option is selected (indicated by selectedDownPayment being null) */}


{/* Display the selected percentage or custom amount */}


      {/* Interest Rate Input */}
      
      {/* <div className={styles.interestRateContainer}>
  <label htmlFor="annualInterestRate">ดอกเบี้ยที่กำหนด:</label>
  <input
    type="number"
    id="annualInterestRate"
    value={interestRate * 1200}
    onChange={handleInterestRateChange}
    placeholder="Annual Interest Rate (%)"
  />
</div> */}

      {/* Loan Term Buttons */}
      <div className={styles.loanTermSelectContainer}>
  <label htmlFor="loanTermSelection">จำนวนงวด</label>
  <select
    id="loanTermSelection"
    value={selectedLoanTerm || ''}
    onChange={(e) => {
      handleLoanTermSelect(Number(e.target.value));
    }}
    className={styles.dropdown}
  >
    <option value="">เลือกจำนวนงวด</option>
    {[48, 60, 72, 84].map((months) => (
      <option key={months} value={months}>{months} เดือน</option>
    ))}
  </select>
</div>
      {/* Calculate Button */}
      {monthlyPayment !== null && (
    <p>ชำระต่อเดือนที่: {monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</p>
  )}
      
      {/* Display the result */}
      {customDownPayment && (
    <p>จำนวนเงินดาว: {Number(customDownPayment).toLocaleString('en-US')} ({downPaymentPercentageCalc.toFixed(2)}%)</p>
  )}
     
    </div>
  );
};

export default CalculateCar;
