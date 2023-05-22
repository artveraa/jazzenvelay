import { createClient } from '@sanity/client'

export default createClient({
    projectId: '3gjfxgg4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25'
});