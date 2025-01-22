import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";
// import { Prisma } from "@prisma/client";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;
//   console.log(id);

//   res.status(200).json({ id });
// }

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    console.log(id);

    const result = await prisma.product.findFirst({
      where: {
        id: id,
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
