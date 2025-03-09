"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { BookOpen, Award, Users, Target } from "lucide-react"

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/about/about-slide-1.jpg",
    "/about/about-slide-2.jpg", 
    "/about/about-slide-3.jpg",
    "/about/about-slide-3a.jpg",
    "/about/about-slide-3b.jpg",
    "/about/about-slide-4.jpg",
    "/about/about-slide-5.jpg",
    "/about/about-slide-6.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white h-[600px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60">
          <Image
            src={slides[currentSlide]}
            alt="About GILF"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover object-center transition-opacity duration-1000"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32 z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
            <p className="mt-6 text-xl text-primary-foreground">
              Learn about our history, mission, and the passionate team behind GILF's impactful work.
            </p>
          </div>
        </div>
      </section>

      {/* History & Founding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/brand/gilf_logo.jpg" 
                alt="GILF History" 
                fill
                quality={100}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain" 
                priority
              />
            </div>
            <div>
              <h2 className="section-title">Our History & Founding Story</h2>
              <p className="mt-6 text-lg text-gray-600">
                GILF was founded in 2024 by a group of passionate individuals who recognized the need for leadership
                development and educational support in underserved communities.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                What began as a small initiative to provide mentorship to young leaders has grown into a comprehensive
                organization that addresses community needs through leadership, education, and sustainable development
                programs.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Over the years, we have expanded our reach and impact, working with communities across the region to
                create lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                A world where every individual has access to quality education and leadership opportunities, empowering
                them to create positive change in their communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower communities through leadership development, educational initiatives, and sustainable
                community projects that foster growth, innovation, and positive social impact.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Passion</h3>
            <p className="text-lg text-gray-600">
              We are passionate about creating opportunities for individuals to reach their full potential and become
              agents of change in their communities. We believe in the power of education and leadership to transform
              lives and create sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide our work and define our commitment to the communities we serve.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scholarship</h3>
              <p className="text-gray-600">
                We believe in academic excellence and providing opportunities for talented students to pursue their education.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">
                We develop future leaders who will drive positive change in their communities and beyond.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Citizenship</h3>
              <p className="text-gray-600">
                We foster responsible citizenship and active participation in community development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Purpose</h3>
              <p className="text-gray-600">
                We help individuals discover and pursue their purpose while making meaningful contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Mentors</h2>
            <p className="section-subtitle">
              Meet our dedicated mentors who guide and inspire the next generation of leaders.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/mentors/metor_Judith.jpeg"
                  alt="Judith"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Judith Yaa-Baby</h3>
              <p className="text-primary font-medium mb-3">Founder, Errand Eye. BA. Ashesi University</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/theresa.png"
                  alt="Theresa Ajube"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Theresa Ajube</h3>
              <p className="text-primary font-medium mb-3">Comp. Eng. Accra Institute of Technology</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/mentors/mentor_Ernest.jpeg"
                  alt="Ernest"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ernest Aleke</h3>
              <p className="text-primary font-medium mb-3">Founder, LearnStep</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/mentors/mentor_Paul_Apeadu.jpeg"
                  alt="Paul"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paul Appeadu</h3>
              <p className="text-primary font-medium mb-3">Comp. Sci. Ashesi University</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/mentors/mentor_Reynolds.jpeg"
                  alt="Reynold"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reynolds Okyere</h3>
              <p className="text-primary font-medium mb-3">Assis. Faculty, Ashesi University</p>
    
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/edward.png"
                  alt="Edward"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Edward Mensah</h3>
              <p className="text-primary font-medium mb-3">Comp. Sci. Ashesi University</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Join Our Mission</h2>
              <p className="mt-4 text-lg">
                Together, we can make a lasting impact on communities. Whether through volunteering, partnerships, or
                donations, your support helps us continue our important work.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100"
                >
                  Get Involved
                </Link>
                <Link href="/support" className="btn-secondary">
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
