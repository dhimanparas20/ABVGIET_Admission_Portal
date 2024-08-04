import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest, res: NextResponse) {

    const env= process.env.BASE_URL;
    console.log(env);
    return NextResponse.json({env:env});
}