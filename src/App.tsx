import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ResumePage} from "./pages/ResumePage";
import {ProjectsPage} from "./pages/ProjectsPage";
import {SideBar} from "./components/SideBar";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import {projectDetailsLoader} from "./pages/ProjectDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/resume',
                element: <ResumePage/>
            },
            {
                path: '/projects',
                children: [
                    {
                        index: true,
                        element: <ProjectsPage/>
                    },
                    {
                        path: '/:projectId',
                        element: <ProjectDetailsPage/>,
                        loader: projectDetailsLoader
                    }
                ]
            },
            {
                path: '/contact',
                element: <ContactPage/>
            }
        ]
    }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
