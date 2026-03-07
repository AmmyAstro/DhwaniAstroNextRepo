import crypto from 'crypto';

export async function POST(request: Request) {
  try {

    const body = await request.json();

    const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.NEXT_PUBLIC_RAZORPAY_SECRET;

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

   
    if (!key_secret) {
      return new Response(JSON.stringify({ error: 'Server misconfiguration: Missing key secret' }), { status: 500 });
    }

   
    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature === razorpay_signature) {
        const auth = Buffer.from(`${key_id}:${key_secret}`).toString('base64');
 const paymentRes = await fetch(`https://api.razorpay.com/v1/payments/${razorpay_payment_id}`, {
            method: 'GET',
            headers: {
              Authorization: `Basic ${auth}`,
              'Content-Type': 'application/json',
            },
          });

      const payment_Data = await paymentRes.json();
   return new Response(JSON.stringify({ success: true, message: 'Payment verified successfully',
        paymentstatus:payment_Data.status,
        paymentmethod:payment_Data.method ?? '',
        paymentamount:payment_Data.amount / 100,
        payment_id:razorpay_payment_id ?? '',


     }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });
    } else {
    
      return new Response(JSON.stringify({ success: false, error: 'Invalid signature, payment verification failed' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    // console.error('Payment verification error:', error);
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
