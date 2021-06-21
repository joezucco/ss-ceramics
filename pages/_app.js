// import '../styles/globals.scss'
import '../styles/index.css'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
