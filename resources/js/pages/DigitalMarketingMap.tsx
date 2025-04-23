// resources/js/Pages/DigitalMarketingMap.tsx
import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import type { BreadcrumbItem } from '@/types';

// شريط التنقل (Breadcrumb)
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: 'خريطة التسويق الرقمي', href: '/digital-marketing-map' },
];

// المواضيع الرئيسية للدورة
const topics = [
  {
    title: 'المقدمة في التسويق',
    details: [
      'تعريف التسويق: فهم الأساسيات والأهمية الشاملة للتسويق',
      'أهمية التسويق في الأعمال',
      'تاريخ التسويق: من الطرق التقليدية إلى الرقمية',
    ],
  },
  {
    title: 'مفاهيم أساسية في التسويق',
    details: [
      'تعريف السوق والجمهور المستهدف',
      'القيم والأهداف التسويقية',
      'مزيج التسويق (4Ps)',
    ],
  },
  {
    title: 'المقدمة في التسويق الرقمي',
    details: [
      'تعريف التسويق الرقمي وأهميته',
      'تاريخ التسويق الرقمي وتطوره',
      'الفوائد، الأدوات، الفرق بين الرقمي والتقليدي',
    ],
  },
  {
    title: 'أنواع التسويق الرقمي',
    details: [
      'تحسين محركات البحث - SEO',
      'التسويق عبر وسائل التواصل الاجتماعي',
      'التسويق عبر البريد الإلكتروني',
      'تسويق المحتوى',
      'الإعلانات المدفوعة',
      'التسويق عبر المؤثرين',
      'تسويق الفيديو',
    ],
  },
  {
    title: 'استراتيجية التسويق الرقمي',
    details: [
      'اختيار الاستراتيجية المناسبة',
      'بناء خطة تسويق رقمية',
      'تحديد الجمهور المستهدف',
      'تحليل الأداء والمؤشرات KPIs',
    ],
  },
  {
    title: 'إعلانات الفيسبوك',
    details: [
      'أنواع الإعلانات - التحويل، الفيديو، الجمع التلقائي',
      'استراتيجية الميزانية والاستهداف',
      'Facebook Pixel والعائد على الإنفاق ROAS',
      'تحليل الأداء والتحسين',
    ],
  },
  {
    title: 'إعلانات Google و الدفع مقابل النقرة',
    details: [
      'إعداد الحملات',
      'تحسين الأداء',
      'تحديد الميزانية',
      'متابعة النتائج',
    ],
  },
  {
    title: 'تحسين محركات البحث (SEO)',
    details: [
      'استراتيجية الكلمات المفتاحية',
      'التحسين الفني والبناء الخارجي',
      'تحسين التوافق مع الأجهزة المحمولة',
    ],
  },
  {
    title: 'التسويق عبر البريد الإلكتروني',
    details: [
      'بناء القوائم البريدية',
      'تصميم حملات فعالة',
      'تحسين معدلات الفتح والنقر',
    ],
  },
  {
    title: 'تحليل البيانات',
    details: [
      'Google Analytics',
      'Facebook Insights',
      'تحسين الأداء عبر البيانات',
    ],
  },
  {
    title: 'مستقبل التسويق الرقمي',
    details: [
      'الذكاء الاصطناعي في التسويق',
      'الابتكار والتقنيات الجديدة',
    ],
  },
];

// المكون الرئيسي للصفحة
export default function DigitalMarketingMap() {
  const [activeTopic, setActiveTopic] = useState<typeof topics[0] | null>(null);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="خريطة دورة التسويق الرقمي 2025" />
      <div dir="rtl" className="flex flex-col gap-6 p-4 md:p-6">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
          الخريطة الشاملة لدورة التسويق الرقمي 2025
        </h1>

        {/* عرض قائمة المواضيع */}
        <div className="grid gap-4 md:grid-cols-3">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => setActiveTopic(topic)}
              className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white dark:bg-neutral-900 p-4 cursor-pointer hover:bg-muted transition"
            >
              <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 pointer-events-none" />
              <h2 className="relative z-10 text-lg font-semibold text-gray-800 dark:text-white">
                {topic.title}
              </h2>
            </div>
          ))}
        </div>

        {/* عرض التفاصيل عند اختيار موضوع */}
        {activeTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative w-full max-w-2xl rounded-xl border border-sidebar-border bg-white dark:bg-neutral-900 p-6 shadow-xl">
              <button
                onClick={() => setActiveTopic(null)}
                title="إغلاق"
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                ✕
              </button>
              <h3 className="mb-4 text-2xl font-bold text-blue-700 dark:text-blue-400">
                {activeTopic.title}
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-200">
                {activeTopic.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
