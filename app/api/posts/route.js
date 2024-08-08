import CashData from "@/app/(admin)/cash/CashData";
import { handleGetRequest, handlePostRequest } from "@/app/(admin)/util/apiUtil";
import { PostModel } from "@/app/models";


export async function GET() {
  return handleGetRequest(PostModel, CashData);
}
export async function POST(req) {
  return handlePostRequest(req, PostModel, "Post Created successfully");
}