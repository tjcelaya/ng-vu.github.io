
define('alert/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  var ctrl = this;
  ctrl.alerts = [{
    type: 'danger',
    msg: 'Oh! Change something and try again.'
  }, {
    type: 'success',
    msg: m("span", ["Well done! Alert can also have ", m("b", ["markup"]), "."])
  }];

  ctrl.addAlert = function() {
    ctrl.alerts.push({
      msg: 'This is sample alert.'
    });
  };

  ctrl.closeAlert = function(index) {
    ctrl.alerts.splice(index, 1);
  };
};

demo.view = function(ctrl) {
  return m("div", [

    ctrl.alerts.map(function(alert, index) {
      return m.ui.renderAlert({
        type: alert.type,
        close: m.u.bind(ctrl.closeAlert, ctrl, index),
        msg: alert.msg
      });
    }),

    m("button", {
      class: "btn btn-default",
      onclick: ctrl.addAlert
    }, [
      "Add alert"
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Alert is a Mithril-version of bootstrap's alert."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", ["In view: ", m("code", ["m.ui.renderAlert(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["type"]), " ", m("em", ["(default 'warning')"]), ": Optional type of alert. Allowed: ", m("code", ["'primary'"]), ", ", m("code", ["'success'"]), ", ", m("code", ["'info'"]), ", ", m("code", ["'warning'"]), ", ", m("code", ["'danger'"]), "."])]),
    m("li", [m("p", [m("code", ["msg"]), ": Alert message, may contain markup."])]),
    m("li", [m("p", [m("code", ["close"]), " ", m("em", [m("code", ["function()"])]), ": Optionally display close button."])])
  ])
]);
demo.small = 'm.ui.renderAlert';
demo.files = {
  'demo.jsx': "// START\nvar demo = {};\ndemo.controller = function() {\n  var ctrl = this;\n  ctrl.alerts = [\n    {type: 'danger', msg: 'Oh! Change something and try again.'},\n    {type: 'success', msg: <span>Well done! Alert can also have <b>markup</b>.</span>}\n  ];\n\n  ctrl.addAlert = function() {\n    ctrl.alerts.push({msg: 'This is sample alert.'});\n  };\n\n  ctrl.closeAlert = function(index) {\n    ctrl.alerts.splice(index, 1);\n  };\n};\n\ndemo.view = function(ctrl) {\n  return INCLUDE('./template');\n};\n// END\n\ndemo.doc = INCLUDE('./readme');\ndemo.small = 'm.ui.renderAlert';\ndemo.files = {\n  'demo.jsx': CONTENT('./demo.jsx'),\n  '_template.jsx': CONTENT('./_template.jsx')\n};\nmodule.exports = demo;\n",
  '_template.jsx': "<div>\n  {\n    ctrl.alerts.map(function(alert, index) {\n      return m.ui.renderAlert({\n        type: alert.type,\n        close: m.u.bind(ctrl.closeAlert, ctrl, index),\n        msg: alert.msg\n      });\n    })\n  }\n  <button class=\"btn btn-default\" onclick={ctrl.addAlert}>\n    Add alert\n  </button>\n</div>\n"
};
module.exports = demo;
}); // alert/docs/demo
