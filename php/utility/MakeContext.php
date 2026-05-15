<?php
declare(strict_types=1);

// Argentinadatos SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ArgentinadatosMakeContext
{
    public static function call(array $ctxmap, ?ArgentinadatosContext $basectx): ArgentinadatosContext
    {
        return new ArgentinadatosContext($ctxmap, $basectx);
    }
}
