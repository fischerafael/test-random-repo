import React, { useState } from "react";
import { atom, useRecoilState } from "recoil";

export interface IUseStates {
  (): {
    todos: string[];
    currentTodo: string;
    removeTodo: (todo: string) => void;
    addTodo: () => void;
    handleChange: (value: string) => void;
  };
}

interface TodoModel {
  currentTodo: string;
  todos: string[];
}

export const useStates: IUseStates = () => {
  const [state, setState] = useState<TodoModel>({
    currentTodo: "",
    todos: [],
  });

  const handleChange = (value: string) => {
    setState((prev) => ({ ...prev, currentTodo: value }));
  };

  const addTodo = () => {
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, prev.currentTodo],
      currentTodo: "",
    }));
  };

  const removeTodo = (todo: string) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((td) => td !== todo),
    }));
  };

  const todos: string[] = state.todos;
  const currentTodo: string = state.currentTodo;

  return {
    todos,
    currentTodo,
    removeTodo,
    addTodo,
    handleChange,
  };
};

const todoState = atom<TodoModel>({
  key: "todoState",
  default: {
    currentTodo: "",
    todos: [],
  },
});

export const useRecoilStates: IUseStates = () => {
  const [state, setState] = useRecoilState<TodoModel>(todoState);

  const handleChange = (value: string) => {
    setState((prev) => ({ ...prev, currentTodo: value }));
  };

  const addTodo = () => {
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, prev.currentTodo],
      currentTodo: "",
    }));
  };

  const removeTodo = (todo: string) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((td) => td !== todo),
    }));
  };

  const todos: string[] = state.todos;
  const currentTodo: string = state.currentTodo;

  return {
    todos,
    currentTodo,
    removeTodo,
    addTodo,
    handleChange,
  };
};
