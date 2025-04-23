<?php

declare(strict_types=1);
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ChatBotController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/typing-game', function () {
    return Inertia::render('TypingGame');
});
// routes/api.php



Route::get('/chat', function () {
    return Inertia::render('ChatPage'); // افترضنا إن عندك صفحة React باسم ChatPage
});

Route::post('/chat', [ChatBotController::class, 'chat']);



Route::get('/digital-marketing-map', function () {
    return Inertia::render('DigitalMarketingMap');
})->name('digital-marketing-map');





Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('products' , ProductController::class);
    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
