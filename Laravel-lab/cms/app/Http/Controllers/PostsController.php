<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();

        return view('posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //the view will automatically translate create->create.blade
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePostRequest $request)
    {
        //Files
//        $file = $request->file('file');
//        echo $file->getClientOriginalName();

        $input= $request->all();

        if($file = $request->file('file')) {
            $name = $file->getClientOriginalName();

            $file->move('images', $name);

            $input['path'] = $name;
        }

        Post::create($input);

//        return $request->all();
//        return $request->title;

//        Post::create($request->all());
//        return redirect('/posts');

//        $input = $request->all();
//        $input['title'] = $request->title;
//
//        Post::create($request->all());

//        $post = new Post;
//        $post->title = $request->title;
//
//        $post->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::findOrFail($id);

        return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);

        return view('posts.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->update($request->all());

        return redirect('/posts');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return redirect('/posts');
    }

    public function add($n1, $n2)
    {
        $total = $n1 + $n2;
        return "Hi there " . $total;
    }

    public function contact()
    {
        $people = ["Harry", "Ron", "Hermione"];

        return view('contact', compact('people'));
    }

    public function show_post($name)
    {
        return view('post', compact('name'));
    }
}