-- Argentinadatos SDK error

local ArgentinadatosError = {}
ArgentinadatosError.__index = ArgentinadatosError


function ArgentinadatosError.new(code, msg, ctx)
  local self = setmetatable({}, ArgentinadatosError)
  self.is_sdk_error = true
  self.sdk = "Argentinadatos"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ArgentinadatosError:error()
  return self.msg
end


function ArgentinadatosError:__tostring()
  return self.msg
end


return ArgentinadatosError
