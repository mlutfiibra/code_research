{{--including all of layouts/app template--}}
@extends('layouts.app')

@section('content')
    <h1>Create Post</h1>

    {!! Form::open(['method'=>'POST', 'action'=>'PostsController@store', 'files'=>true]) !!}
    {{csrf_field()}}

    <div class="form-group">
        {!! Form::label('title', 'Title')  !!}
        {!! Form::text('title', null, ['placeholder'=>'Enter title','class'=>'form-control'])  !!}
    </div>

    <div class="form-group">
        {!! Form::file('file', ['class'=>'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::submit('Create post', ['class'=>'btn btn-primary']) !!}
    </div>

    {{--<form method="post" action="/posts">--}}
    {{--<input type="text" name="title" placeholder="Enter title">--}}
    {{--<input type="submit" name="submit">--}}
    {!! Form::close() !!}

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

@endsection