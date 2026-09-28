import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadConfig } from '../src/config.js';

test('defaults logLevel to info', () => {
  assert.equal(loadConfig({}).logLevel, 'info');
});

test('reads LOG_LEVEL from the environment', () => {
  assert.equal(loadConfig({ LOG_LEVEL: 'debug' }).logLevel, 'debug');
});

test('rejects an unknown LOG_LEVEL', () => {
  assert.throws(
    () => loadConfig({ LOG_LEVEL: 'verbose' }),
    /Invalid LOG_LEVEL/,
  );
});
