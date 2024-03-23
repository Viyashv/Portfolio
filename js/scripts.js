/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// $(document).ready(function() {

//     $('.word_count').each(function() {
//         var input = '#' + this.id;
//         var count = input + '_count';
//         $(count).show();
//         word_count(input, count);
//         $(this).keyup(function() { word_count(input, count) });
//     });

// });

// function word_count(field, count) {

//     var number = 0;
//     var matches = $(field).val().match(/b/g);
//     if(matches) {
//         number = matches.length/2;
//     }
//     $(count).text( number + ' word' + (number != 1 ? 's' : '') + ' approx');

// }


let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});