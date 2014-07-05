
define('pagination/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
var demo = {};
demo.controller = function() {
  this.countries = m.request({
    method: 'GET',
    url: 'countries.json'
  });
  this.totalItems = function() {
    return this.countries() ? this.countries().length : 0;
  }.bind(this);

  this.currentPage = m.prop(0);
  this.itemsPerPage = m.prop(5);
  this.maxSize = 7;
  this.directionLinks = true;
  this.boundaryLinks = true;
  this.previousText = '<';
  this.nextText = '>';

  this.pagination = m.u.init(m.ui.pagination(this));
};

demo.view = function(ctrl) {
  var size = ctrl.itemsPerPage();
  var page = ctrl.currentPage();
  var rows = ctrl.countries()
    .slice(size * page, size * (page + 1))
    .map(function(item, i) {
      return m("tr", [
        m("td", [size * page + i + 1]),
        m("td", [m("img", {
          src: item.flag
        }), " ", item.name])
      ]);
    });

  return m("div", [
    m("pre", [
      "Total: ", ctrl.totalItems(), m("br"),
      "Page: ", page, "/", ctrl.pagination.numPages(), " (zero-based)"
    ]),
    m("div", [ctrl.pagination.$view()]),
    m("button", {
      class: "btn btn-info",
      onclick: function() {
        ctrl.pagination.setPage(10);
      }
    }, [
      "Go to page 10"
    ]),
    m("table", {
      class: "table"
    }, [
      m("thead", [
        m("tr", [
          m("th", {
            class: "#"
          }, ["#"]),
          m("th", ["Country"])
        ])
      ]),
      m("tbody", [
        rows
      ])
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Pagination is a Mithril component that takes care of paging."]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.pagination(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["currentPage"]), " ", m("em", ["(default 0)"]), ": Current page number. First page is 0."])]),
    m("li", [m("p", [m("code", ["totalItems"]), " ", m("em", ["(default 0)"]), ": Total number of items in all pages."])]),
    m("li", [m("p", [m("code", ["itemsPerPage"]), " ", m("em", ["(default 10)"]), ": Number of items per page."])]),
    m("li", [m("p", [m("code", ["maxSize"]), " ", m("em", ["(default 5)"]), ": Limit number for pagination size."])]),
    m("li", [m("p", [m("code", ["directionLinks"]), m("em", ["(default true)"]), ": Whether to display Previous / Next buttons."])]),
    m("li", [m("p", [m("code", ["boundaryLinks"]), " ", m("em", ["(default false)"]), ": Whether to display First / Last buttons."])]),
    m("li", [m("p", [m("code", ["previousText"]), " ", m("em", ["(default 'Previous')"]), " : Text for Previous button."])]),
    m("li", [m("p", [m("code", ["nextText"]), " ", m("em", ["(default 'Next')"]), " : Text for Next button."])]),
    m("li", [m("p", [m("code", ["firstText"]), " ", m("em", ["(default 'First')"]), " : Text for First button."])]),
    m("li", [m("p", [m("code", ["lastText"]), " ", m("em", ["(default 'Last')"]), " : Text for Last button."])])
  ]),
  m("h3", {
    id: "methods"
  }, ["Methods"]),
  m("ul", [
    m("li", [m("p", [m("code", ["numPages()"]), ": Total number of pages."])]),
    m("li", [m("p", [m("code", ["setPage(page)"]), ": Set current page."])])
  ])
]);
demo.small = 'm.ui.pagination';
demo.files = {
  'demo.jsx': "// START\r\nvar demo = {};\r\ndemo.controller = function() {\r\n  this.countries = m.request({\r\n    method: 'GET',\r\n    url: 'countries.json'\r\n  });\r\n  this.totalItems = function() {\r\n    return this.countries()? this.countries().length : 0;\r\n  }.bind(this);\r\n\r\n  this.currentPage = m.prop(0);\r\n  this.itemsPerPage = m.prop(5);\r\n  this.maxSize = 7;\r\n  this.directionLinks = true;\r\n  this.boundaryLinks = true;\r\n  this.previousText = '<';\r\n  this.nextText = '>';\r\n\r\n  this.pagination = m.u.init(m.ui.pagination(this));\r\n};\r\n\r\ndemo.view = function(ctrl) {\r\n  var size = ctrl.itemsPerPage();\r\n  var page = ctrl.currentPage();\r\n  var rows = ctrl.countries()\r\n    .slice(size*page, size*(page+1))\r\n    .map(function(item, i) {\r\n      return <tr>\r\n        <td>{size*page + i + 1}</td>\r\n        <td><img src={item.flag}/>&nbsp;{item.name}</td>\r\n      </tr>;\r\n    });\r\n\r\n  return INCLUDE('./template');\r\n};\r\n// END\r\n\r\ndemo.doc =  INCLUDE('./readme');\r\ndemo.small = 'm.ui.pagination';\r\ndemo.files = {\r\n  'demo.jsx': CONTENT('./demo.jsx'),\r\n  '_template.jsx': CONTENT('./_template.jsx'),\r\n};\r\nmodule.exports = demo;\r\n",
  '_template.jsx': "<div>\r\n  <pre>\r\n    Total: {ctrl.totalItems()}<br/>\r\n    Page: {page}/{ctrl.pagination.numPages()} (zero-based)\r\n  </pre>\r\n  <div>{ctrl.pagination.$view()}</div>\r\n  <button class=\"btn btn-info\"\r\n    onclick={function(){ ctrl.pagination.setPage(10); }}>\r\n    Go to page 10\r\n  </button>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"#\">#</th>\r\n        <th>Country</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      {rows}\r\n    </tbody>\r\n  </table>\r\n</div>\r\n",
};
module.exports = demo;
}); // pagination/docs/demo
