import '../styles/globals.css'
import axios from 'axios'
import * as BackendConstants from "./../constants/backend"
axios.defaults.baseURL = BackendConstants.BACKEND_SERVER_URL;
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
