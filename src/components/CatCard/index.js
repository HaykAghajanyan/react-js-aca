import {useNavigate} from "react-router-dom";

const CatCard = ({id, src, alt, description}) => {
    const navigate = useNavigate()

    const navigateToCat = () => {
        navigate(id, {
            state: {
                src,
                description
            }
        })
    }

    return (
        <div className='cat-card-container'>
            <img className='cat-card-img' src={src} alt={alt}/>
            <div className='cat-card-controls'>
                <button className='btn' onClick={navigateToCat}>Show more</button>
                <button className='btn'>Like</button>
            </div>
        </div>
    )
}

export default CatCard
