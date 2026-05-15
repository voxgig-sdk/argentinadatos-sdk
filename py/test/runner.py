# Argentinadatos SDK test runner

from __future__ import annotations
import os
import json

from utility.voxgig_struct import voxgig_struct as vs


class ArgentinadatosTestRunner:
    _env = {}

    @staticmethod
    def load_env_local():
        try:
            with open("../../.env.local", "r") as f:
                content = f.read()
        except (FileNotFoundError, IOError):
            return

        for line in content.splitlines():
            line = line.strip()
            if line == "" or line.startswith("#"):
                continue
            eq_idx = line.find("=")
            if eq_idx < 0:
                continue
            key = line[:eq_idx].strip()
            val = line[eq_idx + 1:].strip()
            ArgentinadatosTestRunner._env[key] = val

    @staticmethod
    def getenv(key):
        val = ArgentinadatosTestRunner._env.get(key)
        if val is not None:
            return val
        return os.environ.get(key)

    @staticmethod
    def env_override(m):
        live = ArgentinadatosTestRunner.getenv("ARGENTINADATOS_TEST_LIVE")
        override = ArgentinadatosTestRunner.getenv("ARGENTINADATOS_TEST_OVERRIDE")

        if live == "TRUE" or override == "TRUE":
            for key in list(m.keys()):
                envval = ArgentinadatosTestRunner.getenv(key)
                if envval is not None and envval != "":
                    envval = envval.strip()
                    if envval.startswith("{"):
                        try:
                            parsed = json.loads(envval)
                            if parsed is not None:
                                m[key] = parsed
                                continue
                        except Exception:
                            pass
                    m[key] = envval

        explain = ArgentinadatosTestRunner.getenv("ARGENTINADATOS_TEST_EXPLAIN")
        if explain is not None and explain != "":
            m["ARGENTINADATOS_TEST_EXPLAIN"] = explain

        return m

    _test_control = None

    @staticmethod
    def load_test_control():
        """Load sdk-test-control.json from this test dir; cache after first read.
        Returns a dict with the empty-skip default if the file is missing or invalid
        so tests never crash on a bad config.
        """
        if ArgentinadatosTestRunner._test_control is not None:
            return ArgentinadatosTestRunner._test_control
        ctrl_path = os.path.join(os.path.dirname(__file__), "sdk-test-control.json")
        try:
            with open(ctrl_path, "r") as f:
                ArgentinadatosTestRunner._test_control = json.load(f)
        except (FileNotFoundError, IOError, ValueError):
            ArgentinadatosTestRunner._test_control = {
                "version": 1,
                "test": {"skip": {
                    "live": {"direct": [], "entityOp": []},
                    "unit": {"direct": [], "entityOp": []},
                }},
            }
        return ArgentinadatosTestRunner._test_control

    @staticmethod
    def is_control_skipped(kind, name, mode):
        """Check sdk-test-control.json for a skip entry. Returns (skip, reason)."""
        ctrl = ArgentinadatosTestRunner.load_test_control()
        skip = ctrl.get("test", {}).get("skip", {}).get(mode, {}) or {}
        items = skip.get(kind, []) or []
        for item in items:
            if kind == "direct" and item.get("test") == name:
                return True, item.get("reason")
            if kind == "entityOp":
                key = (item.get("entity") or "") + "." + (item.get("op") or "")
                if key == name:
                    return True, item.get("reason")
        return False, None

    @staticmethod
    def live_delay_ms():
        """Per-test live pacing delay (ms); default 500."""
        ctrl = ArgentinadatosTestRunner.load_test_control()
        v = ctrl.get("test", {}).get("live", {}).get("delayMs")
        if isinstance(v, int) and v >= 0:
            return v
        return 500

    @staticmethod
    def entity_list_to_data(lst):
        out = []
        for item in lst:
            if isinstance(item, dict):
                out.append(item)
            elif hasattr(item, "data_get") and callable(item.data_get):
                d = item.data_get()
                if isinstance(d, dict):
                    out.append(d)
            else:
                out.append(item)
        return out


# Module-level convenience functions.
def load_env_local():
    ArgentinadatosTestRunner.load_env_local()


def env_override(m):
    return ArgentinadatosTestRunner.env_override(m)


def entity_list_to_data(lst):
    return ArgentinadatosTestRunner.entity_list_to_data(lst)


def is_control_skipped(kind, name, mode):
    return ArgentinadatosTestRunner.is_control_skipped(kind, name, mode)


def load_test_control():
    return ArgentinadatosTestRunner.load_test_control()


def live_delay_ms():
    return ArgentinadatosTestRunner.live_delay_ms()
