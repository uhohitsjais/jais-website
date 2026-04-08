export default function Footer() {
  const LINKEDIN_URL = "https://www.linkedin.com/in/jaisalexis-tollette/";

  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#9ca3af]">
          © {new Date().getFullYear()} Jais Tollette
        </p>

        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9ca3af] hover:text-[#3A49A3] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#FFA8EA] text-xs">·</span>
          <a
            href="#contact"
            className="text-sm text-[#9ca3af] hover:text-[#3A49A3] transition-colors"
          >
            Contact
          </a>
          <span className="text-[#FFA8EA] text-xs">·</span>
          <a
            href="#about"
            className="text-sm text-[#9ca3af] hover:text-[#3A49A3] transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
}
