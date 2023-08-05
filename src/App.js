import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { CiDark } from "react-icons/ci";
import NoteList from "./components/NoteList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Box className={darkMode ? "dark-mode" : "light-mode"} height="932px">
      <Box display={"flex"} justifyContent="space-between">
        <Header />
        <Button onClick={() => setDarkMode(!darkMode)} className="btn-darkmod">
          <CiDark className="darkmod-icon" size={"30px"} />
        </Button>
      </Box>
      <SearchBar handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </Box>
  );
}

export default App;
