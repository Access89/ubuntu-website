import { Link } from "react-router-dom";
import NotFoundIllustration from "@/assets/images/404-illustration.svg";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-2xl text-center">
        <img
          src={NotFoundIllustration}
          alt="Page not found"
          className="mx-auto w-96 mb-8"
        />

        <h1 className="text-5xl font-bold text-[#225EA6] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#225EA6] hover:bg-[#1A4A84] text-white px-6 py-3 rounded-xl text-lg font-medium transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
