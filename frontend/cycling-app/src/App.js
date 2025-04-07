import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import './App.css';
import LandingPage from '/pages/LandingPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
