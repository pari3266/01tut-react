# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



---------------------------------------------------------

https://www.ziprecruiter.com/ 

https://styled-components.com/ 

 

React is a JavaScript library for building user interfaces. 

 

https://nodejs.org/en/download/ 

For create a new project: 

npx create-react-app 01tut 

 

Npm start 

The smallest React example looks like this: 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<h1>Hello, world!</h1>); 

-------------------------------------------------------------------------------- 

 

const element = <h1>Hello, world!</h1>; 

 

This funny tag syntax is neither a string nor HTML. 

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript 

 

const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>; 

 

 

 

 

 

 

EX: https://codepen.io/gaearon/pen/PGEjdG?editors=1010 

 

HTML FILE: 

 

<div id="root"> 

  <!-- This div's content will be managed by React. --> 

</div> 

 

JS FILE: 

function formatName(user) { 

  return user.firstName + ' ' + user.lastName; 

} 

  

const user = { 

  firstName: 'Harper', 

  lastName: 'Perez' 

}; 

  

const element = ( 

  <h1> 

    Hello, {formatName(user)}! 

  </h1> 

); 

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(<h1>{element}</h1>); 

OUTPUT: 

Hello, Harper Perez! 

 

 

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks. 

 
 

These two examples are identical: 

const element = ( 
  <h1 className="greeting"> 
    Hello, world! 
  </h1> 
); 

const element = React.createElement( 
  'h1', 
  {className: 'greeting'}, 
  'Hello, world!' 
); 

 

 

An element describes what you want to see on the screen: 

const element = <h1>Hello, world</h1>; 

 

To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render(): 

const root = ReactDOM.createRoot( 
  document.getElementById('root') 
); 
const element = <h1>Hello, world</h1>; 
root.render(element); 

 

 

 

 

 

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time. 

 

const root = ReactDOM.createRoot( 
  document.getElementById('root') 
); 
 
function tick() { 
  const element = ( 
    <div> 
      <h1>Hello, world!</h1> 
      <h2>It is {new Date().toLocaleTimeString()}.</h2> 
    </div> 
  ); 
  root.render(element);} 
 
setInterval(tick, 1000); 

 

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state. 

 

 

 

 

 

 

 

 

 

 

 

 

Components: 

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components 

 

function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>; 
} 

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions. 

 

You can also use an ES6 class to define a component: 

class Welcome extends React.Component { 
  render() { 
    return <h1>Hello, {this.props.name}</h1>; 
  } 
} 

 
const element = <Welcome name="Sara" />; 

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”. 

function Welcome(props) {   

return <h1>Hello, {props.name}</h1>; 
} 
 
const root = ReactDOM.createRoot(document.getElementById('root')); 
const element = <Welcome name="Sara" />; 

root.render(element); 

 

Note: Always start component names with a capital letter. 

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components. 

 

https://codepen.io/gaearon/pen/MjQWQO?editors=1010 

 

State and Lifecycle: 

State is similar to props, but it is private and fully controlled by the component. 

 
 

const root = ReactDOM.createRoot(document.getElementById('root')); 
 
function Clock(props) { 
  return ( 
    <div>      <h1>Hello, world!</h1>      <h2>It is {props.date.toLocaleTimeString()}.</h2>    </div>  ); 
} 
 
function tick() { 
  root.render(<Clock date={new Date()} />);} 
 
setInterval(tick, 1000); 

 

 

 

 

 

 

 

Converting a Function to a Class 

You can convert a function component like Clock to a class in five steps: 

Create an ES6 class, with the same name, that extends React.Component. 

Add a single empty method to it called render(). 

Move the body of the function into the render() method. 

Replace props with this.props in the render() body. 

Delete the remaining empty function declaration. 

class Clock extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h1>Hello, world!</h1> 
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2> 
      </div> 
    ); 
  } 
} 

 

 

 

Adding Local State to a Class 

We will move the date from props to state in three steps: 

Replace this.props.date with this.state.date in the render() method: 

Add a class constructor that assigns the initial this.state: 

Remove the date prop from the <Clock /> element: 

 

class Clock extends React.Component { 
  constructor(props) {    super(props);    this.state = {date: new Date()};  } 
  render() { 
    return ( 
      <div> 
        <h1>Hello, world!</h1> 
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>      </div> 
    ); 
  } 
} 
 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Clock />); 

------------------------------------------------------------------------------- 

 

 

 

 

 

 

 

 

const root = ReactDOM.createRoot(document.getElementById('root')); 
 
function Clock(props) { 
  return ( 
    <div>       

<h1>Hello, world!</h1>       

<h2>It is {props.date.toLocaleTimeString()}.</h2>     

</div>  ); 
} 
 
function tick() { 
  root.render(<Clock date={new Date()} />);} 
 
setInterval(tick, 1000); 

 

 

Adding Lifecycle Methods to a Class 

 

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed. 

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React. 

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React. 

class Clock extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = {date: new Date()}; 
  } 
 
  componentDidMount() { 
    this.timerID = setInterval( 
      () => this.tick(), 
      1000 
    ); 
  } 
 
  componentWillUnmount() { 
    clearInterval(this.timerID); 
  } 
 
  tick() {    this.setState({      date: new Date()    });  } 
  render() { 
    return ( 
      <div> 
        <h1>Hello, world!</h1> 
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> 
      </div> 
    ); 
  } 
} 
 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Clock />); 

 

 

Do Not Modify State Directly 

For example, this will not re-render a component: 

// Wrong 
this.state.comment = 'Hello'; 

Instead, use setState(): 

// Correct 
this.setState({comment: 'Hello'}); 

The only place where you can assign this.state is the constructor. 

State Updates May Be Asynchronous 

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. 

// Wrong 
this.setState({ 
  counter: this.state.counter + this.props.increment, 
}); 

 

 

To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument: 

// Correct 
this.setState((state, props) => ({ 
  counter: state.counter + props.increment 
})); 

We used an arrow function above, but it also works with regular functions: 

// Correct 
this.setState(function(state, props) { 
  return { 
    counter: state.counter + props.increment 
  }; 
}); 

-------------------------------------------------------------------------- 

This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree. 

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down. 

To show that all components are truly isolated, we can create an App component that renders three <Clock>s: 

function App() { 
  return ( 
    <div> 
      <Clock />      <Clock />      <Clock />    </div> 
  ); 
}  

Try it on CodePen 

Each Clock sets up its own timer and updates independently. 

 

 

Handling Events: 

React events are named using camelCase, rather than lowercase. 

With JSX you pass a function as the event handler, rather than a string. 

For example, the HTML: 

<button onclick="activateLasers()"> 
  Activate Lasers 
</button> 

is slightly different in React: 

<button onClick={activateLasers}>  Activate Lasers 
</button> 

 

Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write: 

<form onsubmit="console.log('You clicked submit.'); return false"> 
  <button type="submit">Submit</button> 
</form> 

In React, this could instead be: 

function Form() { 
  function handleSubmit(e) { 
    e.preventDefault();    console.log('You clicked submit.'); 
  } 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <button type="submit">Submit</button> 
    </form> 
  ); 
} 

 

You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called. 

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method. 

 

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> 
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> 

The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively. 

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded. 

 

How do I bind a function to a component instance? 

 

Bind in Constructor (ES2015) 

class Foo extends Component { 
  constructor(props) { 
    super(props); 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    console.log('Click happened'); 
  } 
  render() { 
    return <button onClick={this.handleClick}>Click Me</button>; 
  } 
} 

Class Properties (ES2022) 

class Foo extends Component { 
  handleClick = () => { 
    console.log('Click happened'); 
  }; 
  render() { 
    return <button onClick={this.handleClick}>Click Me</button>; 
  } 
} 

Bind in Render 

class Foo extends Component { 
  handleClick() { 
    console.log('Click happened'); 
  } 
  render() { 
    return <button onClick={this.handleClick.bind(this)}>Click Me</button>; 
  } 
} 

Arrow Function in Render 

class Foo extends Component { 
  handleClick() { 
    console.log('Click happened'); 
  } 
  render() { 
    return <button onClick={() => this.handleClick()}>Click Me</button>; 
  } 
} 

https://reactjs.org/docs/faq-functions.html#arrow-function-in-render 

 

Const [name, setName] = useState() 

       Getter setter 

 

 

 

 

 

 

 

Conditional rendering: 

function Greeting(props) { 
  const isLoggedIn = props.isLoggedIn; 
  if (isLoggedIn) {    return <UserGreeting />;  }  return <GuestGreeting />;} 
const root = ReactDOM.createRoot(document.getElementById('root'));  
// Try changing to isLoggedIn={true}: 
root.render(<Greeting isLoggedIn={false} />); 

 

-------------------------------------------------------------------------------- 

class LoginControl extends React.Component { 
  constructor(props) { 
    super(props); 
    this.handleLoginClick = this.handleLoginClick.bind(this); 
    this.handleLogoutClick = this.handleLogoutClick.bind(this); 
    this.state = {isLoggedIn: false}; 
  } 
 
  handleLoginClick() { 
    this.setState({isLoggedIn: true}); 
  } 
 
  handleLogoutClick() { 
    this.setState({isLoggedIn: false}); 
  } 
 
  render() { 
    const isLoggedIn = this.state.isLoggedIn; 
    let button; 
    if (isLoggedIn) {      button = <LogoutButton onClick={this.handleLogoutClick} />;    } else {      button = <LoginButton onClick={this.handleLoginClick} />;    } 
    return ( 
      <div> 
        <Greeting isLoggedIn={isLoggedIn} />        {button}      </div> 
    ); 
  } 
} 
 
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(<LoginControl />); 

 

 

 

Inline If with Logical && Operator 

You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element: 

function Mailbox(props) { 
  const unreadMessages = props.unreadMessages; 
  return ( 
    <div> 
      <h1>Hello!</h1> 
      {unreadMessages.length > 0 &&        <h2>          You have {unreadMessages.length} unread messages.        </h2>      }    </div> 
  ); 
} 
 
const messages = ['React', 'Re: React', 'Re:Re: React']; 
 
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(<Mailbox unreadMessages={messages} />); 

Inline If-Else with Conditional Operator 

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false. 

render() { 
  const isLoggedIn = this.state.isLoggedIn; 
  return ( 
    <div> 
      {isLoggedIn        ? <LogoutButton onClick={this.handleLogoutClick} /> 
        : <LoginButton onClick={this.handleLoginClick} />      } 
    </div>  ); 
} 

Preventing Component from Rendering 

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output. 

In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render: 

 

 

 

List and keys: 

const numbers = [1, 2, 3, 4, 5]; 

const listItems = numbers.map((numbers) => 

  <li>{numbers}</li> 

); 

  

const root = ReactDOM.createRoot(document.getElementById('root'));  

root.render(<ul>{listItems}</ul>); 

Let’s assign a key to our list items inside numbers.map() and fix the missing key issue. 

function NumberList(props) { 
  const numbers = props.numbers; 
  const listItems = numbers.map((number) => 
    <li key={number.toString()}>      {number} 
    </li> 
  ); 
  return ( 
    <ul>{listItems}</ul> 
  ); 
} 

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: 

 

Keys only make sense in the context of the surrounding array. 

For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself. 

 

function ListItem(props) { 
  // Correct! There is no need to specify the key here:  return <li>{props.value}</li>;} 
 
function NumberList(props) { 
  const numbers = props.numbers; 
  const listItems = numbers.map((number) => 
    // Correct! Key should be specified inside the array.    <ListItem key={number.toString()} value={number} />  ); 
  return ( 
    <ul> 
      {listItems} 
    </ul> 
  ); 
} 

A good rule of thumb is that elements inside the map() call need keys. 

 
------------------------------------------------------------------------------------------------------------------------------------------ 

React icons: 

Npm I react-icons –save 

 

 

-------------------------- 

Forms: 

https://codepen.io/gaearon/pen/VmmPgp?editors=0010 

Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component. 

 

In HTML, an <input type="file"> lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API. 

<input type="file" /> 

https://codepen.io/gaearon/pen/wgedvV?editors=0010 

 

 

 

 

 

e.preventDefault(); 

Don't reload page when click enter. 

 

----------------------------------------------- 

With useRef , back the focus to the input. 

 

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”. 

We know that props are read-only. 

https://codepen.io/gaearon/pen/WZpxpz?editors=0010 

 

At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies. 

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions. 

 

One such technique is the single responsibility principle, that is, a component should ideally only do one thing.   

 

State is reserved only for interactivity, that is, data that changes over time.   

What is the difference between state and props? 

props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function). 

https://github.com/uberVU/react-guide/blob/master/props-vs-state.md 

 
