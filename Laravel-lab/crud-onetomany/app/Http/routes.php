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

use App\Post;
use App\User;
use App\Address;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/create', function (){
    $user = User::findOrFail(1);

    $post = new Post(['title'=>'My first post with Laravel', 'body'=>'I love Laravel!']);

    $user->posts()->save($post);
});

Route::get('/create-user', function (){
    $user = new User;

    $user->name = "M Lutfi";

    $user->save();
});

Route::get('/update-user', function (){
    $user = User::find(1);

    $user->email = "lutfi@email.com";
    $user->password = bcrypt(123);

    $user->save();
});

Route::get('/update-post', function (){
    $user = User::find(1);

    $user->posts()->where('id',1)->update(['title'=>'Update title', 'body'=>'Update body!']);

    $user->save();
});


Route::get('/read', function (){
    $user = User::findOrFail(1);

    return $user;
});

Route::get('/read', function (){
    $user = User::findOrFail(1);

    $user->forceDelete();
});

Route::group(['middleware' => ['web']], function () {

});