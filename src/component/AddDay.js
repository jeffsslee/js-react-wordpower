import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function AddDay() {
  const navigate = useNavigate();
  const { data: days } = useFetch(`http://localhost:3001/days`);
  const handleAddDay = () => {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: Number(days.length + 1),
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`"Day ${days.length + 1}" has been created!`);
        navigate(`/days`);
      }
    });
  };

  return (
    <div className="container my-3">
      <h4>Add Day</h4>
      <div className="mt-3">
        <p>Current Days : {days.length}</p>
        <div>
          <button
            onClick={handleAddDay}
            className="btn btn-sm btn-outline-primary"
          >
            Add a day
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDay;
