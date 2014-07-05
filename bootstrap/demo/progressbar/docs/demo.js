
define('progressbar/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  var ctrl = this;
  ctrl.max = m.prop(200);
  ctrl.dynamic = m.prop(0);
  ctrl.type = m.prop('');

  ctrl.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);

    var type;
    if (value < 25) type = 'success';
    else if (value < 50) type = 'info';
    else if (value < 75) type = 'warning';
    else type = 'danger';

    ctrl.showWarning = (type === 'danger' || type === 'warning');

    ctrl.dynamic(value);
    ctrl.type(type);
  };

  ctrl.randomStacked = function() {
    ctrl.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
      var index = Math.floor((Math.random() * 4));
      ctrl.stacked.push({
        value: Math.floor((Math.random() * 30) + 1),
        type: types[index]
      });
    }
  };

  ctrl.random();
  ctrl.randomStacked();
};

demo.view = function(ctrl) {
  return m("div", [
    m("h3", ["Static"]),
    m("div", {
      class: "row"
    }, [
      m("div", {
        class: "col-sm-4"
      }, [
        m("div", {
          class: "progress ",
          value: "55"
        }, [
          m("div", {
            class: "progress-bar",
            style: "width: 55%;"
          })
        ])
      ]),
      m("div", {
        class: "col-sm-4"
      }, [
        m("div", {
          class: "progress-striped progress ",
          value: "22",
          type: "warning"
        }, [
          m("div", {
            class: "progress-bar progress-bar-warning",
            style: "width: 22%;"
          }, [
            m("span", ["22%"])
          ])
        ])
      ]),
      m("div", {
        class: "col-sm-4"
      }, [
        m("div", {
          class: "progress-striped active progress ",
          max: "200",
          value: "166",
          type: "danger"
        }, [
          m("div", {
            class: "progress-bar progress-bar-danger",
            style: "width: 166%"
          }, [
            m("i", ["166 / 200"])
          ])
        ])
      ])
    ]),

    m("hr"),
    m("h3", ["Dynamic",
      m("button", {
        class: "btn btn-sm btn-primary",
        onclick: ctrl.random
      }, [
        "Randomize"
      ])
    ]),
    m("div", {
      class: "progress",
      max: "max",
      value: "dynamic"
    }, [
      m("div", {
        class: "progress-bar",
        style: "width: 9.5%;"
      }, [
        m("span", {
          style: "color:black; white-space:nowrap;"
        }, [
          ctrl.dynamic(), " / ", ctrl.max()
        ])
      ])
    ]),

    m("small", [m("em", ["No animation"])]),
    m("div", {
      class: "progress",
      animate: "false",
      value: "dynamic",
      type: "success"
    }, [
      m("div", {
        class: "progress-bar progress-bar-success",
        style: "transition: none; -webkit-transition: none; width: 19%;"
      }, [
        m("b", ["19%"])
      ])
    ]),

    m("small", [m("em", ["Object (changes type based on value)"])]),
    m("div", {
      class: "progress-striped active progress ",
      value: "dynamic",
      type: "success"
    }, [
      m("div", {
        class: "progress-bar progress-bar-success",
        style: "width: 19%;"
      }, [
        m("span", ["success"]),
        m("i", ["!!! Watch out !!!"])
      ])
    ]),

    m("hr"),
    m("h3", ["Stacked",
      m("button", {
        class: "btn btn-sm btn-primary"
      }, [
        "Randomize"
      ])
    ]),
    m("div", {
      class: "progress"
    }, [
      m("div", {
        class: "progress-bar progress-bar-danger",
        value: "bar.value",
        type: "danger",
        style: "width: 25%;"
      }, [
        m("span", ["25%"])
      ]),
      m("div", {
        class: "progress-bar  progress-bar-success",
        value: "bar.value",
        type: "success",
        style: "width: 29%;"
      }, [
        m("span", ["29%"])
      ])
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Progressbar is an awesome component"]),
  m("h2", {
    id: "settings"
  }, ["Settings"])
]);
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  var ctrl = this;\r\n  ctrl.max = m.prop(200);\r\n  ctrl.dynamic = m.prop(0);\r\n  ctrl.type = m.prop('');\r\n\r\n  ctrl.random = function() {\r\n    var value = Math.floor((Math.random() * 100) + 1);\r\n\r\n    var type;\r\n    if (value < 25) type = 'success';\r\n    else if (value < 50) type = 'info';\r\n    else if (value < 75) type = 'warning';\r\n    else type = 'danger';\r\n\r\n    ctrl.showWarning = (type === 'danger' || type === 'warning');\r\n\r\n    ctrl.dynamic(value);\r\n    ctrl.type(type);\r\n  };\r\n\r\n  ctrl.randomStacked = function() {\r\n    ctrl.stacked = [];\r\n    var types = ['success', 'info', 'warning', 'danger'];\r\n\r\n    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {\r\n      var index = Math.floor((Math.random() * 4));\r\n      ctrl.stacked.push({\r\n        value: Math.floor((Math.random() * 30) + 1),\r\n        type: types[index]\r\n      });\r\n    }\r\n  };\r\n\r\n  ctrl.random();\r\n  ctrl.randomStacked();\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <h3>Static</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"progress \" value=\"55\">\r\n        <div class=\"progress-bar\" style=\"width: 55%;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"progress-striped progress \" value=\"22\" type=\"warning\">\r\n        <div class=\"progress-bar progress-bar-warning\" style=\"width: 22%;\">\r\n          <span>22%</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"progress-striped active progress \" max=\"200\" value=\"166\" type=\"danger\">\r\n        <div class=\"progress-bar progress-bar-danger\" style=\"width: 166%\">\r\n          <i>166 / 200</i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr/>\r\n  <h3>Dynamic\r\n    <button class=\"btn btn-sm btn-primary\" onclick={ctrl.random}>\r\n      Randomize</button>\r\n  </h3>\r\n  <div class=\"progress\" max=\"max\" value=\"dynamic\">\r\n    <div class=\"progress-bar\" style=\"width: 9.5%;\">\r\n      <span style=\"color:black; white-space:nowrap;\">\r\n        {ctrl.dynamic()} / {ctrl.max()}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <small><em>No animation</em></small>\r\n  <div class=\"progress\" animate=\"false\" value=\"dynamic\" type=\"success\">\r\n    <div class=\"progress-bar progress-bar-success\"\r\n      style=\"transition: none; -webkit-transition: none; width: 19%;\">\r\n      <b>19%</b>\r\n    </div>\r\n  </div>\r\n\r\n  <small><em>Object (changes type based on value)</em></small>\r\n  <div class=\"progress-striped active progress \" value=\"dynamic\" type=\"success\">\r\n    <div class=\"progress-bar progress-bar-success\" style=\"width: 19%;\">\r\n      <span>success</span>\r\n      <i>!!! Watch out !!!</i>\r\n    </div>\r\n  </div>\r\n\r\n  <hr/>\r\n  <h3>Stacked\r\n    <button class=\"btn btn-sm btn-primary\">\r\n      Randomize</button>\r\n  </h3>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-danger\" value=\"bar.value\" type=\"danger\"\r\n      style=\"width: 25%;\">\r\n      <span>25%</span>\r\n    </div>\r\n    <div class=\"progress-bar  progress-bar-success\" value=\"bar.value\" type=\"success\"\r\n      style=\"width: 29%;\">\r\n      <span>29%</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
};
module.exports = demo;
}); // progressbar/docs/demo
