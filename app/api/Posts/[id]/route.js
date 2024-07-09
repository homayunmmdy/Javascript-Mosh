import {  handleGetSingleRequest } from "@/app/(admin)/util/apiUtil";
import { NextResponse } from "next/server";
import CashData from "@/app/(admin)/cash/CashData";
import Post from "@/app/models/Post";

export async function GET(request, { params }) {
  const { id } = params;
  return handleGetSingleRequest(Post, id , CashData);

}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Post.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json(
      { message: "پست مورد نظر با موفقیت بروز شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Post.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "پست مورد نظر با موفیقت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
