import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export {default} from 'next-auth/middleware'

export async function middleware(req: NextRequest) {
  const session = await getToken({req, secret: process.env.JWT_SECRET});
  
  const pathName = req.nextUrl.pathname;

  // 관리자 페이지 접근 권한이 없는 경우 메인 페이지로 리다이렉트
  if (pathName.startsWith('/admin') && session?.role !== 'ADMIN') {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // 로그인되지 않은 상태에서 유저 페이지 접근시 로그인 페이지로 리다이렉트
  if (pathName.startsWith('/user') && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  // 로그인 상태에서 로그인 페이지, 회원가입 페이지 접근시 메인 페이지로 리다이렉트
  if (pathName.startsWith('/auth') && session) {
    return NextResponse.redirect(new URL("/", req.url));
}
  return NextResponse.next();
}



// export const config = {matcher: ["/admin/:path*", "/user/:path*"]}