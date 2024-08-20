import loading from '../assets/Loading.gif'

const LoadingIndicator = () => {
    return (
        <div className="loading-container">
            <img src={loading} className="loader" alt="loading..." />
        </div>
    )
};

export default LoadingIndicator;