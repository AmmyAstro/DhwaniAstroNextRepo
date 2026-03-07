import Image from "next/image";
import Link from "next/link";

export default function BestsellServer({ title, items }) {
  return (
    <section className="w-full">
      <div className="side-pop p-3 flex flex-col gap-3 shadow-lg rounded-2xl">
        <span className="text-center font-semibold text-xl text-black">
          {title}
        </span>
        

        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="head-wrap flex flex-col items-center gap-1"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={160}
                height={120}
                className="rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
              <span className="text-xs font-semibold text-black text-center">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
