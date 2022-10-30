import { Provider } from "react-redux";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import store from "./Redux/store";


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Search />
      <BlogList />
      <Footer />
    </Provider>
  );
}

export default App;
