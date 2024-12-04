import allIpsums from "@/data/allIpsums";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation - Ipsum Else",
  description:
    "A simple API for fetching dynamically filler text in your project",
};

const DocsPage = () => {
  return (
    <div className="flex max-w-[80ch] flex-col gap-8">
      <div
        id="header"
        className="flex flex-col gap-2"
      >
        <Link
          href={"/"}
          className="text-2xl font-bold"
        >
          Ipsum Else
        </Link>
        <h1 className="text-5xl">API Documentation </h1>
        <span className="max-w-[60ch] text-2xl">
          <span>
            A simple API for fetching dynamically filler text in your project
          </span>
        </span>
      </div>
      <div
        id="content"
        className="flex flex-col gap-4"
      >
        <section className="flex flex-col rounded-md bg-base-50 p-4">
          <h2 className="text-xl font-semibold">GET /api/get-all-ipsums</h2>
          <p className="mb-4">Fetches a list of all available ipsums</p>
          <h3 className="text-lg font-medium">Response</h3>
          <p className="mb-4">An array of strings to be used as filler text</p>
          <span>
            Example:{" "}
            <Link
              target="_blank"
              href={`https://ipsums.chrismccully.com/api/get-all-ipsums`}
              className="rounded bg-base-100 px-2 py-1"
            >{`https://ipsums.chrismccully.com/api/get-all-ipsums`}</Link>
          </span>
        </section>
        <section className="rounded-md bg-base-50 p-4">
          <h2 className="text-xl font-semibold">GET /api/get-ipsum/:id</h2>
          <p className="mb-4">Fetches a specific ipsum string by its ID</p>
          <h3 className="text-lg font-medium">Parameters</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>
              <code className="rounded bg-base-100 px-2 py-1">id</code> - The ID
              of the ipsum to fetch, these IDs are simply the index of the ipsum
              in the array. The array is currently {allIpsums.length} ipsums
              long.
            </li>
          </ul>
          <h3 className="text-lg font-medium">Response</h3>
          <p className="mb-4">The string with the specified ID</p>
          <span>
            Example:{" "}
            <Link
              target="_blank"
              href={`https://ipsums.chrismccully.com/api/get-ipsum/4`}
              className="rounded bg-base-100 px-2 py-1"
            >{`https://ipsums.chrismccully.com/api/get-ipsum/4`}</Link>
          </span>
        </section>
        <section className="rounded-md bg-base-50 p-4">
          <h2 className="text-xl font-semibold">GET /api/random-ipsum</h2>
          <p className="mb-4">
            Fetches a random ipsum string, limited by a minimum and maximum
            length
          </p>
          <h3 className="text-lg font-medium">Parameters</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>
              <code className="rounded bg-base-100 px-2 py-1">min</code>{" "}
              {`- The
              minimum character length of the ipsum (optional)`}
            </li>
            <li>
              <code className="rounded bg-base-100 px-2 py-1">max</code>{" "}
              {`- The
              maximum character length of the ipsum (optional)`}
            </li>
          </ul>
          <h3 className="text-lg font-medium">Response</h3>
          <p className="mb-4">A random ipsum string</p>
          <span>
            Example:{" "}
            <Link
              target="_blank"
              href={`https://ipsums.chrismccully.com/api/random-ipsum?min=100&max=200`}
              className="rounded bg-base-100 px-2 py-1"
            >{`https://ipsums.chrismccully.com/api/random-ipsum?min=100&max=200`}</Link>
          </span>
        </section>
      </div>
    </div>
  );
};
export default DocsPage;
