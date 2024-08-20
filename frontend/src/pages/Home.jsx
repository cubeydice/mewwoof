import { useState, useEffect } from "react";
import api from "../api";
import Pet from "../components/Pet"

function Home() {
    const [pets, setPets] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        getPets();
    }, []);

    const getPets = () => {
        api
            .get("/api/pets/")
            .then((res) => res.data)
            .then((data) => {
                setPets(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deletePet = (id) => {
        api
            .delete(`/api/pets/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Pet deleted!");
                else alert("Failed to delete pet.");
                getPets();
            })
            .catch((error) => alert(error));
    };

    const createPet = (e) => {
        e.preventDefault();
        api
            .post("/api/pets/", { name })
            .then((res) => {
                if (res.status === 201) alert("Pet created!");
                else alert("Failed to add pet.");
                getPets();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Pets</h2>
                {pets.map((pet) => (
                    <Pet pet={pet} onDelete={deletePet} key={pet.id} />
                ))}
            </div>

            <h2>Add a Pet</h2>
            <form onSubmit={createPet}>
                <label htmlFor="name">Name:</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;
