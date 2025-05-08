"use client";

import Image from "next/image"
import Link from "next/link"

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070"
            alt="Support GILF - People joining hands together in unity and support"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Support Our Mission</h1>
            <p className="mt-6 text-xl">
              Your support helps us continue our work in leadership development, education, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Make a Donation</h2>
            <p className="text-lg text-gray-600 mb-12">
              Your financial contribution helps fund our programs and create lasting impact in communities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Bank Transfer Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold mb-6">Bank Transfer Details</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700">Bank Name:</p>
                    <p className="text-gray-600">Ecobank Ghana</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Account Name:</p>
                    <p className="text-gray-600">Ghana Impact Leaders Foundation</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700">Account Number:</p>
                    <p className="text-gray-600">1441000355673</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Branch:</p>
                    <p className="text-gray-600">Accra Main Branch</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Swift Code:</p>
                  <p className="text-gray-600">ECOCGHAC</p>
                </div>
              </div>
            </div>

            {/* Mobile Money Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Mobile Money</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700">MTN MoMo:</p>
                    <p className="text-gray-600">0244123456</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Vodafone Cash:</p>
                    <p className="text-gray-600">0502123456</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">Account Name:</p>
                  <p className="text-gray-600">Ghana Impact Leaders Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Your Impact</h2>
            <p className="text-lg text-gray-600 mb-12">
              See how your support transforms communities and changes lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5,000+</div>
              <p className="mt-2 text-gray-600">People Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">20+</div>
              <p className="mt-2 text-gray-600">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="mt-2 text-gray-600">Programs Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <p className="mt-2 text-gray-600">Partners & Supporters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team is here to help you learn more about how you can support our mission.
              </p>
              <a 
                href="mailto:info@gilfghana.org"
                className="inline-block rounded-full bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 