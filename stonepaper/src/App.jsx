import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/AboutPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
