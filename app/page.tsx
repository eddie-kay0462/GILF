import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Heart, BookOpen } from "lucide-react"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <>
      <Hero />
      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="mt-6 text-lg text-gray-600">
                Global Impact Leaders Foundation, GILF is a youth development organization dedicated to empowering students in Africa to achieve their education and career aspirations, and to become impact-driven leaders. 
              </p>
              <p className="mt-4 text-lg text-gray-600">
                GILF accomplishes this through a structured mentorship program that provides access to career and personal development opportunities, scholarships for underprivileged students, and ethical leadership training modules focused on creating a positive impact on society.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center text-primary font-medium">
                  Learn more about our story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/brand/replace_accra_aca.jpg" alt="GILF Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
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
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Purpose</h3>
              <p className="text-gray-600">
                We guide individuals to discover and pursue their life's purpose with passion and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">Meet the dedicated individuals driving our mission forward.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Team Member 1 */}
            <div className="text-center mt-12 md:mt-16">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/edward.jpg"
                  alt="Team Member Name"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Edward Ofosu Mensah</h3>
              <p className="text-primary font-medium mb-3">Director of Scholarship Programs</p>
              <p className="text-gray-600">
                An aspiring software and machine learning engineer with experience developing AI-powered web applications. 
                Engages actively with community service with over 20+ months of mentoring brilliant but underprivileged high school students.
              </p>
              <div className="mt-4 flex justify-center">
                <Link href="https://www.linkedin.com/in/edward-ofosu-mensah-a90500252/" target="_blank" className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded hover:bg-[#0069a0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Founder & CEO - More Prominent */}
            <div className="text-center -mt-8 md:-mt-12 transform transition-all duration-300 hover:scale-105">
              <div className="relative w-56 h-56 mx-auto mb-5">
                <Image
                  src="/team/paul.png"
                  alt="Paul Lamptey - Founder & CEO"
                  fill
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Paul Lamptey</h3>
              <p className="text-primary font-semibold mb-3 text-lg">Founder & CEO</p>
              <p className="text-gray-600">
                A Business Intelligence and Data Analytics Professional dedicated to enhancing strategic business and financial decision-making through data-driven insights. His key areas of interest include International Business, Leadership, Project Management, and Relationship Management. He is an advocate for living a purpose-driven life and envisions education as a platform for giving back to the world, the experience and wisdom we have gained from life through our challenges, and accomplishments. 
              </p>
              <div className="mt-4 flex justify-center">
                <Link href="https://www.linkedin.com/in/paul-lamptey/" target="_blank" className="flex items-center gap-2 bg-[#0077b5] text-white px-5 py-2.5 rounded hover:bg-[#0069a0] transition-colors font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center mt-12 md:mt-16">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/theresa.png"
                  alt="Team Member Name"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Theresa Ajube</h3>
              <p className="text-primary font-medium mb-3">Director of Administration and Coordination</p>
              <p className="text-gray-600">
                Aspiring Data Analyst with a fascination for leveraging data to drive informed decision-making. 
                I find immense fulfilment in guiding younger individuals as they navigate their educational and professional journeys with little to no hiccups.
              </p>
              <div className="mt-4 flex justify-center">
                <Link href="https://www.linkedin.com/in/theresah-ajube/" target="_blank" className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded hover:bg-[#0069a0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Discover how we're making a difference through our key initiatives.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="/about/about-slide-1.jpg"
                  alt="Students participating in GILF community outreach program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">GILF Outreach</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Connecting with communities to identify talented students and provide them with resources and opportunities.
                </p>
                <Link href="/programs/outreach" className="text-primary font-medium inline-flex items-center mt-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Students practicing interview skills in a mock interview session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">Scholarship Guidance & Mock Interviews</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Preparing students for scholarship applications and interviews with expert guidance and practice sessions.
                </p>
                <Link href="/programs/scholarship-guidance" className="text-primary font-medium inline-flex items-center mt-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="Professional mentoring session with students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">Career Development Programs</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Equipping students with professional skills, industry insights, and networks needed for successful careers.
                </p>
                <Link href="/programs/career-development" className="text-primary font-medium inline-flex items-center mt-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070"
                  alt="Students and professionals networking at Impact Leadership Conference"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">Impact Leadership Conference</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Bringing together aspiring leaders to learn from experts, share ideas, and build collaborative networks.
                </p>
                <Link href="/programs/leadership-conference" className="text-primary font-medium inline-flex items-center mt-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-lg">
              Through our programs and initiatives, we've made a significant difference in communities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">5,000+</div>
              <p className="mt-2 text-lg">People Impacted</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold">20+</div>
              <p className="mt-2 text-lg">Communities Served</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <p className="mt-2 text-lg">Leadership Programs</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold">100+</div>
              <p className="mt-2 text-lg">Partners & Sponsors</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/impact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100"
            >
              See Our Full Impact
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Join Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Together, we can make a lasting impact on communities. Whether through volunteering, partnerships, or
                  donations, your support helps us continue our important work.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/get-involved" className="btn-primary">
                    Get Involved
                  </Link>
                  <Link href="/support" className="btn-secondary">
                    Support Us
                  </Link>
                </div>
              </div>
              <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src="/brand/support_us.jpeg"
                  alt="Join Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
