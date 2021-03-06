import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm/WorkoutForm";
import "./home.css";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://workouttrackr.herokuapp.com/api/workouts"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <main>
      <div className="home">
        <WorkoutForm />
        <div className="workouts">
          <h4>Workouts</h4>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
