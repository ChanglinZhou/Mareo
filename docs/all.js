(function () {
'use strict';

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

failure.tag = 248;

invalid_argument.tag = 248;

division_by_zero.tag = 248;

assert_failure.tag = 248;


/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  }
  xs[index] = newval;
  return /* () */0;
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  }
  return xs[index];
}


/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = caml_array_sub(args, arity, -d | 0);
      _f = f.apply(null, caml_array_sub(args, 0, arity));
      continue ;
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  }
}

function curry_1(o, a0, arity) {
  switch (arity) {
    case 1 : 
        return o(a0);
    case 2 : 
        return (function (param) {
            return o(a0, param);
          });
    case 3 : 
        return (function (param, param$1) {
            return o(a0, param, param$1);
          });
    case 4 : 
        return (function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          });
    case 5 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          });
    case 6 : 
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          });
    default:
      return app(o, /* array */[a0]);
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[a1]);
    case 2 : 
        return o(a0, a1);
    case 3 : 
        return (function (param) {
            return o(a0, a1, param);
          });
    case 4 : 
        return (function (param, param$1) {
            return o(a0, a1, param, param$1);
          });
    case 5 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          });
    case 6 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1
                ]);
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}


/* No side effect */

var id = /* record */[/* contents */0];

function caml_fresh_oo_id(param) {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = caml_fresh_oo_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function caml_is_extension(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}


/* No side effect */

var undefinedHeader = /* array */[];

function valFromOption(x) {
  if (x !== null && x[0] === undefinedHeader) {
    var depth = x[1];
    if (depth === 0) {
      return undefined;
    } else {
      return /* tuple */[
              undefinedHeader,
              depth - 1 | 0
            ];
    }
  } else {
    return x;
  }
}


/* No side effect */

var $$Error = create("Caml_js_exceptions.Error");

function internalToOCamlException(e) {
  if (caml_is_extension(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}


/* No side effect */

var Bottom = create("Array.Bottom");


/* No side effect */

function mod_(x, y) {
  if (y === 0) {
    throw division_by_zero;
  }
  return x % y;
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);


/* imul Not a pure module */

/* No side effect */

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}


/* No side effect */

/* Caml_int32 Not a pure module */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

function for_in (o,foo){
        for (var x in o) { foo(x); }
      }

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return true;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        }
        if (b_type === "number" || b_type === "undefined" || b === null) {
          return false;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
          } else if (tag_a === 248) {
            return a[1] === b[1];
          } else {
            if (tag_a === 251) {
              throw [
                    invalid_argument,
                    "equal: abstract value"
                  ];
            }
            if (tag_a !== tag_b) {
              return false;
            } else if (tag_a === 256) {
              return a[1] === b[1];
            } else {
              var len_a = a.length | 0;
              var len_b = b.length | 0;
              if (len_a === len_b) {
                if (Array.isArray(a)) {
                  var a$1 = a;
                  var b$1 = b;
                  var _i = 0;
                  var same_length = len_a;
                  while(true) {
                    var i = _i;
                    if (i === same_length) {
                      return true;
                    } else if (caml_equal(a$1[i], b$1[i])) {
                      _i = i + 1 | 0;
                      continue ;
                    } else {
                      return false;
                    }
                  }
                } else if ((a instanceof Date && b instanceof Date)) {
                  return !(a > b || a < b);
                } else {
                  var a$2 = a;
                  var b$2 = b;
                  var result = /* record */[/* contents */true];
                  var do_key_a = (function(b$2,result){
                  return function do_key_a(key) {
                    if (b$2.hasOwnProperty(key)) {
                      return 0;
                    } else {
                      result[0] = false;
                      return /* () */0;
                    }
                  }
                  }(b$2,result));
                  var do_key_b = (function(a$2,b$2,result){
                  return function do_key_b(key) {
                    if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                      result[0] = false;
                      return /* () */0;
                    } else {
                      return 0;
                    }
                  }
                  }(a$2,b$2,result));
                  for_in(a$2, do_key_a);
                  if (result[0]) {
                    for_in(b$2, do_key_b);
                  }
                  return result[0];
                }
              } else {
                return false;
              }
            }
          }
        }
      }
    }
  }
}


/* No side effect */

/* No side effect */

function caml_sys_random_seed(param) {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}


/* No side effect */

function get$1(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  }
  return s.charCodeAt(i);
}


/* No side effect */

/* No side effect */

/* No side effect */

function failwith(s) {
  throw [
        failure,
        s
      ];
}

var Exit = create("Pervasives.Exit");

var min_int$3 = -2147483648;

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}


/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

function cmn(q, a, b, x, s, t) {
  var a$1 = ((a + q | 0) + x | 0) + t | 0;
  return ((a$1 << s) | (a$1 >>> (32 - s | 0)) | 0) + b | 0;
}

function f(a, b, c, d, x, s, t) {
  return cmn(b & c | (b ^ -1) & d, a, b, x, s, t);
}

function g(a, b, c, d, x, s, t) {
  return cmn(b & d | c & (d ^ -1), a, b, x, s, t);
}

function h(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function i(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | d ^ -1), a, b, x, s, t);
}

function cycle(x, k) {
  var a = x[0];
  var b = x[1];
  var c = x[2];
  var d = x[3];
  a = f(a, b, c, d, k[0], 7, -680876936);
  d = f(d, a, b, c, k[1], 12, -389564586);
  c = f(c, d, a, b, k[2], 17, 606105819);
  b = f(b, c, d, a, k[3], 22, -1044525330);
  a = f(a, b, c, d, k[4], 7, -176418897);
  d = f(d, a, b, c, k[5], 12, 1200080426);
  c = f(c, d, a, b, k[6], 17, -1473231341);
  b = f(b, c, d, a, k[7], 22, -45705983);
  a = f(a, b, c, d, k[8], 7, 1770035416);
  d = f(d, a, b, c, k[9], 12, -1958414417);
  c = f(c, d, a, b, k[10], 17, -42063);
  b = f(b, c, d, a, k[11], 22, -1990404162);
  a = f(a, b, c, d, k[12], 7, 1804603682);
  d = f(d, a, b, c, k[13], 12, -40341101);
  c = f(c, d, a, b, k[14], 17, -1502002290);
  b = f(b, c, d, a, k[15], 22, 1236535329);
  a = g(a, b, c, d, k[1], 5, -165796510);
  d = g(d, a, b, c, k[6], 9, -1069501632);
  c = g(c, d, a, b, k[11], 14, 643717713);
  b = g(b, c, d, a, k[0], 20, -373897302);
  a = g(a, b, c, d, k[5], 5, -701558691);
  d = g(d, a, b, c, k[10], 9, 38016083);
  c = g(c, d, a, b, k[15], 14, -660478335);
  b = g(b, c, d, a, k[4], 20, -405537848);
  a = g(a, b, c, d, k[9], 5, 568446438);
  d = g(d, a, b, c, k[14], 9, -1019803690);
  c = g(c, d, a, b, k[3], 14, -187363961);
  b = g(b, c, d, a, k[8], 20, 1163531501);
  a = g(a, b, c, d, k[13], 5, -1444681467);
  d = g(d, a, b, c, k[2], 9, -51403784);
  c = g(c, d, a, b, k[7], 14, 1735328473);
  b = g(b, c, d, a, k[12], 20, -1926607734);
  a = h(a, b, c, d, k[5], 4, -378558);
  d = h(d, a, b, c, k[8], 11, -2022574463);
  c = h(c, d, a, b, k[11], 16, 1839030562);
  b = h(b, c, d, a, k[14], 23, -35309556);
  a = h(a, b, c, d, k[1], 4, -1530992060);
  d = h(d, a, b, c, k[4], 11, 1272893353);
  c = h(c, d, a, b, k[7], 16, -155497632);
  b = h(b, c, d, a, k[10], 23, -1094730640);
  a = h(a, b, c, d, k[13], 4, 681279174);
  d = h(d, a, b, c, k[0], 11, -358537222);
  c = h(c, d, a, b, k[3], 16, -722521979);
  b = h(b, c, d, a, k[6], 23, 76029189);
  a = h(a, b, c, d, k[9], 4, -640364487);
  d = h(d, a, b, c, k[12], 11, -421815835);
  c = h(c, d, a, b, k[15], 16, 530742520);
  b = h(b, c, d, a, k[2], 23, -995338651);
  a = i(a, b, c, d, k[0], 6, -198630844);
  d = i(d, a, b, c, k[7], 10, 1126891415);
  c = i(c, d, a, b, k[14], 15, -1416354905);
  b = i(b, c, d, a, k[5], 21, -57434055);
  a = i(a, b, c, d, k[12], 6, 1700485571);
  d = i(d, a, b, c, k[3], 10, -1894986606);
  c = i(c, d, a, b, k[10], 15, -1051523);
  b = i(b, c, d, a, k[1], 21, -2054922799);
  a = i(a, b, c, d, k[8], 6, 1873313359);
  d = i(d, a, b, c, k[15], 10, -30611744);
  c = i(c, d, a, b, k[6], 15, -1560198380);
  b = i(b, c, d, a, k[13], 21, 1309151649);
  a = i(a, b, c, d, k[4], 6, -145523070);
  d = i(d, a, b, c, k[11], 10, -1120210379);
  c = i(c, d, a, b, k[2], 15, 718787259);
  b = i(b, c, d, a, k[9], 21, -343485551);
  x[0] = a + x[0] | 0;
  x[1] = b + x[1] | 0;
  x[2] = c + x[2] | 0;
  x[3] = d + x[3] | 0;
  return /* () */0;
}

var state = /* array */[
  1732584193,
  -271733879,
  -1732584194,
  271733878
];

var md5blk = /* array */[
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

function caml_md5_string(s, start, len) {
  var s$1 = s.slice(start, len);
  var n = s$1.length;
  state[0] = 1732584193;
  state[1] = -271733879;
  state[2] = -1732584194;
  state[3] = 271733878;
  for(var i = 0; i <= 15; ++i){
    md5blk[i] = 0;
  }
  var i_end = n / 64 | 0;
  for(var i$1 = 1; i$1 <= i_end; ++i$1){
    for(var j = 0; j <= 15; ++j){
      var k = ((i$1 << 6) - 64 | 0) + (j << 2) | 0;
      md5blk[j] = ((s$1.charCodeAt(k) + (s$1.charCodeAt(k + 1 | 0) << 8) | 0) + (s$1.charCodeAt(k + 2 | 0) << 16) | 0) + (s$1.charCodeAt(k + 3 | 0) << 24) | 0;
    }
    cycle(state, md5blk);
  }
  var s_tail = s$1.slice((i_end << 6));
  for(var kk = 0; kk <= 15; ++kk){
    md5blk[kk] = 0;
  }
  var i_end$1 = s_tail.length - 1 | 0;
  for(var i$2 = 0; i$2 <= i_end$1; ++i$2){
    md5blk[i$2 / 4 | 0] = md5blk[i$2 / 4 | 0] | (s_tail.charCodeAt(i$2) << (i$2 % 4 << 3));
  }
  var i$3 = i_end$1 + 1 | 0;
  md5blk[i$3 / 4 | 0] = md5blk[i$3 / 4 | 0] | (128 << (i$3 % 4 << 3));
  if (i$3 > 55) {
    cycle(state, md5blk);
    for(var i$4 = 0; i$4 <= 15; ++i$4){
      md5blk[i$4] = 0;
    }
  }
  md5blk[14] = (n << 3);
  cycle(state, md5blk);
  return String.fromCharCode(state[0] & 255, (state[0] >> 8) & 255, (state[0] >> 16) & 255, (state[0] >> 24) & 255, state[1] & 255, (state[1] >> 8) & 255, (state[1] >> 16) & 255, (state[1] >> 24) & 255, state[2] & 255, (state[2] >> 8) & 255, (state[2] >> 16) & 255, (state[2] >> 24) & 255, state[3] & 255, (state[3] >> 8) & 255, (state[3] >> 16) & 255, (state[3] >> 24) & 255);
}


/* No side effect */

function string(str) {
  return caml_md5_string(str, 0, str.length);
}


/* No side effect */

/* No side effect */

function full_init(s, seed) {
  var combine = function (accu, x) {
    return string(accu + String(x));
  };
  var extract = function (d) {
    return ((get$1(d, 0) + (get$1(d, 1) << 8) | 0) + (get$1(d, 2) << 16) | 0) + (get$1(d, 3) << 24) | 0;
  };
  var seed$1 = seed.length === 0 ? /* array */[0] : seed;
  var l = seed$1.length;
  for(var i = 0; i <= 54; ++i){
    caml_array_set(s[/* st */0], i, i);
  }
  var accu = "x";
  for(var i$1 = 0 ,i_finish = 54 + (
      55 > l ? 55 : l
    ) | 0; i$1 <= i_finish; ++i$1){
    var j = i$1 % 55;
    var k = i$1 % l;
    accu = combine(accu, caml_array_get(seed$1, k));
    caml_array_set(s[/* st */0], j, (caml_array_get(s[/* st */0], j) ^ extract(accu)) & 1073741823);
  }
  s[/* idx */1] = 0;
  return /* () */0;
}

function bits(s) {
  s[/* idx */1] = (s[/* idx */1] + 1 | 0) % 55;
  var curval = caml_array_get(s[/* st */0], s[/* idx */1]);
  var newval = caml_array_get(s[/* st */0], (s[/* idx */1] + 24 | 0) % 55) + (curval ^ (curval >>> 25) & 31) | 0;
  var newval30 = newval & 1073741823;
  caml_array_set(s[/* st */0], s[/* idx */1], newval30);
  return newval30;
}

function $$int(s, bound) {
  if (bound > 1073741823 || bound <= 0) {
    throw [
          invalid_argument,
          "Random.int"
        ];
  }
  var s$1 = s;
  var n = bound;
  while(true) {
    var r = bits(s$1);
    var v = r % n;
    if ((r - v | 0) > ((1073741823 - n | 0) + 1 | 0)) {
      continue ;
    } else {
      return v;
    }
  }
}

var $$default = /* record */[
  /* st : array */[
    987910699,
    495797812,
    364182224,
    414272206,
    318284740,
    990407751,
    383018966,
    270373319,
    840823159,
    24560019,
    536292337,
    512266505,
    189156120,
    730249596,
    143776328,
    51606627,
    140166561,
    366354223,
    1003410265,
    700563762,
    981890670,
    913149062,
    526082594,
    1021425055,
    784300257,
    667753350,
    630144451,
    949649812,
    48546892,
    415514493,
    258888527,
    511570777,
    89983870,
    283659902,
    308386020,
    242688715,
    482270760,
    865188196,
    1027664170,
    207196989,
    193777847,
    619708188,
    671350186,
    149669678,
    257044018,
    87658204,
    558145612,
    183450813,
    28133145,
    901332182,
    710253903,
    510646120,
    652377910,
    409934019,
    801085050
  ],
  /* idx */0
];

function $$int$1(bound) {
  return $$int($$default, bound);
}

function full_init$1(seed) {
  return full_init($$default, seed);
}

function self_init(param) {
  return full_init$1(caml_sys_random_seed(/* () */0));
}


/* No side effect */

function render_bbox(sprite, param) {
  var context = sprite[/* context */1];
  var match = sprite[/* params */0][/* bbox_offset */5];
  var match$1 = sprite[/* params */0][/* bbox_size */6];
  context.strokeStyle = "#FF0000";
  return context.strokeRect(param[0] + match[0], param[1] + match[1], match$1[0], match$1[1]);
}

function render(sprite, param) {
  var context = sprite[/* context */1];
  var match = sprite[/* params */0][/* src_offset */4];
  var match$1 = sprite[/* params */0][/* frame_size */3];
  var sw = match$1[0];
  var match$2 = sprite[/* params */0][/* frame_size */3];
  var sx = match[0] + sprite[/* frame */2][0] * sw;
  context.drawImage(sprite[/* img */4], sx, match[1], sw, match$1[1], param[0], param[1], match$2[0], match$2[1]);
  return /* () */0;
}

function draw_bgd(bgd, off_x) {
  render(bgd, /* tuple */[
        -off_x,
        0
      ]);
  return render(bgd, /* tuple */[
              bgd[/* params */0][/* frame_size */3][0] - off_x,
              0
            ]);
}

function clear_canvas(canvas) {
  var context = canvas.getContext("2d");
  var cwidth = canvas.width;
  var cheight = canvas.height;
  context.clearRect(0, 0, cwidth, cheight);
  return /* () */0;
}

function hud(canvas, score, coins) {
  var score_string = String(score);
  var coin_string = String(coins);
  var context = canvas.getContext("2d");
  context.font = "10px 'Press Start 2P'";
  context.fillText("Score: " + score_string, canvas.width - 140, 18);
  context.fillText("Coins: " + coin_string, 120, 18);
  return /* () */0;
}

function fps(canvas, fps_val) {
  var fps_str = String(fps_val | 0);
  var context = canvas.getContext("2d");
  context.fillText(fps_str, 10, 18);
  return /* () */0;
}

function game_win(ctx) {
  ctx.rect(0, 0, 512, 512);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  ctx.fillText("You win!", 180, 128);
  return failwith("Game over.");
}

function game_loss(ctx) {
  ctx.rect(0, 0, 512, 512);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  ctx.fillText("GAME OVER. You lose!", 60, 128);
  return failwith("Game over.");
}


/* No side effect */

function setup_sprite($staropt$star, $staropt$star$1, $staropt$star$2, img_src, max_frames, max_ticks, frame_size, src_offset) {
  var loop = $staropt$star !== undefined ? $staropt$star : true;
  var bbox_offset = $staropt$star$1 !== undefined ? $staropt$star$1 : /* tuple */[
      0,
      0
    ];
  var bbox_size = $staropt$star$2 !== undefined ? $staropt$star$2 : /* tuple */[
      0,
      0
    ];
  var bbox_size$1 = caml_equal(bbox_size, /* tuple */[
        0,
        0
      ]) ? frame_size : bbox_size;
  var img_src$1 = "./sprites/" + img_src;
  return /* record */[
          /* max_frames */max_frames,
          /* max_ticks */max_ticks,
          /* img_src */img_src$1,
          /* frame_size */frame_size,
          /* src_offset */src_offset,
          /* bbox_offset */bbox_offset,
          /* bbox_size */bbox_size$1,
          /* loop */loop
        ];
}

function make_enemy(param) {
  var dir = param[1];
  switch (param[0]) {
    case 0 : 
        return setup_sprite(undefined, /* tuple */[
                    1,
                    1
                  ], /* tuple */[
                    14,
                    14
                  ], "enemies.png", 2, 10, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    128
                  ]);
    case 1 : 
        if (dir) {
          return setup_sprite(undefined, /* tuple */[
                      1,
                      10
                    ], /* tuple */[
                      11,
                      16
                    ], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      32,
                      69
                    ]);
        } else {
          return setup_sprite(undefined, /* tuple */[
                      4,
                      10
                    ], /* tuple */[
                      11,
                      16
                    ], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      0,
                      69
                    ]);
        }
    case 2 : 
        if (dir) {
          return setup_sprite(undefined, /* tuple */[
                      1,
                      10
                    ], /* tuple */[
                      11,
                      16
                    ], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      32,
                      5
                    ]);
        } else {
          return setup_sprite(undefined, /* tuple */[
                      4,
                      10
                    ], /* tuple */[
                      11,
                      16
                    ], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      0,
                      5
                    ]);
        }
    case 3 : 
        return setup_sprite(undefined, /* tuple */[
                    2,
                    2
                  ], /* tuple */[
                    12,
                    13
                  ], "enemies.png", 4, 10, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    96
                  ]);
    case 4 : 
        return setup_sprite(undefined, /* tuple */[
                    2,
                    2
                  ], /* tuple */[
                    12,
                    13
                  ], "enemies.png", 4, 10, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    32
                  ]);
    
  }
}

function make_particle(param) {
  switch (param) {
    case 0 : 
        return setup_sprite(undefined, undefined, undefined, "enemies.png", 1, 0, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    144
                  ]);
    case 1 : 
        return setup_sprite(undefined, undefined, undefined, "chunks.png", 1, 0, /* tuple */[
                    8,
                    8
                  ], /* tuple */[
                    0,
                    0
                  ]);
    case 2 : 
        return setup_sprite(undefined, undefined, undefined, "chunks.png", 1, 0, /* tuple */[
                    8,
                    8
                  ], /* tuple */[
                    8,
                    0
                  ]);
    case 3 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    12,
                    8
                  ], /* tuple */[
                    0,
                    0
                  ]);
    case 4 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    12,
                    9
                  ], /* tuple */[
                    0,
                    9
                  ]);
    case 5 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    12,
                    9
                  ], /* tuple */[
                    0,
                    18
                  ]);
    case 6 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    12,
                    9
                  ], /* tuple */[
                    0,
                    27
                  ]);
    case 7 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    0
                  ]);
    case 8 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    9
                  ]);
    case 9 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    18
                  ]);
    case 10 : 
        return setup_sprite(undefined, undefined, undefined, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    27
                  ]);
    
  }
}

function make_type$1(typ, dir) {
  switch (typ.tag | 0) {
    case 0 : 
        var pt = typ[0];
        var spr_type = /* tuple */[
          typ[1],
          dir
        ];
        if (pt) {
          var param = spr_type;
          var typ$1 = param[0];
          if (param[1]) {
            switch (typ$1) {
              case 0 : 
                  return setup_sprite(undefined, /* tuple */[
                              1,
                              1
                            ], /* tuple */[
                              11,
                              15
                            ], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              32
                            ]);
              case 1 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              13,
                              15
                            ], "mario-small.png", 2, 10, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              48
                            ]);
              case 2 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              12,
                              15
                            ], "mario-small.png", 3, 5, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              32
                            ]);
              case 3 : 
                  return setup_sprite(undefined, /* tuple */[
                              1,
                              5
                            ], /* tuple */[
                              14,
                              10
                            ], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              64
                            ]);
              
            }
          } else {
            switch (typ$1) {
              case 0 : 
                  return setup_sprite(undefined, /* tuple */[
                              3,
                              1
                            ], /* tuple */[
                              11,
                              15
                            ], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              0
                            ]);
              case 1 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              13,
                              15
                            ], "mario-small.png", 2, 10, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              16
                            ]);
              case 2 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              12,
                              15
                            ], "mario-small.png", 3, 5, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              0
                            ]);
              case 3 : 
                  return setup_sprite(undefined, /* tuple */[
                              1,
                              5
                            ], /* tuple */[
                              14,
                              10
                            ], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              64
                            ]);
              
            }
          }
        } else {
          var param$1 = spr_type;
          var typ$2 = param$1[0];
          if (param$1[1]) {
            switch (typ$2) {
              case 0 : 
                  return setup_sprite(undefined, /* tuple */[
                              1,
                              1
                            ], /* tuple */[
                              13,
                              25
                            ], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              26
                            ], /* tuple */[
                              16,
                              69
                            ]);
              case 1 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              12,
                              25
                            ], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              26
                            ], /* tuple */[
                              48,
                              70
                            ]);
              case 2 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              13,
                              25
                            ], "mario-big.png", 4, 10, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              0,
                              101
                            ]);
              case 3 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              10
                            ], /* tuple */[
                              13,
                              17
                            ], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              32,
                              69
                            ]);
              
            }
          } else {
            switch (typ$2) {
              case 0 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              13,
                              25
                            ], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              16,
                              5
                            ]);
              case 1 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              12,
                              25
                            ], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              26
                            ], /* tuple */[
                              48,
                              6
                            ]);
              case 2 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              1
                            ], /* tuple */[
                              13,
                              25
                            ], "mario-big.png", 4, 10, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              0,
                              37
                            ]);
              case 3 : 
                  return setup_sprite(undefined, /* tuple */[
                              2,
                              10
                            ], /* tuple */[
                              13,
                              17
                            ], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              32,
                              5
                            ]);
              
            }
          }
        }
    case 1 : 
        return make_enemy(/* tuple */[
                    typ[0],
                    dir
                  ]);
    case 2 : 
        var param$2 = typ[0];
        switch (param$2) {
          case 0 : 
              return setup_sprite(undefined, /* tuple */[
                          2,
                          0
                        ], /* tuple */[
                          12,
                          16
                        ], "items.png", 1, 0, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          0,
                          0
                        ]);
          case 1 : 
              return setup_sprite(undefined, undefined, undefined, "items.png", 1, 0, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          0,
                          188
                        ]);
          case 2 : 
              return setup_sprite(undefined, undefined, undefined, "items.png", 1, 0, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          16,
                          48
                        ]);
          case 3 : 
              return setup_sprite(undefined, /* tuple */[
                          3,
                          0
                        ], /* tuple */[
                          12,
                          16
                        ], "items.png", 3, 15, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          0,
                          80
                        ]);
          
        }
    case 3 : 
        var param$3 = typ[0];
        if (typeof param$3 === "number") {
          switch (param$3) {
            case 0 : 
                return setup_sprite(undefined, undefined, undefined, "blocks.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            32
                          ]);
            case 1 : 
                return setup_sprite(undefined, undefined, undefined, "blocks.png", 5, 10, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            0
                          ]);
            case 2 : 
                return setup_sprite(undefined, undefined, undefined, "blocks.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            48
                          ]);
            case 3 : 
                return setup_sprite(undefined, undefined, undefined, "blocks.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            64
                          ]);
            case 4 : 
                return setup_sprite(undefined, undefined, undefined, "panel.png", 3, 15, /* tuple */[
                            26,
                            26
                          ], /* tuple */[
                            0,
                            0
                          ]);
            case 5 : 
                return setup_sprite(undefined, undefined, undefined, "ground.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            32
                          ]);
            
          }
        } else {
          return setup_sprite(undefined, undefined, undefined, "blocks.png", 4, 15, /* tuple */[
                      16,
                      16
                    ], /* tuple */[
                      0,
                      16
                    ]);
        }
    
  }
}

function make_from_params(params, context) {
  var img = document.createElement("img");
  img.src = params[/* img_src */2];
  return /* record */[
          /* params */params,
          /* context */context,
          /* frame : record */[/* contents */0],
          /* ticks : record */[/* contents */0],
          /* img */img
        ];
}

function make$4(spawn, dir, context) {
  var params = make_type$1(spawn, dir);
  return make_from_params(params, context);
}

function make_bgd(context) {
  var params = setup_sprite(undefined, undefined, undefined, "bgd-1.png", 1, 0, /* tuple */[
        512,
        256
      ], /* tuple */[
        0,
        0
      ]);
  return make_from_params(params, context);
}

function make_particle$1(ptyp, context) {
  var params = make_particle(ptyp);
  return make_from_params(params, context);
}

function transform_enemy(enemy_typ, spr, dir) {
  var params = make_enemy(/* tuple */[
        enemy_typ,
        dir
      ]);
  var img = document.createElement("img");
  img.src = params[/* img_src */2];
  spr[/* params */0] = params;
  spr[/* img */4] = img;
  return /* () */0;
}

function update_animation(spr) {
  var curr_ticks = spr[/* ticks */3][0];
  if (curr_ticks >= spr[/* params */0][/* max_ticks */1]) {
    spr[/* ticks */3][0] = 0;
    if (spr[/* params */0][/* loop */7]) {
      spr[/* frame */2][0] = mod_(spr[/* frame */2][0] + 1 | 0, spr[/* params */0][/* max_frames */0]);
      return /* () */0;
    } else {
      return 0;
    }
  } else {
    spr[/* ticks */3][0] = curr_ticks + 1 | 0;
    return /* () */0;
  }
}


/* No side effect */

function pair_to_xy(pair) {
  return /* record */[
          /* x */pair[0],
          /* y */pair[1]
        ];
}

function make_type$2(typ, ctx) {
  if (typ === 2 || typ === 1) {
    return /* record */[
            /* sprite */make_particle$1(typ, ctx),
            /* rot */0,
            /* lifetime */300
          ];
  } else {
    return /* record */[
            /* sprite */make_particle$1(typ, ctx),
            /* rot */0,
            /* lifetime */30
          ];
  }
}

function make$5($staropt$star, $staropt$star$1, part_type, pos, ctx) {
  var vel = $staropt$star !== undefined ? $staropt$star : /* tuple */[
      0,
      0
    ];
  var acc = $staropt$star$1 !== undefined ? $staropt$star$1 : /* tuple */[
      0,
      0
    ];
  var params = make_type$2(part_type, ctx);
  var pos$1 = pair_to_xy(pos);
  var vel$1 = pair_to_xy(vel);
  var acc$1 = pair_to_xy(acc);
  return /* record */[
          /* params */params,
          /* part_type */part_type,
          /* pos */pos$1,
          /* vel */vel$1,
          /* acc */acc$1,
          /* kill */false,
          /* life */params[/* lifetime */2]
        ];
}

function make_score(score, pos, ctx) {
  var t = score >= 801 ? (
      score >= 2001 ? (
          score !== 4000 ? (
              score !== 8000 ? /* Score100 */3 : /* Score8000 */10
            ) : /* Score4000 */9
        ) : (
          score !== 1000 ? (
              score >= 2000 ? /* Score2000 */8 : /* Score100 */3
            ) : /* Score1000 */7
        )
    ) : (
      score >= 201 ? (
          score !== 400 ? (
              score >= 800 ? /* Score800 */6 : /* Score100 */3
            ) : /* Score400 */5
        ) : (
          score !== 100 && score >= 200 ? /* Score200 */4 : /* Score100 */3
        )
    );
  return make$5(/* tuple */[
              0.5,
              -0.7
            ], undefined, t, pos, ctx);
}

function update_vel$1(part) {
  part[/* vel */3][/* x */0] = part[/* vel */3][/* x */0] + part[/* acc */4][/* x */0];
  part[/* vel */3][/* y */1] = part[/* vel */3][/* y */1] + part[/* acc */4][/* y */1];
  return /* () */0;
}

function $$process(part) {
  part[/* life */6] = part[/* life */6] - 1 | 0;
  if (part[/* life */6] === 0) {
    part[/* kill */5] = true;
  }
  update_vel$1(part);
  var part$1 = part;
  part$1[/* pos */2][/* x */0] = part$1[/* vel */3][/* x */0] + part$1[/* pos */2][/* x */0];
  part$1[/* pos */2][/* y */1] = part$1[/* vel */3][/* y */1] + part$1[/* pos */2][/* y */1];
  return /* () */0;
}


/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

function copyAuxCont(_cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var next = /* :: */[
        cellX[0],
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellX = cellX[1];
      continue ;
    } else {
      return prec;
    }
  }
}

function copyAuxWitFilter(f, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var t = cellX[1];
      var h = cellX[0];
      if (f(h)) {
        var next = /* :: */[
          h,
          /* [] */0
        ];
        prec[1] = next;
        _prec = next;
        _cellX = t;
        continue ;
      } else {
        _cellX = t;
        continue ;
      }
    } else {
      return /* () */0;
    }
  }
}

function copyAuxWithMap(_cellX, _prec, f) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var next = /* :: */[
        f(cellX[0]),
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellX = cellX[1];
      continue ;
    } else {
      return /* () */0;
    }
  }
}

function concat$4(xs, ys) {
  if (xs) {
    var cell = /* :: */[
      xs[0],
      /* [] */0
    ];
    copyAuxCont(xs[1], cell)[1] = ys;
    return cell;
  } else {
    return ys;
  }
}

function mapU(xs, f) {
  if (xs) {
    var cell = /* :: */[
      f(xs[0]),
      /* [] */0
    ];
    copyAuxWithMap(xs[1], cell, f);
    return cell;
  } else {
    return /* [] */0;
  }
}

function map$4(xs, f) {
  return mapU(xs, __1(f));
}

function forEachU(_xs, f) {
  while(true) {
    var xs = _xs;
    if (xs) {
      f(xs[0]);
      _xs = xs[1];
      continue ;
    } else {
      return /* () */0;
    }
  }
}

function forEach(xs, f) {
  return forEachU(xs, __1(f));
}

function reduceU(_l, _accu, f) {
  while(true) {
    var accu = _accu;
    var l = _l;
    if (l) {
      _accu = f(accu, l[0]);
      _l = l[1];
      continue ;
    } else {
      return accu;
    }
  }
}

function reduce(l, accu, f) {
  return reduceU(l, accu, __2(f));
}

function keepU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var t = xs[1];
      var h = xs[0];
      if (p(h)) {
        var cell = /* :: */[
          h,
          /* [] */0
        ];
        copyAuxWitFilter(p, t, cell);
        return cell;
      } else {
        _xs = t;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }
}

function keep(xs, p) {
  return keepU(xs, __1(p));
}


/* No side effect */

var id_counter = /* record */[/* contents */min_int$3];

function setup_obj($staropt$star, $staropt$star$1, param) {
  var has_gravity = $staropt$star !== undefined ? $staropt$star : true;
  var speed = $staropt$star$1 !== undefined ? $staropt$star$1 : 1;
  return /* record */[
          /* has_gravity */has_gravity,
          /* speed */speed
        ];
}

function set_vel_to_speed(obj) {
  var speed = obj[/* params */0][/* speed */1];
  var match = obj[/* dir */6];
  if (match) {
    obj[/* vel */2][/* x */0] = speed;
    return /* () */0;
  } else {
    obj[/* vel */2][/* x */0] = -speed;
    return /* () */0;
  }
}

function make_type(param) {
  switch (param.tag | 0) {
    case 0 : 
        return setup_obj(undefined, 2.8, /* () */0);
    case 1 : 
        var param$1 = param[0];
        if (param$1 >= 3) {
          return setup_obj(undefined, 3, /* () */0);
        } else {
          return setup_obj(undefined, undefined, /* () */0);
        }
    case 2 : 
        var param$2 = param[0];
        if (param$2 >= 3) {
          return setup_obj(false, undefined, /* () */0);
        } else {
          return setup_obj(undefined, undefined, /* () */0);
        }
    case 3 : 
        return setup_obj(false, undefined, /* () */0);
    
  }
}

function new_id(param) {
  id_counter[0] = id_counter[0] + 1 | 0;
  return id_counter[0];
}

function make$3($staropt$star, $staropt$star$1, spawnable, context, param) {
  var id = $staropt$star !== undefined ? valFromOption($staropt$star) : undefined;
  var dir = $staropt$star$1 !== undefined ? $staropt$star$1 : /* Left */0;
  var spr = make$4(spawnable, dir, context);
  var params = make_type(spawnable);
  var id$1 = id !== undefined ? id : new_id(/* () */0);
  var obj = /* record */[
    /* params */params,
    /* pos : record */[
      /* x */param[0],
      /* y */param[1]
    ],
    /* vel : record */[
      /* x */0.0,
      /* y */0.0
    ],
    /* id */id$1,
    /* jumping */false,
    /* grounded */false,
    /* dir */dir,
    /* invuln */0,
    /* kill */false,
    /* health */1,
    /* crouch */false,
    /* score */0
  ];
  return /* tuple */[
          spr,
          obj
        ];
}

function spawn(spawnable, context, param) {
  var match = make$3(undefined, undefined, spawnable, context, /* tuple */[
        param[0],
        param[1]
      ]);
  var obj = match[1];
  var spr = match[0];
  switch (spawnable.tag | 0) {
    case 0 : 
        return /* Player */__(0, [
                  spawnable[0],
                  spr,
                  obj
                ]);
    case 1 : 
        set_vel_to_speed(obj);
        return /* Enemy */__(1, [
                  spawnable[0],
                  spr,
                  obj
                ]);
    case 2 : 
        return /* Item */__(2, [
                  spawnable[0],
                  spr,
                  obj
                ]);
    case 3 : 
        return /* Block */__(3, [
                  spawnable[0],
                  spr,
                  obj
                ]);
    
  }
}

function get_sprite(param) {
  return param[1];
}

function get_obj(param) {
  return param[2];
}

function is_player(param) {
  if (param.tag) {
    return false;
  } else {
    return true;
  }
}

function is_enemy(param) {
  if (param.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function equals(col1, col2) {
  return col1[2][/* id */3] === col2[2][/* id */3];
}

function normalize_pos(pos, p1, p2) {
  var match = p1[/* bbox_offset */5];
  var match$1 = p2[/* bbox_offset */5];
  var match$2 = p1[/* bbox_size */6];
  var match$3 = p2[/* bbox_size */6];
  pos[/* x */0] = pos[/* x */0] - (match$3[0] + match$1[0]) + (match$2[0] + match[0]);
  pos[/* y */1] = pos[/* y */1] - (match$3[1] + match$1[1]) + (match$2[1] + match[1]);
  return /* () */0;
}

function update_player(player, keys, context) {
  var prev_jumping = player[/* jumping */4];
  var prev_dir = player[/* dir */6];
  var prev_vx = Math.abs(player[/* vel */2][/* x */0]);
  forEach(keys, (function (param) {
          var player$1 = player;
          var controls = param;
          var lr_acc = player$1[/* vel */2][/* x */0] * 0.2;
          switch (controls) {
            case 0 : 
                if (player$1[/* crouch */10]) {
                  return 0;
                } else {
                  if (player$1[/* vel */2][/* x */0] > -player$1[/* params */0][/* speed */1]) {
                    player$1[/* vel */2][/* x */0] = player$1[/* vel */2][/* x */0] - (0.4 - lr_acc);
                  }
                  player$1[/* dir */6] = /* Left */0;
                  return /* () */0;
                }
            case 1 : 
                if (player$1[/* crouch */10]) {
                  return 0;
                } else {
                  if (player$1[/* vel */2][/* x */0] < player$1[/* params */0][/* speed */1]) {
                    player$1[/* vel */2][/* x */0] = player$1[/* vel */2][/* x */0] + (0.4 + lr_acc);
                  }
                  player$1[/* dir */6] = /* Right */1;
                  return /* () */0;
                }
            case 2 : 
                if (!player$1[/* jumping */4] && player$1[/* grounded */5]) {
                  player$1[/* jumping */4] = true;
                  player$1[/* grounded */5] = false;
                  player$1[/* vel */2][/* y */1] = caml_float_max(player$1[/* vel */2][/* y */1] - (5.7 + Math.abs(player$1[/* vel */2][/* x */0]) * 0.25), -6);
                  return /* () */0;
                } else {
                  return 0;
                }
            case 3 : 
                if (!player$1[/* jumping */4] && player$1[/* grounded */5]) {
                  player$1[/* crouch */10] = true;
                  return /* () */0;
                } else {
                  return 0;
                }
            
          }
        }));
  var v = player[/* vel */2][/* x */0] * 0.9;
  var vel_damped = Math.abs(v) < 0.1 ? 0 : v;
  player[/* vel */2][/* x */0] = vel_damped;
  var pl_typ = player[/* health */9] <= 1 ? /* SmallM */1 : /* BigM */0;
  if (!prev_jumping && player[/* jumping */4]) {
    return /* tuple */[
            pl_typ,
            make$4(/* SPlayer */__(0, [
                    pl_typ,
                    /* Jumping */1
                  ]), player[/* dir */6], context)
          ];
  } else if (prev_dir !== player[/* dir */6] || prev_vx === 0 && Math.abs(player[/* vel */2][/* x */0]) > 0 && !player[/* jumping */4]) {
    return /* tuple */[
            pl_typ,
            make$4(/* SPlayer */__(0, [
                    pl_typ,
                    /* Running */2
                  ]), player[/* dir */6], context)
          ];
  } else if (prev_dir !== player[/* dir */6] && player[/* jumping */4] && prev_jumping) {
    return /* tuple */[
            pl_typ,
            make$4(/* SPlayer */__(0, [
                    pl_typ,
                    /* Jumping */1
                  ]), player[/* dir */6], context)
          ];
  } else if (player[/* vel */2][/* y */1] === 0 && player[/* crouch */10]) {
    return /* tuple */[
            pl_typ,
            make$4(/* SPlayer */__(0, [
                    pl_typ,
                    /* Crouching */3
                  ]), player[/* dir */6], context)
          ];
  } else if (player[/* vel */2][/* y */1] === 0 && player[/* vel */2][/* x */0] === 0) {
    return /* tuple */[
            pl_typ,
            make$4(/* SPlayer */__(0, [
                    pl_typ,
                    /* Standing */0
                  ]), player[/* dir */6], context)
          ];
  } else {
    return undefined;
  }
}

function update_vel(obj) {
  if (obj[/* grounded */5]) {
    obj[/* vel */2][/* y */1] = 0;
    return /* () */0;
  } else if (obj[/* params */0][/* has_gravity */0]) {
    obj[/* vel */2][/* y */1] = caml_float_min(obj[/* vel */2][/* y */1] + 0.2 + Math.abs(obj[/* vel */2][/* y */1]) * 0.01, 4.5);
    return /* () */0;
  } else {
    return 0;
  }
}

function update_pos(obj) {
  obj[/* pos */1][/* x */0] = obj[/* vel */2][/* x */0] + obj[/* pos */1][/* x */0];
  if (obj[/* params */0][/* has_gravity */0]) {
    obj[/* pos */1][/* y */1] = obj[/* vel */2][/* y */1] + obj[/* pos */1][/* y */1];
    return /* () */0;
  } else {
    return 0;
  }
}

function process_obj(obj, mapy) {
  update_vel(obj);
  update_pos(obj);
  if (obj[/* pos */1][/* y */1] > mapy) {
    obj[/* kill */8] = true;
    return /* () */0;
  } else {
    return 0;
  }
}

function collide_block($staropt$star, dir, obj) {
  var check_x = $staropt$star !== undefined ? $staropt$star : true;
  if (dir !== 1) {
    if (dir !== 0) {
      if (check_x) {
        obj[/* vel */2][/* x */0] = 0;
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      obj[/* vel */2][/* y */1] = -0.001;
      return /* () */0;
    }
  } else {
    obj[/* vel */2][/* y */1] = 0;
    obj[/* grounded */5] = true;
    obj[/* jumping */4] = false;
    return /* () */0;
  }
}

function reverse_left_right(obj) {
  obj[/* vel */2][/* x */0] = -obj[/* vel */2][/* x */0];
  obj[/* dir */6] = obj[/* dir */6] ? /* Left */0 : /* Right */1;
  return /* () */0;
}

function evolve_enemy(player_dir, typ, spr, obj, context) {
  var exit$$1 = 0;
  switch (typ) {
    case 0 : 
        obj[/* kill */8] = true;
        return undefined;
    case 1 : 
        var match = make$3(undefined, obj[/* dir */6], /* SEnemy */__(1, [/* GKoopaShell */3]), context, /* tuple */[
              obj[/* pos */1][/* x */0],
              obj[/* pos */1][/* y */1]
            ]);
        var new_obj = match[1];
        var new_spr = match[0];
        normalize_pos(new_obj[/* pos */1], spr[/* params */0], new_spr[/* params */0]);
        return /* Enemy */__(1, [
                  /* GKoopaShell */3,
                  new_spr,
                  new_obj
                ]);
    case 2 : 
        var match$1 = make$3(undefined, obj[/* dir */6], /* SEnemy */__(1, [/* RKoopaShell */4]), context, /* tuple */[
              obj[/* pos */1][/* x */0],
              obj[/* pos */1][/* y */1]
            ]);
        var new_obj$1 = match$1[1];
        var new_spr$1 = match$1[0];
        normalize_pos(new_obj$1[/* pos */1], spr[/* params */0], new_spr$1[/* params */0]);
        return /* Enemy */__(1, [
                  /* RKoopaShell */4,
                  new_spr$1,
                  new_obj$1
                ]);
    case 3 : 
    case 4 : 
        exit$$1 = 1;
        break;
    
  }
  if (exit$$1 === 1) {
    obj[/* dir */6] = player_dir;
    if (obj[/* vel */2][/* x */0] !== 0) {
      obj[/* vel */2][/* x */0] = 0;
    } else {
      set_vel_to_speed(obj);
    }
    return undefined;
  }
  
}

function rev_dir(o, t, s) {
  reverse_left_right(o);
  var old_params = s[/* params */0];
  transform_enemy(t, s, o[/* dir */6]);
  return normalize_pos(o[/* pos */1], old_params, s[/* params */0]);
}

function dec_health(obj) {
  var health = obj[/* health */9] - 1 | 0;
  if (health === 0) {
    obj[/* kill */8] = true;
    return /* () */0;
  } else if (obj[/* invuln */7] === 0) {
    obj[/* health */9] = health;
    return /* () */0;
  } else {
    return 0;
  }
}

function evolve_block(obj, context) {
  dec_health(obj);
  var match = make$3(undefined, undefined, /* SBlock */__(3, [/* QBlockUsed */0]), context, /* tuple */[
        obj[/* pos */1][/* x */0],
        obj[/* pos */1][/* y */1]
      ]);
  return /* Block */__(3, [
            /* QBlockUsed */0,
            match[0],
            match[1]
          ]);
}

function spawn_above(player_dir, obj, typ, context) {
  var item = spawn(/* SItem */__(2, [typ]), context, /* tuple */[
        obj[/* pos */1][/* x */0],
        obj[/* pos */1][/* y */1]
      ]);
  var item_obj = item[2];
  item_obj[/* pos */1][/* y */1] = item_obj[/* pos */1][/* y */1] - item[1][/* params */0][/* frame_size */3][1];
  item_obj[/* dir */6] = player_dir ? /* Left */0 : /* Right */1;
  set_vel_to_speed(item_obj);
  return item;
}

function get_aabb(obj) {
  var spr = obj[1][/* params */0];
  var obj$1 = obj[2];
  var match = spr[/* bbox_offset */5];
  var box = obj$1[/* pos */1][/* x */0] + match[0];
  var boy = obj$1[/* pos */1][/* y */1] + match[1];
  var match$1 = spr[/* bbox_size */6];
  var sy = match$1[1];
  var sx = match$1[0];
  return /* record */[
          /* center : record */[
            /* x */box + sx / 2,
            /* y */boy + sy / 2
          ],
          /* half : record */[
            /* x */sx / 2,
            /* y */sy / 2
          ]
        ];
}

function col_bypass(c1, c2) {
  var o1 = c1[2];
  var o2 = c2[2];
  var ctypes;
  switch (c1.tag | 0) {
    case 0 : 
        ctypes = c2.tag === 1 ? c1[2][/* invuln */7] > 0 : false;
        break;
    case 1 : 
        ctypes = c2.tag === 2 ? true : false;
        break;
    case 2 : 
        switch (c2.tag | 0) {
          case 1 : 
          case 2 : 
              ctypes = true;
              break;
          case 0 : 
          case 3 : 
              ctypes = false;
              break;
          
        }
        break;
    case 3 : 
        ctypes = false;
        break;
    
  }
  if (o1[/* kill */8] || o2[/* kill */8]) {
    return true;
  } else {
    return ctypes;
  }
}

function check_collision(c1, c2) {
  var b1 = get_aabb(c1);
  var b2 = get_aabb(c2);
  var o1 = c1[2];
  if (col_bypass(c1, c2)) {
    return undefined;
  } else {
    var vx = b1[/* center */0][/* x */0] - b2[/* center */0][/* x */0];
    var vy = b1[/* center */0][/* y */1] - b2[/* center */0][/* y */1];
    var hwidths = b1[/* half */1][/* x */0] + b2[/* half */1][/* x */0];
    var hheights = b1[/* half */1][/* y */1] + b2[/* half */1][/* y */1];
    if (Math.abs(vx) < hwidths && Math.abs(vy) < hheights) {
      var ox = hwidths - Math.abs(vx);
      var oy = hheights - Math.abs(vy);
      if (ox >= oy) {
        if (vy > 0) {
          o1[/* pos */1][/* y */1] = o1[/* pos */1][/* y */1] + oy;
          return /* North */0;
        } else {
          o1[/* pos */1][/* y */1] = o1[/* pos */1][/* y */1] - oy;
          return /* South */1;
        }
      } else if (vx > 0) {
        o1[/* pos */1][/* x */0] = o1[/* pos */1][/* x */0] + ox;
        return /* West */3;
      } else {
        o1[/* pos */1][/* x */0] = o1[/* pos */1][/* x */0] - ox;
        return /* East */2;
      }
    } else {
      return undefined;
    }
  }
}

function kill(collid, ctx) {
  switch (collid.tag | 0) {
    case 0 : 
        return /* [] */0;
    case 1 : 
        var o = collid[2];
        var pos_000 = o[/* pos */1][/* x */0];
        var pos_001 = o[/* pos */1][/* y */1];
        var pos = /* tuple */[
          pos_000,
          pos_001
        ];
        var score = o[/* score */11] > 0 ? /* :: */[
            make_score(o[/* score */11], pos, ctx),
            /* [] */0
          ] : /* [] */0;
        var remains = collid[0] !== 0 ? /* [] */0 : /* :: */[
            make$5(undefined, undefined, /* GoombaSquish */0, pos, ctx),
            /* [] */0
          ];
        return $at(score, remains);
    case 2 : 
        var o$1 = collid[2];
        if (collid[0] !== 0) {
          return /* [] */0;
        } else {
          return /* :: */[
                  make_score(o$1[/* score */11], /* tuple */[
                        o$1[/* pos */1][/* x */0],
                        o$1[/* pos */1][/* y */1]
                      ], ctx),
                  /* [] */0
                ];
        }
    case 3 : 
        var o$2 = collid[2];
        var t = collid[0];
        if (typeof t === "number" && t === 1) {
          var pos_000$1 = o$2[/* pos */1][/* x */0];
          var pos_001$1 = o$2[/* pos */1][/* y */1];
          var pos$1 = /* tuple */[
            pos_000$1,
            pos_001$1
          ];
          var p1 = make$5(/* tuple */[
                -5,
                -5
              ], /* tuple */[
                0,
                0.2
              ], /* BrickChunkL */1, pos$1, ctx);
          var p2 = make$5(/* tuple */[
                -3,
                -4
              ], /* tuple */[
                0,
                0.2
              ], /* BrickChunkL */1, pos$1, ctx);
          var p3 = make$5(/* tuple */[
                3,
                -4
              ], /* tuple */[
                0,
                0.2
              ], /* BrickChunkR */2, pos$1, ctx);
          var p4 = make$5(/* tuple */[
                5,
                -5
              ], /* tuple */[
                0,
                0.2
              ], /* BrickChunkR */2, pos$1, ctx);
          return /* :: */[
                  p1,
                  /* :: */[
                    p2,
                    /* :: */[
                      p3,
                      /* :: */[
                        p4,
                        /* [] */0
                      ]
                    ]
                  ]
                ];
        } else {
          return /* [] */0;
        }
    
  }
}

var invuln = 60;

var dampen_jump = 4;


/* No side effect */

function make$8(param, param$1) {
  return /* record */[
          /* pos : record */[
            /* x */0,
            /* y */0
          ],
          /* v_dim : record */[
            /* x */param[0],
            /* y */param[1]
          ],
          /* m_dim : record */[
            /* x */param$1[0],
            /* y */param$1[1]
          ]
        ];
}

function calc_viewport_point(cc, vc, mc) {
  var vc_half = vc / 2;
  return caml_float_min(caml_float_max(cc - vc_half, 0), caml_float_min(mc - vc, Math.abs(cc - vc_half)));
}

function in_viewport(v, pos) {
  var v_min_x = v[/* pos */0][/* x */0] - 32;
  var v_max_x = v[/* pos */0][/* x */0] + v[/* v_dim */1][/* x */0];
  var v_min_y = v[/* pos */0][/* y */1] - 32;
  var v_max_y = v[/* pos */0][/* y */1] + v[/* v_dim */1][/* y */1];
  var x = pos[/* x */0];
  var y = pos[/* y */1];
  if (x >= v_min_x && x <= v_max_x && y >= v_min_y) {
    return y <= v_max_y;
  } else {
    return false;
  }
}

function out_of_viewport_below(v, y) {
  var v_max_y = v[/* pos */0][/* y */1] + v[/* v_dim */1][/* y */1];
  return y >= v_max_y;
}

function coord_to_viewport(viewport, coord) {
  return /* record */[
          /* x */coord[/* x */0] - viewport[/* pos */0][/* x */0],
          /* y */coord[/* y */1] - viewport[/* pos */0][/* y */1]
        ];
}

function update(vpt, ctr) {
  var new_x = calc_viewport_point(ctr[/* x */0], vpt[/* v_dim */1][/* x */0], vpt[/* m_dim */2][/* x */0]);
  var new_y = calc_viewport_point(ctr[/* y */1], vpt[/* v_dim */1][/* y */1], vpt[/* m_dim */2][/* y */1]);
  var pos = /* record */[
    /* x */new_x,
    /* y */new_y
  ];
  return /* record */[
          /* pos */pos,
          /* v_dim */vpt[/* v_dim */1],
          /* m_dim */vpt[/* m_dim */2]
        ];
}


/* No side effect */

function nop_loop(param) {
  return /* () */0;
}

var pressed_keys = /* record */[
  /* left */false,
  /* right */false,
  /* up */false,
  /* down */false,
  /* bbox */0,
  /* game_end */false,
  /* loop */nop_loop
];

function setup_mainloop(loop) {
  pressed_keys[/* loop */6] = loop;
  return /* () */0;
}

var collid_objs = /* record */[/* contents : [] */0];

var particles = /* record */[/* contents : [] */0];

var last_time = /* record */[/* contents */0];

function calc_fps(t0, t1) {
  var delta = (t1 - t0) / 1000;
  return 1 / delta;
}

function update_score(state, i) {
  state[/* score */4] = state[/* score */4] + i | 0;
  return /* () */0;
}

function process_collision(dir, c1, c2, state) {
  var context = state[/* ctx */1];
  var exit$$1 = 0;
  var s1;
  var o1;
  var typ;
  var s2;
  var o2;
  var s1$1;
  var o1$1;
  var t2;
  var s2$1;
  var o2$1;
  var o1$2;
  var t2$1;
  var o2$2;
  switch (c1.tag | 0) {
    case 0 : 
        var o1$3 = c1[2];
        var s1$2 = c1[1];
        switch (c2.tag | 0) {
          case 0 : 
              return /* tuple */[
                      undefined,
                      undefined
                    ];
          case 1 : 
              var o2$3 = c2[2];
              var s2$2 = c2[1];
              var typ$1 = c2[0];
              if (dir !== 1) {
                s1$1 = s1$2;
                o1$1 = o1$3;
                t2 = typ$1;
                s2$1 = s2$2;
                o2$1 = o2$3;
                exit$$1 = 2;
              } else {
                s1 = s1$2;
                o1 = o1$3;
                typ = typ$1;
                s2 = s2$2;
                o2 = o2$3;
                exit$$1 = 1;
              }
              break;
          case 2 : 
              o1$2 = o1$3;
              t2$1 = c2[0];
              o2$2 = c2[2];
              exit$$1 = 3;
              break;
          case 3 : 
              var o2$4 = c2[2];
              var t = c2[0];
              if (dir !== 0) {
                var exit$1 = 0;
                if (typeof t === "number" && t === 4) {
                  pressed_keys[/* game_end */5] = true;
                  game_win(state[/* ctx */1]);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  exit$1 = 4;
                }
                if (exit$1 === 4) {
                  if (dir !== 1) {
                    collide_block(undefined, dir, o1$3);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    state[/* multiplier */6] = 1;
                    collide_block(undefined, dir, o1$3);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  }
                }
                
              } else if (typeof t === "number") {
                if (t !== 1) {
                  if (t !== 4) {
                    collide_block(undefined, dir, o1$3);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    pressed_keys[/* game_end */5] = true;
                    game_win(state[/* ctx */1]);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  }
                } else if (c1[0] === /* BigM */0) {
                  collide_block(undefined, dir, o1$3);
                  dec_health(o2$4);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  collide_block(undefined, dir, o1$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                }
              } else {
                var updated_block = evolve_block(o2$4, context);
                var spawned_item = spawn_above(o1$3[/* dir */6], o2$4, t[0], context);
                collide_block(undefined, dir, o1$3);
                return /* tuple */[
                        spawned_item,
                        updated_block
                      ];
              }
              break;
          
        }
        break;
    case 1 : 
        var o1$4 = c1[2];
        var s1$3 = c1[1];
        var t1 = c1[0];
        switch (c2.tag | 0) {
          case 0 : 
              var o1$5 = c2[2];
              var s1$4 = c2[1];
              if (dir !== 0) {
                s1$1 = s1$4;
                o1$1 = o1$5;
                t2 = t1;
                s2$1 = s1$3;
                o2$1 = o1$4;
                exit$$1 = 2;
              } else {
                s1 = s1$4;
                o1 = o1$5;
                typ = t1;
                s2 = s1$3;
                o2 = o1$4;
                exit$$1 = 1;
              }
              break;
          case 1 : 
              var t1$1 = t1;
              var s1$5 = s1$3;
              var o1$6 = o1$4;
              var t2$2 = c2[0];
              var s2$3 = c2[1];
              var o2$5 = c2[2];
              var dir$1 = dir;
              var exit$2 = 0;
              if (t1$1 !== 3) {
                if (t1$1 >= 4) {
                  if (t2$2 >= 3) {
                    dec_health(o1$6);
                    dec_health(o2$5);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    exit$2 = 1;
                  }
                } else if (t2$2 >= 3) {
                  if (o2$5[/* vel */2][/* x */0] === 0) {
                    rev_dir(o1$6, t1$1, s1$5);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    dec_health(o1$6);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  }
                } else if (dir$1 >= 2) {
                  rev_dir(o1$6, t1$1, s1$5);
                  rev_dir(o2$5, t2$2, s2$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                }
              } else if (t2$2 >= 3) {
                dec_health(o1$6);
                dec_health(o2$5);
                return /* tuple */[
                        undefined,
                        undefined
                      ];
              } else {
                exit$2 = 1;
              }
              if (exit$2 === 1) {
                if (o1$6[/* vel */2][/* x */0] === 0) {
                  rev_dir(o2$5, t2$2, s2$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  dec_health(o2$5);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                }
              }
              case 2 : 
              return /* tuple */[
                      undefined,
                      undefined
                    ];
          case 3 : 
              var o2$6 = c2[2];
              var t2$3 = c2[0];
              if (dir >= 2) {
                if (t1 >= 3) {
                  if (typeof t2$3 === "number") {
                    if (t2$3 !== 1) {
                      rev_dir(o1$4, t1, s1$3);
                      return /* tuple */[
                              undefined,
                              undefined
                            ];
                    } else {
                      dec_health(o2$6);
                      reverse_left_right(o1$4);
                      return /* tuple */[
                              undefined,
                              undefined
                            ];
                    }
                  } else {
                    var updated_block$1 = evolve_block(o2$6, context);
                    var spawned_item$1 = spawn_above(o1$4[/* dir */6], o2$6, t2$3[0], context);
                    rev_dir(o1$4, t1, s1$3);
                    return /* tuple */[
                            updated_block$1,
                            spawned_item$1
                          ];
                  }
                } else {
                  rev_dir(o1$4, t1, s1$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                }
              } else {
                collide_block(undefined, dir, o1$4);
                return /* tuple */[
                        undefined,
                        undefined
                      ];
              }
          
        }
        break;
    case 2 : 
        var o2$7 = c1[2];
        switch (c2.tag | 0) {
          case 0 : 
              o1$2 = c2[2];
              t2$1 = c1[0];
              o2$2 = o2$7;
              exit$$1 = 3;
              break;
          case 1 : 
          case 2 : 
              return /* tuple */[
                      undefined,
                      undefined
                    ];
          case 3 : 
              if (dir >= 2) {
                reverse_left_right(o2$7);
                return /* tuple */[
                        undefined,
                        undefined
                      ];
              } else {
                collide_block(undefined, dir, o2$7);
                return /* tuple */[
                        undefined,
                        undefined
                      ];
              }
          
        }
        break;
    case 3 : 
        return /* tuple */[
                undefined,
                undefined
              ];
    
  }
  switch (exit$$1) {
    case 1 : 
        var o1$7 = o1;
        var typ$2 = typ;
        var s2$4 = s2;
        var o2$8 = o2;
        var state$1 = state;
        var context$1 = context;
        o1$7[/* invuln */7] = 10;
        o1$7[/* jumping */4] = false;
        o1$7[/* grounded */5] = true;
        if (typ$2 >= 3) {
          var r2 = evolve_enemy(o1$7[/* dir */6], typ$2, s2$4, o2$8, context$1);
          o1$7[/* vel */2][/* y */1] = -dampen_jump;
          o1$7[/* pos */1][/* y */1] = o1$7[/* pos */1][/* y */1] - 5;
          return /* tuple */[
                  undefined,
                  r2
                ];
        } else {
          dec_health(o2$8);
          o1$7[/* vel */2][/* y */1] = -dampen_jump;
          if (state$1[/* multiplier */6] === 8) {
            update_score(state$1, 800);
            o2$8[/* score */11] = 800;
            return /* tuple */[
                    undefined,
                    evolve_enemy(o1$7[/* dir */6], typ$2, s2$4, o2$8, context$1)
                  ];
          } else {
            var score = imul(100, state$1[/* multiplier */6]);
            update_score(state$1, score);
            o2$8[/* score */11] = score;
            state$1[/* multiplier */6] = (state$1[/* multiplier */6] << 1);
            return /* tuple */[
                    undefined,
                    evolve_enemy(o1$7[/* dir */6], typ$2, s2$4, o2$8, context$1)
                  ];
          }
        }
    case 2 : 
        var o1$8 = o1$1;
        var t2$4 = t2;
        var s2$5 = s2$1;
        var o2$9 = o2$1;
        var context$2 = context;
        if (t2$4 >= 3) {
          var r2$1 = o2$9[/* vel */2][/* x */0] === 0 ? evolve_enemy(o1$8[/* dir */6], t2$4, s2$5, o2$9, context$2) : (dec_health(o1$8), o1$8[/* invuln */7] = invuln, undefined);
          return /* tuple */[
                  undefined,
                  r2$1
                ];
        } else {
          dec_health(o1$8);
          o1$8[/* invuln */7] = invuln;
          return /* tuple */[
                  undefined,
                  undefined
                ];
        }
    case 3 : 
        if (t2$1 !== 0) {
          if (t2$1 >= 3) {
            state[/* coins */5] = state[/* coins */5] + 1 | 0;
            dec_health(o2$2);
            update_score(state, 100);
            return /* tuple */[
                    undefined,
                    undefined
                  ];
          } else {
            dec_health(o2$2);
            update_score(state, 1000);
            return /* tuple */[
                    undefined,
                    undefined
                  ];
          }
        } else {
          dec_health(o2$2);
          if (o1$2[/* health */9] !== 2) {
            o1$2[/* health */9] = o1$2[/* health */9] + 1 | 0;
          }
          o1$2[/* vel */2][/* x */0] = 0;
          o1$2[/* vel */2][/* y */1] = 0;
          update_score(state, 1000);
          o2$2[/* score */11] = 1000;
          return /* tuple */[
                  undefined,
                  undefined
                ];
        }
    
  }
}

function broad_phase(collid, all_collids, state) {
  var obj = get_obj(collid);
  return keep(all_collids, (function (_c) {
                if (in_viewport(state[/* vpt */2], obj[/* pos */1]) || is_player(collid)) {
                  return true;
                } else {
                  return out_of_viewport_below(state[/* vpt */2], obj[/* pos */1][/* y */1]);
                }
              }));
}

function check_collisions(collid, all_collids, state) {
  if (collid.tag === 3) {
    return /* [] */0;
  } else {
    var broad = broad_phase(collid, all_collids, state);
    var c = collid;
    var cs = broad;
    var state$1 = state;
    var c$1 = c;
    var _cs = cs;
    var state$2 = state$1;
    var _acc = /* [] */0;
    while(true) {
      var acc = _acc;
      var cs$1 = _cs;
      if (cs$1) {
        var h = cs$1[0];
        var c_obj = get_obj(c$1);
        var new_objs;
        if (equals(c$1, h)) {
          new_objs = /* tuple */[
            undefined,
            undefined
          ];
        } else {
          var match = check_collision(c$1, h);
          new_objs = match !== undefined && get_obj(h)[/* id */3] !== c_obj[/* id */3] ? process_collision(match, c$1, h, state$2) : /* tuple */[
              undefined,
              undefined
            ];
        }
        var match$1 = new_objs[0];
        var acc$1;
        if (match$1 !== undefined) {
          var match$2 = new_objs[1];
          var o = match$1;
          acc$1 = match$2 !== undefined ? /* :: */[
              o,
              /* :: */[
                match$2,
                acc
              ]
            ] : /* :: */[
              o,
              acc
            ];
        } else {
          var match$3 = new_objs[1];
          acc$1 = match$3 !== undefined ? /* :: */[
              match$3,
              acc
            ] : acc;
        }
        _acc = acc$1;
        _cs = cs$1[1];
        continue ;
      } else {
        return acc;
      }
    }
  }
}

function update_collidable(state, collid, all_collids) {
  var obj = get_obj(collid);
  var spr = get_sprite(collid);
  obj[/* invuln */7] = obj[/* invuln */7] > 0 ? obj[/* invuln */7] - 1 | 0 : 0;
  var viewport_filter = in_viewport(state[/* vpt */2], obj[/* pos */1]) || is_player(collid) || out_of_viewport_below(state[/* vpt */2], obj[/* pos */1][/* y */1]);
  if (!obj[/* kill */8] && viewport_filter) {
    obj[/* grounded */5] = false;
    process_obj(obj, state[/* map */3]);
    var evolved = check_collisions(collid, all_collids, state);
    var vpt_adj_xy = coord_to_viewport(state[/* vpt */2], obj[/* pos */1]);
    render(spr, /* tuple */[
          vpt_adj_xy[/* x */0],
          vpt_adj_xy[/* y */1]
        ]);
    if (pressed_keys[/* bbox */4] === 1) {
      render_bbox(spr, /* tuple */[
            vpt_adj_xy[/* x */0],
            vpt_adj_xy[/* y */1]
          ]);
    }
    if (obj[/* vel */2][/* x */0] !== 0 || !is_enemy(collid)) {
      update_animation(spr);
    }
    return evolved;
  } else {
    return /* [] */0;
  }
}

function translate_keys(param) {
  var ctrls_000 = /* tuple */[
    pressed_keys[/* left */0],
    /* CLeft */0
  ];
  var ctrls_001 = /* :: */[
    /* tuple */[
      pressed_keys[/* right */1],
      /* CRight */1
    ],
    /* :: */[
      /* tuple */[
        pressed_keys[/* up */2],
        /* CUp */2
      ],
      /* :: */[
        /* tuple */[
          pressed_keys[/* down */3],
          /* CDown */3
        ],
        /* [] */0
      ]
    ]
  ];
  var ctrls = /* :: */[
    ctrls_000,
    ctrls_001
  ];
  return reduce(ctrls, /* [] */0, (function (a, x) {
                if (x[0]) {
                  return /* :: */[
                          x[1],
                          a
                        ];
                } else {
                  return a;
                }
              }));
}

function run_update_collid(state, collid, all_collids) {
  if (collid.tag) {
    var obj = get_obj(collid);
    var evolved = update_collidable(state, collid, all_collids);
    if (!obj[/* kill */8]) {
      collid_objs[0] = /* :: */[
        collid,
        $at(collid_objs[0], evolved)
      ];
    }
    var new_parts = obj[/* kill */8] ? kill(collid, state[/* ctx */1]) : /* [] */0;
    particles[0] = $at(particles[0], new_parts);
    return collid;
  } else {
    var o = collid[2];
    var keys = translate_keys(/* () */0);
    o[/* crouch */10] = false;
    var match = update_player(o, keys, state[/* ctx */1]);
    var player;
    if (match !== undefined) {
      var match$1 = match;
      var new_spr = match$1[1];
      normalize_pos(o[/* pos */1], collid[1][/* params */0], new_spr[/* params */0]);
      player = /* Player */__(0, [
          match$1[0],
          new_spr,
          o
        ]);
    } else {
      player = collid;
    }
    var evolved$1 = update_collidable(state, player, all_collids);
    collid_objs[0] = $at(collid_objs[0], evolved$1);
    return player;
  }
}

function update_loop(canvas, param, map_dim) {
  var player = param[0];
  var ctx = canvas.getContext("2d");
  var cwidth = canvas.width / 1;
  var cheight = canvas.height / 1;
  var viewport = make$8(/* tuple */[
        cwidth,
        cheight
      ], map_dim);
  var state = /* record */[
    /* bgd */make_bgd(ctx),
    /* ctx */ctx,
    /* vpt */update(viewport, get_obj(player)[/* pos */1]),
    /* map */map_dim[1],
    /* score */0,
    /* coins */0,
    /* multiplier */1,
    /* game_over */false
  ];
  state[/* ctx */1].scale(1, 1);
  var update_helper = function (time, state, player, objs, parts) {
    if (state[/* game_over */7] === true) {
      return game_win(state[/* ctx */1]);
    } else {
      collid_objs[0] = /* [] */0;
      particles[0] = /* [] */0;
      var fps$$1 = calc_fps(last_time[0], time);
      last_time[0] = time;
      clear_canvas(canvas);
      var vpos_x_int = state[/* vpt */2][/* pos */0][/* x */0] / 5 | 0;
      var bgd_width = state[/* bgd */0][/* params */0][/* frame_size */3][0] | 0;
      draw_bgd(state[/* bgd */0], mod_(vpos_x_int, bgd_width));
      var player$1 = run_update_collid(state, player, objs);
      if (get_obj(player$1)[/* kill */8] === true) {
        pressed_keys[/* game_end */5] = true;
        game_loss(state[/* ctx */1]);
        return /* () */0;
      } else {
        var state$1 = /* record */[
          /* bgd */state[/* bgd */0],
          /* ctx */state[/* ctx */1],
          /* vpt */update(state[/* vpt */2], get_obj(player$1)[/* pos */1]),
          /* map */state[/* map */3],
          /* score */state[/* score */4],
          /* coins */state[/* coins */5],
          /* multiplier */state[/* multiplier */6],
          /* game_over */state[/* game_over */7]
        ];
        forEach(objs, (function (obj) {
                run_update_collid(state$1, obj, objs);
                return /* () */0;
              }));
        forEach(parts, (function (part) {
                var state$2 = state$1;
                var part$1 = part;
                $$process(part$1);
                var x = part$1[/* pos */2][/* x */0] - state$2[/* vpt */2][/* pos */0][/* x */0];
                var y = part$1[/* pos */2][/* y */1] - state$2[/* vpt */2][/* pos */0][/* y */1];
                render(part$1[/* params */0][/* sprite */0], /* tuple */[
                      x,
                      y
                    ]);
                if (part$1[/* kill */5]) {
                  return 0;
                } else {
                  particles[0] = /* :: */[
                    part$1,
                    particles[0]
                  ];
                  return /* () */0;
                }
              }));
        fps(canvas, fps$$1);
        hud(canvas, state$1[/* score */4], state$1[/* coins */5]);
        requestAnimationFrame((function (t) {
                return update_helper(t, state$1, player$1, collid_objs[0], particles[0]);
              }));
        return /* () */0;
      }
    }
  };
  return update_helper(0, state, player, param[1], /* [] */0);
}

function keydown(evt) {
  var match = evt.keyCode;
  if (match >= 41) {
    switch (match) {
      case 65 : 
          pressed_keys[/* left */0] = true;
          break;
      case 66 : 
          pressed_keys[/* bbox */4] = (pressed_keys[/* bbox */4] + 1 | 0) % 2;
          break;
      case 68 : 
          pressed_keys[/* right */1] = true;
          break;
      case 83 : 
          pressed_keys[/* down */3] = true;
          break;
      case 67 : 
      case 69 : 
      case 70 : 
      case 71 : 
      case 72 : 
      case 73 : 
      case 74 : 
      case 75 : 
      case 76 : 
      case 77 : 
      case 78 : 
      case 79 : 
      case 80 : 
      case 81 : 
      case 82 : 
      case 84 : 
      case 85 : 
      case 86 : 
          break;
      case 87 : 
          pressed_keys[/* up */2] = true;
          break;
      default:
        
    }
  } else if (match >= 32) {
    switch (match - 32 | 0) {
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
          break;
      case 5 : 
          pressed_keys[/* left */0] = true;
          break;
      case 0 : 
      case 6 : 
          pressed_keys[/* up */2] = true;
          break;
      case 7 : 
          pressed_keys[/* right */1] = true;
          break;
      case 8 : 
          pressed_keys[/* down */3] = true;
          break;
      
    }
  }
  return true;
}

function keyup(evt) {
  var match = evt.keyCode;
  var exit$$1 = 0;
  if (match >= 65) {
    if (match !== 114) {
      if (match < 88) {
        switch (match - 65 | 0) {
          case 0 : 
              pressed_keys[/* left */0] = false;
              break;
          case 3 : 
              pressed_keys[/* right */1] = false;
              break;
          case 17 : 
              exit$$1 = 1;
              break;
          case 18 : 
              pressed_keys[/* down */3] = false;
              break;
          case 1 : 
          case 2 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 8 : 
          case 9 : 
          case 10 : 
          case 11 : 
          case 12 : 
          case 13 : 
          case 14 : 
          case 15 : 
          case 16 : 
          case 19 : 
          case 20 : 
          case 21 : 
              break;
          case 22 : 
              pressed_keys[/* up */2] = false;
              break;
          
        }
      }
      
    } else {
      exit$$1 = 1;
    }
  } else {
    switch (match) {
      case 33 : 
      case 34 : 
      case 35 : 
      case 36 : 
          break;
      case 37 : 
          pressed_keys[/* left */0] = false;
          break;
      case 32 : 
      case 38 : 
          pressed_keys[/* up */2] = false;
          break;
      case 39 : 
          pressed_keys[/* right */1] = false;
          break;
      case 40 : 
          pressed_keys[/* down */3] = false;
          break;
      default:
        
    }
  }
  if (exit$$1 === 1) {
    if (pressed_keys[/* game_end */5]) {
      _1(pressed_keys[/* loop */6], /* () */0);
      pressed_keys[/* game_end */5] = false;
    }
    
  }
  return true;
}


/* No side effect */

function mem_loc(checkloc, _loclist) {
  while(true) {
    var loclist = _loclist;
    if (loclist) {
      if (caml_equal(checkloc, loclist[0][1])) {
        return true;
      } else {
        _loclist = loclist[1];
        continue ;
      }
    } else {
      return false;
    }
  }
}

function convert_list(lst) {
  if (lst) {
    var h = lst[0];
    return $at(/* :: */[
                /* tuple */[
                  h[0],
                  /* tuple */[
                    h[1][0] * 16,
                    h[1][1] * 16
                  ]
                ],
                /* [] */0
              ], convert_list(lst[1]));
  } else {
    return /* [] */0;
  }
}

function choose_enemy_typ(typ) {
  switch (typ) {
    case 0 : 
        return /* RKoopa */2;
    case 1 : 
        return /* GKoopa */1;
    case 2 : 
        return /* Goomba */0;
    default:
      return failwith("Shouldn't reach here");
  }
}

function choose_sblock_typ(typ) {
  switch (typ) {
    case 0 : 
        return /* Brick */1;
    case 1 : 
        return /* UnBBlock */2;
    case 2 : 
        return /* Cloud */3;
    case 3 : 
        return /* QBlock */[/* Mushroom */0];
    case 4 : 
        return /* Ground */5;
    default:
      return failwith("Shouldn't reach here");
  }
}

function avoid_overlap(_lst, currentLst) {
  while(true) {
    var lst = _lst;
    if (lst) {
      var t = lst[1];
      var h = lst[0];
      if (mem_loc(h[1], currentLst)) {
        _lst = t;
        continue ;
      } else {
        return $at(/* :: */[
                    h,
                    /* [] */0
                  ], avoid_overlap(t, currentLst));
      }
    } else {
      return /* [] */0;
    }
  }
}

function trim_edges(_lst, blockw, blockh) {
  while(true) {
    var lst = _lst;
    if (lst) {
      var t = lst[1];
      var h = lst[0];
      var cx = h[1][0];
      var cy = h[1][1];
      var pixx = blockw * 16;
      var pixy = blockh * 16;
      if (cx < 128 || pixx - cx < 528 || cy === 0 || pixy - cy < 48) {
        _lst = t;
        continue ;
      } else {
        return $at(/* :: */[
                    h,
                    /* [] */0
                  ], trim_edges(t, blockw, blockh));
      }
    } else {
      return /* [] */0;
    }
  }
}

function generate_clouds(cbx, cby, typ, num) {
  if (num === 0) {
    return /* [] */0;
  } else {
    return $at(/* :: */[
                /* tuple */[
                  typ,
                  /* tuple */[
                    cbx,
                    cby
                  ]
                ],
                /* [] */0
              ], generate_clouds(cbx + 1, cby, typ, num - 1 | 0));
  }
}

function generate_coins(_block_coord) {
  while(true) {
    var block_coord = _block_coord;
    var place_coin = $$int$1(2);
    if (block_coord) {
      var t = block_coord[1];
      var h = block_coord[0];
      if (place_coin === 0) {
        var xc = h[1][0];
        var yc = h[1][1];
        return $at(/* :: */[
                    /* tuple */[
                      0,
                      /* tuple */[
                        xc,
                        yc - 16
                      ]
                    ],
                    /* [] */0
                  ], generate_coins(t));
      } else {
        _block_coord = t;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }
}

function choose_block_pattern(blockw, blockh, cbx, cby, prob) {
  if (cbx > blockw || cby > blockh) {
    return /* [] */0;
  } else {
    var block_typ = $$int$1(4);
    var stair_typ = $$int$1(2);
    var life_block_chance = $$int$1(5);
    var middle_block = life_block_chance === 0 ? 3 : stair_typ;
    switch (prob) {
      case 0 : 
          if (blockw - cbx > 2) {
            return /* :: */[
                    /* tuple */[
                      stair_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* :: */[
                      /* tuple */[
                        middle_block,
                        /* tuple */[
                          cbx + 1,
                          cby
                        ]
                      ],
                      /* :: */[
                        /* tuple */[
                          stair_typ,
                          /* tuple */[
                            cbx + 2,
                            cby
                          ]
                        ],
                        /* [] */0
                      ]
                    ]
                  ];
          } else if (blockw - cbx > 1) {
            return /* :: */[
                    /* tuple */[
                      block_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* :: */[
                      /* tuple */[
                        block_typ,
                        /* tuple */[
                          cbx + 1,
                          cby
                        ]
                      ],
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    /* tuple */[
                      block_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* [] */0
                  ];
          }
      case 1 : 
          var num_clouds = $$int$1(5) + 5 | 0;
          if (cby < 5) {
            return generate_clouds(cbx, cby, 2, num_clouds);
          } else {
            return /* [] */0;
          }
      case 2 : 
          if (blockh - cby === 1) {
            var cbx$1 = cbx;
            var cby$1 = cby;
            var typ = stair_typ;
            var four_000 = /* tuple */[
              typ,
              /* tuple */[
                cbx$1,
                cby$1
              ]
            ];
            var four_001 = /* :: */[
              /* tuple */[
                typ,
                /* tuple */[
                  cbx$1 + 1,
                  cby$1
                ]
              ],
              /* :: */[
                /* tuple */[
                  typ,
                  /* tuple */[
                    cbx$1 + 2,
                    cby$1
                  ]
                ],
                /* :: */[
                  /* tuple */[
                    typ,
                    /* tuple */[
                      cbx$1 + 3,
                      cby$1
                    ]
                  ],
                  /* [] */0
                ]
              ]
            ];
            var four = /* :: */[
              four_000,
              four_001
            ];
            var three_000 = /* tuple */[
              typ,
              /* tuple */[
                cbx$1 + 1,
                cby$1 - 1
              ]
            ];
            var three_001 = /* :: */[
              /* tuple */[
                typ,
                /* tuple */[
                  cbx$1 + 2,
                  cby$1 - 1
                ]
              ],
              /* :: */[
                /* tuple */[
                  typ,
                  /* tuple */[
                    cbx$1 + 3,
                    cby$1 - 1
                  ]
                ],
                /* [] */0
              ]
            ];
            var three = /* :: */[
              three_000,
              three_001
            ];
            var two_000 = /* tuple */[
              typ,
              /* tuple */[
                cbx$1 + 2,
                cby$1 - 2
              ]
            ];
            var two_001 = /* :: */[
              /* tuple */[
                typ,
                /* tuple */[
                  cbx$1 + 3,
                  cby$1 - 2
                ]
              ],
              /* [] */0
            ];
            var two = /* :: */[
              two_000,
              two_001
            ];
            var one_000 = /* tuple */[
              typ,
              /* tuple */[
                cbx$1 + 3,
                cby$1 - 3
              ]
            ];
            var one = /* :: */[
              one_000,
              /* [] */0
            ];
            return $at(four, $at(three, $at(two, one)));
          } else {
            return /* [] */0;
          }
      case 3 : 
          if (stair_typ === 0 && blockh - cby > 3) {
            var cbx$2 = cbx;
            var cby$2 = cby;
            var typ$1 = stair_typ;
            var three_000$1 = /* tuple */[
              typ$1,
              /* tuple */[
                cbx$2,
                cby$2
              ]
            ];
            var three_001$1 = /* :: */[
              /* tuple */[
                typ$1,
                /* tuple */[
                  cbx$2 + 1,
                  cby$2
                ]
              ],
              /* :: */[
                /* tuple */[
                  typ$1,
                  /* tuple */[
                    cbx$2 + 2,
                    cby$2
                  ]
                ],
                /* [] */0
              ]
            ];
            var three$1 = /* :: */[
              three_000$1,
              three_001$1
            ];
            var two_000$1 = /* tuple */[
              typ$1,
              /* tuple */[
                cbx$2 + 2,
                cby$2 + 1
              ]
            ];
            var two_001$1 = /* :: */[
              /* tuple */[
                typ$1,
                /* tuple */[
                  cbx$2 + 3,
                  cby$2 + 1
                ]
              ],
              /* [] */0
            ];
            var two$1 = /* :: */[
              two_000$1,
              two_001$1
            ];
            var one_000$1 = /* tuple */[
              typ$1,
              /* tuple */[
                cbx$2 + 5,
                cby$2 + 2
              ]
            ];
            var one_001 = /* :: */[
              /* tuple */[
                typ$1,
                /* tuple */[
                  cbx$2 + 6,
                  cby$2 + 2
                ]
              ],
              /* [] */0
            ];
            var one$1 = /* :: */[
              one_000$1,
              one_001
            ];
            return $at(three$1, $at(two$1, one$1));
          } else if (blockh - cby > 2) {
            var cbx$3 = cbx;
            var cby$3 = cby;
            var typ$2 = stair_typ;
            var one_000$2 = /* tuple */[
              typ$2,
              /* tuple */[
                cbx$3,
                cby$3
              ]
            ];
            var one_001$1 = /* :: */[
              /* tuple */[
                typ$2,
                /* tuple */[
                  cbx$3 + 1,
                  cby$3
                ]
              ],
              /* [] */0
            ];
            var one$2 = /* :: */[
              one_000$2,
              one_001$1
            ];
            var two_000$2 = /* tuple */[
              typ$2,
              /* tuple */[
                cbx$3 + 3,
                cby$3 - 1
              ]
            ];
            var two_001$2 = /* :: */[
              /* tuple */[
                typ$2,
                /* tuple */[
                  cbx$3 + 4,
                  cby$3 - 1
                ]
              ],
              /* [] */0
            ];
            var two$2 = /* :: */[
              two_000$2,
              two_001$2
            ];
            var three_000$2 = /* tuple */[
              typ$2,
              /* tuple */[
                cbx$3 + 4,
                cby$3 - 2
              ]
            ];
            var three_001$2 = /* :: */[
              /* tuple */[
                typ$2,
                /* tuple */[
                  cbx$3 + 5,
                  cby$3 - 2
                ]
              ],
              /* :: */[
                /* tuple */[
                  typ$2,
                  /* tuple */[
                    cbx$3 + 6,
                    cby$3 - 2
                  ]
                ],
                /* [] */0
              ]
            ];
            var three$2 = /* :: */[
              three_000$2,
              three_001$2
            ];
            return $at(one$2, $at(two$2, three$2));
          } else {
            return /* :: */[
                    /* tuple */[
                      stair_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* [] */0
                  ];
          }
      case 4 : 
          if (cby + 3 - blockh === 2) {
            return /* :: */[
                    /* tuple */[
                      stair_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* [] */0
                  ];
          } else if (cby + 3 - blockh === 1) {
            return /* :: */[
                    /* tuple */[
                      stair_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* :: */[
                      /* tuple */[
                        stair_typ,
                        /* tuple */[
                          cbx,
                          cby + 1
                        ]
                      ],
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    /* tuple */[
                      stair_typ,
                      /* tuple */[
                        cbx,
                        cby
                      ]
                    ],
                    /* :: */[
                      /* tuple */[
                        stair_typ,
                        /* tuple */[
                          cbx,
                          cby + 1
                        ]
                      ],
                      /* :: */[
                        /* tuple */[
                          stair_typ,
                          /* tuple */[
                            cbx,
                            cby + 2
                          ]
                        ],
                        /* [] */0
                      ]
                    ]
                  ];
          }
      case 5 : 
          return /* :: */[
                  /* tuple */[
                    3,
                    /* tuple */[
                      cbx,
                      cby
                    ]
                  ],
                  /* [] */0
                ];
      default:
        return failwith("Shouldn't reach here");
    }
  }
}

function generate_enemies(blockw, blockh, _cbx, _cby, acc) {
  while(true) {
    var cby = _cby;
    var cbx = _cbx;
    if (cbx > blockw - 32) {
      return /* [] */0;
    } else if (cby > blockh - 1 || cbx < 15) {
      _cby = 0;
      _cbx = cbx + 1;
      continue ;
    } else if (mem_loc(/* tuple */[
            cbx,
            cby
          ], acc) || cby === 0) {
      _cby = cby + 1;
      continue ;
    } else {
      var prob = $$int$1(30);
      if (prob < 3 && blockh - 1 === cby) {
        var enemy_000 = /* tuple */[
          prob,
          /* tuple */[
            cbx * 16,
            cby * 16
          ]
        ];
        var enemy = /* :: */[
          enemy_000,
          /* [] */0
        ];
        return $at(enemy, generate_enemies(blockw, blockh, cbx, cby + 1, acc));
      } else {
        _cby = cby + 1;
        continue ;
      }
    }
  }
}

function generate_block_enemies(_block_coord) {
  while(true) {
    var block_coord = _block_coord;
    var place_enemy = $$int$1(20);
    var enemy_typ = $$int$1(3);
    if (block_coord) {
      var t = block_coord[1];
      var h = block_coord[0];
      if (place_enemy === 0) {
        var xc = h[1][0];
        var yc = h[1][1];
        return $at(/* :: */[
                    /* tuple */[
                      enemy_typ,
                      /* tuple */[
                        xc,
                        yc - 16
                      ]
                    ],
                    /* [] */0
                  ], generate_block_enemies(t));
      } else {
        _block_coord = t;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }
}

function generate_block_locs(blockw, blockh, _cbx, _cby, _acc) {
  while(true) {
    var acc = _acc;
    var cby = _cby;
    var cbx = _cbx;
    if (blockw - cbx < 33) {
      return acc;
    } else if (cby > blockh - 1) {
      _cby = 0;
      _cbx = cbx + 1;
      continue ;
    } else if (mem_loc(/* tuple */[
            cbx,
            cby
          ], acc) || cby === 0) {
      _cby = cby + 1;
      continue ;
    } else {
      var prob = $$int$1(100);
      if (prob < 5) {
        var newacc = choose_block_pattern(blockw, blockh, cbx, cby, prob);
        var undup_lst = avoid_overlap(newacc, acc);
        var called_acc = $at(acc, undup_lst);
        _acc = called_acc;
        _cby = cby + 1;
        continue ;
      } else {
        _cby = cby + 1;
        continue ;
      }
    }
  }
}

function generate_panel(context, blockw, blockh) {
  return spawn(/* SBlock */__(3, [/* Panel */4]), context, /* tuple */[
              blockw * 16 - 256,
              blockh * 16 * 2 / 3
            ]);
}

function generate_ground(blockw, blockh, _inc, _acc) {
  while(true) {
    var acc = _acc;
    var inc = _inc;
    if (inc > blockw) {
      return acc;
    } else if (inc > 10) {
      var skip = $$int$1(10);
      var newacc = $at(acc, /* :: */[
            /* tuple */[
              4,
              /* tuple */[
                inc * 16,
                blockh * 16
              ]
            ],
            /* [] */0
          ]);
      if (skip === 7 && blockw - inc > 32) {
        _inc = inc + 1;
        continue ;
      } else {
        _acc = newacc;
        _inc = inc + 1;
        continue ;
      }
    } else {
      var newacc$1 = $at(acc, /* :: */[
            /* tuple */[
              4,
              /* tuple */[
                inc * 16,
                blockh * 16
              ]
            ],
            /* [] */0
          ]);
      _acc = newacc$1;
      _inc = inc + 1;
      continue ;
    }
  }
}

function convert_to_block_obj(lst, context) {
  if (lst) {
    var h = lst[0];
    var sblock_typ = choose_sblock_typ(h[0]);
    var ob = spawn(/* SBlock */__(3, [sblock_typ]), context, h[1]);
    return $at(/* :: */[
                ob,
                /* [] */0
              ], convert_to_block_obj(lst[1], context));
  } else {
    return /* [] */0;
  }
}

function convert_to_enemy_obj(lst, context) {
  if (lst) {
    var h = lst[0];
    var senemy_typ = choose_enemy_typ(h[0]);
    var ob = spawn(/* SEnemy */__(1, [senemy_typ]), context, h[1]);
    return $at(/* :: */[
                ob,
                /* [] */0
              ], convert_to_enemy_obj(lst[1], context));
  } else {
    return /* [] */0;
  }
}

function convert_to_coin_obj(lst, context) {
  if (lst) {
    var ob = spawn(/* SItem */__(2, [/* Coin */3]), context, lst[0][1]);
    return $at(/* :: */[
                ob,
                /* [] */0
              ], convert_to_coin_obj(lst[1], context));
  } else {
    return /* [] */0;
  }
}

function generate_helper(blockw, blockh, _cx, _cy, context) {
  var block_locs = generate_block_locs(blockw, blockh, 0, 0, /* [] */0);
  var converted_block_locs = trim_edges(convert_list(block_locs), blockw, blockh);
  var obj_converted_block_locs = convert_to_block_obj(converted_block_locs, context);
  var ground_blocks = generate_ground(blockw, blockh, 0, /* [] */0);
  var obj_converted_ground_blocks = convert_to_block_obj(ground_blocks, context);
  var block_locations = $at(block_locs, ground_blocks);
  var all_blocks = $at(obj_converted_block_locs, obj_converted_ground_blocks);
  var enemy_locs = generate_enemies(blockw, blockh, 0, 0, block_locations);
  var obj_converted_enemies = convert_to_enemy_obj(enemy_locs, context);
  var coin_locs = generate_coins(converted_block_locs);
  var undup_coin_locs = trim_edges(avoid_overlap(coin_locs, converted_block_locs), blockw, blockh);
  var converted_block_coin_locs = $at(converted_block_locs, coin_locs);
  var enemy_block_locs = generate_block_enemies(converted_block_locs);
  var undup_enemy_block_locs = avoid_overlap(enemy_block_locs, converted_block_coin_locs);
  var obj_enemy_blocks = convert_to_enemy_obj(undup_enemy_block_locs, context);
  var coin_objects = convert_to_coin_obj(undup_coin_locs, context);
  var obj_panel = generate_panel(context, blockw, blockh);
  return $at(all_blocks, $at(obj_converted_enemies, $at(coin_objects, $at(obj_enemy_blocks, /* :: */[
                          obj_panel,
                          /* [] */0
                        ]))));
}

function generate(w, h, context) {
  var blockw = w / 16;
  var blockh = h / 16 - 1;
  var collide_list = generate_helper(blockw, blockh, 0, 0, context);
  var player = spawn(/* SPlayer */__(0, [
          /* SmallM */1,
          /* Standing */0
        ]), context, /* tuple */[
        100,
        224
      ]);
  return /* tuple */[
          player,
          collide_list
        ];
}

function init$4(param) {
  return self_init(/* () */0);
}


/* No side effect */

var loadCount = /* record */[/* contents */0];

function inc_counter(param) {
  loadCount[0] = loadCount[0] + 1 | 0;
  if (loadCount[0] === 4) {
    self_init(/* () */0);
    var canvas_id = "canvas";
    var match = document.getElementById(canvas_id);
    var canvas = match !== null ? match : (console.log("cant find canvas canvas \n"), failwith("fail"));
    var context = canvas.getContext("2d");
    document.addEventListener("keydown", keydown, true);
    document.addEventListener("keyup", keyup, true);
    init$4(/* () */0);
    var mainloop = function (param) {
      return update_loop(canvas, generate(2400, 256, context), /* tuple */[
                  2400,
                  256
                ]);
    };
    setup_mainloop(mainloop);
    return mainloop(/* () */0);
  } else {
    return /* () */0;
  }
}

function preload(param) {
  return map$4(/* :: */[
              "blocks.png",
              /* :: */[
                "items.png",
                /* :: */[
                  "enemies.png",
                  /* :: */[
                    "mario-small.png",
                    /* [] */0
                  ]
                ]
              ]
            ], (function (img_src) {
                var img_src$1 = "sprites/" + img_src;
                var img = document.createElement("img");
                img.src = img_src$1;
                img.addEventListener("load", (function (_ev) {
                        inc_counter(/* () */0);
                        return true;
                      }), true);
                return /* () */0;
              }));
}

window.onload = (function (param) {
    preload(/* () */0);
    return true;
  });


/*  Not a pure module */

}());
