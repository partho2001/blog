import React from "react"
import Slide from "../slide/Slide"
import CardTwo from "./CardTwo"
import Card from "./Card"
import Footer from "../footer/Footer"

const BlogHome = () => {
    const data = [
        {
            id: 1,
            titleOne: "YOU CAN CHANGE THE WORLD",
            titletwo: "STRONG STYLE",
            paraOne: "How women are changing world",
            paraTwo: "New ways to wear Denim Belt Bags",
            name: "By Megh",
            subTitle: "How to Shop",
            qrCode: "/images/qrCode.png",
            cover: "/Images/blog5.jpg", 
        }
    ]

    return (
        <>
            <section className="home">
                <div className="left-content">
                    {
                        data.map((value) => {
                            return (
                                <div className="content">
                                <div className="logo">
                                    <h1>M</h1>
                                </div>
                                <div className="home-img">
                                    <img src={value.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{value.titleOne}</h2>
                                    <p>{value.paraOne}</p>
                                    <span>{value.name}</span>
                                </div>
                                <div className="text text2">
                                    <h2>{value.titletwo}</h2>
                                    <p>{value.paraTwo}</p>
                                    <span>{value.subTitle}</span>
                                </div>
                                <div className="qrcode">
                                    <img src={value.qrCode} alt="" />

                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="right-content">
                   <Slide /> 
                   <Card />
                   <CardTwo />
                   <Footer />
                </div>
            </section>
        </>
    )
}

export default BlogHome