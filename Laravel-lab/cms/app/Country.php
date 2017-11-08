<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function posts()
    {
        //Laravel will look for country_id in Users table and user_id in Post table
        return $this->hasManyThrough('App\Post', 'App\User');

        //HIDDEN BY DEFAULT
//      return $this->hasManyThrough('App\Post','App\User', 'country_id', 'user_id');
    }
}