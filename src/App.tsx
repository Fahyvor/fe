import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import ContactComponent from './Components/Contact/ContactComponent'

interface RowData {
  name: string;
  age: number;
}

function App() {
  const [tableData, setTableData] = useState<RowData[]>([]);
  
  const [show, setShow] = useState(false)

  const handleFormSubmit = (formData: RowData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  return (
    <div>
      <Dashboard data={tableData} />
      {show ? (<ContactComponent onSubmit={handleFormSubmit} />): null }
    </div>
  )
}

export default App
