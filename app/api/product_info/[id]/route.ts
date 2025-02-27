import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";

interface Result {
  id: string;
  name: string;
  productInfo: ProductInfo[];
}

interface ProductInfo {
  title: string;
  file: string;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const result = await prisma.product.findFirst({
      where: {
        productCode: id,
      },
    });
    let jsonResult: Result = {
      id: result?.id ?? "",
      name: result?.name ?? "",
      productInfo: [],
    };
    let productInfo: ProductInfo[] = [];
    const catalogueFile = result?.catalogueFileURL;
    const userManualFile = result?.userManualFileURL;
    const quicksheetFile = result?.quicksheetFileURL;

    if (catalogueFile != "-") {
      productInfo.push({
        title: "En Catalogue PDF",
        file: catalogueFile ?? "-",
      });
    }

    if (quicksheetFile != "-") {
      productInfo.push({
        title: "En Quick Sheet PDF",
        file: quicksheetFile ?? "-",
      });
    }

    if (userManualFile != "-") {
      productInfo.push({
        title: "En User Manual PDF",
        file: userManualFile ?? "-",
      });
    }

    jsonResult.productInfo = productInfo;

    return Response.json({
      status: 200,
      message: "success",
      data: jsonResult,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "failed",
      error: error,
      data: {},
    });
  }
}
