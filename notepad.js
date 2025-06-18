//get the text area, button, and status message elements
const notepad = document.getElementById('notepad');

//load any saved notes
const savedNote = localStorage.getItem('note');
if (savedNote) {
    notepad.value = savedNote;
}

//event listeners, save as you type
notepad.addEventListener('input', function() {
    localStorage.setItem('note' , notepad.value);
});
