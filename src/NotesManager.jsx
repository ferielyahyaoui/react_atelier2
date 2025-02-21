import { useState } from "react";
const NotesManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const addNote = () => {
    const noteValue = parseFloat(newNote); 
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote(""); 
    } else {
      alert("Veuillez entrer une note valide entre 0 et 20.");
    }
  };


  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };


  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const total = notes.reduce((sum, note) => sum + note, 0);
    return (total / notes.length).toFixed(2); 
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">Gestionnaire de Notes</h1>
      

      <ul className="w-full max-w-sm">
        {notes.map((note, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 mb-2 border rounded-lg"
          >
            <span>Note : {note}</span>
            <button
              onClick={() => deleteNote(index)}
              className="text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      

      <div className="text-lg font-semibold">
        Moyenne des Notes : {calculateAverage()}
      </div>
      
      <div className="flex gap-2">
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note"
          className="px-2 py-1 border rounded-lg"
        />
        <button
          onClick={addNote} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">   Ajouter
        </button>
      </div>
    </div>
  );
};

export default NotesManager;
