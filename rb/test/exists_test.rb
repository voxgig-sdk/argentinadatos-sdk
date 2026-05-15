# Argentinadatos SDK exists test

require "minitest/autorun"
require_relative "../Argentinadatos_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ArgentinadatosSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
