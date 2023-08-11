import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import ContactComponent from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add-contact' element={<ContactComponent />} />
      </Routes>
    </Router>
  )
}

export default App