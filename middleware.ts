import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest ) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    console.log("middleware->",request.nextUrl.pathname)
    return NextResponse.next();

    // getServerSession().then((session)=>{
    //     if(session?.user){
    //         return NextResponse.next();
    //     }else{
    //         return NextResponse.json({},{status: 403});
    //     }
    // })
  }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
}
