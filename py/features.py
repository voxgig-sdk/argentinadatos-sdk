# Argentinadatos SDK feature factory

from feature.base_feature import ArgentinadatosBaseFeature
from feature.test_feature import ArgentinadatosTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ArgentinadatosBaseFeature(),
        "test": lambda: ArgentinadatosTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
