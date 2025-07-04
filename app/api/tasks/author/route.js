import { getAllAuthors } from "database/tasks-back";

export async function GET() {
    var authors = await getAllAuthors();
    return new Response(authors)
}