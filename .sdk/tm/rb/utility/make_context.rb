# Argentinadatos SDK utility: make_context
require_relative '../core/context'
module ArgentinadatosUtilities
  MakeContext = ->(ctxmap, basectx) {
    ArgentinadatosContext.new(ctxmap, basectx)
  }
end
