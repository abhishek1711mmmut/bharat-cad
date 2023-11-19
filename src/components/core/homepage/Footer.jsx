import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Company = ["Home", "Product", "About", "Features","Blog"];
const About=["info@mysite.com","Tel: 123-456-7890","500 Terry Francine Street","San Francisco, CA 94158"];


const Footer = () => {
  return (
    <div className="">
        <div className="w-11/12 max-w-screen-xl leading-6 mx-auto relative py-14">
            <div className="border-b w-[100%] mx-auto pb-5">
                <div className="w-full flex flex-wrap flex-row items-center justify-between pl-3 gap-3">
                    <div className="w-[48%] lg:w-[30%] flex flex-col gap-3 mb-7">
                        <img src={Logo} alt="" className="object-contain" width={200}/>
                        <h1 className=" font-semibold text-[16px]">
                            Company
                        </h1>
                        <div className="flex flex-col gap-2">
                            {Company.map((ele, i) => {
                            return (
                                <div
                                key={i}
                                className="text-[14px] cursor-pointer hover: transition-all duration-200"
                                >
                                <Link to={ele.toLowerCase()}>{ele}</Link>
                                </div>
                            );
                            })}
                        </div>
                        
                    </div>

                    <div className="w-[48%] lg:w-[30%] mb-7 pl-0 lg:pl-[10%]">
                        <h1 className=" font-semibold text-[16px]">
                            Resources
                        </h1>

                        <div className="flex flex-col gap-2 mt-2">
                            {About.map((ele, index) => {
                            return (
                                <div
                                key={index}
                                className="text-[14px] cursor-pointer hover: transition-all duration-200"
                                >
                                <Link to={ele.split(" ").join("-").toLowerCase()}>
                                    {ele}
                                </Link>
                                </div>
                            );
                            })}
                        </div>

                        
                    </div>

                    <div className="w-[48%] lg:w-[30%] mb-10 pl-0 lg:pl-[15%]">
                        <h1 className=" font-semibold text-[16px]">
                            Support
                        </h1>
                        <div className="text-[14px] cursor-pointer transition-all duration-200 mt-2">
                            <Link to={"/help-center"}>Help Center</Link>
                        </div>

                        <h1 className=" font-semibold mt-4 text-[16px]">
                            Social
                        </h1>

                        <div className="flex gap-3 text-lg mt-2">
                            <FaFacebook />
                            <FaGoogle />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

        <div className="w-11/12 max-w-screen-xl mx-auto pb-14 text-sm">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-3 w-full">
                <div className="flex flex-row">
                    {BottomFooter.map((ele, i) => {
                    return (
                        <div
                        key={i}
                        className={` ${
                            BottomFooter.length - 1 === i
                            ? ""
                            : "border-r border-richblack-700"
                        } px-3 cursor-pointer transition-all duration-200`}
                        >
                            <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                {ele}
                            </Link>
                        </div>
                    );
                    })}
                </div>
                <div className="flex gap-3 text-lg">
                    <FaFacebook />
                    <FaGoogle />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
        </div>

    </div>
  );
};

export default Footer;