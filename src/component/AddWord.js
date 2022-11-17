import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function AddWord() {
  const navigate = useNavigate();
  const [onFetching, setOnFetching] = useState(false);
  const { data: days } = useFetch(`http://localhost:3001/days`);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!onFetching) {
      setOnFetching(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: Number(dayRef.current.value),
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert(`"${engRef.current.value}" has been created!`);
          setOnFetching(false);
          navigate(`/days/${dayRef.current.value}`);
        }
      });
    }
  };

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <div className="container my-3">
      <h4>Add Word</h4>
      <div className="mt-3">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="inputEng" className="form-label">
              English
            </label>
            <input
              ref={engRef}
              type="text"
              className="form-control"
              id="inputEng"
              aria-describedby="engHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputKor" className="form-label">
              Korean
            </label>
            <input
              ref={korRef}
              type="text"
              className="form-control"
              id="inputKor"
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="daySelect">
              Select Day
            </label>
            <select
              ref={dayRef}
              className="form-select"
              aria-label="Default select example"
              id="daySelect"
            >
              <option>Select a day</option>
              {days.map((day) => {
                return (
                  <option value={day.day} key={day.id}>
                    {day.day}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className={
              !onFetching
                ? `btn btn-outline-success`
                : `btn btn-outline-success disabled`
            }
          >
            {!onFetching ? `Submit` : `On Submitting`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddWord;
