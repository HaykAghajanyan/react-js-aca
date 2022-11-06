import CatCard from "../../components/CatCard";
import {useDispatch, useSelector} from "react-redux";
import {catsSelector} from "../../redux/slices/catsSlice";
import {useEffect} from "react";
import {getCats} from "../../redux/thunks/catsThunk";


const Cats = () => {
    const dispatch = useDispatch();
    const allCats = useSelector(catsSelector);

    useEffect(() => {
        dispatch(getCats())
    }, [])

    return (
        <div className='cats-container'>
            {
                allCats.map(cat => (
                    <CatCard
                        key={cat.id}
                        {...cat}
                    />
                ))
            }
        </div>
    )
}

export default Cats
