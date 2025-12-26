import { useState } from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { data, addAccount } from "./GlobalData.jsx";

const CreateAccount = () => {
  const [username, setname] = useState("");
  const [userAge, setAge] = useState("");
  const [userAccountNo, setAccountNo] = useState("");
  const [userAccountType, setAccountType] = useState("");
  const [userAmount, setAmount] = useState("");

  const navigate = useNavigate("");

  const Submit = () => {
    let newuserdata = {
      AccountNo: userAccountNo,
      Name: username,
      Age: userAge,
      AccountType: userAccountType,
      Balance: userAmount,
    };

    addAccount(newuserdata);

    navigate("/dashboard");
  };

  return (
    <div className="Form-wrapper">
      <input type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)} />
      <br />

      <input type="number" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
      <br />

      <input type="number" placeholder="Enter Account Number" onChange={(e) => setAccountNo(e.target.value)} />
      <br />

      <select onChange={(e) => setAccountType(e.target.value)}>
        <option disabled>Account Type</option>
        <option value="Salary">Salary Account</option>
        <option value="Current">Current Account</option>
        <option value="Saving">Saving Account</option>
      </select>
      <br />

      <input type="number" placeholder="enter Amount" onChange={(e) => setAmount(e.target.value)} />
      <br />

      <button onClick={Submit}>Submit</button>
    </div>
  );
};

export default CreateAccount;
