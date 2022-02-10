import '../styles/globals.css'
import axios from 'axios'
import * as BackendConstants from "./../constants/backend"
import Layout from '../components/layout';
axios.defaults.baseURL = BackendConstants.BACKEND_SERVER_URL;
function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
