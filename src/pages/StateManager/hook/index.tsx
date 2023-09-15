import { useState } from "react";
import { atom, useRecoilState } from "recoil";

interface IStateManager {
  handleAddTodo: () => void;
  handleDeleteTodo: (todo: string) => void;
  handleChange: (value: string) => void;
  todos: string[];
  currentTodo: string;
}

interface IHook {
  (): IStateManager;
}

export const useUseState: IHook = () => {
  const [state, setState] = useState<{ currentTodo: string; todos: string[] }>({
    currentTodo: "",
    todos: [],
  });

  const handleChange = (value: string) => {
    setState((prev) => ({ ...prev, currentTodo: value }));
  };

  const handleAddTodo = () => {
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, prev.currentTodo],
      currentTodo: "",
    }));
  };

  const handleDeleteTodo = (todo: string) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((td) => td !== todo),
    }));
  };

  return {
    handleAddTodo,
    handleDeleteTodo,
    handleChange,
    todos: state.todos,
    currentTodo: state.currentTodo,
  };
};

const textState = atom<{ currentTodo: string; todos: string[] }>({
  key: "recoilSampleState",
  default: {
    currentTodo: "",
    todos: [],
  },
});

export const useRecoilSample: IHook = () => {
  const [state, setState] = useRecoilState(textState);

  const handleChange = (value: string) => {
    setState((prev) => ({ ...prev, currentTodo: value }));
  };

  const handleAddTodo = () => {
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, prev.currentTodo],
      currentTodo: "",
    }));
  };

  const handleDeleteTodo = (todo: string) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((td) => td !== todo),
    }));
  };

  return {
    handleAddTodo,
    handleDeleteTodo,
    handleChange,
    todos: state.todos,
    currentTodo: state.currentTodo,
  };
};
