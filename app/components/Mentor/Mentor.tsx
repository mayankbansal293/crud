// MENTORS DATA

interface Product {
  id: number
  name: string
  href: string
  imageSrc: string
  imageAlt: string
  color: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Senior UX Designer",
    href: "#",
    imageSrc: "/assets/mentor/boy1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Shoo Thar Mein",
  },
  {
    id: 2,
    name: "Photoshop Instructor",
    href: "#",
    imageSrc: "/assets/mentor/boy2.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Cristian Doru Barin",
  },
  {
    id: 3,
    name: "SEO Expert",
    href: "#",
    imageSrc: "/assets/mentor/boy3.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Tanzeel Ur Rehman",
  },
  {
    id: 4,
    name: "UI/UX Designer",
    href: "#",
    imageSrc: "/assets/mentor/boy4.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Andrew Williams",
  },
  {
    id: 5,
    name: "Web Development / Web Design",
    href: "#",
    imageSrc: "/assets/mentor/boy5.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Brad Schiff",
  },
  {
    id: 6,
    name: "Adobe Certified Instructor",
    href: "#",
    imageSrc: "/assets/mentor/girl1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Daniel Walter Scott",
  },
]

const Mentor = () => {
  return (
    <div
      id="mentors-section"
      className="mx-auto max-w-2xl pb-2 px-4 sm:py-10  lg:max-w-7xl "
    >
      <div className="sm:flex justify-between items-center ">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
          Exploring the World of Programming
        </h2>
      </div>

      <section className="programming-section">
        <p>
          Programming is the art of giving instructions to computers to perform
          tasks and solve problems. It's a world where creativity meets logic,
          where ideas are translated into code, and where innovation thrives.
          From developing applications that power our daily lives to crafting
          complex algorithms that optimize processes, programming is at the
          heart of modern technology.
        </p>
        <p>
          Whether you're a seasoned developer or just starting your coding
          journey, the programming landscape offers endless opportunities for
          growth and learning. Embrace the challenges, celebrate the successes,
          and keep expanding your horizons in this ever-evolving realm of ones
          and zeros.
        </p>
      </section>
    </div>
  )
}

export default Mentor
