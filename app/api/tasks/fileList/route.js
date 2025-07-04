import { getAllFileLists } from "database/tasks-back";
// /title, this will get the task list that's in the database
export async function GET() {
    var fileLists = await getAllFileLists();
    return new Response(fileLists);
}