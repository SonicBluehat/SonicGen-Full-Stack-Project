import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

const sentences = [
  'البرمجة ممتعة وتعلمها يفتح لك الكثير من الأبواب',
  'الكتابة على لوحة المفاتيح مهارة أساسية في العصر الحديث',
  'الذكاء الاصطناعي يتطور بسرعة وقد يصبح جزءاً من حياتنا اليومية',
  'كلما كتبت أكثر أصبحت أسرع وأكثر دقة',
  'العمل الجماعي يعزز من فرص النجاح وتحقيق الأهداف'
];

export default function TypingGame() {
  const [currentSentence, setCurrentSentence] = useState<string[]>(sentences[0].split(' '));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(60);
  const [finished, setFinished] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // 🎧 تحميل صوت الكيبورد
  const keySound = typeof Audio !== 'undefined' ? new Audio('/sounds/keyboard.mp3') : null;
  if (keySound) keySound.volume = 0.1;

  const startTimer = () => {
    const id = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(id);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) {
      setStartTime(Date.now());
      startTimer();
    }
    setCurrentInput(e.target.value);
  };

  const handleSubmitWord = () => {
    const newTypedWords = [...typedWords];
    newTypedWords[currentWordIndex] = currentInput.trim();
    setTypedWords(newTypedWords);
    setCurrentInput('');
    setCurrentWordIndex(prev => prev + 1);

    if (currentWordIndex + 1 >= currentSentence.length) {
      setFinished(true);
      if (intervalId) clearInterval(intervalId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 🎧 تشغيل صوت الطقطقة
    if (keySound) {
      keySound.currentTime = 0;
      keySound.play();
    }

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleSubmitWord();
    }
  };

  const calculateAccuracy = () => {
    const correct = currentSentence.filter((word, i) => word === typedWords[i]).length;
    return ((correct / currentSentence.length) * 100).toFixed(2);
  };

  const calculateWPM = () => {
    if (!startTime) return '0.00';
    const duration = (Date.now() - startTime) / 1000 / 60;
    const correctWords = currentSentence.filter((word, i) => word === typedWords[i]).length;
    return (correctWords / duration).toFixed(2);
  };

  const resetGame = () => {
    const newSentence = sentences[Math.floor(Math.random() * sentences.length)].split(' ');
    setCurrentSentence(newSentence);
    setCurrentWordIndex(0);
    setTypedWords([]);
    setCurrentInput('');
    setStartTime(null);
    setRemainingTime(60);
    setFinished(false);
  };

  return (
    <AppLayout>
      <Head title="لعبة سرعة الكتابة" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4" dir="rtl">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">⌨️ اختبار سرعة الكتابة بالعربية</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            الوقت المتبقي: <strong>{remainingTime} ثانية</strong>
          </p>

          <div className="flex flex-wrap justify-end gap-2 bg-gray-50 dark:bg-gray-700 p-4 rounded-md min-h-[80px] text-xl mb-4 text-right">
            {currentSentence.map((word, i) => {
              const typed = typedWords[i];
              const isCurrent = i === currentWordIndex;
              const isCorrect = typed === word;
              const isIncorrect = typed && typed !== word;

              let className = 'px-2 py-1 rounded border whitespace-nowrap';
              if (isCurrent && !finished) className += ' bg-yellow-100 dark:bg-yellow-300 border-yellow-300';
              else if (isCorrect) className += ' bg-green-100 dark:bg-green-300 border-green-400 text-green-700';
              else if (isIncorrect) className += ' bg-red-100 dark:bg-red-300 border-red-400 text-red-700';
              else className += ' bg-white dark:bg-gray-800 border-gray-300';

              return (
                <span key={i} className={className}>
                  {word}
                </span>
              );
            })}
          </div>

          {!finished ? (
            <>
              <input
                type="text"
                className="w-full text-2xl p-3 border border-gray-300 dark:border-gray-600 rounded-md text-right dark:bg-gray-800 dark:text-white"
                placeholder="اكتب الكلمة هنا ثم اضغط مسافة أو Enter"
                dir="rtl"
                value={currentInput}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                الكلمة رقم <strong>{currentWordIndex + 1}</strong> من <strong>{currentSentence.length}</strong>
              </p>
            </>
          ) : (
            <div className="mt-6 text-lg bg-green-50 dark:bg-green-700 p-4 rounded-md">
              <p className="text-xl text-green-700 dark:text-green-400 font-semibold mb-2">🎉 انتهت اللعبة!</p>
              <p>السرعة: {calculateWPM()} كلمة/دقيقة</p>
              <p>الدقة: {calculateAccuracy()}%</p>
              <button
                onClick={resetGame}
                className="mt-4 px-5 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600"
              >
                🔁 إعادة المحاولة
              </button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
