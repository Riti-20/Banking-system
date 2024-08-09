import React from "react";
import { useState, useEffect } from 'react'
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { MainData } from "./Globaldata";
import CreateAccount from "./CreateAccount.jsx";



// let MainData = [
//     {
//         Name: "Riti",
//         ACno: 1001,
//         Age: 20,
//         InitialAmount: 10000,
//         AllType: "Saving A/c",
//     },
//     {
//         Name: "Shiva",
//         ACno: 1002,
//         Age: 20,
//         InitialAmount: 11000,
//         AllType: "Salary A/c",
//     },
//     {
//         Name: "Tanishka",
//         ACno: 1003,
//         Age: 21,
//         InitialAmount: 12000,
//         AllType: "Current A/c",
//     },
//     {
//         Name: "Tanisha",
//         ACno: 1004,
//         Age: 21,
//         InitialAmount: 13000,
//         AllType: "Salary A/c",
//     },
//     {
//         Name: "Riya",
//         ACno: 1005,
//         Age: 21,
//         InitialAmount: 14000,
//         AllType: "Saving A/c",
//     },
//     {
//         Name: "Dev",
//         ACno: 1006,
//         Age: 22,
//         InitialAmount: 15000,
//         AllType: "Current A/c",
//     },
//     {
//         Name: "Ritika",
//         ACno: 1007,
//         Age: 21,
//         InitialAmount: 16000,
//         AllType: "Saving A/c",
//     },
//     {
//         Name: "Ritu",
//         ACno: 1008,
//         Age: 20,
//         InitialAmount: 17000,
//         AllType: "Current A/c",
//     },
//     {
//         Name: "Sakshi",
//         ACno: 1009,
//         Age: 21,
//         InitialAmount: 18000,
//         AllType: "Salary A/c",
//     },
//     {
//         Name: "Ravi",
//         ACno: 1010,
//         Age: 25,
//         InitialAmount: 19000,
//         AllType: "Saving A/c",
//     },

// ]
const About = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        setData(MainData)
    }, []);

    let filterdata = (e) => {
        if (e.target.value == "All") {
            setData(MainData)
        }
        else {
            let res = MainData.filter((item) => {
                if (item.AllType.includes(e.target.value)) {
                    return item;
                }
            })
            setData(res);
        }
    }


    return (
        <div className="dashbord">

            <div className="linker">
                <Link to="CreateAccount"><button>Create Account</button></Link>
                <button>Deposit</button>
                <button>Withdraw</button>
            </div>


            <div className="dashbord-2">
                <div className="inner-dashbord">
                    <div className="innerdata">
                        <button value="All" onClick={filterdata}>All</button><br />
                        <button value="Saving A/c" onClick={filterdata}>Saving A/C</button><br />
                        <button value="Salary A/c" onClick={filterdata}>Salary A/C</button><br />
                        <button value="Current A/c" onClick={filterdata}>Current A/C</button><br />
                    </div>
                    <div className='inner-dashbord-2'>
                        <table className="table">
                            <tbody>
                                <th>
                                    <tr>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Initial Amount</td>
                                        <td>Account No</td>
                                        <td>Age</td>
                                    </tr>
                                    {
                                        Data.map((item, index) =>
                                            <tr key={index} className=''>
                                                <td>{item.Name}</td>
                                                <td>{item.AllType}</td>
                                                <td>{item.InitialAmount}</td>
                                                <td>{item.ACno}</td>
                                                <td>{item.Age}</td>
                                            </tr>
                                        )}
                                </th>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
                    {/* <div>
                        <table className="table">
                            <thead >
                                <tbody>
                                    <tr >
                                        <td>Name</td>
                                        <td>AllType</td>
                                        <td>Initial Amount</td>
                                        <td>AcNo</td>
                                        <td>Age</td>
                                    </tr>

                                    {
                                        Data.map((item, index) =>
                                            <tr key={index} className="row" >
                                                <td>{item.Name}</td>
                                                <td>{item.AllType}</td>
                                                <td>{item.InitialAmount}</td>
                                                <td>{item.AcNo}</td>
                                                <td>{item.Age}</td>
                                            </tr>
                                        )}
                            </thead>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            </div >
    )
}

export default About; */}