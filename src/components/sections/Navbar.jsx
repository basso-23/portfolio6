import Check from "@/icons/Check";
import Clip from "@/icons/Clip";
import Send from "@/icons/Send";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <section className=" flex justify-between items-center relative ">
      {/* Logo */}
      <div className=" pointer-events-none roboto-bold text-[22px] border-[3.5px]  border-black w-[45px] h-[43px] font-bold   flex items-center text-center justify-center">
        P
      </div>
      {/* Navbar----------------------------------------------- */}
      <div className=" lg:flex hidden gap-[45px]  text-[12px] tracking-wide uppercase ">
        {/* correo----------------------------------------------- */}
        <div>
          <div className=" cursor-default focus w-full h-full relative ">
            <div>Correo electrónico</div>
          </div>
          <div className="focus-content2 absolute sm:flex hidden justify-center flex-col tracking-wide w-[210px] ">
            <div className="h-[10px] w-full"></div>

            <div className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer ">
              <div className="relative flex">
                <div>Copiar al portapapeles</div>
                <div className="  absolute -right-6 text-[16px] ">
                  <div>
                    <Clip />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="mailto:carlos.baso23@gmail.com"
              className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
            >
              <div className="relative flex">
                <div>Enviar correo</div>
                <div className="  absolute -right-6 text-[16px] ">
                  <div>
                    {" "}
                    <Send />
                  </div>
                </div>{" "}
              </div>
            </a>
          </div>
        </div>
        {/* Github----------------------------------------------- */}
        <a
          target="_blank"
          href="https://github.com/Basso-23"
          className=" cursor-pointer "
        >
          Github
        </a>
        {/* LinkedIn----------------------------------------------- */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/carlosbaso/"
          className=" cursor-pointer "
        >
          Linkedin
        </a>
        {/* Currículum----------------------------------------------- */}
        <a target="_blank" href={"drive.com"} className=" cursor-pointer ">
          <div>Currículum</div>
        </a>
        {/* Idioma----------------------------------------------- */}
        <div>
          <div className="cursor-default focus w-full h-full relative ">
            <div>Idioma</div>
          </div>
          <div className="focus-content3 absolute sm:flex hidden justify-center flex-col tracking-wide w-[210px] roboto-light">
            <div className="h-[10px] w-full"></div>
            <div className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer ">
              <div className="relative flex">
                Español
                <div className=" absolute -right-6 text-[16px] ">
                  {true ? (
                    <div>
                      <Check />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer ">
              <div className="relative flex">
                English
                <div className=" absolute -right-6 text-[16px]  ">
                  {true ? null : (
                    <div>
                      {" "}
                      <Check />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;