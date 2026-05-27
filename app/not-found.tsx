import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-500/10 blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-500/10 blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10 bg-white p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-2xl shadow-orange-500/5">
        <div className="mb-8 relative">
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-slate-900 leading-none tracking-tighter">
            4<span className="text-orange-500">0</span>4
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-white bg-slate-900/90 backdrop-blur-md px-6 py-2 rounded-full inline-block rotate-[-5deg] shadow-xl">
              Page Not Found
            </p>
          </div>
        </div>

        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto font-medium">
          Oops! It looks like you&apos;ve wandered off the trail. The page you&apos;re looking for might have been moved or no longer exists.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 group"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <Link
            href="/products"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all hover:-translate-y-0.5 group"
          >
            <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
