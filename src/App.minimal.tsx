import { Route, Routes } from 'react-router-dom'
import './App.css'

function AppMinimal() {
  return (
    <div>
      <h1>Test SSR</h1>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/aboutUs" element={<div>About</div>} />
      </Routes>
    </div>
  )
}

export default AppMinimal
