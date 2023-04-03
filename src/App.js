import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';


const Page = React.lazy(()=>import("./cmp/page/page"));
const Product = React.lazy(()=>import("./cmp/productDetails/product"));


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
              <React.Suspense fallback={<CircularProgress className="loader" />}>
                <Page />
              </React.Suspense>
            } />
            <Route exact path="/product" element={
              <React.Suspense fallback={<CircularProgress className="loader" />}>
                <Product />
              </React.Suspense>
            }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
