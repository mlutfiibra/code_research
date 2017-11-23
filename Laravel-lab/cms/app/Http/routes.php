<?php

use App\Country;
use App\Post;
use App\Photo;
use App\User;
use App\Tag;
use Carbon\Carbon;

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

Route::get('/', function () {
    //get view from welcome.blade.php
    return view('welcome');
});
//
//Route::get('/contact', 'PostsController@contact');
//
//Route::get('/post/{name}', 'PostsController@show_post');
//
//Route::get('/post/{id}/{name}', function ($id, $name) {
//    return "Hello, " . $name . " your id " . $id;
//});
//
////Create and name Routes use 'as'
//Route::get('admin/post/example', array('as' => 'admin.home', function () {
//    //rename admin/post/example to admin.home
//    $url = route('admin.home');
//
//    return "this url is " . $url;
//}));
//
//Route::get('/calculate/{n1}/{n2}', 'PostsController@add');
//
////We able to use all URL's params
//Route::resource('/getAll', 'PostsController');

/*
|--------------------------------------------------------------------------
| Database Queries
|--------------------------------------------------------------------------
*/

//Route::get('/insert', function () {
//    DB::insert('insert into posts(title, content ) values(?,?)', ['Harry Potter', '471 pages']);
//});
//
//Route::get('/read', function () {
//    $results = DB::select('select * from posts where id = ?', [1]);
//
//    foreach ($results as $result) {
//        return $result->title;
//    }
//});
//
//Route::get('/update', function () {
//    $update = DB::update('update posts set title="Alice In Wonderland" where id = ?', [1]);
//    return $update;
//});
//
//Route::get('/delete', function () {
//    $deleted = DB::delete('delete from posts where id = ?', [1]);
//    return $deleted;
//});

/*
|--------------------------------------------------------------------------
| ELOQUENT-Makes query easier
|--------------------------------------------------------------------------
*/

//Route::get('/read', function () {
//    //Find and all static method availabel in route of model
//    $posts = Post::all();
////    $posts = Post::find(2);
//
//    foreach ($posts as $post) {
//        echo $post;
//    }
//});
//
//Route::get('/find', function () {
//    //find is by id by default
//    $posts = Post::find(1);
//
//    return $posts->title;
//});
//
//Route::get('/findmore', function () {
//    $posts = Post::findOrFail(1);
//    if ($posts->title) {
//        return $posts;
//    } elseif (!$posts->title) {
//        echo "File not found";
//    }
//
//});
//
//Route::get('/basic-insert', function () {
//    $posts = new Post;
//
//    $posts->title = 'New Eloquent title insert 2';
//    $posts->content = 'Wow Eloque content 2';
//
//    $posts->save();
//});
//
//Route::get('/basic-update', function () {
//    $posts = Post::find(4);
//
//    $posts->title = 'Update Eloquent title insert';
//    $posts->content = 'Update Eloque content';
//
//    $posts->save();
//});
//
////You must create $fillable in Model to make query works
//Route::get('/create', function () {
//    Post::create(['title' => 'New Title with Create ORM', 'content' => 'New Content with Create ORM']);
//});
//
//Route::get('/update', function () {
//    //find by string
//    Post::where('title', 'Hunter')->where('is_admin', 0)->update(['title' => 'Updated  title', 'content' => 'Updated content']);
//});
//
//Route::get('/delete', function () {
//    //findby id
//    $post = Post::find(9);
//    $post->delete();
//});
//
//Route::get('/destroy', function () {
//    //findby id
//    Post::destroy([3, 4, 7]);
//});
//
//Route::get('/softdelete', function () {
//    Post::find(1)->delete();
//});
//
//Route::get('/readsoftdelete', function () {
//    //READ all column with deleted_at row
//
////   $post = Post::withTrashed()->where('is_admin', 0)->get();
////   return $post;
//
//    $post = Post::onlyTrashed()->where('is_admin', 0)->get();
//    return $post;
//});
//
////Restore softdelete
//Route::get('/restore', function () {
//    Post::withTrashed()->where('is_admin', 0)->restore();
//});
//
////Delete softdelete permanentely
//Route::get('/forcedelete', function () {
//    Post::onlyTrashed()->where('is_admin', 0)->forceDelete();
//});
//
//Route::get('/users-insert', function () {
//    $users = new User;
//
//    $users->name = 'M Lutfi';
//    $users->email = '123@email.com';
//    $users->password = '12345';
//
//    $users->save();
//});

/*
|--------------------------------------------------------------------------
| ELOQUENT RELATIONSHIP
|--------------------------------------------------------------------------
*/

//// One to One Relationship
//Route::get('/user/{id}/post', function ($id) {
////    return User::find($id)->post;
//    return User::find($id)->post->title;
//});
//
//Route::get('/post/{id}/user', function ($id) {
////    return User::find($id)->post;
//    return Post::find($id)->user->name;
//});
//
////One to Many Relationship
//Route::get('/posts', function () {
//    $user = User::find(1);
//
//    foreach ($user->posts as $post) {
//        echo $post->title . "<br>";
//    }
//});
//
////Many to Many Relationship
//Route::get('/user/{id}/role', function ($id) {
//    $user = User::find($id);
//
//    foreach ($user->roles as $role) {
//        return $role->name;
//    }
//
////   $user = User::find($id)->roles()->orderBy('id', 'desc')->get();
////   return $user;
//});
//
////Accessing the intermediate table/pivot
//Route::get('user/pivot', function () {
//    $user = User::find(1);
//
//    foreach ($user->roles as $role) {
//        return $role->pivot->created_at;
//    }
//});
//
////Get data from selecting Country Id to Show Users's posts
//Route::get('user/country', function () {
//    $country = Country::find(2);
//
//    foreach ($country->posts as $post) {
//        return $post->title;
//    }
//});
//
////POLYMORPHIC RELATIONS (imagable_type)
//Route::get('user/photos', function () {
//    $user = User::find(1);
//
//    foreach ($user->photos as $photo) {
//        return $photo;
//    }
//});
//
//Route::get('post/photos', function () {
//    $post = Post::find(1);
//
//    foreach ($post->photos as $photo) {
//        echo $photo . "<br>";
//    }
//});
//
////PULL THE OWNER OF THE IMAGE
//Route::get('photos/{id}/post', function ($id) {
//    $photo = Photo::findOrFail($id);
//    return $photo->imageable; //imageable_type
//});
//
////Polymorphic Many to Many
//Route::get('/post/tag', function () {
//    $post = Post::find(1);
//
//    foreach ($post->tags as $tag) {
//        echo $tag;
//    }
//});
//
//Route::get('/tag/post', function () {
//    $tag = Tag::find(2); //find  tag table with id=2
//
//    foreach ($tag->posts as $post) {
//        echo $post->title;
//    }
//});

/*
|--------------------------------------------------------------------------
| CRUD Application
|--------------------------------------------------------------------------
*/

Route::group(['middlewareGroups'=>'web'], function () {
    Route::resource('/posts', 'PostsController');

    Route::get('/dates', function () {
        $date = new DateTime();
        echo $date->format('m-d-Y');

        echo '<br>';

        echo Carbon::now()->addDays(10)->diffForHumans();

        echo '<br>';

    });
});

Route::get('/getusername', function () {
   $user = User::findOrFail(1);

   echo $user->name;
});

Route::get('/setusername/{name}', function ($name) {
   $user = User::findOrFail(1);

   $user->name = $name;

   $user->save();
});