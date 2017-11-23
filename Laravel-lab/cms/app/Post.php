<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    public $directory = "/images/";

    use SoftDeletes;
    //protected $table = 'posts';
    //protected $primaryKey = 'id'; //(default)
    //protected $primaryKey = 'post_id';

    //$dates are property set by laravel internally
    protected $dates = ['deleted_at'];

    //By default, eloquent threat class name into lowercase plural

    protected $fillable = [
        'title',
        'content',
        'path'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function photos(){
        return $this->morphMany('App\Photo','imageable');
    }

    public function tags() {
        return $this->morphToMany('App\Tag','taggable');
    }

    public function getPathAttribute($value) {
        return $this->directory . $value;
    }

}