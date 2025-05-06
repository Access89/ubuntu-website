export default function CallToAction() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between bg-blue-100 rounded-xl p-8">
        <div className="text-2xl font-bold mb-4 md:mb-0">
          Open an investment account today and experience next-gen services
        </div>
        <a
          href="tel:+1234567890"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Call Us Now
        </a>
      </div>
    </section>
  );
}
