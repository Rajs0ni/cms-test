<?php
namespace App\Sk\Page;

use Exception;
use App\Sk\Page\Page;
use App\Sk\SkPayload;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PageApi
{
    static function list(SkPayload $payload)
    {
        try {
            return Page::all();
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    static function create(SkPayload $payload)
    {   
        return (new Page())->doCreate($payload);
    }

    static function getInstance($id)
    {
        try {
            return Page::findOrFail($id);
        } catch (\Exception $e) {
            throw new ModelNotFoundException($e->getMessage());
        }
    }

    static function update(SkPayload $payload, Page $page)
    {   
        return $page->doUpdate($payload);
    }

    static function delete(SkPayload $payload, Page $page)
    {   
        try {
            return $page->delete();
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    static function getPublishedList(SkPayload $payload)
    {
        try {
            return Page::where('published',true)->get();
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    static function getPublishedPage(SkPayload $payload)
    {
        try {
            return Page::where([['slug','=',$payload->slug],['published','=',true]])->firstOrFail();
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
