import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div>
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            tersebut telah dipindahkan atau dihapus.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link
            href="/"
            className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
