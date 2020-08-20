/**
 * React, created by Facebook, is an open-source JavaScript library for building user interfaces.
 *  It is used to create components, handle state and props, utilize event listeners and certain life cycle methods to update data as it changes.
React combines HTML with JavaScript functionality to create its own markup language, JSX.
 This section will introduce you to all of these concepts and how to implement them for use with your own projects.
 */


 /**
    Create a simple JSX Element
  */
const JSX = <h1>Hello JSX!</h1>

/**
 * Create a complex JSX Element
 */

const JSX = 

    <div>

        <h1> First Elem</h1>

        <p>2nd elem</p>

        <ul> List of Items
            <li>li1</li>
            <li>li2</li>
            <li>li3</li>
        </ul>

    </div>;


 
/**
 * Add comments in JSX
 */

const JSX = (
        <div>
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
            {/*JSX comment */}
        </div>
    );

/**
 * Render HTML elems to the DOM
 */
const JSX = (
        <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
        </div>
    );
    // change code below this line
    ReactDOM.render(JSX,document.getElementById("challenge-node"));

/**
 *  Define a HTML Class
 */

const JSX = (
        <div className="myDiv">
        <h1>Add a class to this div</h1>
        </div>
    );

/**
 *  Self-Closing JSX Tags
 */

const JSX = (
    <div>
      
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    
    </div>
  );

/**
 *  Statless Functional Component Creation
 */

const MyComponent = function() {
    return(
        <div>stringoftext</div>
    )
}
  
/**
 * React Component Creation
 */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
  
    // const JSX =  <div>
    //   <h1>Hello React!</h1>
    //   </div>
  
    //   return JSX

    return(
        <div>
          <h1>Hello React!</h1>
        </div>
  
    )
  
  
      // change code above this line
    }
  };

/**
 * Create a component with composition
 */

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* change code below this line */ }

          <ChildComponent />
  
          { /* change code above this line */ }
        </div>
      );
    }
  };
  
/**
 * Render Nested Components
 */

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }

       <TypesOfFruit/>

      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits/>
        { /* change code above this line */ }
      </div>
    );
  }
};

/**
 * Compose React Components 
 */

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

/**
 * Render a Class Component to the DOM
 */

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits/>
        <Vegetables/>
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line

ReactDOM.render(<TypesOfFood/>,document.getElementById("challenge-node"));

/**
 * Write a React Component from Scratch
 */

 class MyComponent extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
          <h1>My First React Component!</h1>
        </div>
      )
    }
 }

 ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"));

/**
 * Pass Props to a Stateless Functional Component
 */

const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date} </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date ={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};

/**
 * Pass an Array as Props
 */
const List = (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={["walk dog", "buy grocereis"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["dog walk", "burn groec", "lorem"]}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

/**
 * Use Default Props
 */

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line

ShoppingCart.defaultProps = {items: 0}

/**
 * Override Default Props
 */

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items quantity = {10}   />
    { /* change code above this line */ }
  }
};

/**
 * PropTypes to Define the Props Expected
 */

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
}
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

/**
 * Access Props Using this.props
 */

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong> {this.props.tempPassword} </strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword = "$Cash99"/>
          { /* change code above this line */ }
        </div>
    );
  }
};

/**
 * Review Using Props with Stateless Functional Components
 * A stateless functional component is any function you write which accepts props and returns JSX.
 * A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state.
 * Finally, a stateful component is a class component that does maintain its own internal state. 
 */
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
const Camper = props =>{
  return (<p>{props.name}</p>) 
}

Camper.defaultProps = {name:"CamperBot"};

Camper.propTypes = {name:PropTypes.string.isRequired};

/**
 *  Create a Stateful Component
 */

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state ={
      name:"Jeremy"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/**
 *  Render State in the User Interface
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

/**
 * Render State in U.I. Alternate
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
    <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

/**
 * Set State with this.setState
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      name:"React Rocks!"
    })
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/**
 * Bind 'this' to a Class Method
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // change code below this line
    this.handleClick = this.handleClick.bind(this);
    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick = {this.handleClick}>Click Me</button>
        { /* change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

/**
 * Use State to Toggle an Element
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    visibility: !state.visibility
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
