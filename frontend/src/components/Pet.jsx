const Pet = ({ pet, onDelete }) => {
    return (
        <>
            <p className="pet-name">{pet.name}</p>
            <button className="delete-button" onClick={() => onDelete(pet.id)}>
                Delete
            </button>
        </>
    );
};

export default Pet;
