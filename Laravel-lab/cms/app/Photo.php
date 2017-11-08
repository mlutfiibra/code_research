<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    //Imageable convention
    public function imageable()
    {
        return $this->morphTo();
    }
}