"use client"
import Banner from "./components/Banner/Banner"
import Companies from "./components/Companies/Companies"
import Tabs from "./components/Courses/Courses"
import Mentor from "./components/Mentor/Mentor"
import Students from "./components/Students/Students"
import Newsletter from "./components/Newsletter/Newsletter"
import Navbar from "./components/Navbar/Navbar"
import { ToastContainer, toast } from "react-toastify"

export default function Home() {
  return (
    <>
      <main>
        <ToastContainer />
        {/* <Banner />
      <Tabs />
       */}
        <Students />
        <Mentor />
        {/* <Newsletter /> */}
      </main>
    </>
  )
}
