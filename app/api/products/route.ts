import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const result = await prisma.product.findMany({});
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
  const {
    name,
    description,
    spec,
    prod,
    bigImagesURL,
    smallImagesURL,
    highlightImageURL,
  }: any = data;

  try {
    var specification = spec as Prisma.JsonArray;
    var productInfo = prod as Prisma.JsonArray;

    const result = await prisma.product.create({
      data: {
        name,
        description,
        specification,
        productInfo,
        bigImagesURL,
        smallImagesURL,
        highlightImageURL,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "success",
      data: result,
    });
  } catch (error) {
    // console.log(error);

    return NextResponse.json({
      status: 500,
      message: "failed",
      error: error,
      data: {},
    });
  }
}
