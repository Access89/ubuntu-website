import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function ImpactSection() {
  const [hasViewed, setHasViewed] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) setHasViewed(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-white py-16 px-6 md:px-12 xl:px-0 lg:min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl lg:mx-auto space-y-6 md:mx-16">
        <div className="flex flex-col items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 w-full sm:text-center text-left lg:w-[80%] mx-auto">
          <h2 className="text-3xl sm:text-[2rem] lg:text-[2.5rem] font-[600] text-gray-900 leading-[110%]">
            Transforming Vision into Value: A Look at Our Impact Through the
            Numbers
          </h2>
          <p className="text-xl lg:text-2xl leading-[180%] font-[300]">
            Ubuntu Capital Microfinance is driving financial inclusion across
            Ghana by empowering over 45,000 clients in 8 regions with access to
            ethical and reliable financial services. With over GHS 120 million
            disbursed in microloans—primarily to women, youth, and small
            businesses—we’re fueling local enterprise and community resilience.
            Our digital platforms have enabled 250,000+ mobile transactions,
            while our financial literacy programs are helping thousands build
            lasting financial habits. Every number tells a story of progress,
            purpose, and people.
          </p>

          {/* Stats with animated counters */}
          <div className="w-full mt-4 md:mt-6 lg:mt-8 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-12 md:gap-x-16 gap-y-8">
            <StatItem
              value={100}
              suffix="K"
              label="Customer"
              hasViewed={hasViewed}
            />
            <StatItem
              value={97}
              suffix="%"
              label="Customer satisfaction"
              hasViewed={hasViewed}
            />
            <StatItem
              value={40}
              suffix="%"
              label="Yearly growth"
              hasViewed={hasViewed}
            />
            <StatItem
              value={300}
              suffix="B"
              label="Current Money Managed"
              hasViewed={hasViewed}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  hasViewed,
}: {
  value: number;
  suffix: string;
  label: string;
  hasViewed: boolean;
}) {
  return (
    <div>
      <h3 className="text-5xl sm:text-6xl md:text-[5rem] text-[#225EA6] font-[500]">
        {hasViewed ? (
          <CountUp end={value} duration={2.5} suffix={suffix} />
        ) : (
          "0"
        )}
      </h3>
      <p className="text-base lg:text-lg text-[#929292]">{label}</p>
    </div>
  );
}
