import React, { useContext } from 'react'
import { TaskContext } from './Taskcontext';
import  {} from '../styles/TaskList.css'

function TaskList() {

    const {tasks, addTask, removeTask, filterTask} = useContext(TaskContext);

    /**
     * La funcion recoge el evento como un argumento,
     * previene que se resete y entonces añade la tarea
     */
    const handleAddTask = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        if (name.trim()) {
            addTask({id: Date.now(), name});
            e.target.elements.name.value = '';
        }
    };

    /**
     * La handleRemoveTask recoge una tarea como argumento y llama a 
     * removeTask llevando la tarea
     */
    const handleRemoveTask = (task) => {
        removeTask(task);
    }

    /**
     * Cuando el usuario escribe en el input, el valor se envia a la funcion filerTask
     */

    const handleFilterTask = (e) => {
        const query = e.target.value;
        filterTask(query);
    }

  return (
    <div>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          className="task-form_input"
          type="text"
          name="name"
          placeholder="Añade una descripcion"
        ></input>
        <button type="submit" className="task-form_button">
          Añadir tarea
        </button>
      </form>
      <input
        className="task-list_input"
        type="text"
        onChange={handleFilterTask}
        placeholder="Filtrar por..."
      ></input>
      <ul className="task-list_tasks">
        {tasks.map((task) => (
          <li className="task-list_task" key={task.id}>
            {task.name}
            <button
              className="task-list_task-buttons"
              onClick={() => handleRemoveTask(task)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList