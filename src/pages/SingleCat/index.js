import {useLocation, useNavigate} from "react-router-dom";

const SingleCat = () => {
    const {state: {src, description}} = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <button className='button small' onClick={() => navigate(-1)}> {`<-----`} Go back </button>
            <div className='single-cat-container'>

                <div className='single-cat-img-container'>
                    <img className='single-cat-img' src={src} alt="cat"/>
                </div>
                <p className='single-cat-description'>{description}</p>
            </div>
        </>
    )
}

export default SingleCat
