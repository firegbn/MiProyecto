<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//route::group(['middleware' => 'cors'], function(){
//Route::post('/api/register', 'UserController@register');
//Route::post('/api/login', 'UserController@login');
//    Route::put('/api/user/update', 'UserController@update');
//    Route::post('/api/user/upload','UserController@upload')->middleware('api.auth');
//    Route::get('/api/user/avatar/{filename}', 'UserController@getImage');
//    Route::get('/api/user/detail/{id}', 'UserController@detail');
//    
//    
//    // controladores de categorias
//    
//    Route::resource('/api/category', 'CategoryController');
//    
//    // Rutas del controlador de entradas
//    
//    Route::resource('/api/post', 'PostController');
//    Route::post('/api/post/upload','PostController@upload');
//    Route::get('/api/post/image/{filename}', 'PostController@getImagen');
//    Route::get('/api/post/category/{id}', 'PostController@getPostsByCategory');
//    Route::get('/api/post/user/{id}', 'PostController@getPostsByUser');
//    
//
//
//});
