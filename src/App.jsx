import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);
function App({ routes }) {
  return (
    <div className="App ">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
