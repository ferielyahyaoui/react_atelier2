import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [taskName, setTaskName] = useState(""); 
  const [priority, setPriority] = useState("Moyenne"); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const addTask = () => {
    if (taskName.trim() === "") {
      alert("Le nom de la tâche ne peut pas être vide !");
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName(""); 
    setPriority("Moyenne"); 
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List avec Priorités</h1>
      
  
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher une tâche..."
        className="w-full px-3 py-2 border rounded-lg mb-4"
      />

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nom de la tâche"
          className="flex-1 px-3 py-2 border rounded-lg"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Ajouter
        </button>
      </div>
      {filteredTasks.length > 0 ? (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-2 border rounded-lg ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <div>
                <p className="font-semibold">
                  {task.name} -{" "}
                  <span
                    className={`${
                      task.priority === "Haute"
                        ? "text-red-500"
                        : task.priority === "Moyenne"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {task.priority}
                  </span>
                </p>
                {task.completed && (
                  <p className="text-sm text-gray-500">Terminé</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="px-2 py-1 text-white bg-green-500 rounded-lg hover:bg-green-700"
                >
                  {task.completed ? "Annuler" : "Terminer"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded-lg hover:bg-red-700"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">Aucune tâche trouvée.</p>
      )}
      <div className="mt-4">
        <p className="text-lg font-semibold">Total des tâches : {totalTasks}</p>
        <p className="text-lg font-semibold">
          Tâches terminées : {completedTasks}
        </p>
      </div>
    </div>
  );
};

export default TodoList;
