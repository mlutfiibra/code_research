<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        session(['harry'=>'magician']);
//        $request->session()->put(['lutfi'=>'laravel hacker']);

        return $request->session()->get('harry');

//        $user = Auth::user();
//
//        return view('home', compact('user'));
    }
}
