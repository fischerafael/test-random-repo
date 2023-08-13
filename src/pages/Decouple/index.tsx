import React, { useState } from "react";

interface IState {
  currentBook: string;
  books: string[];
}

export const Decouple = () => {
  const [state, setState] = useState<IState>({
    currentBook: "",
    books: [],
  });

  const reducer = new IBookState(state);

  const onChangeCurrent = (value: string) => {
    setState(() => reducer.updateCurrent(value));
  };

  const onAddBook = () => {
    setState(() => reducer.addBook());
  };

  const onRemoveBook = (book: string) => {
    setState(() => reducer.removeBook(book));
  };

  const onUpdate = (book: string, newValue: string) => {
    setState(() => reducer.updateBook(book, newValue));
  };

  return (
    <div>
      <input
        placeholder="Book"
        value={state.currentBook}
        onChange={(e) => onChangeCurrent(e.target.value)}
      />
      <button onClick={onAddBook}>Add</button>
      <div>
        <ul>
          {state.books.map((book) => (
            <li key={book}>
              <input
                value={book}
                onChange={(e) => onUpdate(book, e.target.value)}
              />
              <button onClick={() => onRemoveBook(book)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

class IBookState {
  constructor(private state: IState) {}

  updateCurrent = (value: string): IState => {
    return { ...this.state, currentBook: value };
  };

  addBook = (): IState => {
    return {
      ...this.state,
      books: [...this.state.books, this.state.currentBook],
      currentBook: "",
    };
  };

  removeBook = (book: string): IState => {
    return {
      ...this.state,
      books: this.state.books.filter((bk) => bk !== book),
    };
  };

  updateBook = (book: string, newValue: string): IState => {
    const booksCopy: string[] = JSON.parse(JSON.stringify(this.state.books));

    const updated = booksCopy.map((bk) => {
      if (bk === book) {
        return newValue;
      }
      return bk;
    });

    return { ...this.state, books: updated };
  };
}
