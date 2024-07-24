import { useState } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState(["Your tasks will show up here"]);
    const [newTask, setNewTask] = useState("");

    const handleInput = async (e) => {
        setNewTask(e.target.value);
    };

    const addTask = async () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (taskNum) => {
        const newTaskList = tasks.filter((task, index) => {
            if (index !== taskNum) {
                return task;
            }
        });
        setTasks(newTaskList);
    };

    const moveTaskUp = (taskNum) => {
        if (taskNum > 0) {
            const updatedTaskList = [...tasks];
            [updatedTaskList[taskNum], updatedTaskList[taskNum - 1]] = [
                updatedTaskList[taskNum - 1],
                updatedTaskList[taskNum],
            ];
            setTasks(updatedTaskList);
        }
    };

    const moveTaskDown = (taskNum) => {
        if (taskNum < tasks.length - 1) {
            const updatedTaskList = [...tasks];
            [updatedTaskList[taskNum], updatedTaskList[taskNum + 1]] = [
                updatedTaskList[taskNum + 1],
                updatedTaskList[taskNum],
            ];
            setTasks(updatedTaskList);
        }
    };

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter your Task..."
                    value={newTask}
                    onChange={handleInput}
                />
                <button className="add-btn" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <div className="text-container">
                                <span className="text">{task}</span>
                            </div>
                            <div className="btns-container">
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="move-btn"
                                    onClick={() => moveTaskUp(index)}
                                >
                                    📈
                                </button>
                                <button
                                    className="move-btn"
                                    onClick={() => moveTaskDown(index)}
                                >
                                    📉
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default ToDoList;
