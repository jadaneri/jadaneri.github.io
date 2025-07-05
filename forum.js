//inidialize supabase
const supabaseUrl = 'https://athzktuinqgykmsdjwce.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0aHprdHVpbnFneWttc2Rqd2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NTIyNzUsImV4cCI6MjA2NjAyODI3NX0.n8vsyVCuigojDDCYK7ju7-GkRrH7p4JVQ99MCnzU_2A';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);


//variable for name
const nameInput = document.getElementById('nameInput');
// var for message
const noteInput = document.getElementById('noteInput');
//var for 'post' button
const submitNote = document.getElementById('submitNote');
// var for the 'wall'
const notesWall = document.getElementById('notesWall');

//submit note
submitNote.addEventListener('click', async function(){
    const name = nameInput.value.trim || 'Anonymous';
    const text = noteInput.value.trim;

    if (!text) {
        alert('enter a message');
        return;
    }

    const { data, error } = await supabase // 'data' and 'error' are what is returned
        .from('messages') //which table in our database we're using
        .insert([{name,text }]); // add new rows!
})