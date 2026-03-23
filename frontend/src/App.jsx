import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import WorkoutHistory from './pages/WorkoutHistory'
import WorkoutLog from './pages/WorkoutLog'
import Navbar from './components/Navbar'
import WorkoutForm from './components/WorkoutForm'
import { useState } from 'react'


function App() {

const [workoutList, setWorkoutList] = useState([])

  function addWorkout(workout){
    setWorkoutList([...workoutList, workout])
}

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
  <Route path="/profile" element={<Profile />} />
  <Route path="/workouthistory" element={<WorkoutHistory />} />
  <Route path="/"  element={<WorkoutLog addWorkout={addWorkout} />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App  