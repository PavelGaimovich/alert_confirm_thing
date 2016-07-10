Example how to avoid using confirm()
====================================
No Bootstrap, no JQuery and JQueryUI.
In example was used callbacks.
First task is to avoid using confirm, because user can check in 'Prevent this page from creating additional dialogs.'
Second task how to make pattern for implementation in existing code.
~~~~~~
if (confirm('Do important modifications?')){
  do_modifications();
} else {
  undone_modifications();
};
~~~~~~
With this example:
~~~~~~
manualConfirm(
  'Do important modifications?',
  function(){ --positive answer
    do_modifications();
  },
  function(){ --negative answer
    undone_modifications();
  }
);
~~~~~~
