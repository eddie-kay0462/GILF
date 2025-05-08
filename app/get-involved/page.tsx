import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import VolunteerForm from "@/components/volunteer-form"
import PartnershipForm from "@/components/partnership-form"

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0">
          <Image
            src="https://placehold.co/1600x600/2563eb/ffffff?text=Get+Involved+with+GILF"
            alt="Get Involved with GILF"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get Involved</h1>
            <p className="mt-6 text-xl">
              Join us in our mission to empower communities through leadership, education, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Ways to Get Involved</h2>
            <p className="section-subtitle">
              There are many ways you can contribute to our mission and make a difference in the communities we serve.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="https://placehold.co/600x400/2563eb/ffffff?text=Volunteer" alt="Volunteer" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Share your time and skills to support our programs and make a direct impact in the communities we
                  serve.
                </p>
                <Link href="#volunteer-form" className="text-primary font-medium inline-flex items-center">
                  Become a volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="https://placehold.co/600x400/2563eb/ffffff?text=Partner" alt="Partner" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate with us to develop and implement programs that create lasting positive change in
                  communities.
                </p>
                <Link href="#partnership-form" className="text-primary font-medium inline-flex items-center">
                  Explore partnerships
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="https://placehold.co/600x400/2563eb/ffffff?text=Donate" alt="Donate" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Support Our Work</h3>
                <p className="text-gray-600 mb-4">
                  Your financial contribution helps us continue and expand our programs, reaching more communities in
                  need.
                </p>
                <Link href="/support" className="text-primary font-medium inline-flex items-center">
                  Donate now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Volunteer for Our Upcoming Event</h2>
              <p className="mt-6 text-lg text-gray-600">
                We're always looking for passionate individuals to join our volunteer team. Whether you have specific
                skills to offer or simply want to contribute your time and energy, we welcome your support. Our
                volunteers play a crucial role in the success of our programs and events.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary">Upcoming Events</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mr-3">
                        Mar 15
                      </span>
                      <span>Leadership Workshop Series - Community Center</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mr-3">
                        Apr 10
                      </span>
                      <span>Youth Mentorship Program Launch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mr-3">
                        May 22
                      </span>
                      <span>Annual Community Development Conference</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary">Volunteer Opportunities</h3>
                  <ul className="mt-2 space-y-2">
                    <li>Event coordination and logistics</li>
                    <li>Mentorship and training</li>
                    <li>Administrative support</li>
                    <li>Communications and social media</li>
                    <li>Program implementation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-last">
              <h2 className="section-title">Partnerships & Sponsorships</h2>
              <p className="mt-6 text-lg text-gray-600">
                We believe in the power of collaboration to create greater impact. By partnering with organizations that
                share our vision and values, we can reach more communities and implement more effective programs.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Program Partnerships</h3>
                  <p className="mt-2 text-gray-600">
                    Collaborate with us to develop and implement programs that align with our mission and your
                    organization's goals.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Corporate Sponsorships</h3>
                  <p className="mt-2 text-gray-600">
                    Support our programs through corporate sponsorships and fulfill your corporate social responsibility
                    goals.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">In-Kind Donations</h3>
                  <p className="mt-2 text-gray-600">
                    Provide goods, services, or expertise to support our programs and operations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <PartnershipForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Volunteer Stories</h2>
            <p className="section-subtitle">
              Hear from our volunteers about their experiences and the impact of their contributions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://placehold.co/100x100/2563eb/ffffff?text=Volunteer" alt="Volunteer" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Michael T.</h3>
                  <p className="text-sm text-gray-500">Volunteer since 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Volunteering with GILF has been one of the most rewarding experiences of my life. I've had the
                opportunity to contribute to meaningful projects and witness firsthand the positive impact on
                communities. The team is passionate and dedicated, making it a joy to be part of this mission."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://placehold.co/100x100/2563eb/ffffff?text=Volunteer" alt="Volunteer" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Lisa R.</h3>
                  <p className="text-sm text-gray-500">Event Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I started volunteering at GILF events last year, and it's been an incredible journey. The organization
                is well-structured, and volunteers are valued and supported. I've gained new skills, made meaningful
                connections, and contributed to causes I care deeply about."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Make a Difference?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Join our community of volunteers, partners, and supporters who are committed to creating positive
                change.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#volunteer-form" className="btn-primary">
                  Volunteer Now
                </Link>
                <Link href="/support" className="btn-secondary">
                  Support Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

