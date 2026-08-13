# Argentinadatos SDK utility: make_context

from argentinadatos_sdk.core.context import ArgentinadatosContext


def make_context_util(ctxmap, basectx):
    return ArgentinadatosContext(ctxmap, basectx)
