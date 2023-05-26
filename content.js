// Change all divs from one class to another
function change_divs()
{
    var divs = document.getElementsByClassName("css-1lda724 ei8r4r28");

    for(var i = (divs.length - 1); i >= 0; i--)
    {
      divs[i].className = "jo6g-Content-black";
      var text = divs[i].textContent;
      console.log(text);
    }
};


// Read in the correct answers from a text file
function read_input()
{
    var url = chrome.runtime.getURL('input.txt');
    return fetch(url).then(function(response) {
      return response.text().then(function(text) {
        const lines = text.split("\n"); //array of words
        return lines;
        //console.log(text); /* Outputs the entire txt file to the console */
      });
    });
}


// Identify all divs that contain correct answers

//change_divs();
var input = read_input();
//change_divs()


//https://stackoverflow.com/questions/68897469/how-can-i-convert-a-txt-document-into-an-array-in-javascript

//https://www.freecodecamp.org/news/check-if-an-item-is-in-an-array-in-javascript-js-contains-with-array-includes/