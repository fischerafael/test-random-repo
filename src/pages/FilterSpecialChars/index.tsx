import React, { useState } from "react";

const places = ["curaçao", "Paraná", "München", "São Paulo", "são carlos"];

export const FilterSpecialChars = () => {
  const [search, setSearch] = useState("");

  const results = filterResults(search);
  const formattedResults = convertFirstLetterToUpperCase(results);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div>
        {formattedResults.map((place) => (
          <p key={place}>{place}</p>
        ))}
      </div>
    </div>
  );
};

const convertFirstLetterToUpperCase = (strings: string[]): string[] => {
  return strings.map((str) => {
    return str
      .split(" ")
      .map((word) => {
        if (word.length === 0) {
          return word;
        } else {
          const firstLetter = word.charAt(0).toUpperCase();
          const restOfWord = word.slice(1);
          return firstLetter + restOfWord;
        }
      })
      .join(" ");
  });
};

const normalizeString = (string: string): string => {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const filterResults = (searchTerm: string) =>
  places.filter((item) =>
    normalizeString(item).includes(normalizeString(searchTerm))
  );
