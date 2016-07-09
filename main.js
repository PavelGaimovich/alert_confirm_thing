function manualConfirm(text, positive, negative) {
  var domDialog = document.getElementsByClassName('js-dialog')[0];
  var domDialogText = document.getElementsByClassName('js-dialog-headerText')[0];
  var domDialogSubmit = document.getElementsByClassName('js-dialog-btn-submit')[0];
  var domDialogRefuse = document.getElementsByClassName('js-dialog-btn-refuse')[0];

  domDialog.className = domDialog.className.replace(/\bhidden\b/,'');

  var hideDialog = function(){
    domDialog.className = domDialog.className + ' hidden';
  };

  var wrapPositive = function() {
    positive();
    hideDialog();
  };

  var wrapNegative = function() {
    negative();
    hideDialog();
  };

  domDialogText.innerText = text;
  domDialogSubmit.addEventListener("click", wrapPositive);
  domDialogRefuse.addEventListener("click", wrapNegative);
};
