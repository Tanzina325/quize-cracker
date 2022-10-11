// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
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
    element:<Home></Home>
  },
  {
    path:'/quiz',
    element:<Quiz></Quiz>
  },
  {
    path:'/statistics',
    element:<Statistics></Statistics>
  },
  {
    path:'/about',
    element:<About></About>
  }
]
      }
    ]
  )
  return (
    <div >
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;