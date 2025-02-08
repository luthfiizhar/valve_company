import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";

interface Certificate {
  name: string;
  coverImageURL: string;
  fileURL: string;
}

export async function GET() {
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
  const { name, coverImageURL, fileURL }: Certificate = data;

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
