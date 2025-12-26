import { useState } from "react";
import "./DebitAmount.css";
import { useNavigate } from "react-router-dom";
import { debit } from "./GlobalData.jsx";

const DebitAmount = () => {
  const [AccountNoinput2, setAccountNoinput2] = useState("");
  const [Amountinput2, setAmountinput2] = useState("");
  const navigate2 = useNavigate();

  const Debit = () => {
    debit(AccountNoinput2, Amountinput2);
    navigate2("/Dashboard");
  };

  return (
    <div className="Debit-wrapper">
      <input type="number" onChange={(e) => setAccountNoinput2(e.target.value)} placeholder="Enter Account No" />
      <br />

      <input type="number" placeholder="Enter Amount" onChange={(e) => setAmountinput2(e.target.value)} />
      <br />

      <button onClick={Debit}>Debit</button>
    </div>
  );
};

export default DebitAmount;
