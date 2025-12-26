import { useState, useEffect } from "react";
import "./dashboard.css";
import { data } from "./GlobalData.jsx";
import { Link } from "react-router-dom";

const Dasboard = () => {
  const [showdata, setshowdata] = useState([]);

  useEffect(() => {
    setshowdata(data);
  }, []);

  const Account = (val) => {
    let result = data.filter((item) => item.AccountType == val);
    setshowdata(result);
  };

  const ResetData = () => {
    setshowdata(data);
  };

  return (
    <div>
      <nav className="nav-section">
        <div className="logo">
          <h1>BOI</h1>
          <span>Bank Of India</span>
        </div>

        <Link className="LinkCustom" to="/CreateAccount">Create Account</Link>
        <Link className="LinkCustom" to="/CreditAmount">Credit Amount</Link>
        <Link className="LinkCustom" to="/DebitAmount">Debit Amount</Link>
      </nav>

      <div className="heading">
        <h3>ACCOUNT No.</h3>
        <h3>NAME</h3>
        <h3>AGE</h3>
        <h3>ACCOUNT TYPE</h3>
        <h3>BALANCE</h3>
      </div>

      <aside className="screen-section">
        {showdata.map((item, index) => (
          <div key={index} className="content">
            <h5>{item.AccountNo}</h5>
            <h5>{item.Name}</h5>
            <h5>{item.Age}</h5>
            <h5>{item.AccountType}</h5>
            <h5>{item.Balance}</h5>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Dasboard;
