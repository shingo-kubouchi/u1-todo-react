import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="card add">
      <input
        id="add-text"
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button
        className="yellow"
        onClick={onClick}
        id="add-button"
        disabled={disabled}
      >
        追加
      </button>
    </div>
  );
};
