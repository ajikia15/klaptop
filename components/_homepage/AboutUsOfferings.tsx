export default function AboutUsOfferings({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string | null;
}) {
  return (
    <a
      className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="/services/digital-campaigns"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </a>
  );
}
