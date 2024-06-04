import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

// English translations
const enTranslations = {
  menu: {
    login: "Login",
    closeMenu: "Close menu",
  },
  header: {
    title: "Data to tackle Drought Issues",
    subtitle:
      "Discover how cutting-edge data analytics empower farmers and policymakers to mitigate the impact of drought on agricultural productivity, ensuring food security and sustainability.",
    getStarted: "Get started",
    learnMore: "Learn more",
  },
};

// French translations
const frTranslations = {
  menu: {
    login: "Se connecter",
    closeMenu: "Fermer le menu",
  },
  header: {
    title: "Données pour lutter contre les problèmes de sécheresse",
    subtitle:
      "Découvrez comment l'analyse de données de pointe permet aux agriculteurs et aux décideurs de réduire l'impact de la sécheresse sur la productivité agricole, garantissant la sécurité alimentaire et la durabilité.",
    getStarted: "Commencer",
    learnMore: "En savoir plus",
  },
};

export default function LandingPage() {
  const [locale, setLocale] = useState("en"); // Default to English

  const translations = {
    en: enTranslations,
    fr: frTranslations,
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

  return (
    <div className="bg-[url('https://wfi-water.com/wp-content/uploads/2023/01/Depositphotos_30828375_L-1.jpg')] bg-cover bg-center min-h-screen">
      <header className="inset-x-0 top-0">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="mr-4">
              {" "}
              {/* Add padding to the right */}
              <button
                type="button"
                onClick={toggleLocale}
                className="rounded-md bg-[#187b1b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#145f16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#187b1b]"
              >
                {locale === "en" ? "Français" : "English"}
              </button>
            </div>
            <div>
              <Link
                to="/login"
                className="flex items-center rounded-md bg-[#187b1b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#145f16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#187b1b]"
              >
                {translations[locale].menu.login}
                <span className="ml-1">
                  {" "}
                  {/* Add space between button text and icon */}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {locale === "en"
                ? enTranslations.header.title
                : frTranslations.header.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#fafafa]">
              {locale === "en"
                ? enTranslations.header.subtitle
                : frTranslations.header.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#187b1b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#145f16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#187b1b]"
              >
                {locale === "en"
                  ? enTranslations.header.getStarted
                  : frTranslations.header.getStarted}
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                {locale === "en"
                  ? enTranslations.header.learnMore
                  : frTranslations.header.learnMore}{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
