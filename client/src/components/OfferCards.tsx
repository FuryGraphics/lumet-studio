import { planOffers } from "@/data/offers";

/** The two plan offers, with the photos that illustrate them. */
export default function OfferCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {planOffers.map(offer => (
        <article key={offer.title} className="border border-[#E5E5E5] bg-white">
          <div className="aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
            <img
              src={offer.image}
              alt={offer.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D]">
              {offer.title}
            </h3>
            <p className="lc-body mt-2 text-sm md:text-base text-[#525252]">
              {offer.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
