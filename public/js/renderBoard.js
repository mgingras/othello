function renderBoard(locals) {
var jade_debug = [{ lineno: 1, filename: "views/board.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (JSON, board, turn, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/board.jade" });
buf.push("<div class=\"board\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/board.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/board.jade" });
buf.push("<p style=\"position:absolute;top:0;left:15px;font-size:10px;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Press esc to return to main menu");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/board.jade" });
buf.push("<p style=\"position:absolute;top:0;right:15px;font-size:10px;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/board.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = turn) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/board.jade" });
buf.push("&nbsp;turn");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/board.jade" });
// iterate board
;(function(){
  var $$obj = board;
  if ('number' == typeof $$obj.length) {

    for (var y = 0, $$l = $$obj.length; y < $$l; y++) {
      var row = $$obj[y];

jade_debug.unshift({ lineno: 7, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 8, filename: "views/board.jade" });
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var x = 0, $$l = $$obj.length; x < $$l; x++) {
      var block = $$obj[x];

jade_debug.unshift({ lineno: 8, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/board.jade" });
block = board[x][y]
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/board.jade" });
if ( block.type === 'p0')
{
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/board.jade" });
buf.push("<div class=\"p0\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'p1')
{
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/board.jade" });
buf.push("<div class=\"p1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'empty')
{
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block','empty',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var x in $$obj) {
      $$l++;      var block = $$obj[x];

jade_debug.unshift({ lineno: 8, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/board.jade" });
block = board[x][y]
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/board.jade" });
if ( block.type === 'p0')
{
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/board.jade" });
buf.push("<div class=\"p0\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'p1')
{
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/board.jade" });
buf.push("<div class=\"p1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'empty')
{
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block','empty',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var y in $$obj) {
      $$l++;      var row = $$obj[y];

jade_debug.unshift({ lineno: 7, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 8, filename: "views/board.jade" });
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var x = 0, $$l = $$obj.length; x < $$l; x++) {
      var block = $$obj[x];

jade_debug.unshift({ lineno: 8, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/board.jade" });
block = board[x][y]
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/board.jade" });
if ( block.type === 'p0')
{
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/board.jade" });
buf.push("<div class=\"p0\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'p1')
{
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/board.jade" });
buf.push("<div class=\"p1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'empty')
{
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block','empty',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var x in $$obj) {
      $$l++;      var block = $$obj[x];

jade_debug.unshift({ lineno: 8, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/board.jade" });
block = board[x][y]
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/board.jade" });
if ( block.type === 'p0')
{
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/board.jade" });
buf.push("<div class=\"p0\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'p1')
{
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/board.jade" });
buf.push("<div class=\"p1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else if ( block.type === 'empty')
{
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
jade_debug.unshift({ lineno: 17, filename: "views/board.jade" });
buf.push("<div" + (jade.cls(['block','empty',"" + (JSON.stringify(block.pos)) + " " + (x) + "-" + (y) + ""], [null,null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"board" in locals_for_with?locals_for_with.board:typeof board!=="undefined"?board:undefined,"turn" in locals_for_with?locals_for_with.turn:typeof turn!=="undefined"?turn:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".board\n  div\n    p(style='position:absolute;top:0;left:15px;font-size:10px;') Press esc to return to main menu\n    p(style='position:absolute;top:0;right:15px;font-size:10px;')\n      strong= turn\n      | &nbsp;turn\n  each row, y in board\n    each block, x in row\n      -block = board[x][y]\n      if block.type === 'p0'\n        .block(class=\"#{JSON.stringify(block.pos)} #{x}-#{y}\")\n          .p0\n      else if block.type === 'p1'\n        .block(class=\"#{JSON.stringify(block.pos)} #{x}-#{y}\")\n          .p1\n      else if block.type === 'empty'\n        .block.empty(class=\"#{JSON.stringify(block.pos)} #{x}-#{y}\")\n");
}
}
