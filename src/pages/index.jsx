import Footer from "@/components/sections/Footer";
import Experience from "../components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import React, { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import ScrollToTop from "@/components/elements/ScrollToTop";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import Header_Mobile from "@/components/sections/Header_Mobile";

const App = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  return (
    <main>
      <div className="pageSize min-h-screen">
        <Header />
        <Header_Mobile />
        <Skills />
        <Projects />
        <Experience />
      </div>

      <div className="bg-[#f7f7f7] border-t mt-20">
        <div className="pageSize">
          <Footer />
        </div>
      </div>

      <ScrollToTop />
    </main>
  );
};

export default App;
