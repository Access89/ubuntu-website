import { Icon } from '@iconify/react/dist/iconify.js';

export default function SupportPage() {
  return (
    <section className="min-h-[700px] bg-white py-16 pt-32">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#225EA6] mb-4">
              We're Here to Help
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Have questions about our services, investments, or operations?
              Find answers below or reach out to us directly. We're committed to
              supporting your financial journey.
            </p>
          </div> */}
          {/* Contact Information Section */}
          <section className="py-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-12">
                General Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-xl">
                <div className="bg-white p-8 sm:border-r">
                  <div className="text-[#225EA6] mb-4">
                    <Icon
                      icon={'ph:building-office-thin'}
                      className="mx-auto w-15 h-15"
                    />
                  </div>
                  <p className="text-lg font-medium">Head Office</p>
                  <p className="text-gray-700">
                    23 1st Freetown Link Okponglo, Accra, Ghana
                  </p>
                </div>

                <div className="bg-white p-8 md:border-r">
                  <div className="text-[#225EA6] mb-4">
                    <Icon
                      icon={'mdi-light:phone'}
                      className="mx-auto w-15 h-15"
                    />
                  </div>
                  <p className="text-lg font-medium">Call Us</p>
                  <p className="text-gray-700">0302547880 </p>
                  <p className="text-gray-700">0307001796</p>
                </div>

                <div className="bg-white p-8">
                  <div className="text-[#225EA6] mb-4">
                    <Icon
                      icon={'guidance:clock'}
                      className="mx-auto w-15 h-15"
                    />
                  </div>
                  <p className="text-lg font-medium">Working Hours</p>
                  <p className="text-gray-700">
                    Mon–Fri <br /> 8 AM – 5 PM
                  </p>
                  {/* <p className="text-gray-700">Saturday: 9 AM – 4 PM</p> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto">
        <Faq />
        <CallToAction />
      </div> */}
    </section>
  );
}
