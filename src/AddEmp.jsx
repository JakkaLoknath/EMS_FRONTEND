import { useState } from "react";
import "./edit.css";
export default function AddEmp({setFetchAll, setAdd}) {

    const[name, setName] = useState("");
    const[dept, setDept] = useState("");
    const[sal, setSal] = useState(0);
    const[city, setCity] = useState("");

    const handleAdd = async () => {
        if(name.trim() === "" || dept.trim() === "" || city.trim() === "")
        {
            alert("Enter all Fields");
            return;
        }

        if(sal <= 0)
        {
            alert("Salary Can not be Zero");
            return;
        }
        
        const emp = {
            emp_name : name,
            department : dept,
            salary : sal,
            city : city
        }

        const res = await fetch("https://ems-backend-urrv.onrender.com/addemployee", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(emp)
        });

        if(res.ok)
        {
            setFetchAll(true);
            setAdd(false);
        }
    }

    return(
        <div className="outer"> 
            <div>
                <h2>EMS</h2>
                <h4>(REACT + SPRING BOOT REST API)</h4>
                <p>ADD NEW EMPLOYEE</p>
                <div className="form">
                    <label htmlFor="name">Name:</label> <br />
                    <input onChange={e => setName(e.target.value)} placeholder="Enter name" type="text" name="name" id="name" required/>
                    <br/>
                    <label htmlFor="dep">Department:</label> <br />
                    <input onChange={e => setDept(e.target.value)} placeholder="Enter department" type="text" name="dept" id="dept" required/> 
                    <br />
                    <label htmlFor="cit">City:</label> <br />
                    <input onChange={e => setCity(e.target.value)} placeholder="Enter city" type="text" name="cit" id="cit"/>

                    <label htmlFor="sal">Salary:</label> <br />
                    <input onChange={e => setSal(e.target.value)} placeholder="Enter salary" type="number" name="sal" id="sal" required/>

                    <div className="btn">
                        <button className="back-btn" onClick={
                            () => {
                                setFetchAll(true);
                                setAdd(false);
                            }
                        }>Go Back</button>
                        <button className="add-btn" onClick={handleAdd}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
