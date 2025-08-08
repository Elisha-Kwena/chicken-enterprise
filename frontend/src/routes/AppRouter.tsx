import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import {lazy, Suspense} from "react";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const AboutPage = lazy(() => import("../pages/About/About"));
const ContactPage = lazy(() => import("../pages/Contact/Contact"));
const BlogPage = lazy(() => import("../pages/Blog/Blog"));
const FaqsPage = lazy(() => import("../pages/Faqs/Faqs"));
const ServicesPage = lazy(() => import("../pages/Services/Services"))
// import {
//   HomePage,
//   ProductsPage,
//   ProductDetailsPage,
//   CartPage,
//   CheckoutPage,
//   BlogPage,
//   BlogPostPage,
//   AboutPage,
//   ContactPage,
//   NotFoundPage,
// } from "../pages";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.FAQS} element={<FaqsPage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />

        {/* Future Routes */}
        {/* <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.BLOG_POST} element={<BlogPostPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} /> */}

        {/* Future Protected Routes */}
        {/* <Route path={ROUTES.DASHBOARD} element={<PrivateRoute><DashboardPage /></PrivateRoute>} */}

        {/* 404 Handling */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    </Suspense>
  );
};

export default AppRouter;