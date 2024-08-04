import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    
    if (!formData) {
      return NextResponse.json({ error: 'No data provided' }, { status: 400 });
    }
    console.log(formData);

    const postdata  = `${process.env.BASE_URL}api/hostel/`;
    console.log(postdata);

    const response = await axios.post(postdata, formData);

    return NextResponse.json({ message: 'Successfully Registered', data: response.data });

  } catch (error) {
    // Handle errors from the external API
    const output = (error as any).response?.data;

    if (output) {
      return NextResponse.json({ 
        error: `${output[Object.keys(output)[0]][0]}`, 
      }, { status: 400 });
    }

    // General error fallback
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
