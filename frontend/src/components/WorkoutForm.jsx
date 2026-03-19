import { useState } from "react"



function WorkoutForm() {
    const [exercise, setExercise] = useState('')
    const [set, setSet] = useState(0)
    const [weight, setWeight] = useState(0)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    
    return (
       <form>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type='text' value={exercise} onChange={(e) => setExercise(e.target.value)} />
        <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type='number' value={set} onChange={(e) => setSet(e.target.value)} />
        <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <button type='submit'>Log Workout</button>
       </form>
    )
}

export default WorkoutForm