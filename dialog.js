var Dialog = Dialog || (function(){
  var domDialog = document.getElementsByClassName('js-dialog')[0];
  var domDialogText = document.getElementsByClassName('js-dialog-headerText')[0];
  var domDialogSubmit = document.getElementsByClassName('js-dialog-btn-submit')[0];
  var domDialogRefuse = document.getElementsByClassName('js-dialog-btn-refuse')[0];
  var domDialogConfirmButtons = document.getElementsByClassName('js-confirm-buttons')[0];
  var domDialogAlertButton = document.getElementsByClassName('js-alert-button')[0];

  var hideDom = function(dom) {
    dom.className = dom.className + ' hidden';
  };
  var showDom = function(dom) {
    dom.className = dom.className.replace(/hidden/,'');
  };
  var showConfirmButtons = function(){
    showDom(domDialogConfirmButtons);
  };
  var hideConfirmButtons = function(){
    hideDom(domDialogConfirmButtons);
  };
  var showAlertButton = function(){
    showDom(domDialogAlertButton);
  };
  var hideAlertButton = function(){
    hideDom(domDialogAlertButton);
  };
  var showDialog = function(){
    showDom(domDialog);
  };
  var hideDialog = function(){
    hideDom(domDialog);
  };
  return {
    manualConfirm: function(text, positive, negative) {
      var wrapPositive = function() {
        hideDialog();
        positive();
      };

      var wrapNegative = function() {
        hideDialog();
        negative();
      };

      domDialogText.innerText = text;
      domDialogSubmit.addEventListener("click", wrapPositive);
      domDialogRefuse.addEventListener("click", wrapNegative);

      showConfirmButtons();
      hideAlertButton();
      showDialog();
    },
    manualAlert: function(text) {
      domDialogText.innerText = text;
      domDialogAlertButton.addEventListener("click", hideDialog);
      hideConfirmButtons();
      showAlertButton();
      showDialog();
    }
  }
})();
