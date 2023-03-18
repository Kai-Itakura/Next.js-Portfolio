export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const preview = (url) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    })
}