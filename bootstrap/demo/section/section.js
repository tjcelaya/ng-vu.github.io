
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
    var codes = [];
    for (var name in config.files) {
      codes.push({
        class: 'code',
        label: name,
        module: code(config.files[name])
      });
    }

    this.demo = m.u.init(config);
    this.tabs1 = m.u.init(tabs(codes));

    m.request({
      method: 'GET',
      url: config.compiledUrl,
      deserialize: function(v) {
        return v;
      }
    })
      .then(function(data) {
        this.tabs2 = m.u.init(tabs([{
          class: 'code',
          label: 'Compiled JS',
          module: code(data)
        }]));
      }.bind(this));
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
          ctrl.tabs2 ? ctrl.tabs2.$view() : ''
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
