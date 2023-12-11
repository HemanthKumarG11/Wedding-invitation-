var textHistory = [];
var currentIndex = -1;

function toggleMainMenu() {
    var submenu = document.getElementById("mainMenu");
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function undo() {
    if (currentIndex > 0) {
        currentIndex--;
        var textOverlay = document.getElementById("textOverlay");
        textOverlay.textContent = textHistory[currentIndex];
        updateUndoRedoButtons();
    } else {
        alert("Nothing to undo");
    }
}

function redo() {
    if (currentIndex < textHistory.length - 1) {
        currentIndex++;
        var textOverlay = document.getElementById("textOverlay");
        textOverlay.textContent = textHistory[currentIndex];
        updateUndoRedoButtons();
    } else {
        alert("Nothing to redo");
    }
}

function showTextMenu(event) {
    var textMenu = document.getElementById("textMenu");
    textMenu.style.display = "block";
}

function closeTextMenu() {
    var textMenu = document.getElementById("textMenu");
    textMenu.style.display = "none";
}

function updateImageText() {
    var textInput = document.getElementById("textInput").value;
    var textOverlay = document.getElementById("textOverlay");

    textOverlay.textContent = textInput;

    currentIndex++;
    textHistory = textHistory.slice(0, currentIndex);
    textHistory.push(textInput);

    updateUndoRedoButtons();
    closeTextMenu();
}

function updateUndoRedoButtons() {
    var undoButton = document.querySelector(".undo-redo-buttons .undo-redo-button:first-child");
    var redoButton = document.querySelector(".undo-redo-buttons .undo-redo-button:last-child");

    undoButton.disabled = currentIndex === 0;
    redoButton.disabled = currentIndex === textHistory.length - 1;
}
