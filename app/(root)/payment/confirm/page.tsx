"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Confirm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");
  const method = searchParams.get("method");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
      <h1 className="text-2xl font-bold mb-4">Scan to Pay</h1>
      <p className="mb-2 text-lg">Plan: {plan}</p>
      <p className="mb-4">Price: Rp{price}</p>
      <p className="mb-4">Method: {method}</p>

      {/* Show the QR code */}
      <div className="bg-black p-4 rounded">
        <Image
          src={`/payment/qr-${method?.toLowerCase() || "qris"}.svg`}
          alt="QR Code"
          width={300}
          height={300}
        />
      </div>

      <p className="mt-6 text-sm text-gray-300">
        Scan with your {method} app to complete payment
      </p>
      <a
        href="https://wa.me/6285137867382"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white font-semibold px-4 py-2 mt-4 rounded hover:bg-green-600 transition"
      >
        Confirm your payment once done
      </a>
    </div>
  );
}
