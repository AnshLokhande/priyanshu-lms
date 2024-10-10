"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// ------------------------------------
// Header Component (with indigo-900 background and logo with text)
// ------------------------------------
export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white text-indigo-900">
      {/* Left section with logo and company name */}
      <a className="flex items-center justify-center" href="#">
        <img src="/TransparentLogo.png" alt="Learning Destiny Logo" className="h-8 w-8 mr-2" />
        <span className="text-lg font-semibold">Learning Destiny Pvt. Ltd.</span>
      </a>

      {/* Navigation Links */}
      <nav className="ml-auto flex gap-4 sm:gap-6 justify-center items-center">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Courses">
          Courses
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/AboutUs">
          About Us
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Events">
          Events
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Workshops">
          Workshops
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Internships">
          Internships
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
          Dashboard
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}

// ------------------------------------
// Hero Section Component
// ------------------------------------
function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/HomeBG.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
      </div>

      {/* Content Section */}
      <section className="relative w-full h-full py-12 mx-auto flex items-center justify-center md:py-24 lg:py-32 xl:py-48 z-10">
        <div className="container px-4 md:px-6 m-auto text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in tracking-tight text-white">
              Transforming Education, Shaping Careers.
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 max-w-3xl text-white">
              We provide more than courses—we build communities, nurture talents, and create opportunities.
            </p>
            <div className="space-x-4">
              <Link href={"/sign-in"} className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300">
                Get Started
              </Link>
              <Link href={"/AboutUs"} className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------
// Key Features Component
// ------------------------------------
function KeyFeatures() {
  return (
    <section className="w-full mx-auto py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature icon={BookOpen} title="Comprehensive Courses" description="Access a wide range of courses tailored to your learning needs." />
          <Feature icon={Users} title="Collaborative Learning" description="Engage with peers and instructors in interactive learning environments." />
          <Feature icon={Award} title="Certifications" description="Earn recognized certifications to boost your career prospects." />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="flex mx-auto flex-col items-center text-center">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

// ------------------------------------
// Call to Action Component (text on left, image on right, centered social media icons)
// ------------------------------------
function CallToAction() {
  return (
    <section className="w-full mx-auto py-12 md:py-24 lg:py-32 bg-indigo-200 text-indigo-900">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        
        {/* Text Section (70% width) */}
        <div className="w-full lg:w-7/10 space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Shape Your Learning Destiny?
            </h2>
            <p className="mx-auto max-w-[600px] text-indigo-800 md:text-xl">
              Join thousands of learners who are transforming their lives through education. Start your journey today!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <p className="text-xs text-indigo-700">
              By signing up, you agree to our{" "}
              <a className="underline underline-offset-2" href="#">
                Terms & Conditions
              </a>
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-indigo-900 text-2xl hover:text-indigo-700" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-indigo-900 text-2xl hover:text-indigo-700" />
              </a>
              <a href="mailto:learningdestiny.info@gmail.com" aria-label="Gmail" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} className="text-indigo-900 text-2xl hover:text-indigo-700" />
              </a>
              <a href="tel:+919059898900" aria-label="Phone" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPhone} className="text-indigo-900 text-2xl hover:text-indigo-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section (30% width) */}
        <div className="hidden lg:block lg:w-3/10">
          <img 
            src="/TransparentLogo.png"  // Replace this with the actual image filename in your public folder
            alt="Call to Action Image" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
}

// ------------------------------------
// Footer Component
// ------------------------------------
function Footer() {
  return (
    <footer className="flex mx-auto flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500">
        © 2024 Learning Destiny. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="/TermsandCondition.pdf">Terms of Service</a>
        <a className="text-xs hover:underline underline-offset-4" href="/Privacy">Privacy</a>
      </nav>
    </footer>
  );
}

// ------------------------------------
// Complete Page with Header, Hero, Key Features, Call to Action, and Footer
// ------------------------------------
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <KeyFeatures />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}