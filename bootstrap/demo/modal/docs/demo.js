
define('modal/docs/demo', function(require, module, exports) {

/** @jsx m */
// START
/** @jsx m */
var modal = {};
modal.controller = function(params) {
  var ctrl = this;
  ctrl.items = params.items;
  ctrl.selected = m.prop('item1');

  ctrl.ok = function() {
    ctrl.$modal.close(ctrl.selected());
  };

  ctrl.cancel = function() {
    ctrl.$modal.dismiss('Cancel');
  };
};

modal.view = function(ctrl) {
  return m("div", [
    m("div", {
      class: "modal-header"
    }, [
      m("h3", {
        class: "modal-title"
      }, ["I'm a modal!"])
    ]),
    m("div", {
      class: "modal-body"
    }, [
      m("ul", [

        ctrl.items.map(function(item) {
          return m("li", [
            m("a", {
              onclick: m.u.bind(ctrl.selected, ctrl, item)
            }, [item])
          ]);
        })

      ]),
      "Selected: ", m("b", [ctrl.selected()])
    ]),
    m("div", {
      class: "modal-footer"
    }, [
      m("button", {
        class: "btn btn-primary",
        onclick: ctrl.ok
      }, ["OK"]),
      m("button", {
        class: "btn btn-warning",
        onclick: ctrl.cancel
      }, ["Cancel"])
    ])
  ]);
};

var demo = {};
demo.controller = function() {
  var ctrl = this;
  ctrl.items = ['item1', 'item2', 'item3'];
  ctrl.selected = m.prop('');
  ctrl.openModal = function(size) {
    return function() {
      ctrl.modalInstance = m.u.init(m.ui.modal({
        size: size,
        params: {
          items: ctrl.items
        },
        module: modal
      }));

      ctrl.modalInstance.result.then(function(selectedItem) {
        ctrl.selected(selectedItem);
      }, function() {
        console.log('Modal dismissed');
      });
    };
  };
};

demo.view = function(ctrl) {
  return m("div", [
    m("button", {
      class: "btn btn-default",
      onclick: ctrl.openModal()
    }, [
      "Open me!"
    ]), " ",
    m("button", {
      class: "btn btn-default",
      onclick: ctrl.openModal('lg')
    }, [
      "Large modal"
    ]), " ",
    m("button", {
      class: "btn btn-default",
      onclick: ctrl.openModal('sm')
    }, [
      "Small modal"
    ]),

    ctrl.selected() ?
    m("div", {
      'ng-show': "selected"
    }, [
      "Selection from a modal: ", ctrl.selected()
    ]) : [],

    m("div", [
      ctrl.modalInstance ? ctrl.modalInstance.$view() : []
    ])
  ]);
};
// END

demo.doc = m("div", [
  m("p", ["Quickly create Bootstrap's modal in Mithril"]),
  m("p", [m("strong", ["TODO"]), ": animation, params, $modal, keyboard, backdrop"]),
  m("h2", {
    id: "usage"
  }, ["Usage"]),
  m("p", [m("code", ["m.ui.modal(settings)"])]),
  m("h3", {
    id: "settings"
  }, ["Settings"]),
  m("ul", [
    m("li", [m("p", [m("code", ["module"]), " ", m("em", ["(required)"]), ": Modal instance module."])]),
    m("li", [m("p", [m("code", ["size"]), ": Optional size of modal window. Allowed: ", m("code", ["'sm'"]), " or ", m("code", ["'lg'"]), "."])]),
    m("li", [m("p", [m("code", ["params"]), ": Optional params to pass to modal instance controller as ", m("code", ["controller(params)"]), "."])]),
    m("li", [m("p", [m("code", ["onopen"]), " ", m("em", [m("code", ["function(modalCtrl)"])]), ": Optional callback. If set, it will be called after the modal display and the modal instance callback runs."])]),
    m("li", [m("p", [m("code", ["onclose"]), " ", m("em", [m("code", ["function(result, reason)"])]), ": Optional callback. If set, it will be called after the modal close as ", m("code", ["onclose(result)"]), " or dismiss as ", m("code", ["onclose(undefined, reason)"]), "."])])
  ]),
  m("h3", {
    id: "modal-properties-and-methods"
  }, ["Modal Properties and Methods"]),
  m("p", ["These properties and methods are accessible from outside or via ", m("code", ["this.$modal"]), " inside modal instance controller."]),
  m("ul", [
    m("li", [m("p", [m("code", ["result"]), ": A promise that is resolved when a modal is closed and rejected when a modal is dismissed."])]),
    m("li", [m("p", [m("code", ["opening()"]), ": Boolean value indicates that the modal is opening."])]),
    m("li", [m("p", [m("code", ["open()"]), ": Display the modal. The modal is display by default so you usually do not need to call this method directly."])]),
    m("li", [m("p", [m("code", ["close(result)"]), ": Close a modal and pass a result."])]),
    m("li", [m("p", [m("code", ["dismiss(reason)"]), ": Dismiss a modal and pass a reason."])])
  ]),
  m("h3", {
    id: "modal-instance"
  }, ["Modal Instance"]),
  m("p", ["Modal instance controller are call with ", m("code", ["controller(params)"]), " where ", m("code", ["params"]), " is ", m("code", ["settings.params"]), "."]),
  m("ul", [
    m("li", [m("p", [m("code", ["$modal"]), ": Access the modal controller and its methods."])]),
    m("li", [m("p", [m("code", ["onopen"]), " ", m("em", [m("code", ["function(modalCtrl)"])]), ": If set, it will be called when the modal display and before ", m("code", ["settings.onopen"]), " is called."])]),
    m("li", [m("p", [m("code", ["onclose"]), " ", m("em", [m("code", ["function(result, reason)"])]), ": If set, it will be called when the modal close as ", m("code", ["onclose(result)"]), " or dismiss as", m("code", ["onclose(undefined, reason)"]), "."])])
  ])
]);
demo.small = 'm.ui.modal';
demo.files = {
  'demo.jsx': "// START\nINCLUDE('./modal')\n\nvar demo = {};\ndemo.controller = function() {\n  var ctrl = this;\n  ctrl.items = ['item1', 'item2', 'item3'];\n  ctrl.selected = m.prop('');\n  ctrl.openModal = function(size) {\n    return function() {\n      ctrl.modalInstance = m.u.init(m.ui.modal({\n        size: size,\n        params: {\n          items: ctrl.items\n        },\n        module: modal\n      }));\n\n      ctrl.modalInstance.result.then(function(selectedItem) {\n        ctrl.selected(selectedItem);\n      }, function() {\n        console.log('Modal dismissed');\n      });\n    };\n  };\n};\n\ndemo.view = function(ctrl) {\n  return INCLUDE('./template');\n};\n// END\n\ndemo.doc =  INCLUDE('./readme');\ndemo.small = 'm.ui.modal';\ndemo.files = {\n  'demo.jsx': CONTENT('./demo.jsx'),\n  '_template.jsx': CONTENT('./_template.jsx'),\n  '_modal.jsx': CONTENT('./_modal.jsx'),\n  '_modal.tpl.jsx': CONTENT('./_modal.tpl.jsx')\n};\nmodule.exports = demo;\n",
  '_template.jsx': "<div>\n  <button class=\"btn btn-default\" onclick={ctrl.openModal()}>\n    Open me!</button>&nbsp;\n  <button class=\"btn btn-default\" onclick={ctrl.openModal('lg')}>\n    Large modal</button>&nbsp;\n  <button class=\"btn btn-default\" onclick={ctrl.openModal('sm')}>\n    Small modal</button>\n  {\n    ctrl.selected()?\n    <div ng-show=\"selected\">\n      Selection from a modal: {ctrl.selected()}\n    </div>: []\n  }\n  <div>\n  {ctrl.modalInstance? ctrl.modalInstance.$view() : []}\n  </div>\n</div>\n",
  '_modal.jsx': "var modal = {};\nmodal.controller = function(params) {\n  var ctrl = this;\n  ctrl.items = params.items;\n  ctrl.selected = m.prop('item1');\n\n  ctrl.ok = function() {\n    ctrl.$modal.close(ctrl.selected());\n  };\n\n  ctrl.cancel = function() {\n    ctrl.$modal.dismiss('Cancel');\n  };\n};\n\nmodal.view = function(ctrl) {\n  return INCLUDE('./modal.tpl');\n};\n",
  '_modal.tpl.jsx': "<div>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\">I'm a modal!</h3>\n  </div>\n  <div class=\"modal-body\">\n    <ul>\n      {\n        ctrl.items.map(function(item) {\n          return <li>\n            <a onclick={m.u.bind(ctrl.selected, ctrl, item)}>{item}</a>\n          </li>;\n        })\n      }\n    </ul>\n    Selected: <b>{ctrl.selected()}</b>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" onclick={ctrl.ok}>OK</button>\n    <button class=\"btn btn-warning\" onclick={ctrl.cancel}>Cancel</button>\n  </div>\n</div>\n"
};
module.exports = demo;
}); // modal/docs/demo
