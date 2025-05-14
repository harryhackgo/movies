import React from "react";
import logo from "@/assets/LOGOTYPE.png";
import google from "@/assets/skachat_google.png";
import appstore from "@/assets/skachat_appstore.png";
import fileList from "@/assets/file-list-2-line.png";
import shiningLine from "@/assets/shining-line.png";
import questionLine from "@/assets/question-line.png";
import phoneLine from "@/assets/phone-line.png";
import movieLine from "@/assets/movie-line.png";
import movie2Line from "@/assets/movie-2-line.png";
import clapperboardLine from "@/assets/clapperboard-line.png";
import basketballLine from "@/assets/basketball-line.png";
import instagramLine from "@/assets/instagram-line.png";
import youtubeLine from "@/assets/youtube-line.png";
import facebookLine from "@/assets/facebook-circle-line.png";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-[30px] grid grid-cols-1  gap-8 rounded-[12px] bg-content text-text text-[16px] leading-5 lg:grid-cols-4 md:grid-cols-2 ">
        <div>
          <img src={logo} alt="" className="pb-[48px]" />
          <button className="cursor-pointer mb-2">
            <img src={google} alt="" />
          </button>
          <button className="cursor-pointer">
            <img src={appstore} alt="" />
          </button>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h3 className="font-semibold text-white">About us</h3>
          <a href="" className="flex items-center gap-0.5 hover:text-primary ">
            <img src={fileList} alt="" />
            Public policies
          </a>
          <a href="" className="flex items-center gap-0.5 hover:text-primary">
            <img src={shiningLine} alt="" />
            Advertisement
          </a>
          <a href="" className="flex items-center gap-0.5 hover:text-primary">
            <img src={questionLine} alt="" />
            F.A.Q
          </a>
          <a
            href=""
            className="flex items-center gap-0.5 hover:text-primary hover:"
          >
            <img src={phoneLine} alt="" />
            Contacts
          </a>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h3 className="font-semibold text-white">Categories</h3>
          <a href="" className="flex items-center gap-0.5 hover:text-primary ">
            <img src={movieLine} alt="" />
            Movie
          </a>
          <a href="" className="flex items-center gap-0.5 hover:text-primary">
            <img src={clapperboardLine} alt="" />
            Theatre
          </a>
          <a href="" className="flex items-center gap-0.5 hover:text-primary">
            <img src={movie2Line} alt="" />
            Concerts
          </a>
          <a
            href=""
            className="flex items-center gap-0.5 hover:text-primary hover:"
          >
            <img src={basketballLine} alt="" />
            Sport
          </a>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h3 className="font-semibold text-white">Contact us</h3>
          <a href="" className="gap-0.5 text-primary text-2xl mb-[54px]">
            +998 (95) 897-33-38
          </a>

          <h3 className="font-semibold text-white">Social links</h3>
          <div className="flex gap-5">
            <a href="" className="">
              <img src={instagramLine} alt="" />
            </a>
            <a href="" className=" ">
              <img src={facebookLine} alt="" />
            </a>
            <a
              href=""
              className="flex items-center gap-0.5 hover:text-primary hover:"
            >
              <img src={youtubeLine} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
