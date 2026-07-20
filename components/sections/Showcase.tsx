import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Showcase() {
  return (
    <>
      {/* First Section - Black */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Left */}
            <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/3.jpg"
                alt="Venue exterior"
                fill
                className="object-cover"
              />
            </div>
            {/* Text Right */}
            <div className="md:pl-8">
              <span className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-secondary mb-2">
                Discover
              </span>
              <h2 className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-white mb-10">
                THE EXPERIENCE
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-[1.8] mb-8 max-w-lg">
                At Dream Moments, we elevate celebrations into breathtaking realities. With an uncompromising eye for detail and a passion for bespoke design, our team curates unparalleled luxury experiences. We don't just plan events; we orchestrate timeless memories that you and your guests will cherish forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - White */}
      <section className="bg-background text-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Left (Right Aligned) */}
            <div className="order-2 md:order-1 text-left md:text-right md:pr-8 flex flex-col md:items-end">
              <span className="block font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-primary mb-2">
                Bespoke
              </span>
              <h2 className="heading-lg text-3xl md:text-4xl lg:text-[2.75rem] tracking-[2px]! font-normal! font-[math]! uppercase text-black mb-10">
                CELEBRATIONS
              </h2>
              <p className="text-black text-sm md:text-base leading-[1.8] mb-8 max-w-lg">
                As premier artisans of event design, we transform spaces into enchanting visual masterpieces. From opulent grand weddings to intimate luxury affairs, our bespoke styling captivates the senses. Every floral arrangement, color palette, and architectural detail is meticulously crafted to tell your unique love story.
              </p>
            </div>
            {/* Image Right */}
            <div className="order-1 md:order-2 relative aspect-[16/9] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/1.jpg"
                alt="Wedding Decor"
                fill
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
