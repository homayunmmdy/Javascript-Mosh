import { NextResponse } from "next/server";


export async function handleGetSingleRequest(Model, id, cash) {
  try {
    if (process.env.NEXT_PUBLIC_STATUS === "dev") {
      const cachedDoc = cash.find((doc) => doc._id === id);
      if (cachedDoc) {
        return NextResponse.json(cachedDoc, { status: 200 });
      }
    } else {
      const document = await Model.findOne({ _id: id });
      if (!document) {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return NextResponse.json(document, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return handleErrorResponse(err);
  }
}

export function handleErrorResponse(err) {
  return NextResponse.json({ message: "Error", err }, { status: 500 });
}
