<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Exception;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('products/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('products/product-form');

    }

    /**
     * Store a newly created resource in storage.
     * @param ProductFormRequest $request
     * @return /Illuminate/Http/RedirectResponse
     */
    public function store(ProductFormRequest $request)
    {
        try{
            $featuredImage = null;
        if($request->file('featured_image')){
            $featuredImage = $request->file('featured_image');
            $featuredImageOriginalName = $featuredImage->getClientOriginalName();
            $featuredImage->store('products','public');
        }

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'featured_image' => $request->featuredImage,
            'featured_image_original_name' => $request->featuredImageOriginalName,
        ]);
        if($product){
            return redirect()->route('products.index')->with('success', 'Product created successfully');
        }
            return redirect()->back()->with('error', 'Unable to create Product created successfully, please try again');

        }catch(Exception $e) {
             Log::error('Product creation failed' . $e->getMessage());
        }

        
        
        // dd($request->all()); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
