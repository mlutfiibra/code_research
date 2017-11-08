<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //We want to make sure that only non-unique column will fill by user
    protected $fillable = ['title', 'body'];
}