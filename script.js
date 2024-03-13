// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


let hour9 = document.body.children[1].children[0];
let hour10 = document.body.children[1].children[1];
let hour11 = document.body.children[1].children[2];
let hour12 = document.body.children[1].children[3];
let hour13 = document.body.children[1].children[4];
let hour14 = document.body.children[1].children[5];
let hour15 = document.body.children[1].children[6];
let hour16 = document.body.children[1].children[7];
let hour17 = document.body.children[1].children[8];
// console.log(hour9);

let time = [
  hour9.children[0].dateTime,
  hour10.children[0].dateTime,
  hour11.children[0].dateTime,
  hour12.children[0].dateTime,
  hour13.children[0].dateTime,
  hour14.children[0].dateTime,
  hour15.children[0].dateTime,
  hour16.children[0].dateTime,
  hour17.children[0].dateTime,
];
console.log(time);


// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // addEventListener("click", button.hourX[0]);
  // addEventListener("click", button.hourX[1]);
  // addEventListener("click", button.hourX[2]);
  // addEventListener("click", button.hourX[3]);
  // addEventListener("click", button.hourX[4]);
  // addEventListener("click", button.hourX[5]);
  // addEventListener("click", button.hourX[6]);
  // addEventListener("click", button.hourX[7]);
  // addEventListener("click", button.hourX[8]);
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  let currentHour = dayjs().hour();
  console.log(currentHour);
  
  time.forEach(colorTime);
  function colorTime() {
    var row = document.querySelector(".row");
    if (currentHour === time) {
      row.setAttribute('class', 'present')
    } else if (currentHour > time) {
      row.setAttribute('class', 'future')
    } else {
      row.setAttribute('class', 'past')
    }
  };
  
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
// });
