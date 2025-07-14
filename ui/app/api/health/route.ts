import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // отключает ISR/кеширование, нужен для стабильного healthcheck

export async function GET() {
  return NextResponse.json({ status: "ok" });
}