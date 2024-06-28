import { useEffect, useState } from "react";
import "./App.css";
import commaNumber from "comma-number";
function App() {
  const [loanAmount, setLoanAmount] = useState("");
  useEffect(() => {
    console.log(loanAmount);
  }, [loanAmount]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue))) {
      setLoanAmount(rawValue);
    }
  };
  return (
    <>
      <input
        type="text"
        value={commaNumber(loanAmount)}
        onChange={(e) => handleInputChange(e)}
      />
    </>
  );
}

export default App;
