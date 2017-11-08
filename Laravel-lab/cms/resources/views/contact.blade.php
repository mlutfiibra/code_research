{{--including all of layouts/app template--}}
@extends('layouts.app')

{{--this is append to master content--}}
@section('content')
    <h1>Contact Page</h1>
    <ul>
        @if(count($people))
            @foreach($people as $person)
                <li>{{$person}}</li>
            @endforeach
        @endif
    </ul>
@stop

@section('footer')

    @stop