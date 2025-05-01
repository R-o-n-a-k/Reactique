import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("../Home/Home"));
const Calculator = lazy(() => import("../projects/calculator/Calculator"));
const ToDo = lazy(() => import("../projects/to-do/ToDo"));
const RandomQuote = lazy(() =>
  import("../projects/random-quote-generator/RandomQuote")
);
const ImageGallery = lazy(() =>
  import("../projects/image-gallery/ImageGallery")
);
const BMICalculator = lazy(() =>
  import("../projects/bmi-calculator/BMICalculator")
);
const ContactForm = lazy(() => import("../projects/contact-form/ContactForm"));
const NotFound = lazy(() => import("../components/Not-found/NotFound"));
const ComingSoon = lazy(() => import("../components/Coming-Soon/ComingSoon"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/to-do" element={<ToDo />} />
          <Route path="/random-quote" element={<RandomQuote />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />

          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
