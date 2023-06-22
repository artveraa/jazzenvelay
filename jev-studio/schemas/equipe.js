const equipe = {
    name: "equipe",
    title: "Equipe",
    type: "document",
    fields: [
        {
            name: "member",
            title: "Membre",
            type: "string",
        },
        {
            name: "role",
            title: "Rôle",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }
    ],
}

export default equipe;