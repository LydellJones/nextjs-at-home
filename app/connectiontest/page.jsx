import Loading from "components/loading";
import { getAllAuthors } from "database/tasks-back";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Connection() {
    //TODO: FINISH MAKING THE FILELIST, YOU'LL NEED A SEPERATE PAGE FOR THE ID ASSOCIATED
    return <>
        <div>
            <Suspense fallback={<Loading/>}>
                <form action="/api/insert">
                    <input type="text" name="title"></input>
                    <input type="text" name="description"></input>
                    <input type="file"></input>
                    <input type="text" ></input>
                </>
            </Suspense>
        </div>
    </>
}