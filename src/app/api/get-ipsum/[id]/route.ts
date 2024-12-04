import { NextRequest, NextResponse } from "next/server";
import allIpsums from "@/data/allIpsums";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop();
  const ipsumIndex = Number(id);

  if (isNaN(ipsumIndex) || ipsumIndex < 0 || ipsumIndex >= allIpsums.length) {
    return NextResponse.json(
      { error: "Invalid index, no ipsum found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ ipsum: allIpsums[ipsumIndex] });
}
