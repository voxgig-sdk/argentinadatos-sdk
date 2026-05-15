# Argentinadatos SDK utility: feature_add
module ArgentinadatosUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
