/* ==========================================================================
   K2 GOLF STUDIO — SITE SETTINGS
   --------------------------------------------------------------------------
   This is the ONE place to update business info. Every page reads from here:
   phone, email, hours, social links, and all prices.

   Anything still in [BRACKETS] is a placeholder that needs real info.
   Tip: search the whole project for "[" to find every remaining placeholder.
   ========================================================================== */

window.K2_CONFIG = {
  businessName: "K2 Golf Studio",
  coachName: "Kevin",
  coachFullName: "Kevin Kim",
  coachTitle: "PGA Professional",

  // Website address once live, e.g. "https://k2golfstudio.com" (no trailing slash)
  siteUrl: "[SITE_URL]",

  phone: "657-255-4036",          // shown on the site
  phoneDial: "+16572554036",      // used for tap-to-call links
  email: "k2golfstudio2@yahoo.com",

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
    { days: "Monday – Friday", time: "9 AM – 7 PM" },
    { days: "Saturday", time: "10 AM – 4 PM" },
    { days: "Sunday", time: "By appointment" }
  ],
  // Same hours in Google's format, for search results. Example: "Mo-Fr 09:00-19:00", "Sa 08:00-16:00"
  hoursForGoogle: ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],

  // Link to your Google reviews page
  googleReviewsLink: "[GOOGLE_REVIEWS_LINK]",

  social: {
    instagram: "[INSTAGRAM_URL]",
    facebook: "[FACEBOOK_URL]",
    youtube: "[YOUTUBE_URL]"
  },

  // Prices (shown on the Lessons, Putting Studio and Club Fitting pages)
  prices: {
    lessonsAdult: [
      { name: "Swing Lesson, 60 min", price: "$200", note: "One-on-one with Kevin." },
      { name: "Putting Lesson, 60 min", price: "$250", note: "On the TourPutt green." },
      { name: "10-Lesson Package", price: "$1,800", note: "Ten one-hour lessons. Save $200 compared with single swing lessons." }
    ],
    lessonsJunior: [
      { name: "Junior Swing Lesson, 60 min", price: "$150", note: "For golfers under 18." },
      { name: "Junior Swing Lesson, 30 min", price: "$80", note: "For golfers under 18." },
      { name: "Junior Putting Lesson", price: "$200", note: "On the TourPutt green." }
    ],
    putting: [
      { name: "TourPutt Pattern Test", price: "Included", note: "Walk-in. Included with any lesson and with the Full Studio Membership." },
      { name: "Putting Lesson, 60 min", price: "$250", note: "Coaching with Kevin on the TourPutt green." },
      { name: "Junior Putting Lesson", price: "$200", note: "For golfers under 18." }
    ],
    fitting: [
      { name: "Full Bag Fitting", price: "$200", note: "Includes a $100 credit toward clubs purchased through K2." },
      { name: "Iron Fitting", price: "$100", note: "Includes a $50 credit toward clubs purchased through K2." },
      { name: "Driver & Woods Fitting", price: "$100", note: "Includes a $50 credit toward clubs purchased through K2." },
      { name: "Putter Fitting: Scotty Cameron or L.A.B. Golf", price: "$200", note: "Includes a $100 credit toward a new Scotty Cameron or L.A.B. Golf putter purchased through K2." }
    ]
  },

  // Membership plans (shown on the homepage and Memberships page)
  memberships: [
    {
      name: "Swing Bay Membership",
      price: "$200",
      period: "/month",
      tagline: "Daily practice time in our hitting bays.",
      features: [
        "One hour of practice per day in the hitting bays",
        "Practice on your schedule, first come, first served",
        "Climate-controlled, year-round practice"
      ],
      featured: false
    },
    {
      name: "Full Studio Membership",
      price: "$600",
      period: "/month",
      tagline: "Complete access to everything K2 offers.",
      badge: "Full Access",
      features: [
        "Full access to the studio, including the TourPutt putting green",
        "One hour of practice per day",
        "Walk-in access to the TourPutt Pattern Test",
        "Member pricing on clubs, balls, gloves and more",
        "Complimentary fittings when you purchase new clubs",
        "Demo clubs from Titleist, Honma and Miura"
      ],
      featured: true
    }
  ]
};
