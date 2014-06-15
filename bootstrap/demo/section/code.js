
define('section/code', function(require, module, exports) {

/** @jsx m */
var start = '// START';
var end = '// END';
var r = new RegExp(start + '([\\s\\S]*?)' + end);

module.exports = function(code) {

  function preprocess(v) {
    var matches = r.exec(v);
    return matches ? matches[1].trim() : v;
  }

  function controller() {
    this.code = preprocess(code);
  }

  function view(ctrl) {
    function highlight(elem, isInit) {
      if (!isInit) {
        hljs.highlightBlock(elem);
      }
    }

    return m("pre", [
      m("code", {
        config: highlight
      }, [
        ctrl.code
      ])
    ]);
  }

  return {
    controller: controller,
    view: view
  };
};
}); // section/code
