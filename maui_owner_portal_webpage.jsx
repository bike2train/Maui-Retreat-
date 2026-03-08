export default function MauiOwnerPortalWebpage() {
  const property = {
    name: "Kahoma Village Maui Retreat",
    tagline: "Private luxury Maui home for friends, family, and invited guests.",
    location: "Lahaina, Maui, Hawaii",
    heroImage: "/mnt/data/IMG_0261.jpeg",
    gallery: [
      "/mnt/data/IMG_2882.jpeg",
      "/mnt/data/IMG_0220.jpeg",
      "/mnt/data/IMG_0219.jpeg",
      "/mnt/data/IMG_0189.jpeg",
      "/mnt/data/IMG_0186.jpeg",
      "/mnt/data/IMG_0185.jpeg",
      "/mnt/data/IMG_0176.jpeg",
      "/mnt/data/IMG_2870.jpeg",
      "/mnt/data/IMG_0233.jpeg",
      "/mnt/data/IMG_0230.jpeg",
    ],
    highlights: [
      "Modern furnished living room with TV and split AC",
      "Fully equipped kitchen with stainless steel appliances",
      "Comfortable dining area for shared meals",
      "Private patio with outdoor seating and umbrella",
      "In-home washer and dryer",
      "Three relaxing bedrooms with ceiling fans and AC",
    ],
    quickInfo: {
      wifiName: "Add Wi-Fi Name",
      wifiPassword: "Add Password",
      checkIn: "Add check-in details",
      checkOut: "Add check-out details",
      parking: "Add parking instructions",
      quietHours: "Add quiet hours",
    },
    rates: [
      { label: "Standard Stay", value: "Add nightly rate" },
      { label: "Holiday / Peak Dates", value: "Add premium rate" },
      { label: "Cleaning Fee", value: "Add fee if applicable" },
      { label: "Minimum Stay", value: "Add minimum nights" },
    ],
    calendarLinks: [
      { label: "Owner Stay Calendar", href: "#" },
      { label: "Cleaning & Maintenance Calendar", href: "#" },
      { label: "Owner Portal Documents", href: "#" },
    ],
    houseRules: [
      "No smoking inside the home.",
      "Please respect neighbors and community quiet hours.",
      "Report any maintenance issue promptly.",
      "Please leave the home in tidy condition at departure.",
    ],
    sections: [
      {
        title: "Welcome",
        text:
          "Welcome to our private Maui retreat in Kahoma Village. This page is designed as a polished owner and guest-facing webpage where you can add your own property details, stay information, house notes, and booking instructions.",
      },
      {
        title: "About the Home",
        text:
          "Use this section to describe the property, who it is for, nearby attractions, house rules, and any special features that make the home feel warm, comfortable, and elevated.",
      },
      {
        title: "Guest Information",
        text:
          "Add check-in notes, Wi-Fi details, parking instructions, emergency contacts, trash day information, and anything your friends, family, or invited guests should know before arrival.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/35 z-10" />
        <img
          src={property.heroImage}
          alt={property.name}
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-sm md:text-base tracking-[0.35em] uppercase">
              Maui Owner Portal
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              {property.name}
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90">
              {property.tagline}
            </p>
            <p className="mt-3 text-sm md:text-base text-white/80">
              {property.location}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Private Retreat Overview
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-stone-900">
              A clean, modern Maui home designed for comfort and easy island living.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-8 text-stone-600">
              This editable webpage gives you a polished place to showcase your Maui property,
              upload more photos, add house details, and share important information with
              partners, friends, family, and invited guests.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {property.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 px-4 py-4 text-sm md:text-base text-stone-700 ring-1 ring-stone-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#0f3d3e] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Edit This Page
            </p>
            <h3 className="mt-3 text-2xl font-semibold">What you can customize</h3>
            <ul className="mt-5 space-y-3 text-white/90 leading-7">
              <li>• Replace the title, subtitle, and location</li>
              <li>• Add booking or inquiry details</li>
              <li>• Add more photos to the gallery</li>
              <li>• Insert house rules and guest instructions</li>
              <li>• Add partner calendar links and owner documents</li>
              <li>• Turn sections into an owner portal or guest landing page</li>
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Photo Gallery</p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900">Showcase the property</h2>
            </div>
            <p className="text-sm text-stone-500">You can swap or add photos anytime.</p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {property.gallery.map((src, index) => (
              <div
                key={src + index}
                className={`group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Maui home photo ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {property.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Section</p>
              <h3 className="mt-3 text-2xl font-semibold text-stone-900">{section.title}</h3>
              <p className="mt-4 leading-8 text-stone-600">{section.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">House Guide</p>
            <h3 className="mt-3 text-2xl font-semibold text-stone-900">Quick guest information</h3>
            <div className="mt-5 space-y-4 text-stone-600 leading-7">
              <p><span className="font-semibold text-stone-900">Wi-Fi:</span> {property.quickInfo.wifiName}</p>
              <p><span className="font-semibold text-stone-900">Password:</span> {property.quickInfo.wifiPassword}</p>
              <p><span className="font-semibold text-stone-900">Check-in:</span> {property.quickInfo.checkIn}</p>
              <p><span className="font-semibold text-stone-900">Check-out:</span> {property.quickInfo.checkOut}</p>
              <p><span className="font-semibold text-stone-900">Parking:</span> {property.quickInfo.parking}</p>
              <p><span className="font-semibold text-stone-900">Quiet Hours:</span> {property.quickInfo.quietHours}</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Rates & Availability</p>
            <h3 className="mt-3 text-2xl font-semibold text-stone-900">Add your stay pricing</h3>
            <div className="mt-5 space-y-3">
              {property.rates.map((rate) => (
                <div key={rate.label} className="flex items-center justify-between gap-4 rounded-2xl bg-stone-50 px-4 py-3 ring-1 ring-stone-200">
                  <span className="text-stone-700">{rate.label}</span>
                  <span className="font-semibold text-stone-900">{rate.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Owner & Calendar Links</p>
            <h3 className="mt-3 text-2xl font-semibold text-stone-900">Connect your portal</h3>
            <div className="mt-5 space-y-3">
              {property.calendarLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl bg-stone-50 px-4 py-4 text-stone-700 ring-1 ring-stone-200 transition hover:bg-stone-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">House Rules</p>
            <h3 className="mt-3 text-2xl font-semibold text-stone-900">Keep the home beautiful for everyone</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {property.houseRules.map((rule) => (
                <div key={rule} className="rounded-2xl bg-stone-50 px-4 py-4 text-stone-700 ring-1 ring-stone-200">
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#0f3d3e] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">Inquiry Form Placeholder</p>
            <h3 className="mt-3 text-2xl font-semibold">Booking inquiry section</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">Guest Name</div>
              <div className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">Email Address</div>
              <div className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">Requested Dates</div>
              <div className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">Message / Stay Details</div>
              <button className="w-full rounded-2xl bg-white px-4 py-4 font-semibold text-[#0f3d3e] transition hover:bg-stone-100">
                Submit Inquiry
              </button>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
            <img
              src="/mnt/data/IMG_0233.jpeg"
              alt="Outdoor patio"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 to-stone-700 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold">Use this as your private Maui home webpage.</h2>
            <p className="mt-5 text-white/85 leading-8">
              You can turn this into a polished property page for your partners, a private guest
              information page, or a luxury-style digital brochure. Update the text blocks,
              add sections for availability or house rules, and keep all your Maui information in
              one beautiful place.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Ideas</p>
                <p className="mt-2 text-white/90">Add booking instructions, an owner calendar link, and emergency contacts.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Upgrade</p>
                <p className="mt-2 text-white/90">Add a rates section, stay request form, or a luxury owner portal homepage.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
