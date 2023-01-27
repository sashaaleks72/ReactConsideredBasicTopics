import { useMemo } from "react";

export const useSortedList = (posts, sortField) => {
    const sortedList = useMemo(() => {
        if (sortField)
            return [...posts].sort((a, b) =>
                a[sortField].localeCompare(b[sortField])
            );
        else return posts;
    }, [sortField, posts]);

    return sortedList;
};

export const usePosts = (posts, sortField, searchQuery) => {
    const sortedList = useSortedList(posts, sortField);

    const sortedAndSearchedList = useMemo(() => {
        return sortedList.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [sortedList, searchQuery]);

    return sortedAndSearchedList;
};
