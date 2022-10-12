import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="card complete">
      <p className="title">完了リスト</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <button className="blue" onClick={() => onClick(index)}>
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
