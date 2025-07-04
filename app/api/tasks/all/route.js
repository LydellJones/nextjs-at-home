import { getAllAuthors, getAllTasks } from "database/tasks-back";
import { NextResponse } from "next/server";

export async function GET() {
    var tasks = {message: await getAllTasks()};
    return new Response(tasks)
}