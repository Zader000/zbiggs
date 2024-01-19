export type Project = {
    Id: number;
    Name: string;
    Description: string;
    GithubLink: string;
		Images: ProjectImage[];
}

export type ProjectImage = {
	Id: number;
	ProjectId: number;
	Path: string;
}

export type Contact = {
    Name: string;
    Email: string;
    Message: string;
}
