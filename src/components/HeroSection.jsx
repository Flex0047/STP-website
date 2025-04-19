export default function HeroSection() {

return (
        <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Forem ipsum dolor sit amet consectetur
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
            Hidden gems breathtaking views, unforgettable adventures: where will you go next
            </p>
            <a
            href="/explore"
            className="inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-primary-300 "
            >
            Explore
            </a>
        </div>
        </section>
    )
}

