export type Project = {
    Id: number;
    Title: string;
    Description: string;
    Link?: string | null;
    LinkText?: string | null;
}

export type Contact = {
    Name: string;
    Email: string;
    Message: string;
}