"use client";
import Image from "next/image";

export default function Invoice() {
  return (
    // Replaced text-black with text-[#000000]
    <div className="min-h-screen bg-white text-[#000000] px-8 py-10 md:px-20 print:px-0 print:py-0">
      <div className="max-w-5xl mx-auto my-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          {/* <Image
            src="https://dhwaniastro.com/public/web/images/secondary-logo.png"
            alt="logo"
            width={180}
            height={60}
            className="h-auto w-[173px] md:w-[250px]"
          /> */}
        </div>

        {/* Replaced text-purple-700 with text-[#6d28d9] */}
        <h1 className="text-center font-semibold text-2xl md:text-3xl text-[#6d28d9] leading-tight">
          Payment Invoice
        </h1>
        {/* Replaced text-gray-600 with text-[#4b5563] */}
        <p className="text-center text-sm text-[#4b5563]">(Original for recipient)</p>

        {/* Replaced text-gray-700 with text-[#374151] */}
        <div className="text-center mt-3 text-sm md:text-base text-[#374151]">
          <p>
            Supplier GSTIN: <strong>07ABBFM1961C1ZN</strong>, PAN:{" "}
            <strong>ABBFM1961C</strong>, Website:{" "}
            {/* Replaced text-purple-700 with text-[#6d28d9] */}
            <a href="#" className="text-[#6d28d9] underline">
              www.dhwaniastro.com
            </a>
          </p>
          <p>
            2ND FLOOR, 1511/2B, Kotla Mubarakpur, Bhishma Pitamah Marg, Wazir
            Nagar, New Delhi, South East Delhi, Delhi, 110003
          </p>
          <p className="mt-2">
            +91 6366526901 |{" "}
            <a href="mailto:Support@dhwaniastro.com" className="underline">
              Support@dhwaniastro.com
            </a>
          </p>
        </div>

        {/* Replaced border-gray-400 with border-[#9ca3af] */}
        <hr className="my-4 border-[#9ca3af]" />

        <h2 className="font-semibold text-lg md:text-xl mb-2">
          Customer Details:
        </h2>

        {/* Customer Details Table */}
        <div className="w-full border border-[#000000] text-sm md:text-base">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#000000]">
            <div className="flex items-center gap-4 border-r border-[#000000] p-2">
              {/* Replaced text-purple-700 with text-[#6d28d9] */}
              <strong className="text-[#6d28d9]">NAME</strong>
              <span>: Amrita Debnath</span>
            </div>
            <div className="flex items-center gap-4 p-2">
              {/* Replaced text-purple-700 with text-[#6d28d9] */}
              <strong className="text-[#6d28d9]">INVOICE</strong>
              <span>: DHR/001/2024-25</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#000000]">
            <div className="border-r border-[#000000] p-2">
              <strong>Address</strong> :
              <span>
                P.103, Dr. A.K Paul Road, Kolkata, West Bengal, 700034, India
              </span>
            </div>
            <div className="p-2">
              <strong>Transaction ID</strong> : DH-RG-1685992529821 NzQ3ODI4MQ==
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#000000]">
            <div className="border-r border-[#000000] p-2">
              <strong>Place of Supply</strong> : West Bengal
            </div>
            <div className="p-2">
              <strong>Payment ID</strong> : pay_MYklKzbzs5ac9C
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#000000]">
            <div className="border-r border-[#000000] p-2">
              <strong>GST</strong> : N/A
            </div>
            <div className="p-2">
              <strong>Invoice Date</strong> : 23/05/2024
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-r border-[#000000] p-2">
              <strong>Mobile</strong> : 9007821149
            </div>
            <div className="p-2"></div>
          </div>
        </div>

        {/* Replaced border-gray-400 with border-[#9ca3af] */}
        <hr className="my-6 border-[#9ca3af]" />

        {/* Invoice Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[#000000] border-collapse text-center text-sm md:text-base">
            {/* Replaced text-purple-700 with text-[#6d28d9] */}
            <thead className="text-[#6d28d9] font-semibold">
              <tr>
                <th className="border border-[#000000] py-1 px-2">S.NO</th>
                <th className="border border-[#000000] py-1 px-2">Description</th>
                <th className="border border-[#000000] py-1 px-2">HSN/SAC Code</th>
                <th className="border border-[#000000] py-1 px-2">Unit Price</th>
                <th className="border border-[#000000] py-1 px-2">SGST @</th>
                <th className="border border-[#000000] py-1 px-2">CGST @</th>
                <th className="border border-[#000000] py-1 px-2">IGST @</th>
                <th className="border border-[#000000] py-1 px-2">Taxable Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#000000] py-1 px-2">1</td>
                <td className="border border-[#000000] py-1 px-2 text-left">
                  Combo of 2 Bhaiya-Bhabhi Sneh Bandhan - Abhimantrit Rakh
                </td>
                <td className="border border-[#000000] py-1 px-2">999799</td>
                <td className="border border-[#000000] py-1 px-2">₹ 100.00</td>
                <td className="border border-[#000000] py-1 px-2">N/A</td>
                <td className="border border-[#000000] py-1 px-2">N/A</td>
                <td className="border border-[#000000] py-1 px-2">18%</td>
                <td className="border border-[#000000] py-1 px-2">₹ 100.00</td>
              </tr>

              <tr>
                <td colSpan={6}></td>
                <td className="border border-[#000000] py-1 px-2 font-semibold">
                  Discount
                </td>
                <td className="border border-[#000000] py-1 px-2">₹ 0.00</td>
              </tr>

              <tr>
                <td colSpan={6}></td>
                <td className="border border-[#000000] py-1 px-2 font-semibold">
                  Sub Total <hr className="my-1" /> IGST @
                </td>
                <td className="border border-[#000000] py-1 px-2">
                  ₹ 100.00
                  <hr className="my-1" />
                  ₹ 18.00
                </td>
              </tr>

              <tr>
                <td colSpan={6}></td>
                <td className="border border-[#000000] py-1 px-2 font-semibold">
                  Total Paid Amount
                </td>
                <td className="border border-[#000000] py-1 px-2 font-bold">
                  ₹ 118.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Replaced text-xs md:text-sm with a slightly darker text to ensure contrast */}
        <div className="mt-4 text-xs md:text-sm flex flex-col items-start gap-1 text-[#374151]">
          <p>
            <strong>Other Details:</strong>
          </p>
          <p>Whether tax is payable on reverse charge basis: No</p>
          <p>
            This is a computer generated payment invoice, no signatures required.
          </p>
        </div>
      </div>
    </div>
  );
}
