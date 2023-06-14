const categories = {
    name: 'categories',
    title: 'Catégories',
    type: 'document',
    fields: [
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }
    ]
}

export default categories;