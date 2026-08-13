# Argentinadatos SDK feature factory

from argentinadatos_sdk.feature.base_feature import ArgentinadatosBaseFeature
from argentinadatos_sdk.feature.test_feature import ArgentinadatosTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ArgentinadatosBaseFeature(),
        "test": lambda: ArgentinadatosTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
