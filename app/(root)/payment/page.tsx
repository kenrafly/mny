"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const payments = [
  { name: "QRIS", file: "qris.svg", color: "bg-yellow-400" },
  { name: "DANA", file: "dana.svg" },
  { name: "ShopeePay", file: "shopeepay.svg" },
  { name: "GoPay", file: "gopay.svg" },
  { name: "SeaBank", file: "seabank.svg" },
  { name: "BANK BRI", file: "bri.svg" },
];

const PaymentPage = () => {
  const router = useRouter();

  const handlePay = () => {
    router.push(
      `/payment/confirm?plan=${encodeURIComponent(
        plan || ""
      )}&price=${encodeURIComponent(price || "")}&method=${encodeURIComponent(
        selected
      )}`
    );
  };

  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");

  const [selected, setSelected] = useState("QRIS");

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center pt-20">
      <div className="bg-[#1c1c1c] rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">
          Payment for {plan}
        </h1>
        <p className="text-center mb-6 text-lg">Total to pay: Rp.{price}</p>

        <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
        <div className="flex flex-col gap-2">
          {payments.map((method) => {
            const isSelected = selected === method.name;
            return (
              <button
                key={method.name}
                onClick={() => setSelected(method.name)}
                className={`flex justify-between items-center px-4 py-2 rounded transition font-medium
                ${
                  isSelected
                    ? "bg-yellow-400 text-black"
                    : "bg-[#121212] text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={`/payment/${method.file}`}
                    alt={method.name}
                    width={30}
                    height={30}
                  />
                  <span>{method.name}</span>
                </div>
                {isSelected && (
                  <div className="text-black font-bold text-lg">✔</div>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={handlePay}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mt-6 rounded transition"
        >
          Bayar →
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
