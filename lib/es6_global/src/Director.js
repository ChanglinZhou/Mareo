

import * as Draw from "./Draw.js";
import * as Block from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/block.js";
import * as Curry from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/curry.js";
import * as $$Object from "./Object.js";
import * as Sprite from "./Sprite.js";
import * as Particle from "./Particle.js";
import * as Viewport from "./Viewport.js";
import * as Belt_List from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/belt_List.js";
import * as Caml_int32 from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/caml_int32.js";
import * as Pervasives from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/pervasives.js";

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
  var exit = 0;
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
                exit = 2;
              } else {
                s1 = s1$2;
                o1 = o1$3;
                typ = typ$1;
                s2 = s2$2;
                o2 = o2$3;
                exit = 1;
              }
              break;
          case 2 : 
              o1$2 = o1$3;
              t2$1 = c2[0];
              o2$2 = c2[2];
              exit = 3;
              break;
          case 3 : 
              var o2$4 = c2[2];
              var t = c2[0];
              if (dir !== 0) {
                var exit$1 = 0;
                if (typeof t === "number" && t === 4) {
                  pressed_keys[/* game_end */5] = true;
                  Draw.game_win(state[/* ctx */1]);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  exit$1 = 4;
                }
                if (exit$1 === 4) {
                  if (dir !== 1) {
                    $$Object.collide_block(undefined, dir, o1$3);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    state[/* multiplier */6] = 1;
                    $$Object.collide_block(undefined, dir, o1$3);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  }
                }
                
              } else if (typeof t === "number") {
                if (t !== 1) {
                  if (t !== 4) {
                    $$Object.collide_block(undefined, dir, o1$3);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    pressed_keys[/* game_end */5] = true;
                    Draw.game_win(state[/* ctx */1]);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  }
                } else if (c1[0] === /* BigM */0) {
                  $$Object.collide_block(undefined, dir, o1$3);
                  $$Object.dec_health(o2$4);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  $$Object.collide_block(undefined, dir, o1$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                }
              } else {
                var updated_block = $$Object.evolve_block(o2$4, context);
                var spawned_item = $$Object.spawn_above(o1$3[/* dir */6], o2$4, t[0], context);
                $$Object.collide_block(undefined, dir, o1$3);
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
                exit = 2;
              } else {
                s1 = s1$4;
                o1 = o1$5;
                typ = t1;
                s2 = s1$3;
                o2 = o1$4;
                exit = 1;
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
                    $$Object.dec_health(o1$6);
                    $$Object.dec_health(o2$5);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    exit$2 = 1;
                  }
                } else if (t2$2 >= 3) {
                  if (o2$5[/* vel */2][/* x */0] === 0) {
                    $$Object.rev_dir(o1$6, t1$1, s1$5);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  } else {
                    $$Object.dec_health(o1$6);
                    return /* tuple */[
                            undefined,
                            undefined
                          ];
                  }
                } else if (dir$1 >= 2) {
                  $$Object.rev_dir(o1$6, t1$1, s1$5);
                  $$Object.rev_dir(o2$5, t2$2, s2$3);
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
                $$Object.dec_health(o1$6);
                $$Object.dec_health(o2$5);
                return /* tuple */[
                        undefined,
                        undefined
                      ];
              } else {
                exit$2 = 1;
              }
              if (exit$2 === 1) {
                if (o1$6[/* vel */2][/* x */0] === 0) {
                  $$Object.rev_dir(o2$5, t2$2, s2$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                } else {
                  $$Object.dec_health(o2$5);
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
                      $$Object.rev_dir(o1$4, t1, s1$3);
                      return /* tuple */[
                              undefined,
                              undefined
                            ];
                    } else {
                      $$Object.dec_health(o2$6);
                      $$Object.reverse_left_right(o1$4);
                      return /* tuple */[
                              undefined,
                              undefined
                            ];
                    }
                  } else {
                    var updated_block$1 = $$Object.evolve_block(o2$6, context);
                    var spawned_item$1 = $$Object.spawn_above(o1$4[/* dir */6], o2$6, t2$3[0], context);
                    $$Object.rev_dir(o1$4, t1, s1$3);
                    return /* tuple */[
                            updated_block$1,
                            spawned_item$1
                          ];
                  }
                } else {
                  $$Object.rev_dir(o1$4, t1, s1$3);
                  return /* tuple */[
                          undefined,
                          undefined
                        ];
                }
              } else {
                $$Object.collide_block(undefined, dir, o1$4);
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
              exit = 3;
              break;
          case 1 : 
          case 2 : 
              return /* tuple */[
                      undefined,
                      undefined
                    ];
          case 3 : 
              if (dir >= 2) {
                $$Object.reverse_left_right(o2$7);
                return /* tuple */[
                        undefined,
                        undefined
                      ];
              } else {
                $$Object.collide_block(undefined, dir, o2$7);
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
  switch (exit) {
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
          var r2 = $$Object.evolve_enemy(o1$7[/* dir */6], typ$2, s2$4, o2$8, context$1);
          o1$7[/* vel */2][/* y */1] = -$$Object.dampen_jump;
          o1$7[/* pos */1][/* y */1] = o1$7[/* pos */1][/* y */1] - 5;
          return /* tuple */[
                  undefined,
                  r2
                ];
        } else {
          $$Object.dec_health(o2$8);
          o1$7[/* vel */2][/* y */1] = -$$Object.dampen_jump;
          if (state$1[/* multiplier */6] === 8) {
            update_score(state$1, 800);
            o2$8[/* score */11] = 800;
            return /* tuple */[
                    undefined,
                    $$Object.evolve_enemy(o1$7[/* dir */6], typ$2, s2$4, o2$8, context$1)
                  ];
          } else {
            var score = Caml_int32.imul(100, state$1[/* multiplier */6]);
            update_score(state$1, score);
            o2$8[/* score */11] = score;
            state$1[/* multiplier */6] = (state$1[/* multiplier */6] << 1);
            return /* tuple */[
                    undefined,
                    $$Object.evolve_enemy(o1$7[/* dir */6], typ$2, s2$4, o2$8, context$1)
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
          var r2$1 = o2$9[/* vel */2][/* x */0] === 0 ? $$Object.evolve_enemy(o1$8[/* dir */6], t2$4, s2$5, o2$9, context$2) : ($$Object.dec_health(o1$8), o1$8[/* invuln */7] = $$Object.invuln, undefined);
          return /* tuple */[
                  undefined,
                  r2$1
                ];
        } else {
          $$Object.dec_health(o1$8);
          o1$8[/* invuln */7] = $$Object.invuln;
          return /* tuple */[
                  undefined,
                  undefined
                ];
        }
    case 3 : 
        if (t2$1 !== 0) {
          if (t2$1 >= 3) {
            state[/* coins */5] = state[/* coins */5] + 1 | 0;
            $$Object.dec_health(o2$2);
            update_score(state, 100);
            return /* tuple */[
                    undefined,
                    undefined
                  ];
          } else {
            $$Object.dec_health(o2$2);
            update_score(state, 1000);
            return /* tuple */[
                    undefined,
                    undefined
                  ];
          }
        } else {
          $$Object.dec_health(o2$2);
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
  var obj = $$Object.get_obj(collid);
  return Belt_List.keep(all_collids, (function (_c) {
                if (Viewport.in_viewport(state[/* vpt */2], obj[/* pos */1]) || $$Object.is_player(collid)) {
                  return true;
                } else {
                  return Viewport.out_of_viewport_below(state[/* vpt */2], obj[/* pos */1][/* y */1]);
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
        var c_obj = $$Object.get_obj(c$1);
        var new_objs;
        if ($$Object.equals(c$1, h)) {
          new_objs = /* tuple */[
            undefined,
            undefined
          ];
        } else {
          var match = $$Object.check_collision(c$1, h);
          new_objs = match !== undefined && $$Object.get_obj(h)[/* id */3] !== c_obj[/* id */3] ? process_collision(match, c$1, h, state$2) : /* tuple */[
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
    };
  }
}

function update_collidable(state, collid, all_collids) {
  var obj = $$Object.get_obj(collid);
  var spr = $$Object.get_sprite(collid);
  obj[/* invuln */7] = obj[/* invuln */7] > 0 ? obj[/* invuln */7] - 1 | 0 : 0;
  var viewport_filter = Viewport.in_viewport(state[/* vpt */2], obj[/* pos */1]) || $$Object.is_player(collid) || Viewport.out_of_viewport_below(state[/* vpt */2], obj[/* pos */1][/* y */1]);
  if (!obj[/* kill */8] && viewport_filter) {
    obj[/* grounded */5] = false;
    $$Object.process_obj(obj, state[/* map */3]);
    var evolved = check_collisions(collid, all_collids, state);
    var vpt_adj_xy = Viewport.coord_to_viewport(state[/* vpt */2], obj[/* pos */1]);
    Draw.render(spr, /* tuple */[
          vpt_adj_xy[/* x */0],
          vpt_adj_xy[/* y */1]
        ]);
    if (pressed_keys[/* bbox */4] === 1) {
      Draw.render_bbox(spr, /* tuple */[
            vpt_adj_xy[/* x */0],
            vpt_adj_xy[/* y */1]
          ]);
    }
    if (obj[/* vel */2][/* x */0] !== 0 || !$$Object.is_enemy(collid)) {
      Sprite.update_animation(spr);
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
  return Belt_List.reduce(ctrls, /* [] */0, (function (a, x) {
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
    var obj = $$Object.get_obj(collid);
    var evolved = update_collidable(state, collid, all_collids);
    if (!obj[/* kill */8]) {
      collid_objs[0] = /* :: */[
        collid,
        Pervasives.$at(collid_objs[0], evolved)
      ];
    }
    var new_parts = obj[/* kill */8] ? $$Object.kill(collid, state[/* ctx */1]) : /* [] */0;
    particles[0] = Pervasives.$at(particles[0], new_parts);
    return collid;
  } else {
    var o = collid[2];
    var keys = translate_keys(/* () */0);
    o[/* crouch */10] = false;
    var match = $$Object.update_player(o, keys, state[/* ctx */1]);
    var player;
    if (match !== undefined) {
      var match$1 = match;
      var new_spr = match$1[1];
      $$Object.normalize_pos(o[/* pos */1], collid[1][/* params */0], new_spr[/* params */0]);
      player = /* Player */Block.__(0, [
          match$1[0],
          new_spr,
          o
        ]);
    } else {
      player = collid;
    }
    var evolved$1 = update_collidable(state, player, all_collids);
    collid_objs[0] = Pervasives.$at(collid_objs[0], evolved$1);
    return player;
  }
}

function update_loop(canvas, param, map_dim) {
  var player = param[0];
  var ctx = canvas.getContext("2d");
  var cwidth = canvas.width / 1;
  var cheight = canvas.height / 1;
  var viewport = Viewport.make(/* tuple */[
        cwidth,
        cheight
      ], map_dim);
  var state = /* record */[
    /* bgd */Sprite.make_bgd(ctx),
    /* ctx */ctx,
    /* vpt */Viewport.update(viewport, $$Object.get_obj(player)[/* pos */1]),
    /* map */map_dim[1],
    /* score */0,
    /* coins */0,
    /* multiplier */1,
    /* game_over */false
  ];
  state[/* ctx */1].scale(1, 1);
  var update_helper = function (time, state, player, objs, parts) {
    if (state[/* game_over */7] === true) {
      return Draw.game_win(state[/* ctx */1]);
    } else {
      collid_objs[0] = /* [] */0;
      particles[0] = /* [] */0;
      var fps = calc_fps(last_time[0], time);
      last_time[0] = time;
      Draw.clear_canvas(canvas);
      var vpos_x_int = state[/* vpt */2][/* pos */0][/* x */0] / 5 | 0;
      var bgd_width = state[/* bgd */0][/* params */0][/* frame_size */3][0] | 0;
      Draw.draw_bgd(state[/* bgd */0], Caml_int32.mod_(vpos_x_int, bgd_width));
      var player$1 = run_update_collid(state, player, objs);
      if ($$Object.get_obj(player$1)[/* kill */8] === true) {
        Draw.game_loss(state[/* ctx */1]);
        pressed_keys[/* game_end */5] = true;
        return /* () */0;
      } else {
        var state$1 = /* record */[
          /* bgd */state[/* bgd */0],
          /* ctx */state[/* ctx */1],
          /* vpt */Viewport.update(state[/* vpt */2], $$Object.get_obj(player$1)[/* pos */1]),
          /* map */state[/* map */3],
          /* score */state[/* score */4],
          /* coins */state[/* coins */5],
          /* multiplier */state[/* multiplier */6],
          /* game_over */state[/* game_over */7]
        ];
        Belt_List.forEach(objs, (function (obj) {
                run_update_collid(state$1, obj, objs);
                return /* () */0;
              }));
        Belt_List.forEach(parts, (function (part) {
                var state$2 = state$1;
                var part$1 = part;
                Particle.$$process(part$1);
                var x = part$1[/* pos */2][/* x */0] - state$2[/* vpt */2][/* pos */0][/* x */0];
                var y = part$1[/* pos */2][/* y */1] - state$2[/* vpt */2][/* pos */0][/* y */1];
                Draw.render(part$1[/* params */0][/* sprite */0], /* tuple */[
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
        Draw.fps(canvas, fps);
        Draw.hud(canvas, state$1[/* score */4], state$1[/* coins */5]);
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
  var exit = 0;
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
              exit = 1;
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
      exit = 1;
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
  if (exit === 1) {
    if (pressed_keys[/* game_end */5]) {
      Curry._1(pressed_keys[/* loop */6], /* () */0);
      pressed_keys[/* game_end */5] = false;
    }
    
  }
  return true;
}

export {
  update_loop ,
  keydown ,
  keyup ,
  setup_mainloop ,
  
}
/* No side effect */
