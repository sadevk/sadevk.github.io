"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <header className="flex justify-center md:px-10">
      <div className=" w-full flex justify-between items-center pe-5">
        <a href="/" className="md:w-1/2">
          <img src="../assets/logo.png" alt="" height={120} width={120} />
        </a>
        <div className="md:w-1/2 justify-evenly md:flex hidden text-lg">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">My Services</a>
          <a href="#contact">Contact Me</a>
        </div>
        <a href="#" onClick={() => setIsMenuOpened(true)} className="md:hidden">
          <Bars3Icon
            className="h-10 w-10 md:hidden"
            onClick={() => {
              setIsMenuOpened(true);
            }}
          />
        </a>
      </div>
      {isMenuOpened ? (
        <div className="flex flex-col md:hidden absolute h-screen w-screen bg-black items-center pe-5">
          <div className="flex w-full justify-between items-center">
            <img src="../assets/logo.png" alt="" height={120} width={120} />
            <a
              href="#"
              onClick={() => {
                setIsMenuOpened(false);
              }}
            >
              <XMarkIcon
                className="h-10 w-10 md:hidden"
                onClick={() => {
                  setIsMenuOpened(true);
                }}
              />
            </a>
          </div>
          <div className="flex flex-col p-10 gap-16 mt-5">
            <a
              href="#home"
              className="font-bold text-3xl"
              onClick={() => {
                setIsMenuOpened(false);
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold text-3xl"
              onClick={() => {
                setIsMenuOpened(false);
              }}
            >
              About Me
            </a>
            <a
              href="#services"
              className="font-bold text-3xl"
              onClick={() => {
                setIsMenuOpened(false);
              }}
            >
              My Services
            </a>
            <a
              href="#contact"
              className="font-bold text-3xl"
              onClick={() => {
                setIsMenuOpened(false);
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
