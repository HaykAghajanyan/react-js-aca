import {useEffect, useState} from "react";

export const useInfiniteScroll = (action) => {
    const [lastElement, setLastElement] = useState(null)

    useEffect(() => {
        let currentElement = lastElement;
        const currentObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                action();
            }
        }, {
            rootMargin: '50px',
        })

        if(currentElement) {
            currentObserver.observe(currentElement)
        }

        return () => {
            currentObserver.disconnect()
        }
    }, [lastElement])

    return setLastElement;
}
