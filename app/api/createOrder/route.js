import { GstAmount } from '@/app/helper/helper';
import Razorpay from 'razorpay';

export async function POST(request) {
  try {
    const { amount } = await request.json();

    if (!amount) {
      return new Response(
        JSON.stringify({ error: 'Amount is required' }),
        { status: 400 }
      );
    }

    const finalamount = GstAmount(amount);

    // ✅ Initialize Razorpay only at runtime, not build time
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: finalamount * 100, // convert to paise
      currency: 'INR',
      receipt: `receipt#${Math.floor(Math.random() * 1000)}`,
    });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error?.message || 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
