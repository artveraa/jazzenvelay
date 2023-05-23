const homeBanner = {
    title: 'Bannière accueil',
    name: 'homeBanner',
    type: 'document',
    fields: [
        {
            title: 'Titre du podcast',
            name: 'podcastTitle',
            type: 'string',
        },
        {
            title: 'Date du podcast',
            name: 'podcastDate',
            type: 'date',
        },
        {
            title: 'Lien du podcast',
            name: 'podcastLink',
            type: 'url',
        },
    ],
}

export default homeBanner;