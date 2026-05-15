<?php
declare(strict_types=1);

// Argentinadatos SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ArgentinadatosFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ArgentinadatosBaseFeature();
            case "test":
                return new ArgentinadatosTestFeature();
            default:
                return new ArgentinadatosBaseFeature();
        }
    }
}
