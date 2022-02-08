console.log ("Hello, World!")
// How do I get this stuff on the page??

// Do I have access to the other js files here?
// (you can check in the console)
// console.log(menuItems)
const customers = document.querySelectorAll(".customers")
console.log ("directory", customers)

const customer = customers[0]

const customerDiv = document.getElementById('customers')

console.log('customer div', customer)
// // Let's make our job easier by figuring this out for ONE object instead of an array of objects
// // grad just the first menu item object to work with. We won't need this later; this is just for development purposes!
// const menuItem = menuItems[0]
// // select the element that is already in the DOM where I want to insert the new content
// const menuDiv = document.getElementById('menu-items')

// // for loop -> loop through each item (object) so that we can create a chunk on the page with all the data we want
// // access data in each menu item object (we can use dot notion)

// for (let menuItem of menuItems) {
//   // need to get the title of each menu item
//   let title = menuItem.title
//   console.log('Title: ', title)
//   // put the title into the html so it will display on the page
//   // attach new DOM content to the menu items div
//   // create an h2 element
//   const h2El = document.createElement('h2')
//   h2El.classList.add('menu-heading')
//   console.log(h2El)
//   // create the text to include in that element
//   const h2Text = document.createTextNode(title)
//   // combine the element and the text
//   h2El.appendChild(h2Text)
//   // insert this whole thing into the DOM
//   menuDiv.appendChild(h2El) // compare to line 31 below

//   // be able to show the image for each menu item
//   // use the url information from the object
//   let srcURL = menuItem.image.url
//   console.log('src is', srcURL)
//   let altText = menuItem.image.altText
//   console.log('alt is ', altText)
//   // and put it into the html so it will display on the page
//   // Setting innerHTML is an alternative way to add elements to the DOM, but it is easy to break the DOM this way, so watch out
//   // Doing it this way lets me use a template literal string to compose an element more easily.
//   menuDiv.innerHTML += `
//   <div>
//     <img class='menu-img' src=${menuItem.image.url} alt=${menuItem.image.altText} />
//   </div>
//   `
// }

// /*
// We aren't using dates in this code, but we included Moment.js as an example for the customer directory homework
// Notice that we included the copied code from the Moment.js website (https://momentjs.com/) in a file in our project directory
// Then we included it *before* this file in a script tag in our index.html
// */

// // Note that this is not the format you need for your lab, so you'll have to consult the documentation for more specifics
// // Here is a direct link to the docs: https://momentjs.com/docs/

// // moment("1990-07-28T13:05:47.042Z").format("MMMM Do YYYY, h:mm:ss a")