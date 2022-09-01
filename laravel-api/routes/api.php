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

Route::group(['prefix' => '/v1', 'namespace' => 'Api\v1'], function () {
    /*
    |--------------------------------------------------------------------------
    | Admin - Panel API Routes
    |--------------------------------------------------------------------------
    */
    Route::group(
        [
            'prefix' => 'admin',
            'namespace' => 'Admin'
        ],
        function () {
            /*
            |--------------------------------------------------------------------------
            | ADMIN / PAGES
            |--------------------------------------------------------------------------
            */
            Route::group(['prefix' => 'page'], function () {
                Route::post('/list', 'PageController@list');
                Route::post('/create', 'PageController@create');
                Route::post('/get', 'PageController@get');
                Route::group(['prefix' => '{page}'], function () {
                    Route::post('/update', 'PageController@update');
                    Route::post('/delete', 'PageController@delete');
                });
            });
    });
    /*
    |--------------------------------------------------------------------------
    | Guest - Frontend API Routes
    |--------------------------------------------------------------------------
    */
    Route::group(
        [
            'prefix' => 'guest', 
            'namespace' => 'Guest'
        ], 
        function () {
        /*
        |--------------------------------------------------------------------------
        | GUEST / PAGES
        |--------------------------------------------------------------------------
        */
        Route::group([ 'prefix' => 'page'],
            function () {
                Route::post('/list', 'PageController@list');
                Route::post('/get', 'PageController@get');
            }
        );
    });
});