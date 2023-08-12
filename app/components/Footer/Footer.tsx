import Link from "next/link"

// MIDDLE LINKS DATA
interface ProductType {
  id: number
  section: string
  link: string[]
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    id: 2,
    section: "Support",
    link: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy Policy",
      "Status",
    ],
  },
]

const footer = () => {
  return (
    <div className="bg-bgpurple " id="first-section">
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          {/* CLOUMN-2/3 */}

          {/* CLOUMN-4 */}
        </div>
      </div>

      {/* All Rights Reserved */}
    </div>
  )
}

export default footer
