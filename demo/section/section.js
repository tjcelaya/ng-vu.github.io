
define('section/section', function(require, module, exports) {

/** @jsx m */
/**
  config: {
    desc: template,
    files: [string],
    name: string,
    title: string,
    id: string,
    controller: function(),
    view: function(ctrl)
  }
*/
var tabs = require('section/tabs');
var code = require('section/code');

module.exports = function(config) {

  function controller() {
    var codes = config.files.map(function(file) {
      return {
        class: 'code',
        label: file.label,
        module: code(file.path)
      };
    });

    this.demo = m.u.init(config);
    this.tabs1 = m.u.init(tabs(codes.slice(0, codes.length - 1)));
    this.tabs2 = m.u.init(tabs(codes.slice(codes.length - 1)));
  }

  function view(ctrl) {
    return m("section", {
      id: config.name
    }, [
      m("h1", [
        config.title, " ",
        m("small", ["(", config.id, ")"])
      ]),
      m("div", {
        class: "row"
      }, [
        m("div", {
          class: "col-md-6 demo"
        }, [
          ctrl.demo.$view()
        ]),
        m("div", {
          class: "col-md-6 doc"
        }, [
          config.doc
        ])
      ]),
      m("div", {
        class: "row"
      }, [
        m("div", {
          class: "col-md-6 code"
        }, [
          ctrl.tabs1.$view()
        ]),
        m("div", {
          class: "col-md-6 code"
        }, [
          ctrl.tabs2.$view()
        ])
      ])
    ]);
  }

  return {
    controller: controller,
    view: view
  };
};
}); // section/section
