import { API } from "aws-amplify";

export enum FetchMethods {
    post = "post",
    get = "get",
    delete = "delete",
}

export const get = async (url?: string, options?: RequestInit) => {
    let data;
    const apiName = "hotpotArtGenAPI";
    const path =
        "https://1tpsmk50ea.execute-api.us-east-1.amazonaws.com/staging/make-art";
    const myInit = {
        headers: {
            origin: "http://localhost:3000",
            credentials: true,
            "Access-Control-Allow-Origin": "origin",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: "RNtBzMwYXd3CFQmzTVIg6MUXzosqgjuVVUwJtiVqOQNUaBwMst",
            "Content-Type": "application/json",
            cache: "no-cache",
        }, // OPTIONAL
        footer: {
            inputText: "A pig in the style of Starry Night by Vincent Van Gogh",
            styleId: 23,
        },
        // response: true,
    };

    API.post(apiName, path, myInit)
        .then((response) => {
            console.log(response, "!");
            data = response.json();
            console.log(data, "data");
        })
        .then((item) => {
            console.log(item, "item");
        })
        .catch((error) => {
            console.log(error, "error");
        });
};
