import React, { useState } from "react";

function Task(props) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({
    tach: props.task.tach,
    description: props.task.description,
    date: props.task.date,
    catégoie: props.task.catégoie,
  });

  // Handle input changes
  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  // Delete task
  const supprimer = () => {
    props.setTask(props.tasks.filter((elem) => elem.id !== props.task.id));
  };

  // Update task
  const ajt = () => {
    props.setTask(
      props.tasks.map((task) =>
        task.id === props.task.id ? { ...task, ...editedTask } : task
      )
    );
    setEditMode(false);
  };

  // Show task details
  const details = () => {
    alert(`Nom de tâche: ${props.task.tach}\nDate de tâche: ${props.task.date}`);
  };

  return (
    <div className="al">
      {!editMode ? (
        <div className="task">
          <h2 className="title">Task: {props.task.tach}</h2>
          <h2 className="title">Description: {props.task.description}</h2>
          <h2 className="title">Date: {props.task.date}</h2>
          <h2 className="title">Catégorie: {props.task.catégoie}</h2>
          <div className="button">
            <button onClick={() => setEditMode(true)}>Modifier ✍</button>
            <button onClick={supprimer}>Supprimer 🗑</button>
            <button onClick={details}>Details 💬</button>
          </div>
        </div>
      ) : (
        <form>
          <label htmlFor="tach">Tâche:</label>
          <input
            id="tach"
            type="text"
            onChange={handleChange}
            value={editedTask.tach}
            name="tach"
          />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            onChange={handleChange}
            value={editedTask.description}
            name="description"
          />
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            onChange={handleChange}
            value={editedTask.date}
            name="date"
          />
          <label htmlFor="catégorie">Catégorie:</label>
          <select
            id="catégorie"
            onChange={handleChange}
            value={editedTask.catégorie}
            name="catégoie"
          >
            <option value="personal 🐱‍🏍">Personal 🐱‍🏍</option>
            <option value="professionnel 👨‍🎓">Professionnel 👨‍🎓</option>
            <option value="general ✍">General ✍</option>
          </select>
          <div className="btns">
            <button type="button" onClick={ajt}>
              Submit ✅
            </button>
            <button type="button" onClick={() => setEditMode(false)}>
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Task;
