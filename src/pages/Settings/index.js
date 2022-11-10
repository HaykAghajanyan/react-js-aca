import {useEffect, useState} from "react";
import instance from "../../api/axios";
import {useInfiniteScroll} from "../../hooks/useInfiteScroll";

const Settings = () => {
    const [posts, setPosts] = useState([])
    // const [trackedElementIndex, setTrackedElementIndex] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        instance.get(`posts?_page=${currentPage}&_limit=15`)
            .then(res => setPosts(prev => [...prev, ...res.data]))
    }, [currentPage])

    const action = () => {
        // setTrackedElementIndex(prev => prev + 15)
        // console.log('trackedElementIndex', trackedElementIndex)
        setCurrentPage(prev => ++prev)
        console.log('currentPage', currentPage)
    }

    const setElement = useInfiniteScroll(action)

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    posts.map(({id, title}, index) => {
                        if(index === posts.length - 1) {
                            return (
                                <div
                                    ref={setElement}
                                    style={{border: '1px #ccc solid', borderRadius: '10px'}}
                                    key={id}
                                >
                                    <p>{id}</p>
                                    <p>{title}</p>
                                </div>
                            )
                        }
                        return (
                            <div
                                style={{border: '1px #ccc solid', borderRadius: '10px'}}
                                key={id}
                            >
                                <p>{id}</p>
                                <p>{title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Settings
