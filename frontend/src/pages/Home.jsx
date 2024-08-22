import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";
import Pet from "../components/Pet"
import Loading from "../components/Loading";
import '../styles/Home.css'

// eslint-disable-next-line react/prop-types
function Home({loggedIn}) {
    const [pets, setPets] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    if (!loggedIn) {
        <Navigate to="/login" />
    }

    useEffect(() => {
        getPets();
    }, []);

    const getPets = () => {
        setLoading(true);
        api
            .get("/api/pets/")
            .then((res) => res.data)
            .then((data) => {
                setPets(data);
                setErrors({});
                setLoading(false);
            })
            .catch((err) => setErrors(err.response.data));
    };

    const deletePet = (id) => {
        api
            .delete(`/api/pets/delete/${id}`)
            .then((res) => {
                if (res.status === 204) {
                    setErrors({});
                }
                else alert("Failed to delete pet.");
                getPets();
            })
            .catch((error) => setErrors(error.response.data));
    };

    const createPet = (e) => {
        e.preventDefault();
        api
            .post("/api/pets/", { name })
            .then((res) => {
                if (res.status === 201) {
                    setErrors({});
                }
                else alert("Failed to add pet.");
                getPets();
            })
            .catch((err) => {setErrors(err.response.data)});
    };

    return (
        <>
        <div id="home-container">
            <div className="pets-container">
                <h2>Pets</h2>
                {loading ?
                    <div className="loading"><Loading /></div> :
                    <div className="pets-list-container">
                        {pets.length === 0 ? <p>No pets found 🥺</p> : null}
                        {pets.map((pet) => (
                            <Pet pet={pet} onDelete={deletePet} key={pet.id} />
                        ))}
                    </div>
                }
            </div>
            <div className="add-pet-container">
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
                    {errors && <p className="errors">{errors.name}</p>}
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>

        </>
    );
}

export default Home;
