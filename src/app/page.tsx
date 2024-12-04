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
    <div className="flex max-w-[160ch] flex-col gap-4">
      <h1 className="text-4xl font-bold">Ipsums</h1>
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
  );
}
