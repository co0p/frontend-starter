import axios from 'axios';

const client = axios.create({});

const rejectNonOK = (request) => {
    if (request.status < 200 || request.status > 399) {
        return Promise.reject(request.message);
    }
    return Promise.resolve(request);
}

class HttpClient {

    get(url) {
        return client.get(url)
            .then(r => rejectNonOK(r))
            .then(r => r.data)
    }
}


export const httpClient = new HttpClient();