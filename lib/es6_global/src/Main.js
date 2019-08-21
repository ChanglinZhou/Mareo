

import * as Random from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/random.js";
import * as Director from "./Director.js";
import * as Belt_List from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/belt_List.js";
import * as Pervasives from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/pervasives.js";
import * as Procedural_generator from "./Procedural_generator.js";

var loadCount = /* record */[/* contents */0];

function inc_counter(param) {
  loadCount[0] = loadCount[0] + 1 | 0;
  if (loadCount[0] === 4) {
    Random.self_init(/* () */0);
    var canvas_id = "canvas";
    var match = document.getElementById(canvas_id);
    var canvas = match !== null ? match : (console.log("cant find canvas canvas \n"), Pervasives.failwith("fail"));
    var context = canvas.getContext("2d");
    document.addEventListener("keydown", Director.keydown, true);
    document.addEventListener("keyup", Director.keyup, true);
    Procedural_generator.init(/* () */0);
    var mainloop = function (param) {
      return Director.update_loop(canvas, Procedural_generator.generate(2400, 256, context), /* tuple */[
                  2400,
                  256
                ]);
    };
    Director.setup_mainloop(mainloop);
    return mainloop(/* () */0);
  } else {
    return /* () */0;
  }
}

function preload(param) {
  return Belt_List.map(/* :: */[
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

export {
  
}
/*  Not a pure module */
