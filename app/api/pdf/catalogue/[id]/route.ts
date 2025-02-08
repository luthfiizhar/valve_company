import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    const fileDir = path.join(
      process.cwd(),
      `public\\${product!.catalogueFileURL ?? ""}`
    );
    const base64 =
      "data:file/pdf;base64," +
      (await fs.readFile(fileDir, { encoding: "base64" }));
    return NextResponse.json({
      status: 200,
      message: "success",
      data: {
        base64: base64,
      },
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

// // Helper function
// async function base64EncodePdf(file: string) {
//   // console.log(file);
//   // console.log(__dirname + "\\files\\Plug_Valve_Catalogue.pdf");
//   let result;
//   let fileDir;
//   let filenames;
//   try {
//     fileDir = path.join(process.cwd(), `public\\${file}`);
//     // console.log("File DIR");
//     // console.log(fileDir);

//     filenames = await fs.readFile(fileDir, { encoding: "base64" });
//     // console.log(filenames);
//     result = "data:file/pdf;base64," + filenames;
//   } catch (error) {
//     throw error;
//   }

//   return result;
// }
