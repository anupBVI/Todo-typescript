import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import TodoTasks from "./components/TodoTasks";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number >(0);
  const [list, setList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    console.log(name);
    if (name === "task") {
      setTask(value);
    } else {
      setDeadline(+value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    if (task !== "") {
      setList([...list, newTask]);
      setTask("");
      
      setTimeout(() => {
        alert("New Task created");
      }, 100);
      setDeadline(0);
    } else {
      alert("task name should not be empty");
    }
  };

  const completeTask = (taskNameToDelete: string): void => {
    setList(
      list.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
    setTimeout(() => {
      alert("Task Deleted successfully");
    }, 100);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter a task name"
            name="task"
            onChange={handleChange}
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline (in days)"
            name="deadline"
            onChange={handleChange}
            value={deadline===0 ? undefined : deadline}
          />
        </div>

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {list.length !== 0 ? (
          <div className="task ht">
            <div className="content hc">  
              <span>Task Name</span>
              <span>Task Deadline</span>
              <span> Action</span>
            </div>

            {/* <span className="hb">Deadline</span> */}
          </div>
        ) : (
          <h3 style={{color:"white"}}>No Tasks Available </h3>
        )}
        {list.map((task: ITask, key: number) => {
          return (
            <>
              <TodoTasks key={key} task={task} completeTask={completeTask} />
            </>
          );
        })}
      </div>


    </div>
  );
};

export default App;
