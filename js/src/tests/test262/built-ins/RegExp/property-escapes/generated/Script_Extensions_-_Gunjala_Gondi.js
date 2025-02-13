// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Gunjala_Gondi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000B7
  ],
  ranges: [
    [0x000964, 0x000965],
    [0x011D60, 0x011D65],
    [0x011D67, 0x011D68],
    [0x011D6A, 0x011D8E],
    [0x011D90, 0x011D91],
    [0x011D93, 0x011D98],
    [0x011DA0, 0x011DA9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Gunjala_Gondi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Gunjala_Gondi}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Gong}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Gong}"
);
testPropertyEscapes(
  /^\p{scx=Gunjala_Gondi}+$/u,
  matchSymbols,
  "\\p{scx=Gunjala_Gondi}"
);
testPropertyEscapes(
  /^\p{scx=Gong}+$/u,
  matchSymbols,
  "\\p{scx=Gong}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011D66,
    0x011D69,
    0x011D8F,
    0x011D92
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0000B6],
    [0x0000B8, 0x000963],
    [0x000966, 0x00DBFF],
    [0x00E000, 0x011D5F],
    [0x011D99, 0x011D9F],
    [0x011DAA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Gunjala_Gondi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Gunjala_Gondi}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Gong}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Gong}"
);
testPropertyEscapes(
  /^\P{scx=Gunjala_Gondi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Gunjala_Gondi}"
);
testPropertyEscapes(
  /^\P{scx=Gong}+$/u,
  nonMatchSymbols,
  "\\P{scx=Gong}"
);

reportCompare(0, 0);
