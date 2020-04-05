<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// cargando clases

use App\Http\Middleware\ApiAuthMiddlleware;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/pruebas/{nombre?}', function($nombre = null){
    $texto = '<h2>Texto desde ruta</h2>';
    $texto .= 'Nombre ' .$nombre;

    return $view('pruebas', array(
        'texto' => $texto
    ));
});

Route::get('/animales', 'pruebasController@index');
Route::get('/test-orm', 'pruebasController@testOrm');

/* Metodos HttP

*GET:  CONSEGUIR DATOS O RECURSOS
*POST: GUARDARDATOS O RECURSOS O HACER LOGICA DESDE UN FORMULARIO
*PUT: ACTUALIZAR DATOS O RECURSOS
*DELETE: ELIMNAR DATOS O RECURSOS

*/

//RUTAS DE API
//Route::get('/usuario/pruebas', 'UserController@pruebas');
//Route::get('/categoria/pruebas', 'CategoryController@pruebas');
//Route::get('/entrada/pruebas', 'PostController@pruebas');


// controlador de usuarios
Route::post('/api/register', 'UserController@register');
Route::post('/api/login', 'UserController@login');
Route::put('/api/user/update', 'UserController@update');
Route::post('/api/user/upload','UserController@upload')->middleware('api.auth');
Route::get('/api/user/avatar/{filename}', 'UserController@getImage');
Route::get('/api/user/detail/{id}', 'UserController@detail');


// controladores de categorias

Route::resource('/api/category', 'CategoryController');

// Rutas del controlador de entradas

Route::resource('/api/post', 'PostController');
Route::post('/api/post/upload','PostController@upload');
Route::get('/api/post/image/{filename}', 'PostController@getImagen');
Route::get('/api/post/category/{id}', 'PostController@getPostsByCategory');
Route::get('/api/post/user/{id}', 'PostController@getPostsByUser');
