const images = [
  "https://motionsites.ai/assets/hero-apex-saas-preview-CbnBKSPv.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-datacore-booking-preview-B3t9SRK6.gif",
  "https://motionsites.ai/assets/hero-synapse-ai-preview-BjBuH68i.gif",
  "https://motionsites.ai/assets/hero-bloom-ai-preview-g6RcYLTl.gif",
  "https://motionsites.ai/assets/hero-clearinvoice-preview-l3q8sam6.gif",
  "https://motionsites.ai/assets/hero-vortex-studio-preview-BQyvwopD.gif",
  "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif",
];

export default function Marquee() {
  const doubled = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="marquee-track flex w-max">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="mx-2 h-[240px] rounded-2xl object-cover shadow-[0_2px_16px_rgba(0,0,0,0.08)] md:mx-3 md:h-[380px]"
            style={{ aspectRatio: "4/5" }}
          />
        ))}
      </div>
    </section>
  );
}
