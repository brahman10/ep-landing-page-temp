import React from "react"

import logo from "../assets/Logo-Icon.png"
import logosvg from "../assets/Logo-Icon.svg"
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import landingPage from "../assets/landingPage.svg"
import contact from "../assets/contact.svg"
import {Link} from "react-router-dom";


export default function LandingPage() {
    return (
        <div className="w-[100vw] bg-white overflow-x-hidden">
            <div className=" w-full relative mb-14">
                
                <div id="Navbar" className="w-full  bg-white  flex h-[82px] lg:h-[104px]  flex-row items-center gap-1 py-[8px] px-[24px] lg:px-[60px]" >
                   <Link to="/">
                   
                   <div className="flex gap-1 items-center">
                    <img
                        src={logo}
                        alt="LogoIcon"
                        id="LogoIcon"
                        className="w-[44px]"
                    />
                    <div
                        id="AppName"
                        className="text-xl font-['Lato'] font-bold leading-[30px] text-[#eb61a2] "
                    >
                        eazyPregnancy
                    </div>
                    </div>
                    </Link>
                </div>
                
                <div className="w-full flex flex-col  lg:flex-row   mt-[40px] lg:mt-[0]  gap-4 justify-between items-center  lg:pr-0">
                    <div className="relative  flex flex-col   px-[24px] lg:px-[60px] lg:pr-0 lg:pb-[10px]  lg:gap-[40px]  lg:max-w-[55%]">
                        <div className="relative flex flex-col gap-2 lg:gap-10 w-full ">
                            <div className=" flex flex-col  w-full">
                                <div className="text-[#312a31] font-['Lato']  text-[24px]  lg:text-[48px] lg:leading-[72px]  w-full   ">
                                    One-stop solution for all your
                                </div>
                                <div className="flex flex-row w-full leading-[60px] lg:leading-[132px] pb-4 lg:pb-0  text-[40px] lg:text-[90px]">
                                    <div className="  font-['Lato'] font-semibold text-[#312a31]  ">
                                        Pregnancy
                                    </div>
                                    <div className="font-['Lato'] line-through font-semibold pl-4  text-[#dcd8dc]  ">
                                        S
                                    </div>
                                    <div className=" font-['Lato'] font-semibold  text-[#312a31] -pl-[50px] ">
                                        Care
                                    </div>
                                </div>
                            </div>
                            <div className="font-['Lato'] text-justify text-lg leading-[24px]  text-[#5a4f5a] ">
                                Preparing for the journey of a lifetime! Our Pregnancy Support website
                                is coming soon to guide you through every step of your beautiful
                                pregnancy. Stay tuned for expert advice, helpful resources, and a
                                supportive community to make your pregnancy a memorable and joyous
                                experience.
                            </div>
                        </div>
                        <div className="  text-[24px] lg:text-4xl font-['Lato'] mt-3 lg:mt-10  font-bold  leading-[24px] text-[#eb61a2]">
                            We are coming soon
                        </div>
                    </div>
                    <div className="w-full bg-white pl-[60px] lg:pl-0 pr-0 flex justify-end">

                        <img
                            src={landingPage}
                            alt="LandingPage"
                            className="relative r-0"
                        />


                    </div>
                </div>
                <div className="bg-white w-full mt-10 px-[60px] pt-[100px] mb-10  ">
                    <div className="flex flex-col text-center justify-center  lg:flex-row  lg:justify-between w-full ">
                        <div className="w-full justify-center lg:justify-start flex flex-row  gap-3">
                            <img
                                src={logosvg}
                                alt="LogoIcon1"
                                id="LogoIcon1"
                                className=" w-[64px] lg:w-16"
                            />
                            <div className="text-[24px] lg:text-2xl font-['Lato'] font-bold leading-[36px] text-[#121112] mt-3 ">
                                eazyPregnancy
                            </div>
                        </div>
                        <div className="flex flex-row justify-center gap-[24px] lg:justify-between mt-4  items-start">
                       
                       <Link to="https://www.facebook.com/profile.php?id=61552230947103">
                       <img
                                src={facebook}
                                alt="facebook"
                                id="facebook"
                                className="w-8"
                            />
                       </Link>
                            
                      <Link to="https://www.linkedin.com/company/eazypregnancy/">       
                        <img
                                src={linkedin}
                                alt="linkedin"
                                id="linkedin"
                                className="w-8"
                            />
                                 </Link>
                           
                        <Link to="https://www.instagram.com/eazypregnancy/">
                        <img
                                src={insta}
                                alt="insta"
                                id="insta"
                                className="w-8"
                            />
                        </Link>
                          

                        </div>
                    </div>
                    <div className="bg-[#dcd8dc] w-full h-px mt-[40px]" />
                    <div className="w-full flex flex-col items-center gap-6  h-20 lg:items-start py-[40px] ">
                        <div className="text-lg font-['Lato'] font-semibold leading-[28px] text-[#312a31]">
                            Contact us
                        </div>
                        <div className="w-full flex flex-row justify-center  gap-2  lg:justify-start">
                            <img
                                src={contact}
                                alt="Contact"
                                id="Contact"
                                className="w-6"
                            />
                            <div className="font-['Lato'] leading-[24px] text-[#5a4f5a]">
                                +91 9105885150
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section2 */}


        </div>
    )
}