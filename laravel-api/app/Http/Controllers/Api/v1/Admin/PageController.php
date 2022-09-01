<?php

namespace App\Http\Controllers\Api\v1\Admin;

use App\Sk\Page\Page;
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
        $result['pages'] = PageApi::list($payload);
        return response()->api($result);
    }

    public function create(Request $request)
    {
        $result = ['message' => 'OK'];
        $payload = new SkPayload($request->all());
        $result['result'] = PageApi::create($payload);
        return response()->api($result);
    }

    public function get(Request $request)
    {
        $result = ['message' => 'OK'];
        $payload = new SkPayload($request->all());
        $page = PageApi::getInstance($payload->id);
        $result['page'] = $page;
        return response()->api($result);
    }

    public function update( Request $request, Page $page) {
        $result = ['message' => 'OK'];
        $payload = new SkPayload($request->all());
        $result['result'] = PageApi::update($payload, $page);
        return response()->api($result);
    }

    public function delete(Request $request, Page $page) {
        $result = ['message' => 'OK'];
        $payload = new SkPayload($request->all());
        $result['result'] = PageApi::delete($payload, $page);
        return response()->api($result);
    }
}
