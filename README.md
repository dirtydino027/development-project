# Development

### Link to Deployed Website
https://dirtydino027.github.io/development

### Goal and Value of the Application
The goal of this application was to build a bakery website where users can look at the items
available at the bakery, filter/sort them in various ways, and add/remove them to a cart, which
shows all the items the user has added as well as an aggregate price of those items. The value
of this application to a user is that they can browse bakery items according to the characteristics
important to them using the filter and sort options, create a cart with all the items they want,
and see the total amount of money those items will cost them.

### Usability Principles Considered
This website is simple and straightforward, with an intuitive scrolling layout playing the filtering/
sorting/reverting options at the top and the cart/total price at the bottom. The colors are fun but
also provide high contrast so that the text is easy to read, and the buttons are large and clear.
Another decision I made for usability was including a "revert back 2 original state" button at the top
so that the user can easily see the initial bakery items without having to uncheck each filter/sort
checkbox.

### Organization of Components
There is one component in this application, BakeryItem, which factors out the code, functionality, and
style for each bakery item, including its name, description, color, type, image, price, and add/remove
buttons. This component is then used in App.js when the bakery data is mapped onto the bakery list.

### How Data is Passed Down Through Components
Data is passed through components using props. Props are used to pass the bakery item attributes from
the data in App.js to the html in BakeryItem.js, as well as to pass the functions in App.js that need
to be called on button clicks from BakeryItem.js.

### How the User Triggers State Changes
I use state for the cart items and cart price, the current checked filters and sorts, the current
data that should be displayed, as well as the unsorted version of that data (in case the used unchecks
a sort option). Therefore, whenever the used adds/removes a bakery item to/from the cart, checks/
unchecks a filter/sort checkbox, or clicks the revert button, a state change is triggered.

