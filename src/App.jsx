import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  const [userblank, setuserblank] = useState(false);
  const [passblank, setpassblank] = useState(false);

  const [incorrectuser, setincorrectuser] = useState(false);
  const [incorrectpass, setincorrectpass] = useState(false);

  const [loginalert, setloginalert] = useState(false);

  const navi = useNavigate();

  const data = {
    username: "riti",
    password: "123",
  };

  const submit = () => {
    
    // username blank
    if (user === "") {
      setuserblank(true);
      setincorrectuser(false);
      setincorrectpass(false);
      return;
    } else {
      setuserblank(false);
    }

    // wrong username
    if (user !== data.username) {
      setincorrectuser(true);
      setincorrectpass(false);
      return;
    } else {
      setincorrectuser(false);
    }

    // password blank
    if (pass === "") {
      setpassblank(true);
      setincorrectpass(false);
      return;
    } else {
      setpassblank(false);
    }

    // wrong password
    if (pass !== data.password) {
      setincorrectpass(true);
      return;
    } else {
      setincorrectpass(false);
    }

    // successful login
    if (user === data.username && pass === data.password) {
      setloginalert(true);
      navi("/Dashboard");
    }
  };

  return (
    <div>
      <h1 className="heading1">Employee Login</h1>

      <div className="login">

        {loginalert && <p className="LoginAlert">Successfully Login!</p>}

        <input
          className="input1"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setuser(e.target.value)}
        />
        <br />

        {userblank && <p className="input1Alert">Field is Required</p>}
        {incorrectuser && <p className="input1Alert">Incorrect Username</p>}

        <input
          className="input2"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setpass(e.target.value)}
        />
        <br />

        {passblank && <p className="input2Alert">Field is Required</p>}
        {incorrectpass && <p className="input2Alert">Incorrect Password</p>}

        <button className="btn" onClick={submit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default App;
