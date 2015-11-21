(function() {
    // Find all hide-button forms
    var buttonParent = document.getElementsByClassName('hide-button');
    for (var i = 0; buttonParent[i]; i++) {

        // Find the anchor tag inside the parent and click on it
        var button = buttonParent[i].getElementsByTagName('a');
        button[0].click();
    }
})();
