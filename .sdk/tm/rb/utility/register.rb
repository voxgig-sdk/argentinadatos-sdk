# Argentinadatos SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ArgentinadatosUtility.registrar = ->(u) {
  u.clean = ArgentinadatosUtilities::Clean
  u.done = ArgentinadatosUtilities::Done
  u.make_error = ArgentinadatosUtilities::MakeError
  u.feature_add = ArgentinadatosUtilities::FeatureAdd
  u.feature_hook = ArgentinadatosUtilities::FeatureHook
  u.feature_init = ArgentinadatosUtilities::FeatureInit
  u.fetcher = ArgentinadatosUtilities::Fetcher
  u.make_fetch_def = ArgentinadatosUtilities::MakeFetchDef
  u.make_context = ArgentinadatosUtilities::MakeContext
  u.make_options = ArgentinadatosUtilities::MakeOptions
  u.make_request = ArgentinadatosUtilities::MakeRequest
  u.make_response = ArgentinadatosUtilities::MakeResponse
  u.make_result = ArgentinadatosUtilities::MakeResult
  u.make_point = ArgentinadatosUtilities::MakePoint
  u.make_spec = ArgentinadatosUtilities::MakeSpec
  u.make_url = ArgentinadatosUtilities::MakeUrl
  u.param = ArgentinadatosUtilities::Param
  u.prepare_auth = ArgentinadatosUtilities::PrepareAuth
  u.prepare_body = ArgentinadatosUtilities::PrepareBody
  u.prepare_headers = ArgentinadatosUtilities::PrepareHeaders
  u.prepare_method = ArgentinadatosUtilities::PrepareMethod
  u.prepare_params = ArgentinadatosUtilities::PrepareParams
  u.prepare_path = ArgentinadatosUtilities::PreparePath
  u.prepare_query = ArgentinadatosUtilities::PrepareQuery
  u.result_basic = ArgentinadatosUtilities::ResultBasic
  u.result_body = ArgentinadatosUtilities::ResultBody
  u.result_headers = ArgentinadatosUtilities::ResultHeaders
  u.transform_request = ArgentinadatosUtilities::TransformRequest
  u.transform_response = ArgentinadatosUtilities::TransformResponse
}
