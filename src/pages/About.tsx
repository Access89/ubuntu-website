import { Icon } from '@iconify/react/dist/iconify.js';
import CEO from '@/assets/images/CEO.jpg';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const AboutUs = () => {
  const managementMembers = [
    {
      title: 'Managing Director',
      name: 'Kwadwo Boateng Adjei',
      description: (
        <div>
          <p>
            Kwadwo Boateng Adjei Certified Microfinance Practitioner with over
            14 years’ experience in microfinance and banking, an in-depth
            understanding of the Microfinance industry in Ghana and a Marketing
            strategist. He is currently the Managing Director of Ubuntu Capital
            Microfinance Ltd.{' '}
          </p>
          <p>
            Kwadwo began his career with the Association of Productive
            Entrepreneurs in Development, APED (now Vision Fund Ltd.) in 2006
            and from there, he worked with Opportunity International Savings and
            Loans in 2007. He moved to Barclays Bank Ghana Ltd (now ABSA) as a
            Business Customer Advisor in 2008 and rose through the ranks to
            become a Sales Manager before his appointment as the Head of Sales
            of SIC Life Savings and Loans in 2013. He holds a Master’s degree in
            Business Administration (Marketing) from the Ghana Institute of
            Management and Public Administration and a Bachelor of Science
            degree in Agriculture from the University of Cape Coast.
          </p>
          <p>
            He has managed the company since its inception in 2015 and curated
            all the company’s products. He has been pivotal in the growth of
            Ubuntu Capital Microfinance over the past 10 years.
          </p>
        </div>
      ),
    },
    {
      title: 'Operations Manager',
      name: 'Jonathan Owusu-Ansah',
      description: (
        <>
          <p>
            Mr. Jonathan Owusu-Ansah has over 14 years’ experience in the
            financial services industry. He joined Ubuntu Capital Microfinance
            Limited as the Operations Manager in 2020. Prior to joining, he
            worked as the Head of Operations at Yilo Star Microfinance Ltd and
            as Assistant Operations Manager at North Volta Rural Bank Ltd. He is
            a Chartered Banker (CIB-GHANA), holds an MBA in Operations and
            Management Information System from the University of Ghana Business
            School and a Bachelor’s degree in Sociology with Philosophy also
            from the University of Ghana.
          </p>
        </>
      ),
    },
    {
      title: 'Finance Manager',
      name: 'Joshua Annor',
      description: (
        <>
          <p>
            Mr. Joshua Annor joined Ubuntu Capital Microfinance Limited in 2022
            as the Finance Manager from HM Plus Microfinance where he also
            worked as the Finance Manager. Prior to this, he worked with
            TGS-PenielStephens Chartered Accountants as the Assistant Manager in
            charge of external and internal audits. Over the years, he has held
            several positions of responsibility at PEG Solar Ghana Ltd, Beige
            Capital Savings and Loans, Savvy Capire Partners Ltd and TNS
            Global/RMSI. Mr. Joshua Annor has strong professional and academic
            qualifications to his credit. He is a Chartered Accountant (ACCA).
            He holds a Master’s Degree in Finance from University of Ghana, a
            bachelor’s degree in Business Administration (Accounting) from
            Pentecost University, a Diploma in Business Management and
            Administration and an HND in Accounting and Finance both from the
            Institute of Commercial Management (ICM). He is currently taking the
            Authorized Dealing officer Certification course with the Ghana Stock
            Exchange school.{' '}
          </p>
        </>
      ),
    },
    {
      title: 'HR & Administration Manager',
      name: 'Esther Nyamekye Cudjoe',
      description: (
        <>
          <p>
            Ms. Esther Nyamekye Cudjoe has over 8years experience in
            Administration and Human Resource. She is currently the Human
            Resources and Administration Manager of Ubuntu Capital Microfinance
            Limited. She has taken on various HR & Administrative roles across
            industries as well as the health industry. Ms. Esther Nyamekye
            Cudjoe is an Associate Member of the Association of Chartered Human
            Resources-Ghana, holds a Bachelor of Arts in Integrated Business
            Studies from University for Development Studies. She also has
            Executive Certificate in Strategic HR Management and Certificate in
            Labour Law application from HR Certification Centre and participated
            in several management programmes including Certified Microfinance
            Practitioner.
          </p>
        </>
      ),
    },
  ];
  const boardMembers = [
    {
      title: 'Chief Executive Officer',
      name: 'Mr. Nana Sarfo',
      description: (
        <>
          {' '}
          <p>
            Nana is the founder and Chief Executive Officer of Bora Capital
            Advisors. He has over 20 years’ experience in the investment banking
            industry in Ghana and has worked on several major transactions in
            Ghana and the West African sub-region. Prior to founding Bora
            Capital, Nana was the CEO of Fidelity Securities and Head of
            Investment Banking within the Fidelity Group for over 5 years. He
            has worked as a Regional Investment Officer in Ecobank Capital,
            responsible for capital market deals within West and Central Africa.
            He also served as Head of Corporate Finance at UMB Bank (then
            Merchant Bank Ghana) where he led major landmark transactions within
            banking, mining, breweries, automobile industries. Nana has an MBA
            from Carlson School of Management, University of Minnesota in the
            USA, BA Economics and Computer Science from the University of Ghana
            and is a Chartered Banker (ACIB from both England & Wales and Ghana
            Institute of Bankers).
          </p>
        </>
      ),
    },
    {
      title: 'Managing Director, Banking Operations',
      name: 'Mr. Kwabena Ayirebi',
      description: (
        <>
          <p>
            Mr. Kwabena Ayirebi joined the African Export-Import Bank in
            September 2017 as Director Banking Operations. Mr Ayirebi holds a
            Master of Sciences in Financial Engineering and Quantitative
            Analysis from the University of Reading, UK. He also holds a
            Bachelor of Sciences in Civil Engineering from Kwame Nkrumah
            University of Science & Technology and a Bachelor of Sciences in
            Financial Services and Associateship from the University of
            Manchester, Institute of Financial Services. For the eight years
            prior to joining the Bank, Mr Ayirebi held various positions at
            HSBC, MENA such as Senior Executive, Global Banking & Commercial
            Banking, Managing Director, Regional Head of Trade & Receivables
            Finance, Global Head of Business Management, Trade & Receivables
            Finance, and Senior Manager, Group Strategy & Planning. Prior to
            that, Mr Ayirebi worked as Head, Trade Sales and Client Management
            at SAAB, Saudi Arabia. He also occupied the position of Vice
            President, Decision Analytics at HSBC Asia Pacific for three years,
            and Vice President, Trade Services for two years. Mr Ayirebi started
            his career as Manager Credit MIS and Reporting at Standard Chartered
            Bank, Ghana.
          </p>
        </>
      ),
    },
  ];
  const [clickedOnContent, setClickedOnContent] = useState<[number, number]>();
  const selectedMember =
    clickedOnContent != null
      ? clickedOnContent[0] === 0
        ? boardMembers[clickedOnContent[1]]
        : managementMembers[clickedOnContent[1]]
      : null;

  return (
    <section className="bg-white text-gray-800 pt-20 ">
      <div className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Intro Section */}
          <div className="text-center max-w-4xl mx-auto pt-16">
            <h2 className="text-[#225EA6] font-semibold text-sm uppercase tracking-wider mb-3">
              About Ubuntu Capital
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empowering Growth with Trust, Respect & Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ubuntu Capital Microfinance Limited is a tier 2 deposit-taking
              institution established in 2014 and began operations in 2015. Our
              focus is to provide timely financial solutions and business
              support through innovation, technology, and a highly motivated
              team. We strive to help individuals and businesses grow
              sustainably within dynamic market conditions.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 text-center">
            <div className=" md:p-8 md:border-r">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed">
                To become the preferred money transmission enabler bridging the
                gap between the banked and unbanked, and the go-to microfinance
                institution in the industry.
              </p>
            </div>
            <div className=" md:p-8 lg:border-r">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed">
                To be the best microfinance company in Ghana that meets
                international standards in profitability, corporate governance,
                and stakeholder value.
              </p>
            </div>

            {/* Objectives Section */}
            {/* <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6] text-left">
                Our Objectives
              </h3>
              <ul className="list-disc list-inside space-y-4 text-gray-600 text-lg md:text-[19px] leading-relaxed max-w-3xl mx-auto">
                <li>
                  To provide financial support to individuals and micro, small,
                  and medium enterprises (MSMEs).
                </li>
                <li>
                  To leverage technology to improve operational efficiency.
                </li>
                <li>
                  To delight customers by exceeding their expectations and
                  becoming their number one financial partner.
                </li>
              </ul>
            </div> */}

            {/* Compliance Section */}
            <div className="max-w-4xl mx-auto md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Compliance & Integrity
              </h3>
              <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed">
                Ubuntu Capital complies fully with the Bank of Ghana's
                regulations and other statutory guidelines. We uphold ethical
                standards and operate with integrity, respecting all legal
                frameworks guiding financial services in Ghana.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-[#225EA6]">
              Our Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["Respect", "Trust", "Excellence"].map((value) => (
                <div
                  key={value}
                  className="bg-blue-50 text-[#225EA6] px-6 py-4 rounded-xl shadow-sm text-lg font-medium"
                >
                  {value}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      {/* Our Values */}
      <section className="bg-[#F5F8FA] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-[#225EA6]">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Respect',
                description:
                  'We treat every individual with dignity and fairness, valuing the diversity of our clients and their unique financial needs.',
                icon: 'material-symbols:diversity-1',
              },
              {
                title: 'Trust',
                description:
                  'We build lasting relationships through honesty, transparency, and reliability in every financial interaction.',
                icon: 'mdi:handshake-outline',
              },
              {
                title: 'Excellence',
                description:
                  'We strive for superior service delivery and innovation, ensuring we exceed expectations and empower sustainable growth.',
                icon: 'la:award',
              },
            ].map((value, index) => (
              <div key={index} className=" p-6">
                <Icon
                  icon={value.icon}
                  className="text-4xl lg:text-5xl mx-auto mb-4 text-[#225EA6]"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#225EA6]">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <Dialog>
        <section className="bg-white py-20 px-6 md:px-16 lg:px-24 flex flex-col gap-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12 text-[#225EA6]">
              Board of Directors
            </h2>
            <div className="grid sm:grid-cols-2  gap-12">
              {boardMembers.map((member, index) => (
                <DialogTrigger key={index} asChild>
                  <div
                    onClick={() => setClickedOnContent([0, index])}
                    className={cn(
                      ' cursor-pointer flex flex-col h-60 items-center text-center  rounded-xl p-6 bg-[#F9FBFD] hover:shadow-xl transition duration-300'
                    )}
                  >
                    <img
                      src={CEO}
                      alt={member.name}
                      className={cn(
                        'w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#225EA6]'
                      )}
                      style={{ filter: 'brightness(0.8)' }}
                    />
                    <h3 className="text-lg font-semibold text-[#225EA6] mt-auto">
                      {member.name}
                    </h3>
                    <p className="text-[#754C2A]">{member.title}</p>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12 text-[#225EA6]">
              Management
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {managementMembers.map((member, index) => (
                <DialogTrigger key={index} asChild>
                  <div
                    onClick={() => setClickedOnContent([1, index])}
                    className={cn(
                      ' cursor-pointer flex flex-col h-60 items-center text-center  rounded-xl p-6 bg-[#F9FBFD] hover:shadow-xl transition duration-300',
                      index === 0 && 'lg:col-span-3 sm:col-span-2'
                    )}
                  >
                    <img
                      src={CEO}
                      alt={member.name}
                      className={cn(
                        'w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#225EA6]'
                      )}
                      style={{ filter: 'brightness(0.8)' }}
                    />
                    <h3 className="text-lg font-semibold text-[#225EA6] mt-auto">
                      {member.name}
                    </h3>
                    <p className="text-[#754C2A]">{member.title}</p>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
        </section>

        <DialogContent>
          {selectedMember && (
            <div className="space-y-2 pt-6">
              <img src={CEO} />
              <h3 className="text-xl font-semibold text-[#225EA6]">
                {selectedMember.name}
              </h3>
              <p className="text-[#754C2A]">{selectedMember.title}</p>
              <div className="text-gray-700 text-sm md:text-base">
                {selectedMember.description}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="bg-[#225EA6] text-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center px-5">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Take Your Financial Future to the Next Level?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Whether you're a growing business or an individual seeking financial
            support, Ubuntu Capital is here to help you thrive. Let’s build a
            better tomorrow—together.
          </p>
          <Link
            to="/support"
            className="inline-block bg-white text-[#225EA6] px-6 py-3 rounded-full font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
