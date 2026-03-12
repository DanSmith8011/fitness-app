import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import WorkoutHistory from './pages/WorkoutHistory'
import WorkoutLog from './pages/WorkoutLog'

function App() {
  return (
    <BrowserRouter>
    <Routes>
  <Route path="/profile" element={<Profile />} />
  <Route path="/workouthistory" element={<WorkoutHistory />} />
  <Route path="/" element={<WorkoutLog />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App  