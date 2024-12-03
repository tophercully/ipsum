"use client";
import IpsumCard from "@/components/IpsumCard";
import SortDropdown from "@/components/SortDropdown";
import allIpsums from "@/data/allIpsums";
import { stringToIpsum } from "@/util/stringToIpsum";
import { useState } from "react";

export default function Home() {
  const ipsums = allIpsums.map((ipsum) => stringToIpsum(ipsum));
  const [sortMethod, setSortMethod] = useState<
    "length" | "words" | "sentences" | "paragraphs"
  >("length");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const sortedIpsums = [...ipsums].sort((a, b) => {
    const comparison = a[sortMethod] - b[sortMethod];
    return sortDirection === "asc" ? comparison : -comparison;
  });

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
    <div className="flex max-w-[120ch] flex-col gap-4">
      <SortDropdown
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      />
      <button
        onClick={exportIpsums}
        className="mx-auto w-fit rounded-md border bg-base-600 px-2 py-1 text-white"
      >
        Download all as JSON
      </button>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(40ch,_1fr))] gap-8">
        {sortedIpsums.map((ipsum, index) => (
          <IpsumCard
            key={index}
            ipsum={ipsum}
          />
        ))}
      </div>
    </div>
  );
}
