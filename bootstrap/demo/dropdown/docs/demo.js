
define('dropdown/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  var ctrl = this;

  ctrl.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  ctrl.isOpen = m.prop(false);
  ctrl.isDisabled = m.prop(false);

  ctrl.toggleDropdown = function(e) {
    e.preventDefault();
    e.stopPropagation();
    ctrl.isOpen(!ctrl.isOpen());
  };

  ctrl.disableDropdown = function() {
    ctrl.isDisabled(!ctrl.isDisabled());
  };
};

demo.view = function(ctrl) {
  return m("div", [
    m("span", {
      class: "dropdown",
      config: m.ui.configDropdown()
    }, [
      m("a", {
        href: "#",
        class: "dropdown-toggle"
      }, [
        "Click me for a dropdown, yo!"
      ]),
      m("ul", {
        class: "dropdown-menu"
      }, [
        m("li", [

          ctrl.items.map(function(choice) {
            return m("a", {
              href: true
            }, [choice]);
          })

        ])
      ])
    ]), " ",

    m("div", {
      class: "btn-group",
      config: m.ui.configDropdown(ctrl.isOpen)
    }, [
      m("button", {
        type: "button",
        class: "btn btn-primary dropdown-toggle",
        disabled: ctrl.isDisabled()
      }, [
        "Button dropdown ", m("span", {
          class: "caret"
        })
      ]),
      m("ul", {
        class: "dropdown-menu"
      }, [
        m("li", [m("a", {
          href: "#"
        }, ["Action"])]),
        m("li", [m("a", {
          href: "#"
        }, ["Another action"])]),
        m("li", [m("a", {
          href: "#"
        }, ["Something else here"])]),
        m("li", {
          class: "divider"
        }),
        m("li", [m("a", {
          href: "#"
        }, ["Separated link"])])
      ])
    ]), " ",

    m("div", {
      class: "btn-group",
      config: m.ui.configDropdown()
    }, [
      m("button", {
        type: "button",
        class: "btn btn-danger"
      }, ["Action"]),
      m("button", {
        type: "button",
        class: "btn btn-danger dropdown-toggle"
      }, [
        m("span", {
          class: "caret"
        }),
        m("span", {
          class: "sr-only"
        }, ["Split button!"])
      ]),
      m("ul", {
        class: "dropdown-menu",
        role: "menu"
      }, [
        m("li", [m("a", {
          href: "#"
        }, ["Action"])]),
        m("li", [m("a", {
          href: "#"
        }, ["Another action"])]),
        m("li", [m("a", {
          href: "#"
        }, ["Something else here"])]),
        m("li", {
          class: "divider"
        }),
        m("li", [m("a", {
          href: "#"
        }, ["Separated link"])])
      ])
    ]),

    m("hr"),
    m("p", [
      m("button", {
        class: "btn btn-default",
        onclick: ctrl.toggleDropdown
      }, [
        "Toggle dropdown button"
      ]), " ",
      m("button", {
        class: "btn btn-warning",
        onclick: ctrl.disableDropdown
      }, [
        "Enable/Disable"
      ])
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Dropdown is a simple component which will toggle a dropdown menu on click or programmatically."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", ["In config: ", m("code", ["m.ui.configDropdown(isOpen)"])]),
  m("ul", [
    m("li", [m("code", ["isOpen"]), " ", m("em", ["(default false)"]), ": Optional open state."])
  ])
]);
demo.small = 'm.ui.configDropdown';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  var ctrl = this;\r\n\r\n  ctrl.items = [\r\n    'The first choice!',\r\n    'And another choice for you.',\r\n    'but wait! A third!'\r\n  ];\r\n\r\n  ctrl.isOpen = m.prop(false);\r\n  ctrl.isDisabled = m.prop(false);\r\n\r\n  ctrl.toggleDropdown = function(e) {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n    ctrl.isOpen(!ctrl.isOpen());\r\n  };\r\n\r\n  ctrl.disableDropdown = function() {\r\n    ctrl.isDisabled(!ctrl.isDisabled());\r\n  };\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.configDropdown';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <span class=\"dropdown\" config={m.ui.configDropdown()}>\r\n    <a href=\"#\" class=\"dropdown-toggle\">\r\n      Click me for a dropdown, yo!\r\n    </a>\r\n    <ul class=\"dropdown-menu\">\r\n      <li>\r\n      {\r\n        ctrl.items.map(function(choice) {\r\n          return <a href>{choice}</a>;\r\n        })\r\n      }\r\n      </li>\r\n    </ul>\r\n  </span>&nbsp;\r\n\r\n  <div class=\"btn-group\" config={m.ui.configDropdown(ctrl.isOpen)}>\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" disabled={ctrl.isDisabled()}>\r\n      Button dropdown <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li><a href=\"#\">Action</a></li>\r\n      <li><a href=\"#\">Another action</a></li>\r\n      <li><a href=\"#\">Something else here</a></li>\r\n      <li class=\"divider\"></li>\r\n      <li><a href=\"#\">Separated link</a></li>\r\n    </ul>\r\n  </div>&nbsp;\r\n\r\n  <div class=\"btn-group\" config={m.ui.configDropdown()}>\r\n    <button type=\"button\" class=\"btn btn-danger\">Action</button>\r\n    <button type=\"button\" class=\"btn btn-danger dropdown-toggle\">\r\n      <span class=\"caret\"></span>\r\n      <span class=\"sr-only\">Split button!</span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" role=\"menu\">\r\n      <li><a href=\"#\">Action</a></li>\r\n      <li><a href=\"#\">Another action</a></li>\r\n      <li><a href=\"#\">Something else here</a></li>\r\n      <li class=\"divider\"></li>\r\n      <li><a href=\"#\">Separated link</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <hr/>\r\n  <p>\r\n    <button class=\"btn btn-default\" onclick={ctrl.toggleDropdown}>\r\n      Toggle dropdown button</button>&nbsp;\r\n    <button class=\"btn btn-warning\" onclick={ctrl.disableDropdown}>\r\n      Enable/Disable</button>\r\n  </p>\r\n</div>\r\n",
};
module.exports = demo;
}); // dropdown/docs/demo
