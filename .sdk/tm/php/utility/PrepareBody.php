<?php
declare(strict_types=1);

// Argentinadatos SDK utility: prepare_body

class ArgentinadatosPrepareBody
{
    public static function call(ArgentinadatosContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
