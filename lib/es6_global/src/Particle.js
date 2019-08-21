

import * as Sprite from "./Sprite.js";

function pair_to_xy(pair) {
  return /* record */[
          /* x */pair[0],
          /* y */pair[1]
        ];
}

function make_type(typ, ctx) {
  if (typ === 2 || typ === 1) {
    return /* record */[
            /* sprite */Sprite.make_particle(typ, ctx),
            /* rot */0,
            /* lifetime */300
          ];
  } else {
    return /* record */[
            /* sprite */Sprite.make_particle(typ, ctx),
            /* rot */0,
            /* lifetime */30
          ];
  }
}

function make($staropt$star, $staropt$star$1, part_type, pos, ctx) {
  var vel = $staropt$star !== undefined ? $staropt$star : /* tuple */[
      0,
      0
    ];
  var acc = $staropt$star$1 !== undefined ? $staropt$star$1 : /* tuple */[
      0,
      0
    ];
  var params = make_type(part_type, ctx);
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
  return make(/* tuple */[
              0.5,
              -0.7
            ], undefined, t, pos, ctx);
}

function update_vel(part) {
  part[/* vel */3][/* x */0] = part[/* vel */3][/* x */0] + part[/* acc */4][/* x */0];
  part[/* vel */3][/* y */1] = part[/* vel */3][/* y */1] + part[/* acc */4][/* y */1];
  return /* () */0;
}

function $$process(part) {
  part[/* life */6] = part[/* life */6] - 1 | 0;
  if (part[/* life */6] === 0) {
    part[/* kill */5] = true;
  }
  update_vel(part);
  var part$1 = part;
  part$1[/* pos */2][/* x */0] = part$1[/* vel */3][/* x */0] + part$1[/* pos */2][/* x */0];
  part$1[/* pos */2][/* y */1] = part$1[/* vel */3][/* y */1] + part$1[/* pos */2][/* y */1];
  return /* () */0;
}

export {
  make ,
  make_score ,
  $$process ,
  
}
/* No side effect */
