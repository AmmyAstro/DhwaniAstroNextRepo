import AboutDirectorClient from "../AboutDirectorClient";
export default function AboutDirectorSection({ messages }) {
  return (
    <section className="about-director-section flex flex-col gap-4 items-center py-5 px-4 max-w-7xl mx-auto">
   

      <AboutDirectorClient messages={messages} />
    </section>
  );
}
