const PersonList = ({ persons, setPerson }) => {
    const handleDelete = (personId) => {
        console.log(personId);

        fetch(`http://localhost:3000/api/${personId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => setPerson(data));
    };

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>{person.email}</td>
                            <td>{person.gender}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => handleDelete(person.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default PersonList;
