import React, { useState } from "react";

const obj = {
    Name: 'riti',
    Pass: '1234'
};
const Login = () => {
    const [name, setname] = useState("");
    const [pswd, setpswd] = useState("");
    const [first, setFirst] = useState(false);
    //const [second, setSecond] = useState(false);

    const click = () => {
        if (obj.Name == name && obj.Pass == pswd) {
            setFirst(true);
            //setSecond(false);
        }
        else {
            // setSecond(true);
            setFirst(false);
        }
    }
    return (
        <div className="wrapper">
            <h1>Employee Login</h1>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e) => setname(e.target.value)}
                    /><br/>
                    {first && <p>This field is required</p>}
                    {/*second && <p>This field is not required</p>*/}
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setpswd(e.target.value)}
                   />
                    {first && <p>This field is required</p>}
                    {/*second && <p>This field is not required</p>*/}
                </div>
                    <button onClick={click}>SUBMIT</button>
        </div>
    )
}

export default Login;