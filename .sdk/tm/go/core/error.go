package core

type ArgentinadatosError struct {
	IsArgentinadatosError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewArgentinadatosError(code string, msg string, ctx *Context) *ArgentinadatosError {
	return &ArgentinadatosError{
		IsArgentinadatosError: true,
		Sdk:              "Argentinadatos",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ArgentinadatosError) Error() string {
	return e.Msg
}
