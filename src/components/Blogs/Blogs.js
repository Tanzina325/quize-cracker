import React from 'react';

const Blogs = () => {
    return (
        <div>
         <div className='border-solid border-4 rounded-3xl border-sky-500 my-5 mx-auto w-4/5 p-5'> 
        <li className='font-bold'> What is the purpose of react router ?</li>
        <li>React router  is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.L</li>
        </div>
        <div className='border-solid border-4 rounded-3xl border-sky-500 my-5 mx-auto w-4/5 p-5'>
         <li className='font-bold'> How does context api work?</li> 
         <li>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</li> 
          </div> 
          <div className='border-solid border-4 rounded-3xl border-sky-500 my-5 mx-auto w-4/5 p-5'>
            <li className='font-bold'>Give some description about useRef : </li>
            <li>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.You can optionally initialize it with a default value by passing it as an argument to the useRef hook.The useRef is a hook, and as such can only be used in functional components.</li>
            </div> 
        </div>
    );
};

export default Blogs;