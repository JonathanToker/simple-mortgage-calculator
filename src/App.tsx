import { useState } from "react";
import "./App.css";
import commaNumber from "comma-number";
function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [apr, setApr] = useState(4.5);
  const [years, setYears] = useState(15);
  const [monthlyDebtService, setMonthlyDebtService] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue))) {
      setLoanAmount(rawValue);
    }
  };
  //M = P(i(1+i)^n)/((1+i)^n - 1)
  const monthlyPayment = (
    amount: number,
    yearlyInterest: number,
    yearsAmount: number
  ) => {
    const monthlyInterest = yearlyInterest / 100 / 12;
    const totalNumOfPayments = yearsAmount * 12;
    const monthlyPayment =
      amount *
      ((monthlyInterest * Math.pow(1 + monthlyInterest, totalNumOfPayments)) /
        (Math.pow(1 + monthlyInterest, totalNumOfPayments) - 1));
    console.log(monthlyPayment);
    return monthlyPayment;
  };
  return (
    <>
      <div className="container">
        <div className="input-field-wrapper">
          <label htmlFor="loan-amount">Loan amount</label>
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
          <label htmlFor="apr">Annual Interest Rate</label>
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
          <label htmlFor="years">Years Amount</label>
          <input
            type="number"
            value={years}
            name="years"
            id="years"
            required
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
        <button
          onClick={() =>
            setMonthlyDebtService(
              monthlyPayment(parseInt(loanAmount), apr, years).toFixed(2)
            )
          }
        >
          submit
        </button>
        {monthlyDebtService ? (
          <div className="monthly-payment">
            <span className="underline pr-2">Monthly payment:</span>
            {commaNumber(monthlyDebtService)}$
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
