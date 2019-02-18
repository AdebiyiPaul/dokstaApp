const baseUrl = 'https://api.github.com/search/repositories?q=language:Java&sort=stars&order=desc';

export const SERVER_REQUEST = async (body, reqType) => {
    let response;
    const url = `${baseUrl}`;

    if (reqType.toLowerCase() === 'get') {
        response = await fetch(url, {
            method: reqType.toUpperCase(),
        });
    } else {
        response = await fetch(url, {
            method: reqType.toUpperCase(),
            body: JSON.stringify(body)
        });
    }

    return await response.json();
};