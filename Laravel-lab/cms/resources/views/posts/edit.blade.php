{{--including all of layouts/app template--}}
@extends('layouts.app')

@section('content')
    <h1>Manipulate Post</h1>

    {{--Model form data binding for populate db --}}
    {!! Form::model($post, ['method'=>'PATCH', 'action'=>['PostsController@update', $post->id]]) !!}
    {{csrf_field()}}
    {!! Form::text('title', null, ['placeholder'=>'Enter new title','class'=>'form-control'])  !!}
    <div>
        {!! Form::submit('Update post', ['class'=>'btn btn-info']) !!}
    </div>
    {!! Form::close() !!}

    {!! Form::open(['method'=>'DELETE', 'action'=>['PostsController@destroy', $post->id]]) !!}
        {!! Form::submit('Delete post', ['class'=>'btn btn-danger']) !!}
    {!! Form::close() !!}

    {{--<form method="post" action="/posts/{{$post->id}}">--}}
        {{--{{csrf_field()}}--}}
        {{--<input type="hidden" name="_method" value="PUT">--}}
        {{--<input type="text" name="title" placeholder="Enter title" value="{{$post->title}}">--}}
        {{--{{csrf_field()}}--}}
        {{--<input type="submit" name="submit" value="UPDATE">--}}
    {{--</form>--}}

    {{--<form method="post" action="/posts/{{$post->id}}">--}}
    {{--{{csrf_field()}}--}}
    {{--<input type="hidden" name="_method" value="DELETE">--}}
    {{--<input type="submit" value="DELETE">--}}
    {{--</form>--}}
@endsection