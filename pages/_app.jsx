import Layout from '@/components/layout'
import '@/styles/globals.css'
import 'modern-css-reset/dist/reset.min.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
