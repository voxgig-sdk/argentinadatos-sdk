# ProjectName SDK exists test

import pytest
from argentinadatos_sdk import ArgentinadatosSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ArgentinadatosSDK.test(None, None)
        assert testsdk is not None
