import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { blogPosts } from "@/lib/data";
import { ArrowRight, Calendar } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          scriptText="Latest"
          title="Wedding Tips"
          description="Expert insights, trends, and inspiration for your dream celebration."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, i) => (
            <Card key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-2 text-muted text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm text-secondary font-medium group-hover:text-primary transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
