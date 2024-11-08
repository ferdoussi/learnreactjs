import Header from "./1-header/header";
import Main from "./2-homes/main";
import Footer from "./3-footer/footer";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <div>
      <Helmet>
        <title>anas</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default Home;