window.jade['note'] = function note(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (buttons, info, title, undefined) {
buf.push("<div hidden=\"hidden\" class=\"note\"><div class=\"container\"><div class=\"jumbotron\"><h2 class=\"note-title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h2><p class=\"note-info\">" + (jade.escape(null == (jade_interp = info) ? "" : jade_interp)) + "</p>");
if ( (buttons !== undefined))
{
// iterate buttons
;(function(){
  var $$obj = buttons;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var button = $$obj[$index];

buf.push("<button" + (jade.attr("id", button.id, true, false)) + " type=\"button\" class=\"btn btn-primary\">" + (jade.escape(null == (jade_interp = button.label) ? "" : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var button = $$obj[$index];

buf.push("<button" + (jade.attr("id", button.id, true, false)) + " type=\"button\" class=\"btn btn-primary\">" + (jade.escape(null == (jade_interp = button.label) ? "" : jade_interp)) + "</button>");
    }

  }
}).call(this);

}
buf.push("</div></div></div>");}.call(this,"buttons" in locals_for_with?locals_for_with.buttons:typeof buttons!=="undefined"?buttons:undefined,"info" in locals_for_with?locals_for_with.info:typeof info!=="undefined"?info:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

