import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";

interface Product {
  name: string;
  description: string;
  spec: object;
  prod: object;
  bigImagesURL: string;
  smallImagesURL: string;
  highlightImageURL: string;
  catalogueCoverImageURL: string;
  catalogueFileURL: string;
  quicksheetCoverImageURL: string;
  quicksheetFileURL: string;
  userManualCoverImageURL: string;
  userManualFileURL: string;
}

export async function GET() {
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
  }: Product = data;

  try {
    const specification = spec as Prisma.JsonArray;
    const productInfo = prod as Prisma.JsonArray;

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
