import { CollectionConfig } from 'payload/types'

const Chats: CollectionConfig = {
    slug: 'chats',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    field: [
        {
            name: "from",
            type: "relationship",
            relationTo: "users",
            required: true.
        },
        {
            name: "to",
            type: "relationship",
            relationTo: "users",
            required: true,
        }
        {
            name: "message",
            type: "text",
            required: true,
        }
    ]
}