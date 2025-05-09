import React from "react";

const About: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#F5F8FA] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering the Future with IoT Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Connecting devices, data, and people to drive innovation and
            efficiency.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At IoT Innovators, our mission is to revolutionize industries by
              providing cutting-edge IoT solutions that enhance connectivity,
              streamline operations, and foster sustainable growth.
            </p>
          </div>
          <div>
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#F5F8FA] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing the boundaries to develop forward-thinking
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p className="text-gray-600">
                Upholding the highest standards of honesty and transparency in
                all our endeavors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together with clients and partners to achieve shared
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div>
              <img
                src="/images/team1.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-medium">Alex Johnson</h4>
              <p className="text-gray-500 text-sm">Chief Executive Officer</p>
            </div>
            {/* Team Member 2 */}
            <div>
              <img
                src="/images/team2.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-medium">Maria Rodriguez</h4>
              <p className="text-gray-500 text-sm">Head of Engineering</p>
            </div>
            {/* Team Member 3 */}
            <div>
              <img
                src="/images/team3.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-medium">Liam Smith</h4>
              <p className="text-gray-500 text-sm">Lead Designer</p>
            </div>
            {/* Team Member 4 */}
            <div>
              <img
                src="/images/team4.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-medium">Sophie Lee</h4>
              <p className="text-gray-500 text-sm">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#225EA6] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Transform Your Business with IoT?
          </h2>
          <p className="mb-6">
            Contact us today to discover how our solutions can drive your
            success.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#225EA6] px-6 py-3 rounded-full font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
