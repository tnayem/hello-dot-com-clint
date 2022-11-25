import React from 'react';

const Blog = () => {
    return (
        <div>
            <h6 className='text-xl font-semibold'>Q. What are the different ways to manage a state in a React application?</h6>
            <p><span className='font-semibold'>Ans: </span>Every React component has a built-in state. In React apps, there are at least seven ways to handle the state. Such as URL, Web Storage, Local State, Lifted State, Derived State, useRefs, Context API.</p>
            <p>URL: We can use URL to store some data e.g.Keeping such data in the URL allows users to share deep links with others.</p>
            <p>Web Storage: Web Storage is useful when we want to persist state between reloads and reboots.  Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</p>
            <p>Local State: Local state is useful when one component needs the state. Examples include a toggle button, a form, etc.</p>
            <p>Lifted State: The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props.</p>
            <p>Derived State: Derived State simplifies our code. When we update the state, derived values are automatically recalculated in the render. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it.</p>
            <p>useRefs: It is the functional alternative to Class based createRef(). There are two main use cases for the useRef hook in a React functional component. useref Accessing a DOM element and Storing mutable information without triggering a re-render of that component.</p>
            <p>Context API: Context API makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.</p>
            <h6 className='text-xl font-semibold'>Q. How does prototypical inheritance work?</h6>
            <p><span className='font-semibold'>Ans: </span>In the Prototypal Inheritance method by which an object can inherit the properties and methods of another object. Each object has a private property which holds a link to another object called its prototype. Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
            <h6 className='text-xl font-semibold'>Q. What is a unit test? Why should we write unit tests?</h6>
            <p><span className='font-semibold'>Ans: </span> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
            <p>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.</p>
            <h6 className='text-xl font-semibold'>Q. React vs. Angular vs. Vue?</h6>
            <p><span className='font-semibold'>Ans: </span>Angular.js offers a very clear structure and lots of features. It allows development teams to move quickly to implementation without the need to define structures or look for additional libraries. However, it is often too overloaded for small projects and brings unnecessary ballast.</p>
            <p>React: React is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly.</p>
            <p>Vue: Vue may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.</p>
        </div>
    );
};

export default Blog;