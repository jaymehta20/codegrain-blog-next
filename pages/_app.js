import "../styles/style.css";
import "../styles/animsition.min.css";
import "../styles/bootstrap-grid.min.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
