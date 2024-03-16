// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// console.log(hour9);

$(function () {
  let hour9 = document.body.children[1].children[0];
  let hour10 = document.body.children[1].children[1];
  let hour11 = document.body.children[1].children[2];
  let hour12 = document.body.children[1].children[3];
  let hour13 = document.body.children[1].children[4];
  let hour14 = document.body.children[1].children[5];
  let hour15 = document.body.children[1].children[6];
  let hour16 = document.body.children[1].children[7];
  let hour17 = document.body.children[1].children[8];

let localStorageKeys = ["nine1", "ten1", "eleven1", "twelve1", "thirteen1", "fourteen1", "fifteen1", "sixteen1", "seventeen1"];

  let time = [
    parseInt(hour9.children[0].dateTime),
    parseInt(hour10.children[0].dateTime),
    parseInt(hour11.children[0].dateTime),
    parseInt(hour12.children[0].dateTime),
    parseInt(hour13.children[0].dateTime),
    parseInt(hour14.children[0].dateTime),
    parseInt(hour15.children[0].dateTime),
    parseInt(hour16.children[0].dateTime),
    parseInt(hour17.children[0].dateTime),
  ];
  console.log(time);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  function saveNote(ev) {
    var hour = ev.target.id;
    console.log(ev);
    var note = document.getElementById(`${hour}1`).value;
    localStorage.setItem(`${hour}1`, note);
  };
  
  var nine = document.getElementById('nine').addEventListener("click", saveNote);
  var ten = document.getElementById('ten').addEventListener("click", saveNote);
  var eleven = document.getElementById('eleven').addEventListener("click", saveNote);
  var twelve = document.getElementById('twelve').addEventListener("click", saveNote);
  var thirteen = document.getElementById('thirteen').addEventListener("click", saveNote);
  var fourteen = document.getElementById('fourteen').addEventListener("click", saveNote);
  var fifteen = document.getElementById('fifteen').addEventListener("click", saveNote);
  var sixteen = document.getElementById('sixteen').addEventListener("click", saveNote);
  var seventeen = document.getElementById('seventeen').addEventListener("click", saveNote);

localStorageKeys.forEach((currentKey)=>getNotes(currentKey));
function getNotes(currentKey) {
  let currentLocalValue = localStorage.getItem(currentKey);
  if( currentLocalValue != undefined ) {
    document.getElementById(currentKey).value = currentLocalValue;
  }
};

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  let currentHour = dayjs().hour();
  console.log(currentHour);

  time.forEach((currentTime)=>colorTime(currentTime));
  function colorTime(currentTime) {
    var row = document.querySelector(".row");
    console.log(typeof currentTime);
    if (currentHour === currentTime) {
      row.setAttribute('class', 'present')
    } else if (currentHour > currentTime) {
      row.setAttribute('class', 'past')
    } else {
      row.setAttribute('class', 'future')
    }
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});
