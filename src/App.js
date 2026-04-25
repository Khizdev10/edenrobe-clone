import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Services from './components/servicesSec';
import Products from './components/products';
import Women from './components/women';
import './App.css';

function App() {
  const women =
    [{
      id: 1,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: 6000
    }, {
      id: 2,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: null,
    }, {
      id: 3,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: null,
    }, {
      id: 4,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: 4000,
    },
    {
      id: 1,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: 6000
    }, {
      id: 2,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: null,
    }, {
      id: 3,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: null,
    }, {
      id: 4,
      name: "Unstitiched Embroidered Silk Suit",
      price: 4990,
      image: "https://edenrobe.com/cdn/shop/files/0N9A4155--32104.jpg?v=1776946272&width=960",
      discount: 4000,
    }
    ]



  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>

            <Products />
          </>
        } />
        <Route path="/women" element={<Women data={women} />} />
        {/* <Route path="/men" element={<Men data={men} />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
