import impact from "../assets/images/impact.png";

import { ArrowRight } from "lucide-react";

export default function ImpactSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top: Stats Section */}
        {/* Image + Heading */}
        <div className="flex flex-col items-start gap-6 w-full lg:w-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[2.5rem] font-bold text-gray-900">
            Our impact in <br /> numbers
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-40 items-start">
          <img
            src={impact}
            alt="Business meeting"
            className="w-auto max-h-[450px] rounded-xl object-cover"
          />

          {/* Stats */}
          <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-8">
            <div>
              <h3 className="text-5xl sm:text-5xl md:text-[5rem] font-bold">
                100K
              </h3>
              <p className="text-lg text-gray-500">Customer</p>
            </div>
            <div>
              <h3 className="text-5xl sm:text-6xl md:text-[5rem]  font-bold">
                97%
              </h3>
              <p className="text-lg text-gray-500">Customer satisfaction</p>
            </div>
            <div>
              <h3 className="text-5xl sm:text-6xl md:text-[5rem]  font-bold">
                40%
              </h3>
              <p className="text-lg text-gray-500">Yearly growth</p>
            </div>
            <div>
              <h3 className="text-5xl sm:text-6xl md:text-[5rem]  font-bold">
                300B
              </h3>
              <p className="text-lg text-gray-500">Current Money Managed</p>
            </div>
            <div className="col-span-1 sm:col-span-2 mt-4">
              <button className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition duration-300">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
