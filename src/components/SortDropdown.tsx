import allIpsums from "@/data/allIpsums";
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
  const exportIpsums = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(allIpsums, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ipsums.json";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-wrap items-center gap-8 rounded-xl bg-base-150 px-4 py-1 shadow-md">
      <div className="mr-auto flex items-end justify-between gap-8 md:w-1/2">
        <button
          onClick={exportIpsums}
          className="text-sm text-base-400 hover:text-base-500 hover:underline active:text-base-600"
        >
          Download all as JSON
        </button>
      </div>
      <div
        id="dropdowns"
        className="flex items-center gap-8"
      >
        <div className="flex items-center gap-2">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortMethod}
            className="bg-base-150 py-2"
            onChange={(e) =>
              setSortMethod(
                e.target.value as
                  | "length"
                  | "words"
                  | "sentences"
                  | "paragraphs",
              )
            }
          >
            <option value="length">Character Length</option>
            <option value="words">Word Count</option>
            <option value="sentences">Sentence Count</option>
            <option value="paragraphs">Paragraph Count</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="direction">Direction:</label>
          <select
            id="direction"
            value={sortDirection}
            className="bg-base-150 py-2"
            onChange={(e) => setSortDirection(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
