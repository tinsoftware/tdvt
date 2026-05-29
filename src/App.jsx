import { useState, useEffect } from 'react';
import './App.css';
import { conversionCategories, convert } from './utils/conversions';

function App() {
  const [category, setCategory] = useState('area');
  const [fromUnit, setFromUnit] = useState('sao-bac-bo');
  const [toUnit, setToUnit] = useState('m2');
  const [fromValue, setFromValue] = useState('1');
  const [toValue, setToValue] = useState('');

  // Handle category change
  useEffect(() => {
    const units = Object.keys(conversionCategories[category].units);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    setFromValue('1');
  }, [category]);

  // Handle conversion when any input changes
  useEffect(() => {
    if (fromValue === '') {
      setToValue('');
      return;
    }
    const result = convert(Number(fromValue), fromUnit, toUnit, category);
    setToValue(result.toString());
  }, [fromValue, fromUnit, toUnit, category]);

  const handleFromChange = (e) => {
    const val = e.target.value;
    if (val === '' || !isNaN(val)) {
      setFromValue(val);
    }
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    if (val === '' || !isNaN(val)) {
      setToValue(val);
      // Reverse convert
      if (val !== '') {
        const result = convert(Number(val), toUnit, fromUnit, category);
        setFromValue(result.toString());
      } else {
        setFromValue('');
      }
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>tDVT</h1>
        <p>Tổng hợp Đơn Vị Tính</p>
      </header>

      <div className="converter-box">
        <div className="form-group">
          <label>Danh mục</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {Object.keys(conversionCategories).map(cat => (
              <option key={cat} value={cat}>{conversionCategories[cat].name}</option>
            ))}
          </select>
        </div>

        <div className="conversion-row">
          <div className="input-section">
            <input 
              type="text" 
              value={fromValue} 
              onChange={handleFromChange} 
              placeholder="Nhập số..."
            />
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
              {Object.keys(conversionCategories[category].units).map(unit => (
                <option key={unit} value={unit}>{conversionCategories[category].units[unit].name}</option>
              ))}
            </select>
          </div>

          <div className="equals">=</div>

          <div className="input-section">
            <input 
              type="text" 
              value={toValue} 
              onChange={handleToChange} 
              placeholder="Kết quả..."
            />
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              {Object.keys(conversionCategories[category].units).map(unit => (
                <option key={unit} value={unit}>{conversionCategories[category].units[unit].name}</option>
              ))}
            </select>
{/* Explanation of calculation */}
{toValue !== '' && (
  <div className="calculation-explanation">
    Cách tính: {fromValue} × {conversionCategories[category].units[fromUnit].value} ÷ {conversionCategories[category].units[toUnit].value} = {toValue}
  </div>
)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
