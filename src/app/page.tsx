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

  return (
    <div className="flex max-w-[160ch] flex-col gap-8">
      <div
        id="header"
        className="flex flex-col gap-2"
      >
        <h1 className="text-2xl font-bold">Ipsum Else</h1>
        <h2 className="text-5xl">More like Bore 'em Ipsum. </h2>
        <h3 className="max-w-[60ch] text-2xl">
          Here's a collection of richer text filler that reads like real
          english, to fill space until the real content comes.
        </h3>
      </div>
      <div
        id="content"
        className="flex flex-col gap-4"
      >
        <SortDropdown
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(40ch,_1fr))] gap-8">
          {sortedIpsums.map((ipsum, index) => (
            <IpsumCard
              key={index}
              ipsum={ipsum}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
