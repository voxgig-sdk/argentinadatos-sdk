-- ProjectName SDK exists test

local sdk = require("argentinadatos_sdk")

describe("ArgentinadatosSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
