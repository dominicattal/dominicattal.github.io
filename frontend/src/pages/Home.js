import { useEffect, useState } from "react"

import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {

    // create local states for updating
    const [workouts, setWorkouts] = useState(null)

    // fires once when component is rendered
    // empty array is dependency array
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}    
            </div>
        </div>
    )
}

export default Home