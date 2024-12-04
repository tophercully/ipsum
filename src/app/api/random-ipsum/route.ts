import { NextRequest, NextResponse } from "next/server";
import allIpsums from "@/data/allIpsums";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const minLength = searchParams.get("min");
  const maxLength = searchParams.get("max");

  // Convert to numbers, using 0 and Infinity as defaults
  const min = minLength ? Number(minLength) : 0;
  const max = maxLength ? Number(maxLength) : Infinity;

  // Validate numeric inputs
  if (isNaN(min) || isNaN(max)) {
    return NextResponse.json(
      { error: "Min and max must be valid numbers" },
      { status: 400 },
    );
  }

  // Ensure min is less than max
  if (min > max) {
    return NextResponse.json(
      { error: "Minimum length must be less than or equal to maximum length" },
      { status: 400 },
    );
  }

  // Filter ipsums that meet the length criteria
  const validIpsums = allIpsums.filter(
    (ipsum) => ipsum.length >= min && ipsum.length <= max,
  );

  // Check if any ipsums match the criteria
  if (validIpsums.length === 0) {
    return NextResponse.json(
      { error: "No lorem ipsum found within the specified length range" },
      { status: 404 },
    );
  }

  // Select a random ipsum from the valid ipsums
  const randomIpsum =
    validIpsums[Math.floor(Math.random() * validIpsums.length)];

  return NextResponse.json(randomIpsum);
}
