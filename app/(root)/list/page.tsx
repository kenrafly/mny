"use client";
import React, { useState } from "react";
import Image from "next/image";

const AllDonghuasGrid = () => {
  const totalDonghuas = 114;
  const itemsPerPage = 21;
  const totalPages = Math.ceil(totalDonghuas / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const getDonghuaSrc = (index: number) => {
    return `/allDonghuas/donghua (${index}).jpg`;
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const currentDonghuas = Array.from(
    { length: itemsPerPage },
    (_, i) => startIndex + i
  ).filter((i) => i <= totalDonghuas);

  return (
    <section className="px-12 py-8 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">All Donghuas</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {currentDonghuas.map((index) => (
          <div
            key={index}
            className="relative aspect-[2/3] w-full rounded overflow-hidden"
          >
            <Image
              src={getDonghuaSrc(index)}
              alt={`Donghua ${index}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AllDonghuasGrid;
