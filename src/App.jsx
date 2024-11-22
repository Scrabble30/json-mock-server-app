import { useEffect, useState } from "react";
import PersonList from "./components/PersonList";
import "./App.css";
import PersonForm from "./components/PersonForm";

function App() {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/api")
            .then((response) => response.json())
            .then((data) => {
                setPersons(data);
                console.log(data);
            });
    }, [person]);

    return (
        <>
            <PersonList persons={persons} setPerson={setPerson}></PersonList>
            <PersonForm setPerson={setPerson}></PersonForm>
        </>
    );
}

export default App;
