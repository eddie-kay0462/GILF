import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function ImpactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="GILF Impact"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Impact</h1>
            <p className="mt-6 text-xl">
              Discover how our programs and initiatives are creating positive change in communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Impact by the Numbers</h2>
            <p className="section-subtitle">
              Through our programs and initiatives, we've made a significant difference in communities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">5,000+</div>
              <p className="mt-2 text-lg">People Impacted</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">20+</div>
              <p className="mt-2 text-lg">Communities Served</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="mt-2 text-lg">Leadership Programs</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <p className="mt-2 text-lg">Partners & Sponsors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real stories of transformation and impact from the communities we serve.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=500&width=800" alt="Success Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Community Water Project</h3>
                <p className="text-gray-600 mb-4">
                  In partnership with local leaders, we implemented a sustainable water project that provides clean
                  water to over 1,000 residents in a rural community. This has significantly improved health outcomes
                  and quality of life.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">Riverside Community</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="font-medium">Year:</span>
                  <span className="ml-2">2022</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=500&width=800" alt="Success Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Youth Leadership Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Our Youth Leadership Academy has trained over 200 young leaders who are now implementing community
                  projects, mentoring peers, and creating positive change in their communities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">Multiple Communities</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="font-medium">Year:</span>
                  <span className="ml-2">2020-Present</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=500&width=800" alt="Success Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Community Learning Center</h3>
                <p className="text-gray-600 mb-4">
                  We established a Community Learning Center that provides educational resources, tutoring, and skills
                  training to over 500 community members annually, from children to adults.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">Eastside Community</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="font-medium">Year:</span>
                  <span className="ml-2">2021</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=500&width=800" alt="Success Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Women's Empowerment Program</h3>
                <p className="text-gray-600 mb-4">
                  Our Women in Leadership program has empowered over 150 women with leadership skills, business
                  training, and mentorship, enabling them to start businesses and take on leadership roles.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">Multiple Communities</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="font-medium">Year:</span>
                  <span className="ml-2">2019-Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">
              Hear from the individuals and communities who have benefited from our programs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "The leadership training I received through GILF has transformed my life. I now have the confidence and
                skills to lead initiatives in my community and mentor other young leaders."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">David M.</h3>
                  <p className="text-sm text-gray-500">Youth Leadership Graduate</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "The Community Learning Center has provided our children with access to educational resources and
                tutoring that were previously unavailable. We've seen significant improvement in their academic
                performance."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Grace T.</h3>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "Thanks to the Women's Empowerment Program, I was able to start my own business and provide for my
                family. The skills and mentorship I received were invaluable."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Rebecca N.</h3>
                  <p className="text-sm text-gray-500">Program Participant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Media Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Media Gallery</h2>
            <p className="section-subtitle">
              See our work in action through photos and videos from our programs and initiatives.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="GILF Program" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="GILF Program" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="GILF Program" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="GILF Program" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="GILF Program" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="GILF Program" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Support Our Mission</h2>
              <p className="mt-4 text-lg">
                Your support helps us continue our work and expand our impact in communities. Together, we can create
                lasting positive change.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100"
                >
                  Donate Now
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

