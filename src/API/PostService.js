import axios from "axios";

export class PostService {
    static async getAllPosts(page = 1, limit = 10) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    _page: page,
                    _limit: limit,
                },
            }
        );

        return response;
    }

    static async getPostById(id) {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        return response.data;
    }

    static async getPostCommentsById(id) {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );

        return response.data;
    }
}
