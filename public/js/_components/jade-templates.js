function columnClear(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"btn-group\"><button id=\"btn-clear-filter\" type=\"button\" title=\"Clear Search Criteria\" class=\"btn btn-default btn-sm dropdown-toggle\"><span><i class=\"fa fa-filter fa-fw\"></i><i class=\"fa fa-ban fa-fw fa-stack-1x fa-wee-bit-bigger\"></i></span></button></div>");;return buf.join("");
}

function columnFilters(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (columns, header, undefined) {
buf.push("<div class=\"btn-group\"><button id=\"btn-toggle-filter\" type=\"button\" data-toggle=\"dropdown\" title=\"View Column Filters\" aria-expanded=\"true\" class=\"btn btn-default btn-sm dropdown-toggle\"><i class=\"fa fa-filter fa-fw fa-md\"></i></button><form id=\"form-toggle-filter\" role=\"menu\" class=\"dropdown-menu\"><div class=\"modal-header\"><span class=\"h4\">" + (jade.escape(null == (jade_interp = header) ? "" : jade_interp)) + "</span></div><div class=\"modal-body\">");
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var col = $$obj[$index];

if ( col.name === 'status' || col.name === 'application-area' || col.name === 'idea' || col.name === 'assigned-to' || col.name === 'level-of-effort')
{
buf.push("<div class=\"row\"><div class=\"form-group\"><label" + (jade.attr("for", "filter-" + col.name, true, false)) + " class=\"col-sm-4 control-label\">" + (jade.escape(null == (jade_interp = col.label) ? "" : jade_interp)) + "</label><div class=\"col-sm-8\"><div class=\"input-group\"><input" + (jade.attr("id", "filter-" + col.name, true, false)) + (jade.attr("data-col", col.order, true, false)) + (jade.attr("placeholder", col.label, true, false)) + " class=\"form-control input-sm\"/><span class=\"input-group-btn\"><button type=\"button\"" + (jade.attr("data-name", col.name, true, false)) + (jade.attr("data-col", col.order, true, false)) + " class=\"btn btn-primary btn-sm btn-submit\"><i class=\"fa fa-check fa-fw\"></i></button><button type=\"button\"" + (jade.attr("data-name", col.name, true, false)) + (jade.attr("data-col", col.order, true, false)) + " class=\"btn btn-default btn-sm btn-cancel\"><i class=\"fa fa-times fa-fw\"></i></button></span></div></div></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var col = $$obj[$index];

if ( col.name === 'status' || col.name === 'application-area' || col.name === 'idea' || col.name === 'assigned-to' || col.name === 'level-of-effort')
{
buf.push("<div class=\"row\"><div class=\"form-group\"><label" + (jade.attr("for", "filter-" + col.name, true, false)) + " class=\"col-sm-4 control-label\">" + (jade.escape(null == (jade_interp = col.label) ? "" : jade_interp)) + "</label><div class=\"col-sm-8\"><div class=\"input-group\"><input" + (jade.attr("id", "filter-" + col.name, true, false)) + (jade.attr("data-col", col.order, true, false)) + (jade.attr("placeholder", col.label, true, false)) + " class=\"form-control input-sm\"/><span class=\"input-group-btn\"><button type=\"button\"" + (jade.attr("data-name", col.name, true, false)) + (jade.attr("data-col", col.order, true, false)) + " class=\"btn btn-primary btn-sm btn-submit\"><i class=\"fa fa-check fa-fw\"></i></button><button type=\"button\"" + (jade.attr("data-name", col.name, true, false)) + (jade.attr("data-col", col.order, true, false)) + " class=\"btn btn-default btn-sm btn-cancel\"><i class=\"fa fa-times fa-fw\"></i></button></span></div></div></div></div>");
}
    }

  }
}).call(this);

buf.push("</div></form></div>");}.call(this,"columns" in locals_for_with?locals_for_with.columns:typeof columns!=="undefined"?columns:undefined,"header" in locals_for_with?locals_for_with.header:typeof header!=="undefined"?header:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function columnSort(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"btn-group\"><button id=\"btn-sort\" type=\"button\" title=\"Toggle Priority Sorting\" class=\"btn btn-default btn-sm dropdown-toggle\"><i class=\"fa fa-sort-amount-asc fa-fw fa-md\"></i></button></div>");;return buf.join("");
}

function columnVisibility(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (columns, undefined) {
buf.push("<div class=\"btn-group\"><button id=\"btn-toggle-vis\" type=\"button\" data-toggle=\"dropdown\" title=\"View Column Visibility\" aria-expanded=\"true\" class=\"btn btn-default btn-sm dropdown-toggle\"><i class=\"fa fa-table fa-fw fa-md\"></i></button><ul role=\"menu\" class=\"dropdown-menu\">");
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var col = $$obj[$index];

if ( !col.exclude)
{
buf.push("<li><a data-target-state=\"show\"" + (jade.attr("data-column", col.order, true, false)) + " tabindex=\"-1\" href=\"#\" class=\"toggle-vis\"><i" + (jade.cls(['fa',"fa-fw " + (col.visible? 'fa-check-square-o' : 'fa-square-o') + ""], [null,true])) + "></i>" + (jade.escape(null == (jade_interp = col.label) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var col = $$obj[$index];

if ( !col.exclude)
{
buf.push("<li><a data-target-state=\"show\"" + (jade.attr("data-column", col.order, true, false)) + " tabindex=\"-1\" href=\"#\" class=\"toggle-vis\"><i" + (jade.cls(['fa',"fa-fw " + (col.visible? 'fa-check-square-o' : 'fa-square-o') + ""], [null,true])) + "></i>" + (jade.escape(null == (jade_interp = col.label) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div>");}.call(this,"columns" in locals_for_with?locals_for_with.columns:typeof columns!=="undefined"?columns:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function renderIndicators(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_, indicators, selections, undefined) {
// iterate indicators
;(function(){
  var $$obj = indicators;
  if ('number' == typeof $$obj.length) {

    for (var seq = 0, $$l = $$obj.length; seq < $$l; seq++) {
      var indicator = $$obj[seq];

buf.push("<div class=\"accordion-group\"><div data-toggle=\"collapse\"" + (jade.attr("data-target", '#acc-' + seq, true, false)) + " class=\"accordion-heading\">");
var selection = selections[indicator.Label];
var label = (selection != -1)? selection + ' - ' + indicator.Options[selection].Label + ' : Weight ' + indicator.Weight : 'No Selection : Weignt ' + indicator.Weight;
buf.push("<i class=\"fa fa-chevron-right\"></i><span class=\"h4 text\">" + (jade.escape(null == (jade_interp = indicator.Label) ? "" : jade_interp)) + "</span><span" + (jade.attr("id", 'indicator-' + seq + '-label', true, false)) + " class=\"h5 pull-right\">" + (jade.escape(null == (jade_interp = label) ? "" : jade_interp)) + "</span></div><div" + (jade.attr("id", 'acc-' + seq, true, false)) + (jade.attr("data-title", indicator.Label, true, false)) + " class=\"accordion-body collapse\"><table" + (jade.attr("id", 'indicator-' + seq + '-table', true, false)) + " class=\"table table-condensed table-hover\"><tbody>");
var order = [];
_.each(indicator.Options, function (option, i) { order[option.Sequence] = _.extend(option, { Value: i }); });
// iterate order
;(function(){
  var $$obj = order;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var option = $$obj[$index];

buf.push("<tr>");
var checked = (selection == option.Value)? true : false;
buf.push("<td nowrap=\"nowrap\"><input type=\"radio\"" + (jade.attr("name", seq, true, false)) + (jade.attr("id", 'indicator-' + seq + '-' + option.Value, true, false)) + (jade.attr("value", option.Value, true, false)) + (jade.attr("checked", checked, true, false)) + " class=\"radio-inline\"/></td><td nowrap=\"nowrap\">" + (jade.escape(null == (jade_interp = option.Value + ' - ' + option.Label) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = option.Description) ? "" : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var option = $$obj[$index];

buf.push("<tr>");
var checked = (selection == option.Value)? true : false;
buf.push("<td nowrap=\"nowrap\"><input type=\"radio\"" + (jade.attr("name", seq, true, false)) + (jade.attr("id", 'indicator-' + seq + '-' + option.Value, true, false)) + (jade.attr("value", option.Value, true, false)) + (jade.attr("checked", checked, true, false)) + " class=\"radio-inline\"/></td><td nowrap=\"nowrap\">" + (jade.escape(null == (jade_interp = option.Value + ' - ' + option.Label) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = option.Description) ? "" : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></div></div>");
    }

  } else {
    var $$l = 0;
    for (var seq in $$obj) {
      $$l++;      var indicator = $$obj[seq];

buf.push("<div class=\"accordion-group\"><div data-toggle=\"collapse\"" + (jade.attr("data-target", '#acc-' + seq, true, false)) + " class=\"accordion-heading\">");
var selection = selections[indicator.Label];
var label = (selection != -1)? selection + ' - ' + indicator.Options[selection].Label + ' : Weight ' + indicator.Weight : 'No Selection : Weignt ' + indicator.Weight;
buf.push("<i class=\"fa fa-chevron-right\"></i><span class=\"h4 text\">" + (jade.escape(null == (jade_interp = indicator.Label) ? "" : jade_interp)) + "</span><span" + (jade.attr("id", 'indicator-' + seq + '-label', true, false)) + " class=\"h5 pull-right\">" + (jade.escape(null == (jade_interp = label) ? "" : jade_interp)) + "</span></div><div" + (jade.attr("id", 'acc-' + seq, true, false)) + (jade.attr("data-title", indicator.Label, true, false)) + " class=\"accordion-body collapse\"><table" + (jade.attr("id", 'indicator-' + seq + '-table', true, false)) + " class=\"table table-condensed table-hover\"><tbody>");
var order = [];
_.each(indicator.Options, function (option, i) { order[option.Sequence] = _.extend(option, { Value: i }); });
// iterate order
;(function(){
  var $$obj = order;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var option = $$obj[$index];

buf.push("<tr>");
var checked = (selection == option.Value)? true : false;
buf.push("<td nowrap=\"nowrap\"><input type=\"radio\"" + (jade.attr("name", seq, true, false)) + (jade.attr("id", 'indicator-' + seq + '-' + option.Value, true, false)) + (jade.attr("value", option.Value, true, false)) + (jade.attr("checked", checked, true, false)) + " class=\"radio-inline\"/></td><td nowrap=\"nowrap\">" + (jade.escape(null == (jade_interp = option.Value + ' - ' + option.Label) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = option.Description) ? "" : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var option = $$obj[$index];

buf.push("<tr>");
var checked = (selection == option.Value)? true : false;
buf.push("<td nowrap=\"nowrap\"><input type=\"radio\"" + (jade.attr("name", seq, true, false)) + (jade.attr("id", 'indicator-' + seq + '-' + option.Value, true, false)) + (jade.attr("value", option.Value, true, false)) + (jade.attr("checked", checked, true, false)) + " class=\"radio-inline\"/></td><td nowrap=\"nowrap\">" + (jade.escape(null == (jade_interp = option.Value + ' - ' + option.Label) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = option.Description) ? "" : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></div></div>");
    }

  }
}).call(this);
}.call(this,"_" in locals_for_with?locals_for_with._:typeof _!=="undefined"?_:undefined,"indicators" in locals_for_with?locals_for_with.indicators:typeof indicators!=="undefined"?indicators:undefined,"selections" in locals_for_with?locals_for_with.selections:typeof selections!=="undefined"?selections:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function renderMain(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (JSON, columns, data, undefined) {
buf.push("<table id=\"idea-table\" class=\"table table-condensed table-responsive\"><thead><tr>");
// iterate columns 
;(function(){
  var $$obj = columns ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var col = $$obj[$index];

buf.push("<th" + (jade.cls(['col-' + col.name], [true])) + ">" + (jade.escape(null == (jade_interp = col.label) ? "" : jade_interp)) + "</th>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var col = $$obj[$index];

buf.push("<th" + (jade.cls(['col-' + col.name], [true])) + ">" + (jade.escape(null == (jade_interp = col.label) ? "" : jade_interp)) + "</th>");
    }

  }
}).call(this);

buf.push("</tr></thead><tbody>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var idea = $$obj[$index];

buf.push("<tr" + (jade.attr("id", idea.id(), true, false)) + ">");
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var col = $$obj[$index];

var value  = (col.name === 'risk-indicator')? JSON.stringify(idea[col.name]()) : idea[col.name]();
buf.push("<td" + (jade.cls(['col-' + col.name], [true])) + ">" + (((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var col = $$obj[$index];

var value  = (col.name === 'risk-indicator')? JSON.stringify(idea[col.name]()) : idea[col.name]();
buf.push("<td" + (jade.cls(['col-' + col.name], [true])) + ">" + (((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var idea = $$obj[$index];

buf.push("<tr" + (jade.attr("id", idea.id(), true, false)) + ">");
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var col = $$obj[$index];

var value  = (col.name === 'risk-indicator')? JSON.stringify(idea[col.name]()) : idea[col.name]();
buf.push("<td" + (jade.cls(['col-' + col.name], [true])) + ">" + (((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var col = $$obj[$index];

var value  = (col.name === 'risk-indicator')? JSON.stringify(idea[col.name]()) : idea[col.name]();
buf.push("<td" + (jade.cls(['col-' + col.name], [true])) + ">" + (((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"columns" in locals_for_with?locals_for_with.columns:typeof columns!=="undefined"?columns:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function renderNote(locals) {
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
}