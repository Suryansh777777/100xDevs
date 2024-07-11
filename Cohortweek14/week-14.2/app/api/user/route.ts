import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
    //extract the body and store in db
    const body = await req.json();
    console.log(body)
    return Response.json({
        message:"You are logged in the account"
    })
}