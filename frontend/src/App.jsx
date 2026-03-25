import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import WorkoutHistory from './pages/WorkoutHistory'
import WorkoutLog from './pages/WorkoutLog'
import Navbar from './components/Navbar'
import WorkoutForm from './components/WorkoutForm'
import { useState } from 'react'


function App() {

const [workoutList, setWorkoutList] = useState([])
const [profile, setProfile] = useState({
  name: '',
  age: 0,
  weight: 0,
  height: 0,
  email:''

})

  function addWorkout(workout){
    setWorkoutList([...workoutList, workout])
}

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
  <Route path="/profile" element={<Profile profile={profile}/>} />
  <Route path="/workouthistory" element={<WorkoutHistory workoutList={workoutList} />} />
  <Route path="/"  element={<WorkoutLog addWorkout={addWorkout} />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App  