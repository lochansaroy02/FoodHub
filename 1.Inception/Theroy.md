# Inception

## Question 

### What is an emmet?
 emmet is an plug in many populer text editors which improve HTML and CSS work flow 

### Difference Between Frameworks & Library 
This means the developer decides when to call the library. However, when we use a framework, the framework decides when to call the library. \
When we use a framework, we can use resources to facilitate faster development and a greater user experience\
A library is used to enhance the functionality of an application. If we develop our own library, we can use the functions in many applications.

### What is CDN? Why do we use it?
It is a group of distribute and interconnected servers. Which provides chached internet content form a network location  closest to a  user to spead up its delivery. 
 
``` <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>```

### What is crossorigin in CDN script tag? 
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.\
Web pages often make requests to load resources on other servers. Here is where CORS comes in.\
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

### Defferance between React and React DOM 
**React:** React is a javascript library, designed for building better user interfaces.\
**React-DOM:** React-DOM is a complimentary library to React which glues React to the browser DOM\
Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like `render()`  or `findDOMNode()` we’re using React-DOM.

### Defferance between Development and Production 
 Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.