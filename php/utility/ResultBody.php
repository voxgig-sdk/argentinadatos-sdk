<?php
declare(strict_types=1);

// Argentinadatos SDK utility: result_body

class ArgentinadatosResultBody
{
    public static function call(ArgentinadatosContext $ctx): ?ArgentinadatosResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
