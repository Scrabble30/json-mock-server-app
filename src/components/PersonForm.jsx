const PersonForm = ({ setPerson }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formElement = event.target;

        console.log(formElement);

        const form = new FormData(formElement);

        console.log(form);

        const formEntries = form.entries();
        const obj = Object.fromEntries(formEntries);

        delete obj.id;

        console.log(obj);

        // When creating a post request it's necessary to write an entire request body. For this request we specify the http method as POST because we want to create a new person
        fetch("http://localhost:3000/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then((data) => setPerson(data));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input
                    id="1"
                    name="id"
                    type="number"
                    readOnly
                    placeholder="id"
                />
                <br />
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="name" />
                <br />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    placeholder="age"
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <br />
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender">
                    <option defaultChecked>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <button type="submit">Save Person</button>
            </form>
        </>
    );
};

export default PersonForm;
