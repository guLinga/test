document.onkeydown = function () {
  // 禁止F12
  if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
  }
  // 禁止ctrl
  if ((window.event.ctrlKey || window.event.metaKey)) {
    event.keyCode = 0;
    event.returnValue = false;
    return;
  }
  // 禁止F5
  if (window.event.keyCode == 116) {
    event.keyCode = 0;
    event.returnValue = false;
  }
  if ((window.event.ctrlKey || window.event.metaKey) && (window.event.shiftKey || window.event.metaKey) && (window.event.key == 'c' || window.event.key == 'C')) {
    event.keyCode = 0;
    event.returnValue = false;
  }
}

// 禁用右键菜单
document.oncontextmenu = function (event) {
  return false;
}