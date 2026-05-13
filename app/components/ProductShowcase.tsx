import Image from "next/image";

const products = [
  {
    id: "outdoor-play-station",
    title: "Multi Play Station",
    description: "Premium FRP multi-play station with multiple slides, climbing frames, and interactive play zones for schools and parks.",
    image: "/outdoor-play-station.png",
    price: "Custom Pricing",
  },
  {
    id: "school-desk",
    title: "Nursery School Desk",
    description: "Ergonomic 2-seater plastic school desk for nursery and preschool students. Durable, colorful, and child-safe design.",
    image: "/school-desk.png",
    price: "Bulk Rates Available",
  },
  {
    id: "dinosaur-slide",
    title: "6ft Dinosaur Slide",
    description: "Fun and safe dinosaur-themed slide made of high-quality FRP material. Perfect for preschools and residential play areas.",
    image: "/dinosaur-slide.png",
    price: "Best Value",
  },
  {
    id: "ball-pool",
    title: "Toddler Ball Pool",
    description: "Vibrant indoor ball pool for toddlers with soft safety padding and colorful plastic balls. Ideal for soft play zones.",
    image: "/ball-pool.png",
    price: "Top Seller",
  },
  {
    id: "elephant-dustbin",
    title: "Elephant FRP Dustbin",
    description: "Playful elephant-shaped dustbin made of durable FRP. A great addition to keep play areas and schools clean and fun.",
    image: "/elephant-dustbin.png",
    price: "Quick Shipping",
  },
  {
    id: "garden-swing",
    title: "Premium Garden Swing",
    description: "Durable and safe outdoor swing set with a heavy-duty frame. Perfect for residential backyards, apartment parks, and schools.",
    image: "/garden-swing.png",
    price: "All-Weather Durable",
  },
  {
    id: "animal-rocker",
    title: "Kids Animal Rocker",
    description: "Fancy animal-shaped rocker for kids. Made of high-quality, durable plastic with smooth edges for maximum safety.",
    image: "/animal-rocker.png",
    price: "Affordable",
  },
  {
    id: "aeroplane-wall-toy",
    title: "Aeroplane Wall Activity",
    description: "Interactive aeroplane-themed wall activity toy. Helps develop fine motor skills and cognitive learning in children.",
    image: "/aeroplane-wall-toy.png",
    price: "Educational",
  },
  {
    id: "school-bench",
    title: "Ergonomic School Bench",
    description: "Modern school bench and desk set with high-quality wood and metal frames. Designed for comfort and longevity.",
    image: "/school-bench.png",
    price: "School Bulk Deal",
  },
  {
    id: "jumbo-play-centre",
    title: "Jumbo Multi-Play Centre",
    description: "Massive outdoor play centre with towers, tunnels, and bridges. Designed for large public parks and gated communities.",
    image: "/jumbo-play-centre.png",
    price: "Large Scale Projects",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-zinc-50" aria-labelledby="catalog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Product Catalog
          </span>
          <h2 id="catalog-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 mb-6">
            Common Playground & School Products
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            High-quality equipment sourced directly from our manufacturing partners. Explore our most popular items below.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-32 sm:h-48 bg-zinc-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute top-2 left-2 bg-zinc-900/80 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                  {product.price}
                </div>
              </div>
              <div className="p-3 sm:p-6 flex flex-col flex-1">
                <h3 className="text-sm sm:text-lg font-bold text-zinc-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-zinc-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6 flex-1 line-clamp-2 sm:line-clamp-none">
                  {product.description}
                </p>
                <a
                  href="#lead-form"
                  className="w-full bg-blue-600 hover:bg-orange-500 text-white font-bold py-2 sm:py-3 rounded-xl sm:rounded-2xl text-center text-xs sm:text-base transition-all shadow-md shadow-blue-600/10 hover:shadow-orange-500/20 active:scale-[0.98]"
                  id={`quote-${product.id}`}
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 bg-white rounded-[2.5rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 text-center relative overflow-hidden">
          {/* Decorative background for the banner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -ml-16 -mb-16" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-4">
              Didn&apos;t find exactly what you need?
            </h3>
            <p className="text-zinc-500 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Our inventory includes over **1000+ unique SKUs** across all categories. If you have a specific requirement or a custom space, our specialists are ready to help you source the perfect equipment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#lead-form"
                className="w-full sm:w-auto bg-blue-600 text-white font-bold px-10 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group"
              >
                Request Product details
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-zinc-400 font-medium text-sm">or</span>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hi%2C%20I%20couldn%27t%20find%20a%20specific%20product%20on%20your%20site.%20Can%20you%20share%20your%20full%20catalog%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                id="contact"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp a Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
