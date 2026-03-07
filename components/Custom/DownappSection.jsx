
import DownappClient from "../DownappClient"
export default function DownappSection({ messages }) {
  return (
    <section className="m-2 rounded-2xl relative">
   
      <div className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/ds-img/bg-dsw.webp')" }}
      />

    
      <DownappClient messages={messages} />

    </section>
  );
}
