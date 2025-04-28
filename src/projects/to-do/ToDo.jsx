import React, { useState } from "react";
import "./ToDo.css";
import BackToHome from "../../components/BackToHome/BackToHome";

const toDo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  // Adding New Task
  const addTask = () => {
    if (input.trim() !== "") {
      setTask((task) => [
        ...task,
        {
          id: Math.random().toString(36).substr(2, 9),
          title: input,
          completed: false,
          isEditing: false,
        },
      ]);
      setInput("");
    }
  };

  // Deleting Task
  const deleteTask = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      setTask(task.filter((index) => index.id !== id));
    }
  };

  // Checking Task once completed
  const taskCompleted = (id) => {
    setTask(
      task.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Clicking on edit icon
  const taskEditing = (id) => {
    setTask(
      task.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // updating the new task to the array
  const handleEditedTask = (id, newTitle) => {
    setTask(
      task.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  };

  // Saving the Edited the task
  const saveEditedTask = (id) => {
    setTask(
      task.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  return (
    <>
      <div className="to-do">
        <div className="to-do-continer">
          <h3>Get things done</h3>
          <div className="add-task">
            <input
              type="text"
              placeholder="What is the task today?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // <-- optional but good to prevent form submitting if inside form
                  addTask();
                }
              }}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          <div className="task-list">
            <ul>
              {task.map((list) => {
                return (
                  <li key={list.id}>
                    <div className="task">
                      <div className="task-info">
                        <input
                          type="checkbox"
                          checked={list.completed}
                          onChange={() => taskCompleted(list.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              addTask();
                            }
                          }}
                        />
                        {list.isEditing ? (
                          <input
                            className="editInput"
                            placeholder="Update Task"
                            type="text"
                            value={list.title}
                            onChange={(e) =>
                              handleEditedTask(list.id, e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                saveEditedTask(list.id);
                              }
                            }}
                          />
                        ) : (
                          <span
                            className={list.completed ? "completed-task" : ""}
                          >
                            {list.title}
                          </span>
                        )}
                      </div>
                      <div className="task-actions">
                        {list.isEditing ? (
                          <i
                            className="fa-solid fa-check taskSave"
                            onClick={() => saveEditedTask(list.id)}
                          />
                        ) : (
                          <i
                            className="fa-solid fa-pencil taskEdit"
                            onClick={() => taskEditing(list.id)}
                          />
                        )}

                        <i
                          className="fa-solid fa-trash taskDelete"
                          onClick={() => deleteTask(list.id)}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <BackToHome bgColor="#F05D5E" bottom="5%" />
    </>
  );
};

export default toDo;
