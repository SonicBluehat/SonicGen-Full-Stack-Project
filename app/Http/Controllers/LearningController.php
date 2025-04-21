<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LearningController extends Controller
{
    // هذا هو الدالة التي ستعرض لك صفحة خريطة التعلم
    public function index()
    {
        // هنا يمكنك إرسال البيانات التي تحتاجها إلى صفحة React الخاصة بك
        return Inertia::render('LearningRoadmap');
    }
}
