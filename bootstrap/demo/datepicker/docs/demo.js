
define('datepicker/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  var ctrl = this;
  ctrl.date = m.prop(new Date());

  ctrl.datepicker = m.u.init(m.ui.datepicker({
    date: ctrl.date,
    type: 'inline'
  }));

  ctrl.datepicker2 = m.u.init(m.ui.datepicker({
    date: ctrl.date,
    type: 'popup'
  }));

  ctrl.toggle = function() {
    ctrl.datepicker2.opening(!ctrl.datepicker2.opening());
  };

  ctrl.today = function() {
    ctrl.date(new Date());
  };

  ctrl.clear = function() {
    ctrl.date(null);
  };
};

demo.view = function(ctrl) {
  function format(date) {
    return date ? date.toDateString() : '';
  }

  return m("div", [
    m("pre", [ctrl.date(), " "]), m("br"),
    m("h4", ["Inline"]),
    m("div", {
      style: "display:inline-block"
    }, [
      ctrl.datepicker.$view()
    ]),
    m("h4", ["Popup"]),
    m("div", {
      class: "row"
    }, [
      m("div", {
        class: "col-md-6"
      }, [
        m("p", {
          class: "input-group"
        }, [
          m("input", {
            type: "text",
            class: "form-control",
            value: format(ctrl.date())
          }),
          ctrl.datepicker2.$view(),
          m("span", {
            class: "input-group-btn"
          }, [
            m("button", {
              type: "button",
              class: "btn btn-default",
              onclick: ctrl.toggle
            }, [
              m("i", {
                class: "glyphicon glyphicon-calendar"
              })
            ])
          ])
        ])
      ])
    ]),
    m("hr"),
    m("button", {
      class: "btn btn-sm btn-info",
      onclick: ctrl.today
    }, ["Today"]), " ",
    m("button", {
      class: "btn btn-sm btn-default",
      onclick: m.u.bind(ctrl.date, ctrl, new Date('2009-08-24'))
    }, ["2009-08-24"]), " ",
    m("button", {
      class: "btn btn-sm btn-danger",
      onclick: ctrl.clear
    }, ["Clear"])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["A clean, flexible, and fully customizable date picker implemented with Mithril."]),
  m("p", [m("strong", ["TODO"]), ": keyboard, month/year mode, format, buttons"]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.datepicker(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["date"]), " ", m("em", ["(default today)"]), ": Getter and setter returned from ", m("code", ["m.prop"]), "."])]),
    m("li", [m("p", [m("code", ["type"]), " ", m("em", ["(default 'inline')"]), ": Optional type of datepicker. Allowed: ", m("code", ["'inline'"]), ", ", m("code", ["'popup'"]), "."])])
  ])
]);
demo.small = 'm.ui.datepicker';
demo.files = {
  'demo.jsx': "// START\nvar demo = {};\ndemo.controller = function() {\n  var ctrl = this;\n  ctrl.date = m.prop(new Date());\n\n  ctrl.datepicker = m.u.init(m.ui.datepicker({\n    date: ctrl.date,\n    type: 'inline'\n  }));\n\n  ctrl.datepicker2 = m.u.init(m.ui.datepicker({\n    date: ctrl.date,\n    type: 'popup'\n  }));\n\n  ctrl.toggle = function() {\n    ctrl.datepicker2.opening(!ctrl.datepicker2.opening());\n  };\n\n  ctrl.today = function() {\n    ctrl.date(new Date());\n  };\n\n  ctrl.clear = function() {\n    ctrl.date(null);\n  };\n};\n\ndemo.view = function(ctrl) {\n  function format(date) {\n    return date? date.toDateString(): '';\n  }\n\n  return INCLUDE('./template');\n};\n// END\n\ndemo.doc =  INCLUDE('./readme');\ndemo.small = 'm.ui.datepicker';\ndemo.files = {\n  'demo.jsx': CONTENT('./demo.jsx'),\n  '_template.jsx': CONTENT('./_template.jsx'),\n};\nmodule.exports = demo;\n",
  '_template.jsx': "<div>\n  <pre>{ctrl.date()}&nbsp;</pre><br/>\n  <h4>Inline</h4>\n  <div style=\"display:inline-block\">\n    {ctrl.datepicker.$view()}\n  </div>\n  <h4>Popup</h4>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" value={format(ctrl.date())} />\n        {ctrl.datepicker2.$view()}\n        <span class=\"input-group-btn\">\n          <button type=\"button\" class=\"btn btn-default\" onclick={ctrl.toggle}>\n            <i class=\"glyphicon glyphicon-calendar\"></i>\n          </button>\n        </span>\n      </p>\n    </div>\n  </div>\n  <hr/>\n  <button class=\"btn btn-sm btn-info\" onclick={ctrl.today}>Today</button>&nbsp;\n    <button class=\"btn btn-sm btn-default\" onclick={m.u.bind(ctrl.date, ctrl, new Date('2009-08-24'))}>2009-08-24</button>&nbsp;\n    <button class=\"btn btn-sm btn-danger\" onclick={ctrl.clear}>Clear</button>\n</div>\n",
};
module.exports = demo;
}); // datepicker/docs/demo
