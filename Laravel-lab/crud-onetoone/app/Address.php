<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    //Avoid MassAsignment Exception
    protected $fillable =[
        'name'
    ];
}
