/* ==========================================================================
   K2 GOLF STUDIO — SITE SETTINGS
   --------------------------------------------------------------------------
   This is the ONE place to update business info. Every page reads from here:
   phone, email, hours, booking link, social links, and membership prices.

   Anything still in [BRACKETS] is a placeholder that needs real info.
   Tip: search the whole project for "[" to find every remaining placeholder.
   ========================================================================== */

window.K2_CONFIG = {
  businessName: "K2 Golf Studio",
  coachName: "Kevin",
  coachFullName: "Kevin [LAST_NAME]",
  coachTitle: "PGA Professional",

  // Website address once live, e.g. "https://k2golfstudio.com" (no trailing slash)
  siteUrl: "[SITE_URL]",

  phone: "657-255-4036",          // shown on the site
  phoneDial: "+16572554036",      // used for tap-to-call links
  email: "[EMAIL]",

  address: {
    street: "14774 Beach Blvd",
    city: "La Mirada",
    state: "CA",
    zip: "90638",
    // Link for "Get Directions" buttons
    mapsLink: "https://www.google.com/maps/search/?api=1&query=K2+Golf+Studio+14774+Beach+Blvd+La+Mirada+CA+90638"
  },

  // Hours shown on the site (any wording you like)
  hours: [
    { days: "Monday – Friday", time: "[HOURS]" },
    { days: "Saturday", time: "[HOURS]" },
    { days: "Sunday", time: "[HOURS]" }
  ],
  // Same hours in Google's format, for search results. Example: "Mo-Fr 09:00-19:00", "Sa 08:00-16:00"
  hoursForGoogle: [],

  // Where every "Book a Lesson" / "Book a Fitting" button goes (Square, etc.)
  bookingLink: "[BOOKING_LINK]",

  // Link to your Google reviews page
  googleReviewsLink: "[GOOGLE_REVIEWS_LINK]",

  social: {
    instagram: "[INSTAGRAM_URL]",
    facebook: "[FACEBOOK_URL]",
    youtube: "[YOUTUBE_URL]"
  },

  // Membership plans (shown on the homepage and Memberships page)
  memberships: [
    {
      name: "Practice",
      price: "[PRICE]",
      period: "/month",
      tagline: "Unlimited reps on your schedule.",
      features: [
        "Open practice on the TourPutt green",
        "Impact Vision simulator access",
        "[PLACEHOLDER: hours / visits included]",
        "Member pricing on lessons"
      ],
      featured: false
    },
    {
      name: "Improve",
      price: "[PRICE]",
      period: "/month",
      tagline: "Coaching plus practice. Our most popular plan.",
      features: [
        "[#] private lessons with Kevin per month",
        "Everything in Practice",
        "TourPutt Pattern Test + putting plan",
        "Progress tracking with TrackMan"
      ],
      featured: true
    },
    {
      name: "Compete",
      price: "[PRICE]",
      period: "/month",
      tagline: "For juniors and competitive players.",
      features: [
        "[#] private lessons with Kevin per month",
        "Everything in Improve",
        "Tournament prep + course strategy",
        "[PLACEHOLDER: additional perk]"
      ],
      featured: false
    }
  ]
};
