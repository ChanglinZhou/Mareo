

import * as Pervasives from "../../../../../../../usr/local/lib/node_modules/bs-platform/lib/es6/pervasives.js";

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
  return Pervasives.failwith("Game over.");
}

function game_loss(ctx) {
  ctx.rect(0, 0, 512, 512);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  ctx.fillText("GAME OVER. You lose!", 60, 128);
  return Pervasives.failwith("Game over.");
}

export {
  render ,
  clear_canvas ,
  draw_bgd ,
  render_bbox ,
  fps ,
  hud ,
  game_win ,
  game_loss ,
  
}
/* No side effect */
