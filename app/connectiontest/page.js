import Loading from "components/loading";
import { getAllAuthors } from "database/tasks-back";
import { Suspense } from "react";

async function getAuthors() {
    return await getAllAuthors();
}

export default async function Connection() {
    const [authors, setAuthors] = React.useState<List>(0);

    return <>
        <div>
            <Suspense fallback={<Loading/>}>
                { 
                    getAuthors.map(key, value) <h1>{key}: {value}</h1>
                }
            </Suspense>
        </div>
    </>
}