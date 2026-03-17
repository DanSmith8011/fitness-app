import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import WorkoutHistory from './pages/WorkoutHistory'
import WorkoutLog from './pages/WorkoutLog'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
  <Route path="/profile" element={<Profile />} />
  <Route path="/workouthistory" element={<WorkoutHistory />} />
  <Route path="/" element={<WorkoutLog />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App  