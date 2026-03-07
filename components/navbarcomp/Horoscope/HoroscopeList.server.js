import HoroscopeSection from "./HoroscopeSection";

const categories = [
  { key: "personal_life", label: "Personal Life", icon: "/ds-img/user2.png" },
  { key: "profession", label: "Professional Life", icon: "/ds-img/handshake.png" },
  { key: "health", label: "Health", icon: "/ds-img/healthcare.png" },
  { key: "travel", label: "Travel", icon: "/ds-img/airplane.png" },
  { key: "luck", label: "Luck", icon: "/ds-img/fingers.png" },
  { key: "emotions", label: "Emotions", icon: "/ds-img/emotional.png" },
];

export default function HoroscopeList({ prediction }) {
  return (
    <div className="space-y-4">
      {categories.map((cat) => (
        <HoroscopeSection
          key={cat.key}
          title={cat.label}
          icon={cat.icon}
          content={prediction?.[cat.key]}
        />
      ))}
    </div>
  );
}
