// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Quiz from './Quiz/Quiz';

function App() {
  const router = createBrowserRouter(
    [
      {path:'/',
       element:<Main></Main>,
children:[
  {
    path:'/',
    element:<Home></Home> ,
    loader:()=>fetch("https://openapi.programming-hero.com/api/quiz")
  },
  {
    path:'/blogs',
    element:<Blogs></Blogs>
  },
  
  
   { path:'/quiz/:id',
    element:<Quiz></Quiz>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
  },
  {
    path:'/statistics',
    element:<Statistics></Statistics>,
   
  }
  
]
      },
      {path:'/*',
    element:<About></About>}
  
    ]
  )
  return (
    <div >
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
