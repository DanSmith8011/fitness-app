import WorkoutForm from "../components/WorkoutForm"

function WorkoutLog({ addWorkout }) {
    return (
        <div>
       <WorkoutForm addWorkout={addWorkout} />
       </div>
    )
}

export default WorkoutLog