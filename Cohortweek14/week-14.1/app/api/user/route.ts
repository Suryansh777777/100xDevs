import { NextRequest } from "next/server";
import client from "@/db";
export async function POST(req: NextRequest){
    //extract the body and store in db
    const body = await req.json();
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    
    return Response.json({
        message:"You are logged in the account"
    })
}