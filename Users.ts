import { CollectionConfig} from 'payload/types'

const Users: CollectionConfig = {
    slug: 'users',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        //email added by default
        //add more field as needed
    ],
}

export default Users