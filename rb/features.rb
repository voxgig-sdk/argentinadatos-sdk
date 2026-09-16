# Argentinadatos SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ArgentinadatosFeatures
  def self.make_feature(name)
    case name
    when "base"
      ArgentinadatosBaseFeature.new
    when "ratelimit"
      ArgentinadatosRatelimitFeature.new
    when "retry"
      ArgentinadatosRetryFeature.new
    when "test"
      ArgentinadatosTestFeature.new
    when "timeout"
      ArgentinadatosTimeoutFeature.new
    else
      ArgentinadatosBaseFeature.new
    end
  end
end
