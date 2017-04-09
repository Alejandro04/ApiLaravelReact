<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/notas', 'ApiController@index');
Route::post('/notas', 'ApiController@store');

Route::get('/lista', 'ApiController@lista');
Route::get('/form', 'ApiController@form');
Route::get('/nota/{id}', 'ApiController@nota');
