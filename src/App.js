import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import ProductPage from './pages/product page/ProductPage';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/cart/Cart';
import Filter from './pages/filter/Filter';
import Warning from './pages/warning info/Warning';
import ContextProvider from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route
            path="/ecommerce-react"
            element={
              <>
                <Header />
                <Warning />
                <Main />
              </>
            }
          />

          <Route
            path="/Product-Page"
            element={
              <>
                <Warning />
                <ProductPage />
              </>
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
