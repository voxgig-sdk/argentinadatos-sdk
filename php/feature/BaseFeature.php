<?php
declare(strict_types=1);

// Argentinadatos SDK base feature

class ArgentinadatosBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ArgentinadatosContext $ctx, array $options): void {}
    public function PostConstruct(ArgentinadatosContext $ctx): void {}
    public function PostConstructEntity(ArgentinadatosContext $ctx): void {}
    public function SetData(ArgentinadatosContext $ctx): void {}
    public function GetData(ArgentinadatosContext $ctx): void {}
    public function GetMatch(ArgentinadatosContext $ctx): void {}
    public function SetMatch(ArgentinadatosContext $ctx): void {}
    public function PrePoint(ArgentinadatosContext $ctx): void {}
    public function PreSpec(ArgentinadatosContext $ctx): void {}
    public function PreRequest(ArgentinadatosContext $ctx): void {}
    public function PreResponse(ArgentinadatosContext $ctx): void {}
    public function PreResult(ArgentinadatosContext $ctx): void {}
    public function PreDone(ArgentinadatosContext $ctx): void {}
    public function PreUnexpected(ArgentinadatosContext $ctx): void {}
}
