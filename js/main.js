


//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(){
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    //When you want to store data to localStorage you would most likely use an array of objects to store that data
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    
    
    
    
    
    //This premade method is designed to prevent the page from actually submitting so that we could work with the code
    e.preventDefault();
}















































