import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // отключает ISR/кеширование, нужен для стабильного healthcheck

// eslint-disable-next-line no-console
console.log("[HEALTH ROUTE] Module loaded");

export async function GET() {
  // eslint-disable-next-line no-console
  console.log("[HEALTH ROUTE] GET called");

  // Для теста возвращаем ошибку 418
  return NextResponse.json(
    { status: "error", message: "Healthcheck failed for test" },
    { status: 418 },
  );
}
