import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

export const getPostBySlug = async (slug) => {
    try {
        const post = await client.get({
            endpoint: 'works',
            queries: { filters: `slug[equals]${slug}` },
        });
        return post.contents[0];
    } catch (err) {
        console.log('~~ getPostBySlug ~~');
        console.log(err);
    }
}

export const getAllSlugs = async () => {
    try {
        const slugs = await client.get({
            endpoint: 'works',
            queries: { limit: 10, fields: 'title,slug' },
        })
        return slugs.contents
    } catch (err) {
        console.log('~~ getAllSlugs ~~');
        console.log(err);
    }
}

export const getAllWorks = async (limit = 10) => {
    try {
        const allWorks = await client.get({
            endpoint: 'works',
            queries: { limit: limit, fields: 'title,slug,topImage' },
        })
        return allWorks.contents
    } catch (err) {
        console.log('~~ getAllWorks ~~');
        console.log(err);
    }
}