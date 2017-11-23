<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\User;
use App\Address;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['web']], function () {

});

Route::auth();

Route::get('/home', 'HomeController@index');

//Middleware can be register routeMiddleware in Kernel.php
Route::get('/admin/user/roles', ['middleware'=>['role', 'auth', 'web'], function () {
    return "Middleware role";
}]);

Route::get('/admin', 'AdminController@index');