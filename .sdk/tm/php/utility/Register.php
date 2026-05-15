<?php
declare(strict_types=1);

// Argentinadatos SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ArgentinadatosUtility::setRegistrar(function (ArgentinadatosUtility $u): void {
    $u->clean = [ArgentinadatosClean::class, 'call'];
    $u->done = [ArgentinadatosDone::class, 'call'];
    $u->make_error = [ArgentinadatosMakeError::class, 'call'];
    $u->feature_add = [ArgentinadatosFeatureAdd::class, 'call'];
    $u->feature_hook = [ArgentinadatosFeatureHook::class, 'call'];
    $u->feature_init = [ArgentinadatosFeatureInit::class, 'call'];
    $u->fetcher = [ArgentinadatosFetcher::class, 'call'];
    $u->make_fetch_def = [ArgentinadatosMakeFetchDef::class, 'call'];
    $u->make_context = [ArgentinadatosMakeContext::class, 'call'];
    $u->make_options = [ArgentinadatosMakeOptions::class, 'call'];
    $u->make_request = [ArgentinadatosMakeRequest::class, 'call'];
    $u->make_response = [ArgentinadatosMakeResponse::class, 'call'];
    $u->make_result = [ArgentinadatosMakeResult::class, 'call'];
    $u->make_point = [ArgentinadatosMakePoint::class, 'call'];
    $u->make_spec = [ArgentinadatosMakeSpec::class, 'call'];
    $u->make_url = [ArgentinadatosMakeUrl::class, 'call'];
    $u->param = [ArgentinadatosParam::class, 'call'];
    $u->prepare_auth = [ArgentinadatosPrepareAuth::class, 'call'];
    $u->prepare_body = [ArgentinadatosPrepareBody::class, 'call'];
    $u->prepare_headers = [ArgentinadatosPrepareHeaders::class, 'call'];
    $u->prepare_method = [ArgentinadatosPrepareMethod::class, 'call'];
    $u->prepare_params = [ArgentinadatosPrepareParams::class, 'call'];
    $u->prepare_path = [ArgentinadatosPreparePath::class, 'call'];
    $u->prepare_query = [ArgentinadatosPrepareQuery::class, 'call'];
    $u->result_basic = [ArgentinadatosResultBasic::class, 'call'];
    $u->result_body = [ArgentinadatosResultBody::class, 'call'];
    $u->result_headers = [ArgentinadatosResultHeaders::class, 'call'];
    $u->transform_request = [ArgentinadatosTransformRequest::class, 'call'];
    $u->transform_response = [ArgentinadatosTransformResponse::class, 'call'];
});
