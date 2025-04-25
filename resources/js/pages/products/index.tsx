// استيراد المكونات اللازمة من المشروع والمكتبات
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

// استيراد أيقونات حديثة من lucide-react
import { Pencil, Eye, Trash2, CirclePlusIcon } from 'lucide-react';

// تعريف مسار التنقل (breadcrumb) العلوي في الصفحة
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

// تعريف شكل بيانات المنتج
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    featured_image: string;
    created_at: string;
}

// المكون الرئيسي لعرض المنتجات
export default function Index({ ...props }: { products: Product[] }) {
    const { products } = props;

    // الوصول إلى الرسائل الفلاشية (نجاح / خطأ) من Inertia
    const { flash } = usePage<{ flash?: { success?: string; error?: string } }>().props;
    const flashMessage = flash?.success || flash?.error;

    // حالة لإظهار أو إخفاء التنبيه
    const [showAlert, setShowAlert] = useState(flashMessage ? true : false);

    // إغلاق التنبيه تلقائياً بعد 3 ثواني
    useEffect(() => {
        if (flashMessage) {
            const timer = setTimeout(() => setShowAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* عرض التنبيهات في حال وجود رسائل فلاشية */}
                {showAlert && flashMessage && (
                    <Alert
                        variant={'default'}
                        className={`${flash?.success ? 'bg-green-800' : (flash?.error ? 'bg-red-800' : '')} ml-auto max-w-md text-white`}
                    >
                        <AlertTitle className='font-bold'>
                            {flash?.success ? 'Success' : (flash?.error ? 'Error' : '')}
                        </AlertTitle>
                        <AlertDescription className='text-white'>
                            {flash.success ? 'Success!' : 'Error!'}
                            {flashMessage}
                        </AlertDescription>
                    </Alert>
                )}

                {/* زر لإضافة منتج جديد */}
                <div className='ml-auto'>
                    <Link
                        className='flex items-center bg-indigo-800 px-4 py-2 rounded-lg text-white text-mb cursor-pointer hover:opacity-90'
                        as='button'
                        href={route('products.create')}
                    >
                        <CirclePlusIcon className='me-2'/>  Add Product
                    </Link>
                </div>

                {/* جدول عرض المنتجات */}
                <div className='overflow-hidden rounded-lg border bg-white shadow-sm'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-gray-700 text-white'>
                                <th className='p-4 border'>#</th>
                                <th className='p-4 border'>Name</th>
                                <th className='p-4 border'>Description</th>
                                <th className='p-4 border'>Price</th>
                                <th className='p-4 border'>Featured Image</th>
                                <th className='p-4 border'>Create Date</th>
                                <th className='p-4 border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* تكرار عرض المنتجات داخل الجدول */}
                            {products.map((product, index) => (
                                <tr key={product.id}>
                                    <td className='border px-4 py-2 text-center'>{index + 1}</td>
                                    <td className='border px-4 py-2 text-center'>{product.name}</td>
                                    <td className='border px-4 py-2 text-center'>{product.description}</td>
                                    <td className='border px-4 py-2 text-center'>{product.price}</td>

                                    {/* عرض الصورة إذا كانت موجودة */}
                                    <td className='border px-4 py-2 text-center'>
                                        {product.featured_image ? (
                                            <img
                                                src={`/storage/${product.featured_image}`}
                                                className='h-16 mx-auto'
                                            />
                                        ) : (
                                            'No image'
                                        )}
                                    </td>

                                    {/* عرض تاريخ الإنشاء بصيغة قابلة للقراءة */}
                                    <td className='border px-4 py-2 text-center'>
                                        {new Date(product.created_at).toLocaleDateString()}
                                    </td>

                                    {/* أيقونات الأكشن: عرض، تعديل، حذف */}
                                    <td className='border px-4 py-2 text-center'>
                                        <div className="flex justify-center gap-2">
                                            {/* زر العرض */}
                                            <Link href={route('products.show', product.id)} className="text-blue-600 hover:text-blue-800">
                                                <Eye className="w-5 h-5" />
                                            </Link>

                                            {/* زر التعديل */}
                                            <Link href={route('products.edit', product.id)} className="text-green-600 hover:text-green-800">
                                                <Pencil className="w-5 h-5" />
                                            </Link>

                                            {/* زر الحذف */}
                                            <button
                                                onClick={() => {
                                                    if (confirm('Are you sure you want to delete this product?')) {
                                                        router.delete(route('products.destroy', product.id));
                                                    }
                                                }}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
