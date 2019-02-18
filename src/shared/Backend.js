const baseUrl = 'https://api.github.com/search/repositories?q=language:Java&sort=stars&order=desc';

export const SERVER_REQUEST = async (body, reqType) => {
    let response;
    // const _headers = await GET_HEADER();
    const url = `${baseUrl}`;

    if (reqType.toLowerCase() === 'get') {
        response = await fetch(url, {
            method: reqType.toUpperCase(),
            // headers: _headers
        });
    } else {
        response = await fetch(url, {
            method: reqType.toUpperCase(),
            // headers: _headers,
            body: JSON.stringify(body)
        });
    }

    return await response.json();
};

// const GET_HEADER = async () => {
//     return new Headers({
//         'Content-Type': 'application/json',
//         'x-access-token': await GET_TOKEN(),
//     });
// };