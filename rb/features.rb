# Argentinadatos SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ArgentinadatosFeatures
  def self.make_feature(name)
    case name
    when "base"
      ArgentinadatosBaseFeature.new
    when "test"
      ArgentinadatosTestFeature.new
    else
      ArgentinadatosBaseFeature.new
    end
  end
end
