interface LocalReview {
  authorName: string;
  text: string;
  rating: number;
}

const REVIEWS: LocalReview[] = [
  {
    authorName: "Sharon International CBSE School",
    rating: 5,
    text: "My personal experience with Monopoly Marketing is remarkable. We had a great experience with Playgro before and continued the relationship after finding support on the website. Vinitha mam explained the products clearly, helped us get the best price and equipment, and resolved a faulty product issue quickly with replacement even during holidays.",
  },
  {
    authorName: "Sumathi",
    rating: 5,
    text: "Very nice product",
  },
  {
    authorName: "Tiny Nest Soft Play Area",
    rating: 5,
    text: "Very positive experience with Monopoly Marketing for creating our indoor playzone. Geetha mam and Baskar sir were professional, responsive, and supportive throughout. Planning and execution were timely, and the finishing, safety standards, and design exceeded expectations.",
  },
  {
    authorName: "Gopika Nair",
    rating: 5,
    text: "Great quality products and good service.",
  },
  {
    authorName: "selvi s",
    rating: 5,
    text: "I had a very positive experience working with Monopoly Marketing team for the creation of Tiny Nest kids indoor playzone especially Geetha mam and Baskar sir were more professional, responsive, and supportive at every stage. The project was handled with good planning and timely execution. The overall experience was well-managed and the finishing, safety standards, and overall design exceeded my expectations. I would confidently recommend their services. Truly thankful for their support.",
  },
  {
    authorName: "Mahalakshmi Anand",
    rating: 5,
    text: "One stop shop for all your school equipment needs. Good service & great quality.",
  },
  {
    authorName: "Sunil K",
    rating: 5,
    text: "Well this place is really good for kids as they have some good products for learning and development for kids and also many useful items.",
  },
  {
    authorName: "Vedika Nichani",
    rating: 5,
    text: "I had been to Monopoly Marketing & they have some very good products like indoor and outdoor equipment for kids and the quality and price are very good. A must visit place for your kids & home.",
  },
  {
    authorName: "Girija Venkatraman",
    rating: 5,
    text: "The service is very good. The furniture is also very comfortable for small kids. Thank you Monopoly for all the wonderful products and service.",
  },
  {
    authorName: "Sudhahar Daniel",
    rating: 5,
    text: "Excellent service… ladder fixing, floor mat fixing and ball pit is fixed very nicely and efficiently.",
  },
  {
    authorName: "Mgs Gopi",
    rating: 5,
    text: "Good quality. Fast service. Good response. Reasonable cost.",
  },
  {
    authorName: "indu Mathi",
    rating: 5,
    text: "All the toys are in good quality. Undoubtedly we can purchase any toy from you, and babies enjoy them a lot.",
  },
  {
    authorName: "Jayashree Anand",
    rating: 5,
    text: "I have always used their services. Best place to buy branded toys at a very competitive rate. Staff are attentive and follow-up is excellent.",
  },
  {
    authorName: "Vasu G",
    rating: 5,
    text: "All materials are very good and quality. Please visit and recommend us.",
  },
  {
    authorName: "Yuvashree C",
    rating: 5,
    text: "The best place to buy Montessori materials. Very friendly staff and a great product range.",
  },
  {
    authorName: "Anivaruday Oviya",
    rating: 5,
    text: "Way of approach is really good with immediate response.",
  },
  {
    authorName: "Ram Online",
    rating: 5,
    text: "One of the best place for educational and play based toys. Their representative Baskar is courteous and helpful.",
  },
  {
    authorName: "Ponmani Somu",
    rating: 5,
    text: "Products were good. The salesperson was very kind and helpful.",
  },
  {
    authorName: "Star Kids",
    rating: 5,
    text: "Very good place for toys and preschool equipment.",
  },
  {
    authorName: "Pravesh Balaji",
    rating: 5,
    text: "Nice place to buy kids accessories for preschool.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "star-filled" : "star-empty"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function sanitizeAuthorName(authorName: string) {
  return authorName.trim().toLowerCase() === "customer"
    ? "Anonymous"
    : authorName;
}

function getReviewTag(review: LocalReview) {
  if (review.authorName.toLowerCase().includes("school")) {
    return "School Project";
  }

  if (
    review.authorName.toLowerCase().includes("play area") ||
    review.text.toLowerCase().includes("playzone")
  ) {
    return "Commercial Play Project";
  }

  if (
    review.text.toLowerCase().includes("home") ||
    review.text.toLowerCase().includes("house")
  ) {
    return "Home Project";
  }

  if (review.text.toLowerCase().includes("montessori")) {
    return "Montessori Setup";
  }

  return "Verified Buyer";
}

function ReviewCard({ review }: { review: LocalReview }) {
  const tag = getReviewTag(review);

  return (
    <article className="relative flex-none w-[290px] sm:w-[320px] rounded-2xl border border-blue-100 bg-white/95 p-4 sm:p-5 shadow-[0_10px_35px_-20px_rgba(37,99,235,0.5)]">
      <div className="absolute right-4 top-3 text-4xl font-black leading-none text-blue-100">
        &ldquo;
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 ring-2 ring-blue-100">
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-base">
            {review.authorName.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate pr-5">
            {review.authorName}
          </p>
          <p className="text-blue-700 text-xs font-medium">{tag}</p>
        </div>
      </div>

      <StarRating rating={review.rating} />

      <blockquote className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-blue-700 font-semibold">
          Verified
        </span>
        <span className="font-semibold text-gray-700">
          {review.rating}.0 / 5
        </span>
      </div>
    </article>
  );
}

export default function Reviews() {
  const reviews = REVIEWS.map((review) => ({
    ...review,
    authorName: sanitizeAuthorName(review.authorName),
  }));

  const featuredReviewIndex = reviews.findIndex(
    (review) => review.authorName !== "Anonymous",
  );
  const featuredReview =
    reviews[featuredReviewIndex >= 0 ? featuredReviewIndex : 0];

  const marqueeSource = reviews.filter(
    (_review, idx) =>
      idx !== (featuredReviewIndex >= 0 ? featuredReviewIndex : 0),
  );

  const marqueeForward = [...marqueeSource, ...marqueeSource];
  const marqueeReverse = [...marqueeSource].reverse();
  const marqueeBackward = [...marqueeReverse, ...marqueeReverse];

  return (
    <section
      id="reviews"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-sky-50 to-white overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-tag">Customer Reviews</span>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-3"
          >
            What Our Customers Say
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-gray-900 font-bold text-lg">4.6</span>
            <span className="text-gray-400 text-sm">/ 5 average rating</span>
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6 items-start md:grid-cols-12 min-w-0">
          <article className="w-full min-w-0 md:col-span-5 xl:col-span-4 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-700 to-blue-600 text-white p-5 sm:p-6 shadow-[0_24px_60px_-36px_rgba(30,64,175,0.85)]">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100/90 font-semibold mb-3">
              Featured Experience
            </p>

            <h3 className="text-lg sm:text-xl xl:text-2xl font-black leading-tight">
              {featuredReview.authorName}
            </h3>

            <div className="mt-3">
              <StarRating rating={featuredReview.rating} />
            </div>

            <blockquote className="mt-4 text-sm sm:text-[15px] leading-relaxed text-blue-50 line-clamp-6 md:line-clamp-5 xl:line-clamp-none">
              &ldquo;{featuredReview.text}&rdquo;
            </blockquote>

            <div className="mt-5 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-50">
              Long-term customer relationship
            </div>
          </article>

          <div className="min-w-0 md:col-span-7 xl:col-span-8 space-y-4">
            <div className="testimonial-marquee-mask w-full max-w-full">
              <div className="testimonial-marquee-track">
                {marqueeForward.map((review, idx) => (
                  <ReviewCard
                    key={`forward-${review.authorName}-${idx}`}
                    review={review}
                  />
                ))}
              </div>
            </div>

            <div className="testimonial-marquee-mask w-full max-w-full">
              <div className="testimonial-marquee-track testimonial-marquee-track-reverse">
                {marqueeBackward.map((review, idx) => (
                  <ReviewCard
                    key={`reverse-${review.authorName}-${idx}`}
                    review={review}
                  />
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-gray-500">
              Live customer feedback stream
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
