"use client"
import Slider from "react-slick"
import React, { Component } from "react"

// CAROUSEL DATA

interface DataType {
  profession: string
  name: string
  imgSrc: string
  starimg: string
  detail: string
}

const postData: DataType[] = [
  {
    profession: "UX/UI Designer",
    name: "Andrew Williams",
    imgSrc: "/assets/students/user-1.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: "UX/UI Designer",
    name: "Cristian Doru Barin",
    imgSrc: "/assets/students/user-2.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: "UX/UI Designer",
    name: "Tanzeel Ur Rehman",
    imgSrc: "/assets/students/user-3.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: "UX/UI Designer",
    name: "Andrew Williams",
    imgSrc: "/assets/students/user-1.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
]

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    }

    return (
      <div id="testimonial-section" className="bg-bgpink">
        <div className="mx-auto max-w-2xl px-4 pt-4 pb-10 lg:max-w-7xl lg:px-8">
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg">
                  <div className="relative">
                    <img
                      src={items.imgSrc}
                      alt="gaby"
                      className="inline-block h-16 w-16 m-auto rounded-full ring-2 ring-white"
                    />
                    <img
                      src={"/assets/students/greenpic.svg"}
                      alt="greenbg"
                      className=" absolute inline-block h-6 w-6 position-green"
                    />
                  </div>
                  <h3 className="text-sm pt-4 pb-2">{items.profession}</h3>
                  <h4 className="text-2xl font-semibold pb-3">{items.name}</h4>
                  <img
                    src={items.starimg}
                    alt="stars-img"
                    className="m-auto pb-6"
                  />
                  <p className="text-lg font-medium leading-9">
                    {items.detail}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}