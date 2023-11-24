import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

import { db } from "@/lib/db";

export async function GET() {
  const session = await getServerSession(authOptions);
  session?.user?.id
  return NextResponse.json(userTests);
}

export async function POST() {
  const session = await getServerSession(authOptions);
  const createdTest = await db.test.create({
    data:{
        authorId:session?.user?.id
    }
  })
  return NextResponse.json(createdTest);
}