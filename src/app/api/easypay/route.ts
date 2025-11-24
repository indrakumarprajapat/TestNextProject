import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const amt = searchParams.get('amt');
  
  console.log('EasyPay API called with amount:', amt);
  
  // Redirect to external API
  const redirectUrl = `http://15.206.249.5:3042/bapi/orders/easypay/initiate?amt=${amt}`;
  
  return NextResponse.redirect(redirectUrl);
}