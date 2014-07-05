
define('home/home', function(require, module, exports) {

/** @jsx m */
var section = require('section/section');
var config = require('config');

var sections = config.components.map(function(name) {
  var demo = require(name + '/docs/demo');
  demo.name = name;
  demo.title = name[0].toUpperCase() + name.slice(1);
  demo.compiledUrl = 'demo/' + name + '/docs/demo.js';
  return m.u.init(section(demo));
});

exports.controller = function() {

};

exports.view = function(ctrl) {
  var sectionsView = sections.map(function(s) {
    return s.$view();
  });
  return m("div", {
    class: "demo"
  }, [
    m("section", [
      m("h1", ["Introduction"]),
      m("h2", ["Getting Started"]),
      m("p", [
        "Download ", m("a", {
          href: "https://github.com/ng-vu/mithril-bootstrap/blob/master/dist/mithril-bootstrap.js"
        }, ["mithril-bootstrap"]), " and include after ", m("a", {
          href: "http://lhorie.github.io/mithril/"
        }, ["mithril.js"]), " script."
      ]),
      m("h2", ["Contributing"]),
      m("p", [
        "Read ", m("a", {
          href: "https://github.com/ng-vu/mithril-bootstrap/blob/master/contributing-guide.md"
        }, ["contributing-guide.md"]), "."
      ])
    ]),

    sectionsView
  ]);
};
}); // home/home
