<?php
declare(strict_types=1);

// Argentinadatos SDK utility: feature_add

class ArgentinadatosFeatureAdd
{
    public static function call(ArgentinadatosContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
