import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTextarea } from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'create Products',
        href: route('products.create'),
    },
];

export default function ProductForm() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
               <Card>
                <CardHeader>
                    <CardTitle>Create Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action="" className='flex flex-col gap-5' autoComplete='off'>
                        <div className="grad gap-4">

                            {/* Product Name  */}
                            <div className="grid gap-2">
                                <Label htmlFor='name'>Product Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    type='text'
                                    placeholder='Product Name'
                                    autoFocus
                                    tabIndex={1}
                                />
                            </div>


                             {/* Product Description  */}
                             <div className="grid gap-2">
                                <Label htmlFor='description'>Description</Label>

                                <CustomTextarea id='name' name='name'/>
                                <Input
                                     type='text' placeholder='Product Name' autoFocus
                                    tabIndex={1}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
               </Card>
            </div>
        </AppLayout>
    );
}
