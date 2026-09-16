# Argentinadatos SDK feature factory

from argentinadatos_sdk.feature.base_feature import ArgentinadatosBaseFeature
from argentinadatos_sdk.feature.ratelimit_feature import ArgentinadatosRatelimitFeature
from argentinadatos_sdk.feature.retry_feature import ArgentinadatosRetryFeature
from argentinadatos_sdk.feature.test_feature import ArgentinadatosTestFeature
from argentinadatos_sdk.feature.timeout_feature import ArgentinadatosTimeoutFeature


_FEATURES = {
    "base": lambda: ArgentinadatosBaseFeature(),
    "ratelimit": lambda: ArgentinadatosRatelimitFeature(),
    "retry": lambda: ArgentinadatosRetryFeature(),
    "test": lambda: ArgentinadatosTestFeature(),
    "timeout": lambda: ArgentinadatosTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
