import CallToAction from "@/components/landing/CallToAction";
import Faq from "@/components/shared/FAQ";

export default function SupportPage() {
  return (
    <section className="bg-white py-16 pt-32">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#225EA6] mb-4">
              We're Here to Help
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Have questions about our services, investments, or operations?
              Find answers below or reach out to us directly. We're committed to
              supporting your financial journey.
            </p>
          </div>
          {/* Contact Information Section */}
          <section className="py-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#225EA6] mb-12">
                General Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-xl">
                <div className="bg-white p-8 border-r">
                  <div className="text-[#225EA6] mb-4">
                    <svg
                      className="mx-auto w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 20l-5.447-2.724A2 2 0 013 15.382V5a2 2 0 012-2h14a2 2 0 012 2v10.382a2 2 0 01-1.553 1.894L15 20l-3-1.5-3 1.5z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Head Office</p>
                  <p className="text-gray-700">
                    23 1st Freetown Link Okponglo, Accra, Ghana
                  </p>
                </div>

                <div className="bg-white p-8 border-r">
                  <div className="text-[#225EA6] mb-4">
                    <svg
                      className="mx-auto w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92V21a1 1 0 01-1.09 1A19.84 19.84 0 013 5.09 1 1 0 014 4h4.09a1 1 0 011 .75L10.21 7.6a1 1 0 01-.29 1L8.41 10a16 16 0 006.59 6.59l1.39-1.39a1 1 0 011-.29l2.85.71a1 1 0 01.75 1V16.92z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Call Us</p>
                  <p className="text-gray-700">+233 302 421429</p>
                  <p className="text-gray-700">+233 507 697966</p>
                </div>

                <div className="bg-white p-8">
                  <div className="text-[#225EA6] mb-4">
                    <svg
                      className="mx-auto w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v5l4 2m6-5a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Working Hours</p>
                  <p className="text-gray-700">Mon–Fri: 9 AM – 6 PM</p>
                  <p className="text-gray-700">Saturday: 9 AM – 4 PM</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Faq />
        <CallToAction />
      </div>
    </section>
  );
}
