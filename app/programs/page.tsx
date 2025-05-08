import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0">
          <Image
            src="https://placehold.co/1600x600/2563eb/ffffff?text=GILF+Programs"
            alt="GILF Programs"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Programs & Initiatives</h1>
            <p className="mt-6 text-xl">
              Discover our comprehensive programs designed to empower communities through leadership, education, and
              sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Leadership Development</h2>
              <p className="mt-6 text-lg text-gray-600">
                Our leadership programs are designed to identify, nurture, and empower the next generation of leaders.
                We provide comprehensive training, mentorship, and practical experience to develop effective leadership
                skills.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Youth Leadership Academy</h3>
                  <p className="mt-2 text-gray-600">
                    A comprehensive program for young leaders aged 16-24, providing leadership training, mentorship, and
                    community project experience.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Women in Leadership</h3>
                  <p className="mt-2 text-gray-600">
                    Empowering women with leadership skills, networking opportunities, and support to overcome barriers
                    and excel in leadership roles.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Community Leadership Workshop Series</h3>
                  <p className="mt-2 text-gray-600">
                    Practical workshops for community leaders to enhance their skills in project management, conflict
                    resolution, and community mobilization.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/2563eb/ffffff?text=Leadership+Programs"
                alt="Leadership Programs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden lg:order-first">
              <Image
                src="https://placehold.co/800x600/2563eb/ffffff?text=Education+Programs"
                alt="Education Programs"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">Educational Initiatives</h2>
              <p className="mt-6 text-lg text-gray-600">
                Our educational initiatives aim to provide access to quality education and learning opportunities for
                underserved communities. We believe education is the foundation for sustainable development and
                empowerment.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Scholarship Program</h3>
                  <p className="mt-2 text-gray-600">
                    Providing financial support to talented students from disadvantaged backgrounds to pursue higher
                    education.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Digital Literacy Initiative</h3>
                  <p className="mt-2 text-gray-600">
                    Equipping communities with essential digital skills through training programs and access to
                    technology.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Community Learning Centers</h3>
                  <p className="mt-2 text-gray-600">
                    Establishing safe spaces for continuous learning, offering resources, tutoring, and educational
                    programs for all ages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Community Development</h2>
              <p className="mt-6 text-lg text-gray-600">
                Our community development programs focus on implementing sustainable projects that address community
                needs and foster long-term growth. We work closely with communities to identify priorities and develop
                effective solutions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Sustainable Agriculture Projects</h3>
                  <p className="mt-2 text-gray-600">
                    Supporting communities in developing sustainable farming practices to improve food security and
                    economic opportunities.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Clean Water Initiative</h3>
                  <p className="mt-2 text-gray-600">
                    Implementing projects to provide access to clean water and improve sanitation in underserved
                    communities.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">Community Infrastructure Development</h3>
                  <p className="mt-2 text-gray-600">
                    Working with communities to develop and improve essential infrastructure such as schools, health
                    centers, and community spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/2563eb/ffffff?text=Community+Development"
                alt="Community Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">
              Hear from the individuals and communities who have benefited from our programs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://placehold.co/100x100/2563eb/ffffff?text=Testimonial" alt="Testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sarah M.</h3>
                  <p className="text-sm text-gray-500">Youth Leadership Academy Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Youth Leadership Academy transformed my life. I gained confidence, leadership skills, and a network
                of mentors who continue to support my journey. Today, I'm leading community initiatives that I never
                thought possible."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://placehold.co/100x100/2563eb/ffffff?text=Testimonial" alt="Testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">James K.</h3>
                  <p className="text-sm text-gray-500">Community Leader</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "GILF's community development program helped us implement a sustainable water project that has improved
                health outcomes and quality of life in our village. Their collaborative approach ensured the project's
                success and sustainability."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://placehold.co/100x100/2563eb/ffffff?text=Testimonial" alt="Testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Maria L.</h3>
                  <p className="text-sm text-gray-500">Scholarship Recipient</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The scholarship I received from GILF made it possible for me to pursue my education. Now, as a teacher,
                I'm giving back to my community and inspiring the next generation of learners."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Partnership Opportunities</h2>
            <p className="section-subtitle">
              Join us in making a difference. We welcome partnerships with organizations that share our vision and
              values.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Program Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Collaborate with us to develop and implement programs that align with our mission and your
                organization's goals. Together, we can create greater impact and reach more communities.
              </p>
              <Link href="/get-involved" className="text-primary font-medium inline-flex items-center">
                Learn more about program partnerships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Corporate Sponsorships</h3>
              <p className="text-gray-600 mb-4">
                Support our programs through corporate sponsorships. Your organization can make a meaningful
                contribution to community development while fulfilling corporate social responsibility goals.
              </p>
              <Link href="/get-involved" className="text-primary font-medium inline-flex items-center">
                Explore sponsorship opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/get-involved" className="btn-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

