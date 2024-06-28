import { useEffect, useState } from "react";
import "./App.css";
import commaNumber from "comma-number";
function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [apr, setApr] = useState(4.5);
  const [years, setYears] = useState(15);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue))) {
      setLoanAmount(rawValue);
    }
  };
  return (
    <>
      <div className="container">
        <div className="input-field-wrapper">
          <label for="loan-amount">Loan amount</label>
          <input
            type="text"
            value={commaNumber(loanAmount)}
            onChange={(e) => handleInputChange(e)}
            required
            name="loan-amount"
            id="loan-amount"
          />
          $
        </div>
        <div className="input-field-wrapper">
          <label for="apr">Annual Interest Rate</label>
          <input
            type="number"
            value={apr}
            name="apr"
            id="apr"
            required
            onChange={(e) => setApr(Number(e.target.value))}
          />
          %
        </div>
        <div className="input-field-wrapper">
          <label for="years">Years Amount</label>
          <input
            type="number"
            value={years}
            name="years"
            id="years"
            required
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
      </div>
    </>
  );
}

export default App;
