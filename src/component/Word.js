import React, { useState } from "react";

function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = (id) => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  function del() {
    if (window.confirm("Are you sure to delete?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) return null;

  return (
    <tr
      className={
        isDone
          ? "bg-dark bg-gradient bg-opacity-25 text-secondary align-middle"
          : "align-middle"
      }
    >
      <td>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isDone}
            onChange={toggleDone}
          />
        </div>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-info me-2"
          onClick={toggleShow}
          style={{ width: "80px" }}
        >
          {isShow ? `Hide Kor` : `Show Kor`}
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={del}
          style={{ width: "80px" }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Word;
