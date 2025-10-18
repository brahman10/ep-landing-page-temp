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
            <header className=" w-full relative mb-14">
                
                <nav id="Navbar" className="w-full  bg-white  flex h-[82px] lg:h-[104px]  flex-row items-center justify-between py-[8px] px-[24px] lg:px-[60px]" >
                   <Link to="/">
                   
                   <div className="flex gap-1 items-center">
                    <img
                        src={logo}
                        alt="eazyPregnancy Logo - Pregnancy Care Platform"
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
                </nav>
                
                <main className="w-full flex flex-col  lg:flex-row   mt-[40px] lg:mt-[0]  gap-4 justify-between items-center  lg:pr-0">
                    <div className="relative  flex flex-col   px-[24px] lg:px-[60px] lg:pr-0 lg:pb-[10px]  lg:gap-[40px]  lg:max-w-[55%]">
                        <div className="relative flex flex-col gap-2 lg:gap-10 w-full ">
                            <div className=" flex flex-col  w-full">
                                <h1 className="text-[#312a31] font-['Lato']  text-[24px]  lg:text-[48px] lg:leading-[72px]  w-full   ">
                                    One-stop solution for all your
                                </h1>
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
                            <p className="font-['Lato'] text-justify text-lg leading-[24px]  text-[#5a4f5a] ">
                                Preparing for the journey of a lifetime! Our Pregnancy Support website
                                is coming soon to guide you through every step of your beautiful
                                pregnancy. Stay tuned for expert advice, helpful resources, and a
                                supportive community to make your pregnancy a memorable and joyous
                                experience.
                            </p>
                        </div>
                        <h2 className="  text-[24px] lg:text-4xl font-['Lato'] mt-3 lg:mt-10  font-bold  leading-[24px] text-[#eb61a2]">
                            We are coming soon
                        </h2>
                        
                        <div className="mt-6 lg:mt-8">
                            <Link 
                                to="/survey-with-us" 
                                className="bg-[#eb61a2] text-white px-6 py-3 rounded-lg font-['Lato'] font-semibold text-lg hover:bg-[#d54a8a] transition-colors duration-200 inline-block"
                            >
                                Make us better
                            </Link>
                        </div>
                    </div>
                    <div className="w-full bg-white pl-[60px] lg:pl-0 pr-0 flex justify-end">

                        <img
                            src={landingPage}
                            alt="Pregnancy care illustration - eazyPregnancy platform"
                            className="relative r-0"
                        />


                    </div>
                </main>
                <footer className="bg-white w-full mt-10 px-[60px] pt-[100px] mb-10  ">
                    <div className="flex flex-col text-center justify-center  lg:flex-row  lg:justify-between w-full ">
                        <div className="w-full justify-center lg:justify-start flex flex-row  gap-3">
                            <img
                                src={logosvg}
                                alt="eazyPregnancy Logo - Pregnancy Support Platform"
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
                                alt="Follow eazyPregnancy on Facebook"
                                id="facebook"
                                className="w-8"
                            />
                       </Link>
                            
                      <Link to="https://www.linkedin.com/company/eazypregnancy/">       
                        <img
                                src={linkedin}
                                alt="Connect with eazyPregnancy on LinkedIn"
                                id="linkedin"
                                className="w-8"
                            />
                                 </Link>
                           
                        <Link to="https://www.instagram.com/eazypregnancy/">
                        <img
                                src={insta}
                                alt="Follow eazyPregnancy on Instagram"
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
                                alt="Contact eazyPregnancy phone icon"
                                id="Contact"
                                className="w-6"
                            />
                            <div className="font-['Lato'] leading-[24px] text-[#5a4f5a]">
                                +91 9105885150
                            </div>
                        </div>
                    </div>
                </footer>
            </header>

            {/* section2 */}


        </div>
    )
}