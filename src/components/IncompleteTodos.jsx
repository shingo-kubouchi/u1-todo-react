import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="card todo">
      <p className="title">Todoリスト</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <div>
                <button className="red" onClick={() => onClickComplete(index)}>
                  完了
                </button>
                <button
                  className="red-outline"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
