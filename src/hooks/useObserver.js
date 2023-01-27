import { useEffect, useRef } from "react";

export const useObserver = (observingElement, isLoading, canLoad, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        var cb = function (entries) {
            if (entries[0].isIntersecting && canLoad) callback();
        };

        observer.current = new IntersectionObserver(cb);
        observer.current.observe(observingElement.current);
    }, [isLoading]);
};
