import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import CorporatePage from './pages/CorporatePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Preloader from './components/Preloader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Preloader>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/kurumsal" element={<CorporatePage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </Preloader>
    </BrowserRouter>
  </StrictMode>,
)
