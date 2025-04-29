import { Head } from '@inertiajs/react';

export default function Welcome() {
  return (
    <>
      <Head title="ميديا كينغز 2025" />
      <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-400 drop-shadow-lg z-10">
          ميديا كينغز 2025
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-blue-900/80 z-10">
          التميز في التسويق الرقمي وتحليل البيانات
        </p>

        {/* البالونات الخلفية */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="grid grid-cols-3 gap-12 max-w-[600px]">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-blue-300 blur-sm animate-pulse" />
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-blue-400 blur-md animate-pulse delay-200" />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-500 blur-sm animate-pulse delay-300" />
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-cyan-300 blur-sm animate-pulse delay-150" />
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-cyan-400 blur-md animate-pulse delay-100" />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cyan-500 blur-sm animate-pulse delay-200" />
          </div>
        </div>

        {/* فضاء الطلبة */}
        <h2 className="mt-12 text-3xl md:text-4xl font-bold text-blue-800 z-10">
          فضاء الطلبة
        </h2>

        {/* أزرار التسجيل والدخول */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 z-10">
          <a
            href="/register"
            className="px-6 py-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-700 shadow-lg"
          >
            التسجيل
          </a>
          <a
            href="https://forms.gle/xxxxxxxxx" // ← غيّر الرابط إلى رابط Google Form الخاص بك
            target="_blank"
            className="px-6 py-3 rounded-lg border border-blue-700 text-blue-800 font-semibold hover:bg-blue-100 shadow"
          >
            التسجيل عبر Google Form
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-500 shadow-lg"
          >
            تسجيل الدخول
          </a>
        </div>
      </div>
    </>
  );
}
