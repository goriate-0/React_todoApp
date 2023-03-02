import React, { useState } from "react";
import "./styles.css";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    alert("お疲れ様でした!  ヾ(´∀｀*)");
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickRestore = (index) => {
    alert("modosu");
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputArea
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 10}
      />
      {incompleteTodos.length >= 10 && (
        <p style={{ color: "#6B8E23" }}>
          登録できるtodoは10個までだ！消化せよ！
        </p>
      )}
      <IncompleteArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea
        completeTodos={completeTodos}
        onClickRestore={onClickRestore}
      />
    </>
  );
};
