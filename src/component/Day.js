import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

function Day() {
  const { day } = useParams();
  const { data: wordList, onLoading } = useFetch(
    `http://localhost:3001/words?day=${day}`
  );

  return (
    <div className="container my-3">
      <h4>Word Details on day {day}</h4>
      <div className="mt-3">
        {wordList.length === 0 && !onLoading && <span>No Word exist</span>}
        {wordList.length === 0 && onLoading && <span>Loading.......</span>}
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th scope="col">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                </div>
              </th>
              <th scope="col">English</th>
              <th scope="col">Korean</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {wordList.map((word) => (
              <Word word={word} key={word.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Day;
