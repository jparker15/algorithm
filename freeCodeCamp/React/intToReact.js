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
  