import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function DayList() {
  const { data: days, onLoading } = useFetch(`http://localhost:3001/days`);

  return (
    <div className="container my-3">
      <h4>Day List</h4>
      <div className="mt-3">
        {days.length === 0 && !onLoading && <span>No Day exist</span>}
        {days.length === 0 && onLoading && <span>Loading.......</span>}
        {days.map((day) => (
          <Link to={`/days/${day.day}`} key={day.id}>
            <button
              className="btn btn-sm btn-secondary me-2"
              style={{ width: "50px" }}
            >
              {day.day}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DayList;
