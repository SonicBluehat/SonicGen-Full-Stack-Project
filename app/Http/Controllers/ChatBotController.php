<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatBotController extends Controller
{
    public function chat(Request $request)
    {
        $history = $request->input('history', []);
        $message = $request->input('message');

        $messages = array_merge($history, [
            ['role' => 'user', 'content' => $message]
        ]);

        $response = Http::withToken(env('DEEPSEEK_API_KEY'))->post('https://api.deepseek.com/chat', [
            'model' => 'deepseek-chat',
            'messages' => $messages
        ]);

        return $response->json();
    }
}
