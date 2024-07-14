import React, { useState } from "react";
import Header from "./component/Header";
import MobileMenu from "./component/MobileMenu";
import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/FeatureSection";
import TestimonialSection from "./component/TestimonialSection";
import CategoriesSection from "./component/CategoriesSection";
import BestCoffeeSection from "./component/BestCoffeSection";
import "./App.css";
import NewArrivals from "./component/NewArrivals";
import Subscribe from "./component/Subscribe";
import QuickDelivery from "./component/QuickDelivery";
import ReadOurBlog from "./component/ReadOurBlog";
import FollowInstagram from "./component/FollowInstagram";
import Footer from "./component/Footer";

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="px-[36px] pt-5 md:px-[76px]">
        <Header
          onMobileMenuToggle={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
        {isMobileMenuOpen && <MobileMenu />}
        <HeroSection />
      </div>
      <FeatureSection />
      <div className="md:px-[76px] px-[36px]">
        <BestCoffeeSection />
        <TestimonialSection />
        <CategoriesSection />
        <NewArrivals />
      </div>
      <Subscribe />
      <div className="md:px-[76px] px-[36px] border-t border-b md:mt-[180px] mt-[80px]">
        <QuickDelivery />
      </div>
      <div className="md:px-[76px] px-[36px]">
        <ReadOurBlog />
        <FollowInstagram />
      </div>
      <div className="md:mt-[180px] mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
