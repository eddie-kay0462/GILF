import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">GILF</h2>
            <p className="text-sm">
              Empowering communities through leadership, education, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-secondary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-secondary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-secondary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm hover:text-secondary">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-sm hover:text-secondary">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm hover:text-secondary">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-secondary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-sm hover:text-secondary">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-sm hover:text-secondary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-sm hover:text-secondary">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@gilf.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+123 456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-sm">123 Leadership Avenue, Community City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} GILF. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-sm text-white/70 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

