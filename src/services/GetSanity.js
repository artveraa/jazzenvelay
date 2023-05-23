import createClient from "../client.js";

class GetSanity {
    constructor() {
        this.client = createClient;
    }

    getPodcastInfos() {
        this.client.fetch(`*[_type == "bannerHome"]{
            podcastTitle,
            podcastDate,
            podcastLink,
        }`).then((data) => {
            return data;
        });
    }
}

export default GetSanity;