<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function post()
    {
//      return $this->hasOne('App\Post', 'FK_NAME');
        return $this->hasOne('App\Post'); //user_id by default
    }

    public function posts()
    {
        return $this->hasMany('App\Post'); //user_id by default
    }

    public function roles()
    {
//        return $this->belongsToMany('App\Role');

        //PIVOT
        return $this->belongsToMany('App\Role')->withPivot('created_at');

//        return $this->belongsToMany('App\Role', 'user_roles', 'user_id','role_id');
    }

    public function countries()
    {
        return $this->belongsToMany('App\Country'); //user_id by default
    }

    public function photos()
    {
        return $this->morphMany('App\Photo', 'imageable'); //user_id by default
    }
}