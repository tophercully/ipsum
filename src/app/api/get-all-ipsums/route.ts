import { NextResponse } from "next/server";
import allIpsums from "@/data/allIpsums";

export async function GET() {
  return NextResponse.json({ ipsums: allIpsums });
}
