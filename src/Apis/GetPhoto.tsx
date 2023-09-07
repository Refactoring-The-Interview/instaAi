import { API } from "aws-amplify";

export enum FetchMethods {
    post = "post",
    get = "get",
    delete = "delete",
}

export const get = async (url?: string, options?: RequestInit) => {
    // let photo;
    // const requestOptions = {
    //     method: FetchMethods.post,
    //     headers: {
    //         "Content-Type": "application/json",
    //         cache: "no-cache",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    //     ...options,
    // };

    // return fetch(url, requestOptions)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         photo = data;
    //         console.log(data);
    //     });

    const apiName = "hotpotArtGenAPI";
    const path = " https://api.hotpot.ai";
    const myInit = {
        headers: {
            Authorization: "RNtBzMwYXd3CFQmzTVIg6MUXzosqgjuVVUwJtiVqOQNUaBwMst",
            "Content-Type": "application/json",
            cache: "no-cache",
            "Access-Control-Allow-Origin": "*",
        }, // OPTIONAL
        footer: {
            inputText: "A pig in the style of Starry Night by Vincent Van Gogh",
            styleId: 23,
        },
        response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        queryStringParameters: {
            name: "param", // OPTIONAL
        },
    };

    API.get(apiName, path, myInit)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response);
        });
};
