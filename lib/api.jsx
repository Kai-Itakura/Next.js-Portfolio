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