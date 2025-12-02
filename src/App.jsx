import { useState } from "react";

import FetchEmp from "./FetchEmp.jsx";
import Edit from "./Edit.jsx";
import AddEmp from "./AddEmp.jsx";
function App() {

  const[fetchAll, setFetchAll] = useState(true);
  const[edit, setEdit] = useState(false);
  const[add, setAdd] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  return (
    <>
      { (fetchAll) && 
        <FetchEmp setFetchAll={setFetchAll} setEdit={setEdit} setAdd={setAdd} setSelectedEmployee={setSelectedEmployee}/>
      }
      {
        (edit) &&
        <Edit setFetchAll={setFetchAll} setEdit={setEdit} selectedEmployee={selectedEmployee}/>
      }
      {
        (add) &&
        <AddEmp setFetchAll={setFetchAll} setAdd={setAdd}/>
      }
    </>
  )
}

export default App