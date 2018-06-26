(function() {
    // Find all hide-button forms
    var stringLocation = String(window.location.href);
    if (stringLocation.includes('reddit')==false) {
      var usrResponse = confirm("This doesn't look like a Reddit page; the extension might not work properly. Do you want to try anyway?")
      if (usrResponse!=true) {
        return;
      }
    }
    var redditType = "new"
    if (stringLocation.includes('old.reddit')) {
      redditType = 'old';
    }
    switch (redditType) {
      case "old":
        var buttonParent = document.getElementsByClassName('hide-button');
        for (var i = 0; buttonParent[i]; i++) {
            // Find the anchor tag inside the parent and click on it
            var button = buttonParent[i].getElementsByTagName('a');
            button[0].click();
        }
        break;
      case "new":
        var screenButtons = document.getElementsByTagName('button');
        for (const btn of screenButtons) {
          //Click the ... menu
          if (btn.id.includes('overflow-menu')) {
            btn.click();
            //Now find the hide button
            setTimeout(function () {
              var menuItems = document.getElementsByClassName('vmyrg0-9 buGhCJ b1zwxr-0 hxpTao');
              for (const menuItem of menuItems) {
                var menuLabel = menuItem.children[1];
                if (menuLabel.innerHTML == 'hide') {
                  menuItem.click();
                }
              }
            }, 100);
          }
        }
    }
})();
