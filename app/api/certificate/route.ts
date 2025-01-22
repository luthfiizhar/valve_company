import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const result = await prisma.certificate.findMany({});
    return NextResponse.json({
      status: 200,
      message: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "failed",
      error: error,
      data: {},
    });
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, coverImageURL, fileURL }: any = data;

  try {
    const result = await prisma.certificate.create({
      data: {
        name,
        coverImageURL,
        fileURL,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "failed",
      error: error,
      data: {},
    });
  }
}
