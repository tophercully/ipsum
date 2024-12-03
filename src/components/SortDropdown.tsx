import React from "react";

interface Props {
  sortMethod: "length" | "words" | "sentences" | "paragraphs";
  setSortMethod: (
    method: "length" | "words" | "sentences" | "paragraphs",
  ) => void;
  sortDirection: "asc" | "desc";
  setSortDirection: (direction: "asc" | "desc") => void;
}

const SortDropdown: React.FC<Props> = ({
  sortMethod,
  setSortMethod,
  sortDirection,
  setSortDirection,
}) => {
  return (
    <div className="flex items-center gap-8 bg-base-150 px-5 py-2 shadow-md">
      <h1 className="mr-auto text-3xl font-semibold">Filler Text by length</h1>
      <div className="flex items-center gap-2">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortMethod}
          className="bg-base-150 py-2"
          onChange={(e) => setSortMethod(e.target.value as any)}
        >
          <option value="length">Length</option>
          <option value="words">Words</option>
          <option value="sentences">Sentences</option>
          <option value="paragraphs">Paragraphs</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="direction">Direction:</label>
        <select
          id="direction"
          value={sortDirection}
          className="bg-base-150 py-2"
          onChange={(e) => setSortDirection(e.target.value as any)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SortDropdown;
