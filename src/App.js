import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Birthday from './Birthday/Birthday'
import Nav from './Nav'
import Review from './review/Review'
import Review2 from './review/Review2'

import './styles/styles.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Birthday />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review2" element={<Review2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
