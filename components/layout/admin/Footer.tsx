import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-800 text-gray-300 py-3 px-4 mt-auto">
            <div className="container mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
                <p>&copy; {currentYear} MnY</p>
                
                <div className="flex gap-4">
                    <Link href="/admin/help" className="hover:text-white">Help</Link>
                    <Link href="/admin/privacy" className="hover:text-white">Privacy</Link>
                </div>
            </div>
        </footer>
    );
}
