<?php
declare(strict_types=1);

// Argentinadatos SDK utility: result_headers

class ArgentinadatosResultHeaders
{
    public static function call(ArgentinadatosContext $ctx): ?ArgentinadatosResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
