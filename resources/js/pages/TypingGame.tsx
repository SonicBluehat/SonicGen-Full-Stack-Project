import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useState, useEffect } from 'react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Typing Game',
    href: '/typing-game',
  },
];

export default function TypingGame() {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const sentence = 'البرمجة ممتعة وتعلمها يفتح لك الكثير من الأبواب.';

  // حساب السرعة أثناء الكتابة
  const calculateSpeed = () => {
    if (!startTime) return 0;
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // الوقت بال دقائق
    return ((input.split(' ').length) / timeElapsed).toFixed(2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now());
    setInput(value);
    if (value === sentence) {
      setEndTime(Date.now());
      setFinished(true);
    }
  };

  const getAccuracy = () => {
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === sentence[i]) correct++;
    }
    return ((correct / sentence.length) * 100).toFixed(2);
  };

  const resetGame = () => {
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setFinished(false);
  };

  // دالة لتمييز الأخطاء
  const getHighlightedText = () => {
    return sentence.split('').map((char, index) => {
      const isError = input[index] && input[index] !== char;
      return (
        <span
          key={index}
          className={isError ? 'text-red-500' : ''} // لو فيه خطأ خلي الخط أحمر
        >
          {char}
        </span>
      );
    });
  };

  useEffect(() => {
    if (input === sentence) {
      setEndTime(Date.now());
      setFinished(true);
    }
  }, [input]);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Typing Game" />
      <div className="flex flex-col gap-6 max-w-3xl mx-auto py-10">
        <h1 className="text-2xl font-bold text-center">🎯 لعبة قياس سرعة الكتابة</h1>
        <p className="text-center text-gray-700">
          {/* عرض الجملة مع تمييز الأخطاء */}
          {getHighlightedText()}
        </p>

        <textarea
          className="w-full border rounded-lg p-4 text-right"
          placeholder="ابدأ الكتابة هنا..."
          rows={4}
          dir="rtl"
          value={input}
          onChange={handleChange}
          disabled={finished}
        />

        {/* عرض السرعة أثناء الكتابة */}
        {!finished && (
          <div className="text-center mt-4">
            <p className="text-lg text-gray-600">السرعة الحالية: {calculateSpeed()} كلمة/دقيقة</p>
          </div>
        )}

        {finished && (
          <div className="bg-green-100 p-4 rounded text-green-700 space-y-2">
            <p>✅ تم! ممتاز 👏</p>
            <p>السرعة النهائية: {calculateSpeed()} كلمة/دقيقة</p>
            <p>الدقة: {getAccuracy()}%</p>
            <button
              onClick={resetGame}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              إعادة المحاولة
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
