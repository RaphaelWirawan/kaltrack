"use client";
import "../src/app/globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  Box,
  TextField,
  AppBar,
  Toolbar,
  InputAdornment,
  Button,
} from "@mui/material";
import Router from "next/router";

export default function guild() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-row items-center justify-between h-32 w-full px-10 mb-10">
        <Link href="/home">
          <h1 className="text-5xl font-comforta font-semibold text-Peach">
            KalT
          </h1>
        </Link>
        <div className="flex flex-row items-center justify-end w-full gap-10">
          <Link href="/tracker">
            <div className="flex flex-row items-center justify-center gap-1">
              <BarChartIcon fontSize="small" className="text-OffWhite" />
              <h1 className="text-sm font-roboto font-normal text-OffWhite">
                Tracker
              </h1>
            </div>
          </Link>
          <Link href="/guild">
            <div className="flex flex-row items-center justify-center gap-1">
              <PeopleIcon fontSize="small" className="text-OffWhite" />
              <h1 className="text-sm font-roboto font-normal text-OffWhite">
                Guild
              </h1>
            </div>
          </Link>
          <Link href="/ranked">
            <div className="flex flex-row items-center justify-center gap-1">
              <EmojiEventsIcon fontSize="small" className="text-OffWhite" />
              <h1 className="text-sm font-roboto font-normal text-OffWhite">
                Ranked
              </h1>
            </div>
          </Link>
          <Link href="/profile">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              height={45}
              width={45}
              alt="pp"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center w-full h-[300px] px-10 divide-x-2 divide-Teal">
        <div className="flex flex-col h-full justify-start items-end w-1/3 pr-5 gap-2">
          <div className="flex flex-row bg-Navy w-44 h-10 rounded-full justify-start items-center gap-3 pl-3 border border-Peach">
            <div className="flex flex-row justify-start items-start pl-3 divide-x gap-1">
              <p className="text-sm text-OffWhite font-normal">
                Geng anti-kalori
              </p>
              <p className="text-sm text-OffWhite font-normal pl-1">
                23
                <WhatshotIcon className="text-Peach text-sm" />
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-Navy w-32 h-10 rounded-full justify-start items-center gap-3 pl-3">
            <Image
              className="rounded-full"
              src="/diamonds.jpg"
              height={30}
              width={30}
              alt="pp"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-xs text-OffWhite font-normal ">xijinping</p>
              <p className="text-xs text-OffWhite font-normal ">
                9
                <WhatshotIcon className="text-Peach text-xs" />
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-Navy w-32 h-10 rounded-full justify-start items-center gap-3 pl-3">
            <Image
              className="rounded-full"
              src="/bidenblast.jpg"
              height={30}
              width={30}
              alt="pp"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-xs text-OffWhite font-normal ">joever</p>
              <p className="text-xs text-OffWhite font-normal ">
                14
                <WhatshotIcon className="text-Peach text-xs" />
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-White font-bold text-2xl w-10 h-10 bg-Navy border-2 rounded-full border-Navy hover:text-Peach hover:bg-Gray transition"
          >
            +
          </button>
        </div>
        <div className="flex flex-col h-full justify-start items-start w-full pl-10">
          <div className="flex flex-col justify-center items-start h-16 w-52 p-3 bg-Navy text-sm text-White font-roboto font-light pl-5 rounded-lg">
            <p className="font-semibold underline">joever</p>
            <p>woi don't overeat today</p>
          </div>

          <div className="bottom-24 fixed">
            <div class="flex justify-between">
              <div class="flex gap-3 text-[#9CA3AF] pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <textarea
              placeholder="Chat with your guild members"
              class="font-roboto font-normal text-sm text-OffWhite p-2 bg-transparent focus:outline-1 focus:outline-Navy border-[0.1px] resize-none h-[60px] border-[#9EA5B1] rounded-md w-[60vw]"
            ></textarea>
            <div class="flex justify-end">
              <button class="text-sm font-semibold absolute bg-Navy w-fit text-White py-2 rounded px-3 font-roboto">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
