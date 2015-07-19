(function(){
function save_options() {
    var selected = document.querySelectorAll("input[name=annoyances]:checked");
    var selectedValues = new Array;
    for(var i=0; i < selected.length; i++) {
        selectedValues.push(selected[i].value);
    }
    chrome.storage.sync.set({"selectedValues": selectedValues}, function() {
        var msgbox = document.getElementById('messagebox');
        msgbox.innerHTML = "Settings saved.";
        setTimeout(function(){
           msgbox.innerHTML = ""; 
        }, 1000);
    })
}

function load_options() {
    
}

document.getElementById('save').addEventListener('click', save_options);    
}());