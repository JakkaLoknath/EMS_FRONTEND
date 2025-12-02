import { useState } from "react";
import "./edit.css";
export default function Edit({setFetchAll, setEdit, selectedEmployee}) {

    const[name, setName] = useState(selectedEmployee.emp_name);
    const[dept, setDept] = useState(selectedEmployee.department);
    const[sal, setSal] = useState(selectedEmployee.salary);
    const[cit, setCity] = useState(selectedEmployee.city);
    
    const handleUpdate = async () => {
        const emp = {
            emp_id : selectedEmployee.emp_id,
            emp_name : name,
            department : dept,
            salary : sal,
            city : cit
        }

        const res = await fetch("https://emsbackend-production-296c.up.railway.app/addemployee", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(emp)
        });

        if(res.ok)
        {
            setFetchAll(true);
            setEdit(false);
        }
    }

    return(
        <div className="outer"> 
            <div>
                <h2>EMS</h2>
                <h4>(REACT + SPRING BOOT REST API)</h4>
                <p>UPDATE EMPLOYEE DETAILS</p>
                <div className="form">
                    <label htmlFor="name">Name:</label> <br />
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" type="text" name="name" id="name"/>
                    <br/>
                    <label htmlFor="dep">Department:</label> <br />
                    <input value={dept} onChange={e => setDept(e.target.value)} placeholder="Enter department" type="text" name="dept" id="dept"/> 
                    <br />
                    <label htmlFor="cit">City:</label> <br />
                    <input value={cit} onChange={e => setCity(e.target.value)} placeholder="Enter city" type="text" name="cit" id="cit"/>

                    <label htmlFor="sal">Salary:</label> <br />
                    <input value={sal} onChange={e => setSal(e.target.value)} placeholder="Enter salary" type="number" name="sal" id="sal"/>

                    <div className="btn">
                        <button className="back-btn" onClick={
                            () => {
                                setFetchAll(true);
                                setEdit(false);
                            }
                        }>Go Back</button>
                        <button className="update-btn" onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}