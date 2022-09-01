<?php
namespace App\Sk\Page;

use Exception;
use App\Sk\SkPayload;
use App\Sk\Page\PageValidation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{   
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'pages';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'title',
        'slug',
        'description',
        'published'
    ];

    public function doCreate(SkPayload $payload)
    {
        try {
            (new PageValidation($payload))->validateCreate();

            //Check is page already exists with same slug
            if (self::where('slug', $payload->slug)->exists()) {
                throw new Exception("Page with slug $payload->slug already exists");
            }

            /** Save Page*/
            $this->fill((array) $payload)->save();

            return $this;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function doUpdate(SkPayload $payload)
    {
        try {
            (new PageValidation($payload))->validateUpdate();
            $this->update((array) $payload);
            return $this;
        } catch (\Exception $e) {
            throw $e;
        }
    }
}
