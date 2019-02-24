"use strict";

function throughOnce(fn) {
  Object.defineProperty(fn, "counter", {
    value: 1,
    configurable: true,
    writable: true
  });
  return function() {
    if (fn.counter % 2 > 0) fn.apply(this, arguments);
    fn.counter++;
  };
}

var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
