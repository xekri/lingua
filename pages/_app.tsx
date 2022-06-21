import Layout from '../components/layout'
import '../styles/app.sass'

export default ({ Component, pageProps }) =>
  <Layout>
    <Component {...pageProps} />
  </Layout>
