import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Aside from './layouts/Aside';
import ProductPage from './pages/product page/ProductPage';
import About from './pages/menu/menu pages/About';
import DevContact from './pages/menu/menu pages/DevContact';
import ErrorPage from './pages/menu/menu pages/ErrorPage';
import Cart from './pages/cart/Cart';
import Filter from './pages/filter/Filter';
import Warning from './pages/warning info/Warning';
import ContextProvider from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Aside />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Warning />
                <Main />
              </div>
            }
          />

          <Route path="/About" element={<About />} />

          <Route path="/Developer" element={<DevContact />} />

          <Route
            path="/Product-Page"
            element={
              <div>
                <Warning />
                <ProductPage />
              </div>
            }
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Filter" element={<Filter />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
