import { getServerSession } from "next-auth";
import {  NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

import TestHandler from "@/lib/handler/test";

import queryString from "query-string";
import { TestSchema } from "@/lib/zod/testSchema";
import { validate } from "@/lib/validate";
// import * as z from "zod"


export async function GET(req:NextRequest, context:any) {
  const session = await getServerSession(authOptions);
  // @ts-ignore 
  const userId:string = session?.user?.id;

  if(!userId){
    return NextResponse.json({},{status:401});
  }

  const params :any = queryString.parseUrl(req.url).query;

  const offset:number = parseInt( params?.offset ?? 0);
  const limit:number = parseInt( params?.limit ?? 10);

  console.log(offset, limit)
  const result = await TestHandler.getTests(userId, offset, limit)
  return NextResponse.json({
    offset:offset,
    limit:limit,
    tests:result.tests,
    count:result.count
  });
}

export async function POST(req:NextRequest, context:any) {
  const session = await getServerSession(authOptions);
  // @ts-ignore 
  const userId:string = session?.user?.id;

  if(!userId){
    return NextResponse.json({},{status:401});
  }
  
  const validatedData = await validate(TestSchema)(req)
  if(!validatedData.parsed){
    return NextResponse.json(validatedData.body,{status:400});
  }
  // @ts-ignore 
  const body = validatedData.body;
  // @ts-ignore 
  const createdTest = await TestHandler.createTest(userId,body.name,body.total_questions,body.skipped_questions,body.test_data)

  return NextResponse.json(createdTest);
}