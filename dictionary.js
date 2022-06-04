const textBox = document.querySelector(".txtBox1");
const form = document.querySelector(".searchForm");
const searchWord = document.querySelector(".search-word");
const description = document.querySelector(".description");
// dictionary source
const dictionaryJson = "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json";


function searchDict(e) {
  e.preventDefault();
  fetch(dictionaryJson)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      e.preventDefault;
      let word = textBox.value;
      let searchKeyword = word.toUpperCase();
      Object.keys(data).forEach(function(key) {
        if (key === searchKeyword) {
          searchWord.innerHTML = searchKeyword;
          if(searchKeyword === data[key]){
            description.innerHTML = "Not found";
          }
          else{
             description.innerHTML = data[key];
          }
          
          console.log(data[key]);
        }
      });
    });
}

// bind button with searchDict() function
form.addEventListener("submit", searchDict);
