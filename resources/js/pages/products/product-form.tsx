import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTextarea } from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Description } from '@radix-ui/react-dialog';
import { error } from 'console';
import { describe } from 'node:test';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'create Products',
        href: route('products.create'),
    },
];





export default function ProductForm() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        description:'',
        price:'',
        featured_image:null as File | null
    });
    // Form Submit 
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('products.store'), {
            onSuccess: () => console.log('Form Submited')
        })


        // console.log("data",data);
    }


    // File Hnadle
        const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement> ) => {
            if(e.target.files && e.target.files.length > 0){
                setData('featured_image' , e.target.files[0])
            }
        }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* back button  */}
                <div className="ml-auto">
                    <Link as='button' className='w-fit bg-indigo-800 px-4 py-2 rounded-lg text-white text-mb cursor-pointer hover:opacity-90' href={route('products.index')}>Back to Products</Link>
                </div>
                {/* back button  */}


               <Card>
                <CardHeader>
                    <CardTitle>Create Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className='flex flex-col gap-4' autoComplete='off'>
                        <div className="grad gap-4">

                            {/* Product Name  */}
                            <div className="grid gap-2">
                                <Label htmlFor='name'>Product Name</Label>
                                <Input 
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)} 
                                id='name' name='name' type='text' placeholder='Product Name' autoFocus tabIndex={1}
                                />
                            </div>

                            <InputError message={errors.name} />


                             {/* Product Description  */}
                             <div className="grid gap-2">
                                <Label htmlFor='description'>Description</Label>

                                <CustomTextarea 
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)} 
                                id='description' 
                                name='description' 
                                tabIndex={2}
                                placeholder='Product description'
                                rows={3}
                                
                                />
                            <InputError message={errors.description} />
                            </div>




                            {/* Product Price  */}
                            <div className="grid gap-2">
                                <Label htmlFor='price'>Price</Label>
                                <Input
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    id='price'
                                    name='price'
                                    type='text'
                                    placeholder='Product price'
                                    autoFocus
                                    tabIndex={3}
                                />
                            <InputError message={errors.price} />

                            </div>


                            {/* Product Featured Image  */}
                            <div className="grid gap-2">
                                <Label htmlFor='featured_image'>Featured Image</Label>
                                <Input onChange={handleFileUpload} id='featured_image' name='featured_image' type='file'     autoFocus tabIndex={4}
                                />  

                            <InputError message={errors.featured_image} />
                            </div>
                            {/* submite button  */}
                            <Button type="submit" className="mt-4 w-full cursor-pointer" tabIndex={4}>
                                {/* {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} */}
                                SAVE
                            </Button>
                        </div>
                    </form>
                </CardContent>
               </Card>
            </div>
        </AppLayout>
    );
}
