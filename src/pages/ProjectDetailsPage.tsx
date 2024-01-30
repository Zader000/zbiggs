import {json, Link, useLoaderData} from "react-router-dom";
import axios from "axios";
import {Card} from "../components/Card";
import {Image} from "../components/Image";
import {Project} from "../types";

function ProjectDetailsPage() {

    const data = useLoaderData() as Project

    return (
        <>
            <header className='header'>
                <h1 className='text-5xl text-white font-extrabold'>Projects</h1>
            </header>
            <main className={'main'}>
                <Card title={data.Name} description={data.Description} link={data.GithubLink}/>
                <br/>
                <Link to={'/projects'} className={'link'}>Back to Projects</Link>
                <br/>
                {data.Images.map((image) => (
                    <>
                        <div>
                            <Image img={image}/>
                        </div>
                        <br/>
                    </>
                ))}
                <br/>
            </main>
        </>
    );
}

export default ProjectDetailsPage;

export async function projectDetailsLoader({request, params}: any) {
    const id = params.projectId;
    const response = await axios.get(`https://zbiggs.com/api/zbiggs/project.php?id=${id}&apiCode=abcd1234`);
    if (response.status !== 200) {
        throw json({error: 'Failed to load project details'});
    }
    return response.data;
}
