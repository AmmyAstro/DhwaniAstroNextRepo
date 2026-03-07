import Image from "next/image";

export default function HoroscopeSection({ title, icon, content }) {
  if (!content) return null;

  return (
    <section className="border-2 border-violet-200 rounded-2xl p-4">
      <header className="flex items-center gap-3 mb-2">
        <Image src={icon} alt={title} width={28} height={28} />
        <h2 className="text-sm md:text-base font-semibold">
          {title}
        </h2>
      </header>

      <p className="text-xs md:text-sm leading-relaxed text-gray-800">
        {content}
      </p>
    </section>
  );
}
