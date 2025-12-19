import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://badempire.com"
const siteName = "Bad Empire Coffee Club"
const siteDescription =
  "Premium coffee club and lifestyle destination in Upstate New York. Featuring artisan coffee subscriptions, barber services, French Bulldog breeding, custom jewelry, dart leagues, billiards, and gaming. Serving Albany, Troy, Watervliet, and the Capital Region community."

// Extensive keyword list for SEO
const keywords = [
  // Coffee Keywords
  "coffee club",
  "coffee subscription",
  "premium coffee",
  "artisan coffee",
  "craft coffee",
  "light roast coffee",
  "dark roast coffee",
  "coffee beans",
  "whole bean coffee",
  "ground coffee",
  "coffee grind",
  "specialty coffee",
  "gourmet coffee",
  "small batch coffee",
  "roasted coffee",
  "Sunblade of the East",
  "Nightfall of the Obsidian Crown",
  "medieval coffee",
  "coffee membership",

  // Social Club Keywords
  "social club",
  "lifestyle club",
  "members club",
  "private club",
  "community club",
  "hangout spot",
  "friends hangout",
  "frenz",
  "frens",
  "fren",
  "social lounge",
  "neon aesthetic",
  "pink fashion",
  "streetwear",
  "urban lifestyle",

  // Barber Keywords
  "barber",
  "barbering",
  "barber services",
  "barbershop",
  "mens grooming",
  "haircuts",
  "fades",
  "beard trim",
  "hot shave",
  "barber parlor",

  // French Bulldog Keywords
  "French Bulldogs",
  "Frenchies",
  "micro French Bulldogs",
  "fluffy Frenchies",
  "fluffy French Bulldogs",
  "curly Frenchies",
  "merle French Bulldogs",
  "chocolate French Bulldogs",
  "blue French Bulldogs",
  "red French Bulldogs",
  "French Bulldog stud",
  "French Bulldog studs",
  "French Bulldog breeding",
  "dog breeding",
  "Frenchie puppies",
  "Bulldogs",
  "designer dogs",
  "exotic French Bulldogs",
  "rare French Bulldogs",
  "AKC French Bulldogs",

  // Jewelry Keywords
  "jewelry",
  "custom jewelry",
  "silver chains",
  "gold chains",
  "chain shop",
  "scrap gold",
  "scrap silver",
  "gold buyer",
  "silver buyer",
  "precious metals",
  "mens jewelry",
  "urban jewelry",
  "hip hop jewelry",
  "streetwear accessories",

  // Entertainment Keywords
  "dart league",
  "darts",
  "billiards",
  "pool hall",
  "video games",
  "gaming lounge",
  "arcade",
  "Mario Kart tournaments",
  "gaming nights",
  "entertainment",

  // Brand Keywords
  "Bad Empire",
  "Empire",
  "Bad Empire Coffee Club",
  "Bad Empire NY",

  // Location Keywords - Albany Area
  "Albany NY",
  "Albany New York",
  "Troy NY",
  "Troy New York",
  "Watervliet NY",
  "Watervliet New York",
  "Capital Region NY",
  "Upstate New York",
  "Upstate NY",
  "New York State",

  // Zip Codes - Albany Metro Area
  "12189",
  "12180",
  "12110",
  "12144",
  "12047",
  "12033",

  // Zip Codes - Greater Capital Region (50 mile radius)
  "12203",
  "12204",
  "12205",
  "12206",
  "12207",
  "12208",
  "12209",
  "12210",
  "12211",
  "12212",
  "12214",
  "12220",
  "12222",
  "12223",
  "12224",
  "12225",
  "12226",
  "12227",
  "12228",
  "12229",
  "12230",
  "12231",
  "12232",
  "12233",
  "12234",
  "12235",
  "12236",
  "12237",
  "12238",
  "12239",
  "12240",
  "12241",
  "12242",
  "12243",
  "12244",
  "12245",
  "12246",
  "12247",
  "12248",
  "12249",
  "12250",
  "12255",
  "12257",
  "12260",
  "12261",
  "12288",

  // Troy Area Zips
  "12181",
  "12182",
  "12183",
  "12179",

  // Schenectady Area
  "12301",
  "12302",
  "12303",
  "12304",
  "12305",
  "12306",
  "12307",
  "12308",
  "12309",
  "12325",
  "12345",

  // Saratoga Area
  "12866",
  "12831",
  "12020",
  "12065",
  "12019",
  "12027",

  // Rensselaer County
  "12144",
  "12033",
  "12061",
  "12138",
  "12158",
  "12175",

  // Extended 100 Mile Radius
  "12801",
  "12804",
  "12803", // Glens Falls
  "12534",
  "12601",
  "12550", // Hudson Valley
  "13203",
  "13204",
  "13205",
  "13210", // Syracuse Area
  "12901",
  "12903", // Plattsburgh Area
  "13601",
  "13602", // Watertown Area
  "12771",
  "12550",
  "10940", // Orange County
  "12477",
  "12401",
  "12487", // Ulster County
  "01201",
  "01220",
  "01230", // Berkshire County MA
  "05401",
  "05452",
  "05446", // Burlington VT Area
  "06810",
  "06880",
  "06830", // CT Border Towns
].join(", ")

export const metadata: Metadata = {
  title: {
    default: "Bad Empire Coffee Club | Premium Coffee, French Bulldogs, Barber & Social Club | Albany NY",
    template: "%s | Bad Empire Coffee Club",
  },
  description: siteDescription,
  keywords: keywords,
  authors: [{ name: "Bad Empire Coffee Club" }],
  creator: "Bad Empire Coffee Club",
  publisher: "Bad Empire Coffee Club",
  generator: "v0.app",
  applicationName: siteName,
  referrer: "origin-when-cross-origin",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Favicon and Icons
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [{ rel: "mask-icon", url: "/favicon.png", color: "#ec4899" }],
  },

  // Open Graph (Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Bad Empire Coffee Club | Premium Coffee & Lifestyle Destination | Albany NY",
    description:
      "Join the Empire. Premium coffee subscriptions, French Bulldog breeding, barber services, custom jewelry, dart leagues, and gaming in Upstate New York. Serving Albany, Troy, Watervliet, and the Capital Region.",
    images: [
      {
        url: "/images/socialsharing.png",
        width: 1200,
        height: 630,
        alt: "Bad Empire Coffee Club - Premium Coffee & Lifestyle Club",
        type: "image/png",
      },
    ],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "Bad Empire Coffee Club | Premium Coffee & Lifestyle | Albany NY",
    description:
      "Join the Empire. Premium coffee, French Bulldogs, barber services, jewelry, darts, and gaming in Upstate New York.",
    images: ["/images/socialsharing.png"],
    creator: "@badempireclub",
    site: "@badempireclub",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Category
  category: "lifestyle",

  // Other metadata
  other: {
    "fb:app_id": "your-facebook-app-id",
    "og:email": "info@badempire.com",
    "og:phone_number": "",
    "og:locality": "Albany",
    "og:region": "NY",
    "og:country-name": "USA",
    "pinterest-rich-pin": "true",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="Albany" />
        <meta name="geo.position" content="42.6526;-73.7562" />
        <meta name="ICBM" content="42.6526, -73.7562" />

        {/* Pinterest */}
        <meta name="p:domain_verify" content="your-pinterest-verification" />

        {/* MS Tile */}
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="msapplication-TileColor" content="#ec4899" />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bad Empire Coffee Club",
              description: siteDescription,
              url: siteUrl,
              logo: `${siteUrl}/images/badempirelogotpneon.png`,
              image: `${siteUrl}/images/socialsharing.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albany",
                addressRegion: "NY",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.6526,
                longitude: -73.7562,
              },
              areaServed: [
                "Albany NY",
                "Troy NY",
                "Watervliet NY",
                "Schenectady NY",
                "Saratoga Springs NY",
                "Capital Region NY",
                "Upstate New York",
              ],
              serviceType: [
                "Coffee Subscription",
                "Coffee Club",
                "Barber Services",
                "French Bulldog Breeding",
                "Custom Jewelry",
                "Social Club",
                "Dart League",
                "Gaming Lounge",
              ],
              priceRange: "$$",
              openingHours: "Mo-Fr 07:00-22:00, Sa-Su 08:00-00:00",
              sameAs: [
                "https://instagram.com/badempireclub",
                "https://facebook.com/badempireclub",
                "https://twitter.com/badempireclub",
              ],
            }),
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bad Empire Coffee Club",
              alternateName: ["Bad Empire", "Empire Coffee Club", "Bad Empire NY"],
              url: siteUrl,
              logo: `${siteUrl}/images/badempirelogotpneon.png`,
              foundingLocation: {
                "@type": "Place",
                name: "New York",
              },
              slogan: "Join the Empire",
              knowsAbout: [
                "Premium Coffee",
                "French Bulldogs",
                "Barber Services",
                "Custom Jewelry",
                "Social Clubs",
                "Gaming",
              ],
            }),
          }}
        />

        {/* Structured Data - Product (Coffee) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Bad Empire Coffee Subscription",
              description:
                "Premium artisan coffee delivered monthly. Choose from Light Roast Sunblade of the East or Dark Roast Nightfall of the Obsidian Crown.",
              brand: {
                "@type": "Brand",
                name: "Bad Empire Coffee Club",
              },
              category: "Coffee",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "20",
                highPrice: "35",
                offerCount: "2",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
