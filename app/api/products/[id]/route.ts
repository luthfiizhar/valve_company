import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";
// import { Prisma } from "@prisma/client";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;
//   console.log(id);

//   res.status(200).json({ id });
// }

interface Product {
  id: string;
  name: string;
  description: string;
  spec: string;
  productInfo: string;
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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    // console.log(id);

    const result = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });
    return Response.json({
      status: 200,
      message: "success",
      data: result,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const data = await request.json();
  const {
    name,
    description,
    spec,
    productInfo,
    bigImagesURL,
    smallImagesURL,
    highlightImageURL,
    catalogueCoverImageURL,
    catalogueFileURL,
    quicksheetCoverImageURL,
    quicksheetFileURL,
    userManualCoverImageURL,
    userManualFileURL,
  }: Product = data;
  try {
    const id = (await params).id;
    const result = await prisma.product.update({
      where: { id: id },
      data: {
        name: name,
        description: description,
        specification: spec,
        productInfo: productInfo,
        bigImagesURL: bigImagesURL,
        smallImagesURL: smallImagesURL,
        highlightImageURL: highlightImageURL,
        catalogueCoverImageURL: catalogueCoverImageURL,
        catalogueFileURL: catalogueFileURL,
        quicksheetCoverImageURL: quicksheetCoverImageURL,
        quicksheetFileURL: quicksheetFileURL,
        userManualCoverImageURL: userManualCoverImageURL,
        userManualFileURL: userManualFileURL,
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
