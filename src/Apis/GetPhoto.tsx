export enum FetchMethods {
    post = "post",
    get = "get",
    delete = "delete",
}

export const get = async (url: string, options?: RequestInit) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let photo;
    const requestOptions = {
        method: FetchMethods.post,
        headers: {
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: "RNtBzMwYXd3CFQmzTVIg6MUXzosqgjuVVUwJtiVqOQNUaBwMst",
            "Content-Type": "application/json",
            cache: "no-cache",
            "Access-Control-Allow-Origin": "*",
        },
        footers: {
            inputText: "A pig in the style of Starry Night by Vincent Van Gogh",
            styleId: "23",
        },
        ...options,
    };

    return fetch(url, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            photo = data;
            console.log(data);
        });
};
