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

use App\Role;
use App\User;
use App\Address;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/create', function () {
    $user = User::find(1);

    $role = new Role(['name' => 'Founder']);

    $user->roles()->save($role);
});

Route::get('/read', function () {
    $user = User::find(1);

    foreach ($user->roles as $role) {
        echo $user->roles . "<br>";
    }
});

Route::get('/update', function () {
    $user = User::findOrFail(1);

    //Check relationship
    if($user->has('roles')) {
        foreach ($user->roles as $role) {
            if($role->name == 'Admin') {
                $role->name = "Administrator";
                $role->save();
            }
        }
    }
});

Route::get('/delete', function () {
   $user = User::findOrFail(1);

   //Delete all roles
   $user->roles()->delete();

   //Delete role_id 1
//   %user->roles()->where('id',1)->delete();
});

//only attach without create roles
Route::get('/attach', function () {
    $user = User::findOrFail(1);

    $user->roles()->attach(3);
});

Route::get('/detach', function () {
    $user = User::findOrFail(1);

    $user->roles()->detach(3);
});

//Change force the user's roles
Route::get('/sync', function () {
    $user = User::findOrFail(1);

    $user->roles()->sync([1,2,3]);
});

Route::group(['middleware' => ['web']], function () {

});