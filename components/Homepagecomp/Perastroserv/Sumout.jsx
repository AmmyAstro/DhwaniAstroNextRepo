'use client';

import { useSearchParams } from 'next/navigation';

export default function Sumout() {
    const searchParams = useSearchParams();

    const name = searchParams.get('namee');
    const dob = searchParams.get('dob');
    const tob = searchParams.get('tob');
    const pob = searchParams.get('pob');
    const email = searchParams.get('mail');
    const phone = searchParams.get('num');
    const gender = searchParams.get('gender');
    const npb = searchParams.get('npb');
    const cc = searchParams.get('cc');
    const concern = searchParams.get('txt');
    const muhurta = searchParams.get('muhurta');

    return (
        <div className="p-6 w-full grid md:grid-cols-2">
       <div className="p-2  flex flex-col place-self-center items-center justify-center  text-black">
       <h1 className="text-2xl font-bold mb-4">📝 Summary of Muhurat Booking</h1>

<table className="table-auto w-full place-self-center rounded-lg border border-gray-300 text-sm">
    <thead className="bg-gray-100">

    </thead>
    <tbody className='bg-purple-200'>
        <tr><td className="border font-semibold px-4 py-1">Name</td><td className="border px-4 py-1">{name}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Date of Birth</td><td className="border px-4 py-1">{dob}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Time of Birth</td><td className="border px-4 py-1">{tob}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Place of Birth</td><td className="border px-4 py-1">{pob}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Email</td><td className="border px-4 py-1">{email}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Phone</td><td className="border px-4 py-1">{phone}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Gender</td><td className="border px-4 py-1">{gender}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Native Place of Birth</td><td className="border px-4 py-1">{npb}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Current City</td><td className="border px-4 py-1">{cc}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Concern</td><td className="border px-4 py-1">{concern}</td></tr>
        <tr><td className="border font-semibold px-4 py-1">Selected Muhurta</td><td className="border px-4 py-1">{muhurta}</td></tr>
    </tbody>
</table>
       </div>

            <div className="mt-6 md:border-l border-t p-4 text-black">
                <h2 className="text-xl font-semibold mb-2">🛒 Checkout Section</h2>
                <p className="text-sm text-gray-700">Final step to confirm and proceed with the payment...</p>
            </div>
        </div>
    );
}
