import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const response = await axios.post(`${process.env.BASEURL}api/hostel/`, formData);

    return NextResponse.json({ message: 'Successfully Registered', data: response.data });
  } catch (error) {
    const output = (error as any).response?.data;

    return NextResponse.json({ 
      error: `${output[Object.keys(output)[0]][0]}`, 
    }, { status: 400 });
  }
}
