import image404 from '../assets/never-leave-your-pet.png'
import '../styles/Error404.css'

function Error404() {
    return(
        <div className='error-404-container'>
            <h1>404 Not Found</h1>
            <img src={image404} className="error-404-image" alt="404" />
        </div>
    )
};

export default Error404;