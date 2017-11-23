{{--including all of layouts/app template--}}
@extends('layouts.app')

@section('content')
    <h3>Show Post</h3>

    <p>
        <a href="{{route('posts.edit', $post->id)}}">{{$post->title}}</a>
    </p>

@endsection