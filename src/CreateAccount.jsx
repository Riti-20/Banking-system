import { useState } from "react";
import "./createAccount.css";
 import { MainData } from "./Globaldata.jsx";
 import { useNavigate } from "react-router-dom"

const CreateAccount = () => {
    const [input, setinput] = useState();
    const [input2, setinput2] = useState();
    const [input3, setinput3] = useState();
    const [input4,setinput4] =useState();
    const [val, setval] = useState()
    const Navigate = useNavigate();
    console.log(input, input2, input3, val,input4)

    const sub = () => {
        let obj = {
            Name: input,
            AcNo: input2,
            AllType: val,
            InitialAmount: input3,
            Age: input4
        }
        MainData.push(obj)
        Navigate("/Dashboard")
    }


    return (
        <div className="relate">
            <video className="video" autoPlay muted loop >
                <source src="video.mp4"/>
            </video>
            <div className="main-box">
                <div className="all-item">
                    <div className="input-1">
                        <label>Name</label>
                        <input
                            type="text" placeholder="Name"
                            onChange={(e) => setinput(e.target.value)}
                        />
                    </div>
                    <div className="input-2">
                        <label>AcNo</label>
                        <input
                            type="Number" placeholder="Acno."
                            onChange={(e) => setinput2(e.target.value)}
                        />
                    </div>
                    <div className="input-3">
                        <label>Amount</label>
                        <input
                            type="number" placeholder="InitialAmount."
                            onChange={(e) => setinput3(e.target.value)}
                        />
                    </div>
                    <div>
                        <lable>Age</lable>
                        <input 
                        type="number" placeholder="Enter Age."
                        onChange={(e) => setinput4(e.target.value)}
                        />
                    </div>

                    <div className="slt">
                        <select className=""
                            onChange={(e) => setval(e.target.value)}>
                            <option value="All">All</option>
                            <option value="savingA/c" >savingAc</option>
                            <option value="currentA/C">currentAc</option>
                            <option value="salaryA/C">salaryAc</option>
                        </select>
                    </div>

                    <button onClick={sub}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;