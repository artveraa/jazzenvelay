const actualites = {
    name: 'actualites',
    title: 'Actualités',
    type: 'document',
    fields: [
        {
            name: 'categories',
            title: 'Catégories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'categories'}],
                }
            ],
        },
        {
            name: 'titre',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'titre',
                maxLength: 96,
            }
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'DD-MM',
            }
        },
        {
            name: 'location',
            title: 'Localisation',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'contenu',
            title: 'Contenu',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    }
                },
            ],
        },
    ],
}

export default actualites