import { useEffect, useState } from "react";
import "./app.css";
export default function FetchEmp({setFetchAll, setEdit, setAdd, setSelectedEmployee})
{
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      fetch("https://emsbackend-production-296c.up.railway.app")
	  .then(res => res.json())
	  .then(data => setEmployees(data))
	  .catch(e => console.log("Something Went Wrong"))
    }, []);

    const handleDelete = async(id) => {
      if(!window.confirm("Are you sure you want to delete this employee?")) 
      {
        return;
      }

      const res = await fetch(`https://emsbackend-production-296c.up.railway.app/removeemployee/${id}`, {
        method : "DELETE"
      });

      if(res.ok) 
      {
        setEmployees(prev => prev.filter(e => e.emp_id !== id))
      }
      else
      {
        alert("Failed to delete")
      }
    }

    return(	
      <div className="outer"> 
        <div>
          <h2>EMS</h2>
          <h4>(REACT + SPRING BOOT REST API)</h4>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPARTMENT</th>
                <th>CITY</th>
                <th>SALARY</th>
                <th colSpan="2">ACTIONS</th>
              </tr>
           	</thead>
            {
              employees.map((e) => (
                <tr key={e.emp_id}>
                  <td>{e.emp_id}</td>
                  <td>{e.emp_name}</td>
                  <td>{e.department}</td>
                  <td>{e.city}</td>
                  <td>{e.salary}</td>
                  <td><button className="edit-btn" 
                              onClick={() => {
                                    setFetchAll(false);
                                    setEdit(true);
                                    setSelectedEmployee(e)
                              }}>Edit</button></td>
                  <td>
                    <button onClick={
                      () => handleDelete(e.emp_id)
                    } className="del-btn">Delete</button>
                  </td>
                </tr>
              ))
            }
          </table>
		  <div className="add-btn">
			<button onClick={() => {
				setAdd(true);
				setFetchAll(false);
			}}>ADD NEW EMPLOYEE</button>
		  </div>
        </div>
      </div>
    );
}