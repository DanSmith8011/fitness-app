

function WorkoutHistory({workoutList}) {
    return (
        <div>
            <h1>Workout History</h1>
            
            {workoutList.map((workout, index) => (
                <div key={index}>
                    {workout.title}
                    {workout.exercise}
                    {workout.weight}
                    {workout.set}
                    {workout.date}

                </div>
            ))}
        </div>
    )
}

export default WorkoutHistory