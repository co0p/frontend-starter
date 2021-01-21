
import {httpClient} from '../infra/HttpClient';

class JobDto {
    constructor(json = {}) {
        this.company = json.company || "";
        this.company_logo = json.company_logo || "";
        this.title = json.title || "";
        this.url = json.url || "";
    }
}

class JobService {
    getJobs(searchTerm) {
        return httpClient.get(`/api/positions.json?description=${searchTerm}`)
            .then(res => res.map(r => new JobDto(r)))
    }
}

export const jobService = new JobService();