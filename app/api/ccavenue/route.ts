import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const encResp = formData.get('encResp') as string;
    
    if (!encResp) {
      return NextResponse.redirect(new URL('/payment/success?status=error&message=No response data', request.url));
    }

    // Call your backend API to decrypt the response
    const backendResponse = await fetch('https://7d9cbac7a91a.ngrok-free.app/ccavenue/payment-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `encResp=${encodeURIComponent(encResp)}`,
    });

    const data = await backendResponse.json();
    
    // Map order_status to our status format
    const statusMap: { [key: string]: string } = {
      'Success': 'success',
      'Failure': 'failed', 
      'Aborted': 'cancelled',
      'Invalid': 'failed',
      'Timeout': 'failed'
    };
    
    const status = statusMap[data.order_status] || 'failed';
    
    // Build redirect URL with payment data
    const params = new URLSearchParams({
      status,
      orderId: data.order_id || '',
      amount: data.amount || '',
      trackingId: data.bank_ref_no || '',
      message: `Payment ${data.order_status.toLowerCase()}. Mode: ${data.payment_mode || 'N/A'}`
    });
    
    return NextResponse.redirect(new URL(`/payment/success?${params.toString()}`, request.url));
    
  } catch (error) {
    console.error('CCAvenue response processing error:', error);
    return NextResponse.redirect(new URL('/payment/success?status=error&message=Processing failed', request.url));
  }
}