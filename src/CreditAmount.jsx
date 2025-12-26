import { useState } from "react";
import "./CreditAmount.css";
import { useNavigate } from "react-router-dom";
import { credit } from "./GlobalData.jsx";

const CreditAmount = () => {
  const [AccountNoinput, setAccountNoinput] = useState("");
  const [Amountinput, setAmountinput] = useState("");
  const navigate = useNavigate();

  const Credit = () => {
    credit(AccountNoinput, Amountinput);
    navigate("/Dashboard");
  };

  return (
    <div className="Credit-wrapper">
      <input type="number" onChange={(e) => setAccountNoinput(e.target.value)} placeholder="Enter Account No" />
      <br />

      <input type="number" placeholder="Enter Amount" onChange={(e) => setAmountinput(e.target.value)} />
      <br />

      <button onClick={Credit}>Credit</button>
    </div>
  );
};

export default CreditAmount;
