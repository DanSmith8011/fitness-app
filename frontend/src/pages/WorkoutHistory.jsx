import WorkoutCard from "../components/WorkoutCard"

function WorkoutHistory({workoutList}) {
    return (
        <div>
            <h1>Workout History</h1>
            
            {workoutList.map((workout, index) => (
    
                <div key={index}>
                    <WorkoutCard workout={workout}/>
                </div>
            ))}
        </div>
    )
}

export default WorkoutHistory