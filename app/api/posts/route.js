import CashData from "@/app/(admin)/cash/CashData";
import Post from "../../models/Post";
import { NextResponse } from "next/server";
import { handleErrorResponse } from "@/app/(admin)/util/apiUtil";

export async function GET() {
  try {
    if (process.env.NEXT_PUBLIC_STATUS == "dev") {
      return NextResponse.json({ posts: CashData }, { status: 200 });
    } else {
      const posts = await Post.find();
      return NextResponse.json({ posts }, { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return handleErrorResponse(err);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Post.create(ticketData);

    return NextResponse.json({ message: "پست با موفقیت ساخته شد" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}