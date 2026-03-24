function WorkoutCard({ workout }) {
    return (
        <div>
            {workout.title}
            {workout.exercise}
            {workout.weight}
            {workout.set}
            {workout.date}

        </div>
    )
}

export default WorkoutCard