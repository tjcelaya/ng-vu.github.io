
define('section/code', function(require, module, exports) {

/** @jsx m */
module.exports = function(code) {

  function controller() {

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
        code
      ])
    ]);
  }

  return {
    controller: controller,
    view: view
  };
};
}); // section/code
