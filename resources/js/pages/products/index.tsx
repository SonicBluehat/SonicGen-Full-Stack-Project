import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* add btn  */}
                <div className='ml-auto'>
                <Link className='bg-indigo-800 px-4 py-2 rounded-lg text-white text-mb cursor-pointer hover:opacity-90' as='button' href={route('products.create')}>Add Product
                </Link>
                </div>
                {/* end btn  */}
                <div className='overflow-hidden rounded-lg border bg-white shadow-sm'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-700 text-white'>
                             <th className='p-4 border'>#</th>
                             <th className='p-4 border'>name</th>
                             <th className='p-4 border'>description</th>
                             <th className='p-4 border'>Price</th>
                             <th className='p-4 border'>Featred Image</th>
                             <th className='p-4 border'>Create Date</th>
                             <th className='p-4 border'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                            <tr>
                                <td className='border px-4 py-2 text-center'>1</td>
                                <td className='border px-4 py-2 text-center'>mobile phone</td>
                                <td className='border px-4 py-2 text-center'>mobile phone description</td>
                                <td className='border px-4 py-2 text-center'>1255</td>
                                <td className='border px-4 py-2 text-center'></td>
                                <td className='border px-4 py-2 text-center'>2024-10-1</td>
                                <td className='border px-4 py-2 text-center'>2024-10-1</td>
                            </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </AppLayout>
    );
}
