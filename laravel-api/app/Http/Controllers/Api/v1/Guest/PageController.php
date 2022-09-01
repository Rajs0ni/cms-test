<?php

namespace App\Http\Controllers\Api\v1\Guest;

use App\Sk\SkPayload;
use App\Sk\Page\PageApi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function list(Request $request)
    {
        $result = ['message' => 'OK'];
        $payload = new SkPayload($request->all());
        $result['pages'] = PageApi::getPublishedList($payload);
        return response()->api($result);
    }

    public function get(Request $request)
    {
        $result = ['message' => 'OK'];
        $payload = new SkPayload($request->all());
        $page = PageApi::getPublishedPage($payload);
        $result['page'] = $page;
        return response()->api($result);
    }   
}
