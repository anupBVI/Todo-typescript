import React, { useState } from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTasks = ({ task, completeTask }: Props) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const handleComplete = () => {
    setCompleted(!completed);

    setTimeout(() => {
      alert(!completed ? `Marked As Completed` : `Task Resumed`);
    }, 200);
  };
  return (
    <div className="task">
      <div className="content">
        <span className="s">
          <input
            type="checkbox"
            onChange={handleComplete}
            name="completed"
            checked={completed}
          />
          {task.taskName}
        </span>
        <span>
          {task.deadline} {task.deadline > 1 ? "days" : "day"}
        </span>

        <span>
          <button style={{ background: completed ? "#0eccc3" : "#138bed"  }} onClick={handleComplete}>
            {" "}
            {completed ? "Resume" : "Complete"}
          </button>
          <button
           style={{background:"#fc3a8e"}}
            onClick={() => {
              completeTask(task.taskName);
            }}
          >
          
            Delete
          </button>
        </span>
      </div>
      
    </div>
  );
};

export default TodoTasks;
