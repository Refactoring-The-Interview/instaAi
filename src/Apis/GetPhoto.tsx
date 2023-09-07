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
        "  https://y4dtrkq4t65av5a66dpzus5bem0ncrdo.lambda-url.us-east-1.on.aws/make-art ";
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
        response: true,
    };

    API.post(apiName, path, myInit)
        .then((response) => {
            console.log(response);
            data = response.json();
            console.log(data, "data");
        })
        .then((item) => {
            console.log(item, "item");
        })
        .catch((error) => {
            console.log(error.response);
        });
};
