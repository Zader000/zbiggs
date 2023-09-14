import axios from "axios";
import {json, Link, useLoaderData} from "react-router-dom";
import {Project} from "../types";


export function ProjectsPage()
{
    const data = useLoaderData() as Project[];
    return (
        <>
            <header className='header'>
                <h1 className='text-5xl text-white font-extrabold'>Projects</h1>
            </header>
            <main className='main'>
                <div className='flex flex-col gap-4 flex-wrap justify-around w-3/4'>
                    {data.map((project) => (
                        <Link to={`/projects/${project.Id}`} key={project.Id} className={"link"}>{project.Title}</Link>
                    ))}
                </div>
            </main>
        </>
    );
}

export async function projectsLoader({request, params}: any) {
    const response = await axios.get(`https://zbiggs.com/api/3350/project.php?&apiCode=abcd1234`);

    if (response.status !== 200) {
        throw json({error: 'Failed to load projects'});
    }
    return response.data;
}