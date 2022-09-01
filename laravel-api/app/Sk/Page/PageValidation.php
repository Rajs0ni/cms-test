<?php
namespace App\Sk\Page;
use App\Sk\SkPayload;
use App\Sk\SkValidation;

class PageValidation extends SkValidation
{
    /**
     * fields
     */
    const FIELD_ID = 'id';
    const FIELD_TITLE = 'title';
    const FIELD_SLUG = 'slug';
    const FIELD_DESCRIPTION = 'description';
    const FIELD_PUBLISHED = 'published';

    public function __construct(SkPayload $data)
    {
        $this->data = $data;

        $this->rules = [
            self::FIELD_ID => 'required|numeric|exists:pages,id',
            self::FIELD_TITLE => 'required|string|min:3|max:250',
            self::FIELD_SLUG => 'required|string|min:3|max:250',
            self::FIELD_DESCRIPTION => 'nullable|string',
            self::FIELD_PUBLISHED => 'required|numeric',            
        ];
    }

    /**
     * validate given data for create action
     */
    public function validateCreate()
    {
        $fields = [
            self::FIELD_TITLE,
            self::FIELD_SLUG,
            self::FIELD_DESCRIPTION
        ];
        $this->validate($fields, $this->data);
    }

    /**
     * validate given data for update action
     */
    public function validateUpdate()
    {
        $fields = [
            self::FIELD_ID,
            self::FIELD_TITLE,
            self::FIELD_SLUG,
            self::FIELD_DESCRIPTION
        ];
        $this->validate($fields, $this->data);
    }
}
