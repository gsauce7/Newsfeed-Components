// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


// Step 1 - write component
function menuMaker(array) {
  const menuButton = document.querySelector('.menu-button')
  // create the menu
  const menu = document.createElement('div');
  menu.classList.add('menu')
  const list = document.createElement('ul');

  // Step 2 - add items to the menu based on each item in the array - add list items to the unordered list
  array.forEach(element => {
    const item = document.createElement('li');
    item.textContent = element;
    list.appendChild(item);
  })
// add the ul with all its child items to the menu
  menu.appendChild(list);

// Step 3 select the menu button from the DOM using the variable created earlier that points to .menu-button
// Step 4 add click event listener to the menu button that opens and closes the menu
  menuButton.addEventListener('click', event=>{
      menu.classList.toggle('menu--open');
  })
// Step 5 - the output of this function
  return menu;

}

// Step 6 - create and add the menu to the header/call the menuMaker function and append to header, passing in the menuItems array
const header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems));

