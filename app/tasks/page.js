import TaskComponent from "components/task"

export default function Tasks() {
    return(<>
        <h1 className="base taskTitle">Tasks</h1>
        <TaskComponent></TaskComponent>
        <TaskComponent></TaskComponent>
        <TaskComponent></TaskComponent>
    </>);
}