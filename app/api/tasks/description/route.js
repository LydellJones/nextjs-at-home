import { getAllDescriptions } from "database/tasks-back";

export async function GET() {
    var descriptions = await getAllDescriptions();
    return new Response(descriptions)
}