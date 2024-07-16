import Emails from "@/app/models/Emails";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await Emails.find();

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const emailData = body.formData;

    await Emails.create(emailData);

    return NextResponse.json(
      { message: "ایمیل شما با موفقیت ارسال شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}