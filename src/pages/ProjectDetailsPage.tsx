import {useParams} from "react-router-dom";

function ProjectDetailsPage() {

    const params = useParams();

    const projectId = params.project;

    return (
        <div>
            <h1>Project Details</h1>
        </div>
    );
}

export default ProjectDetailsPage;

export async function projectDetailsLoader({request, params}: any) {
    const id = params.projectId;

}