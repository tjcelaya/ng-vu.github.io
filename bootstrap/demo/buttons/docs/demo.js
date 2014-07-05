
define('buttons/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  var ctrl = this;
  ctrl.single = m.prop(0);
  ctrl.checks = {
    left: m.prop(false),
    middle: m.prop(false),
    right: m.prop(false)
  };
  ctrl.radio = m.prop('left');
};

demo.view = function(ctrl) {
  return m("div", [
    m("div", [
      m("h4", ["Single toggle"]),
      m("pre", [ctrl.single()]),
      m("button", {
        class: "btn btn-primary",
        config: m.ui.configCheckbox(ctrl.single, {
          true: 1,
          false: 0
        })
      }, [
        "Single Toggle"
      ])
    ]),
    m("br"),
    m("div", [
      m("h4", ["Checkbox"]),
      m("pre", [JSON.stringify(ctrl.checks)]),
      m("div", {
        class: "btn-group"
      }, [
        m("button", {
          class: "btn btn-success",
          config: m.ui.configCheckbox(ctrl.checks.left)
        }, [
          "Left"
        ]),
        m("button", {
          class: "btn btn-success",
          config: m.ui.configCheckbox(ctrl.checks.middle)
        }, [
          "Middle"
        ]),
        m("button", {
          class: "btn btn-success",
          config: m.ui.configCheckbox(ctrl.checks.right)
        }, [
          "Right"
        ])
      ])
    ]),
    m("br"),
    m("div", [
      m("h4", ["Radio"]),
      m("pre", [ctrl.radio()]),
      m("div", {
        class: "btn-group"
      }, [
        m("button", {
          class: "btn btn-danger",
          config: m.ui.configRadio(ctrl.radio, 'left')
        }, [
          "Left"
        ]),
        m("button", {
          class: "btn btn-danger",
          config: m.ui.configRadio(ctrl.radio, 'middle')
        }, [
          "Middle"
        ]),
        m("button", {
          class: "btn btn-danger",
          config: m.ui.configRadio(ctrl.radio, 'right')
        }, [
          "Right"
        ])
      ])
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["There are two methods that can make a group of buttons behave like a set of checkboxes or radio buttons."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", ["In element config:"]),
  m("ul", [
    m("li", [m("p", [m("code", ["m.ui.configCheckbox(prop, settings)"])])]),
    m("li", [m("p", [m("code", ["m.ui.configRadio(prop, value)"])])])
  ]),
  m("h3", {
    id: "checkbox"
  }, ["Checkbox"]),
  m("ul", [
    m("li", [m("p", [m("code", ["prop"]), " ", m("em", ["(required)"]), ": Getter and setter returned from ", m("code", ["m.prop"]), "."])]),
    m("li", [m("p", [m("code", ["settings"]), ": Optional"]),
      m("ul", [
        m("li", [m("code", ["true"]), " ", m("em", ["(default true)"]), ": Optional value for ", m("code", ["true"]), " state."]),
        m("li", [m("code", ["false"]), " ", m("em", ["(default false)"]), ": Optonal value for ", m("code", ["false"]), " state."])
      ])
    ])
  ]),
  m("h3", {
    id: "radio"
  }, ["Radio"]),
  m("ul", [
    m("li", [m("p", [m("code", ["prop"]), " ", m("em", ["(required)"]), ": Getter and settre returned from ", m("code", ["m.prop"]), "."])]),
    m("li", [m("p", [m("code", ["value"]), " ", m("em", ["(required)"]), ": Value to assign to ", m("code", ["prop(value)"]), " when the button is checked."])])
  ])
]);
demo.small = 'm.ui.configCheckbox, m.ui.configRadio';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  var ctrl = this;\r\n  ctrl.single = m.prop(0);\r\n  ctrl.checks = {\r\n    left: m.prop(false),\r\n    middle: m.prop(false),\r\n    right: m.prop(false)\r\n  };\r\n  ctrl.radio = m.prop('left');\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.configCheckbox, m.ui.configRadio';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <div>\r\n    <h4>Single toggle</h4>\r\n    <pre>{ctrl.single()}</pre>\r\n    <button class=\"btn btn-primary\"\r\n      config={m.ui.configCheckbox(ctrl.single, {true: 1, false: 0})}>\r\n      Single Toggle\r\n    </button>\r\n  </div>\r\n  <br/>\r\n  <div>\r\n    <h4>Checkbox</h4>\r\n    <pre>{JSON.stringify(ctrl.checks)}</pre>\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-success\"\r\n        config={m.ui.configCheckbox(ctrl.checks.left)}>\r\n        Left\r\n      </button>\r\n      <button class=\"btn btn-success\"\r\n        config={m.ui.configCheckbox(ctrl.checks.middle)}>\r\n        Middle\r\n      </button>\r\n      <button class=\"btn btn-success\"\r\n        config={m.ui.configCheckbox(ctrl.checks.right)}>\r\n        Right\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <div>\r\n    <h4>Radio</h4>\r\n    <pre>{ctrl.radio()}</pre>\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-danger\"\r\n        config={m.ui.configRadio(ctrl.radio, 'left')}>\r\n        Left\r\n      </button>\r\n      <button class=\"btn btn-danger\"\r\n        config={m.ui.configRadio(ctrl.radio, 'middle')}>\r\n        Middle\r\n      </button>\r\n      <button class=\"btn btn-danger\"\r\n        config={m.ui.configRadio(ctrl.radio, 'right')}>\r\n        Right\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
};
module.exports = demo;
}); // buttons/docs/demo
