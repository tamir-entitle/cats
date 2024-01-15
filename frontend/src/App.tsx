import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { CatsProvider } from "./store/cats.store"
import { AlertProvider } from './store/alert.store';
import CreateCat from './pages/CreateCat';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import useStyles from './App.styles';
import CatList from "./pages/CatList"
import Cat from './pages/Cat';

const HeaderLayout = () => {
  const classes = useStyles()

  return <>
    <header>
      <Navbar />
    </header>
    <div className={classes.app}>
      <Alert />
      <Outlet />
    </div>
  </>
};

function App() {
  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        { path: '/', element: <CatList /> },
        { path: '/create', element: <CreateCat /> },
        { path: '/cat/:id', element: <Cat /> },
      ]
    },
  ])
  return (
    <AlertProvider>
      <CatsProvider>
        <RouterProvider router={router} />
      </CatsProvider>
    </AlertProvider>
  )
}

export default App
