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
  const [showImage, setShowImage] = useState(true);
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
const [isSelectionComplete, setIsSelectionComplete] = useState(false);
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
  console.log("Initial showImage state:", showImage);
  const calculatePayment = (amount: number, term: number) => {
    // Fixed annual interest rate at 2.00%
    const annualInterestRate = 2.00;
    // Convert the annual interest rate to a monthly rate and decimal form for calculation
    const monthlyInterestRate = annualInterestRate / 1200;
  
    console.log('Calculating payment with:', { amount, term, customDownPayment });
  

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
    setShowImage(false);
    console.log("showImage after calculatePayment:", showImage);
  };
  
  const handleSerieSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const serieId = parseInt(event.target.value, 10);
    setSelectedSerie(serieId);
    setShowMockupSelects(false);
    setShowImage(true);
  };

  const handleModelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = parseInt(event.target.value, 10);
    setSelectedModel(modelId);
    setShowImage(true);
  };

  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = isFocused 
  ? customDownPayment 
  : formatNumberWithCommas(customDownPayment);

  
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
        handleDownPaymentSelect(downPaymentPercentage); // Call handleDownPaymentSelect with the new base price
        setIsSelectionComplete(true); // Set isSelectionComplete to true as the selection is now complete
      }
    } catch (err) {
      console.error('Error fetching color details:', err);
      setIsSelectionComplete(false); // Set isSelectionComplete to false as there was an error
    }
    setShowImage(true);
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

  console.log("Effect running: loanAmount, loanTerm, customDownPayment", loanAmount, loanTerm, customDownPayment);



  return (
<div className={styles.calculateCarContainercomponent}>
{
  !isSelectionComplete && (
    <img src="/images/mix_modelcars.png" alt="Mixed Model Cars" className={styles.insuranceImage1} />
  )
}
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

  


 
      
     
      
      {/*พรุ่งนี้ใส่ tag CSS ให้สวยงาม */}
      
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




      {/* Loan Term Buttons */}
      <div className={styles.loanTermSelectContainer}>
  <label htmlFor="loanTermSelection">จำนวนงวด</label>
  </div>
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

   
  <div className={`${styles.paymentInfoContainer} relativeParent`}> {/* Add the relativeParent class here */}
  {monthlyPayment !== null && (
    <>
      <p className={styles.paymentLabel}>Pay per month at:</p>
      <p className={styles.paymentAmount}>
        {monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} baht
      </p>
    </>
  )}
  
  {customDownPayment && (
    <>
      <p className={styles.paymentLabel}>Star Amount:</p>
      <p className={styles.paymentAmount}>
        {Number(customDownPayment).toLocaleString('en-US')} ({downPaymentPercentageCalc.toFixed(2)}%)
      </p>
    </>
  )}
  
  {/* Conditionally display the image based on showImage state */}
  <img 
    src="/images/price_com.jpg" 
    alt="" 
    className={`${styles.insuranceImage} ${!showImage ? 'hide' : ''}`} 
  />
</div>


  <div className={styles.calculateCarContainercomponent1}>
     <h1>หมายเหตุ :</h1>
     <h1>* อ้างอิงตามอัตราดอกเบี้ย โตโยต้า ลีสซิ่ง (ประเทศไทย)</h1>
     <h1>• โปรแกรมคำนวณนี้ใช้เพื่อประกอบการตัดสินใจเบื้องต้นเท่านั้น ไม่ถือเป็นส่วนหนึ่งของการขอสินเชื่อ หรือเอกสารประกอบสัญญาได้</h1>
						<h1>• ดอกเบี้ยอาจมีการเปลี่ยนแปลง เงื่อนไขดอกเบี้ยพิเศษกรุณาติดต่อพนักงาน</h1>
    </div>
    </div>
  );
};

export default CalculateCar;
