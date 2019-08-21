

import * as Caml_primitive from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/caml_primitive.js";

function make(param, param$1) {
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
  return Caml_primitive.caml_float_min(Caml_primitive.caml_float_max(cc - vc_half, 0), Caml_primitive.caml_float_min(mc - vc, Math.abs(cc - vc_half)));
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

export {
  make ,
  calc_viewport_point ,
  in_viewport ,
  out_of_viewport_below ,
  coord_to_viewport ,
  update ,
  
}
/* No side effect */
