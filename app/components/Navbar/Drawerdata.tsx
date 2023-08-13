import React from "react"
import Link from "next/link"
import Contactus from "./Contactus"
import Signdialog from "./Signdialog"
import Registerdialog from "./Registerdialog"
import MobileSignIn from "./MobileSignIn"
import MobileFeedback from "./MobileFeedback"
import MobileRegister from "./MobileRegister"

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Courses", href: "#courses-section", current: false },
  { name: "Mentors", href: "#mentors-section", current: false },
  { name: "Testimonial", href: "#testimonial-section", current: false },
  { name: "Join", href: "#join-section", current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
const data = typeof window !== "undefined" ? localStorage.getItem("data") : null

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {data && (
              <>
                <Link
                  href={"https://github.com/JShipov/GuessNumber"}
                  target="_blank"
                  className={classNames(
                    false
                      ? "bg-gray-900 text-purple"
                      : "text-black hover:bg-gray-700 hover:text-purple",
                    "block  py-2 rounded-md text-base font-medium"
                  )}
                >
                  Github Url
                </Link>
                <MobileFeedback />
                <Link
                  href={"/guess"}
                  target="_blank"
                  className={classNames(
                    false
                      ? "bg-gray-900 text-purple"
                      : "text-black hover:bg-gray-700 hover:text-purple",
                    "block  py-2 rounded-md text-base font-medium"
                  )}
                >
                  Guess Game
                </Link>
              </>
            )}
            {data ? (
              <div
                onClick={(e) => {
                  localStorage.clear()
                  window.location.reload()
                }}
                className={classNames(
                  false
                    ? "bg-gray-900 text-purple cursor-pointer"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium"
                )}
              >
                Logout
              </div>
            ) : (
              <>
                <MobileSignIn />
                {/* REGISTER DIALOG */}
                <MobileRegister />
              </>
            )}
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
