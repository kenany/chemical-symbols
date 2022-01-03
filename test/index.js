'use strict';

const test = require('tape');

const symbols = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(symbols));
});

test('has all 118 elements', function(t) {
  t.plan(1);
  t.equals(symbols.length, 118);
});
