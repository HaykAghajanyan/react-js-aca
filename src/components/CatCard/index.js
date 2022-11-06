import {useNavigate} from "react-router-dom";
import instance from "../../api/axios";
import {useDispatch, useSelector} from "react-redux";
import {userIdSelector} from "../../redux/slices/appSlice";
import {likedCatsSelector, updateCatData, updateLikedCats} from "../../redux/slices/catsSlice";

const CatCard = ({id, likes, src, alt, description}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userId = useSelector(userIdSelector)
    const likedCats = useSelector(likedCatsSelector)

    const navigateToCat = () => {
        navigate(id, {
            state: {
                src,
                description
            }
        })
    }

    const handleLike = () => {
        let changedLikes;
        let changedLikedCats;

        if(likes.includes(userId)) {
            changedLikes = likes.filter(likedUserId => likedUserId !== userId)
            changedLikedCats = likedCats.filter(catId => catId !== id)
        } else {
            changedLikes = [...likes, userId]
            changedLikedCats = [...likedCats, id]
        }

        const patchCatData = instance.patch(`cats/${id}`, {likes: changedLikes})
        const patchUserLikedCatsData = instance.patch(`users/${userId}`, {likedCats: changedLikedCats})

        Promise.all([patchCatData, patchUserLikedCatsData])
            .then(res => {
                const [catData, likedCatsData] = res;
                dispatch(updateCatData(catData.data))
                dispatch(updateLikedCats(likedCatsData.data.likedCats))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='cat-card-container'>
            <img className='cat-card-img' src={src} alt={alt}/>
            <div className='cat-card-controls'>
                <button className='btn' onClick={navigateToCat}>Show more</button>
                <button className='btn' onClick={handleLike}>Like</button>
                <p>{likes.length}</p>
            </div>
        </div>
    )
}

export default CatCard
