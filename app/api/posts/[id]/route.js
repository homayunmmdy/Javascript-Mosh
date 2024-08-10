import CashData from "@/app/(admin)/cash/CashData";
import { PostModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.Get(id);
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await PostModel.findByIdAndUpdate(id, {
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

    await PostModel.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "پست مورد نظر با موفیقت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
