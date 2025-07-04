import { insertTask } from "database/tasks-back";
import { NextResponse } from "next/server";

export async function POST(request) {
    
    const formData = request.formdata();
    const tasks = formdata.getAll();
    insertTask(tasks[2],tasks[1],tasks[3],tasks[4]).catch((err) => {
        console.log("[DB->Tasks] unable to insert task.");
        console.error(err);
    });
    return NextResponse("Request:" + tasks);
}