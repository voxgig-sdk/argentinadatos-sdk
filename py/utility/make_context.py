# Argentinadatos SDK utility: make_context

from core.context import ArgentinadatosContext


def make_context_util(ctxmap, basectx):
    return ArgentinadatosContext(ctxmap, basectx)
