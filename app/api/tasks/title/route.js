import { getAllTitles as getAllTitleLists } from "database/tasks-back";

export async function GET() {
    var titleLists = await getAllTitleLists();
    return new Response(titleLists)
}