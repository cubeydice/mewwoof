const Pet = ({ pet, onDelete }) => {
    return (
        <div className="pet-container">
            <p className="pet-name">{pet.name}</p>
            <button className="delete-button" onClick={() => onDelete(pet.id)}>
                Delete
            </button>
        </div>
    );
};

export default Pet;
