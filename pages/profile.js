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
import { animated, useSpring, config } from "@react-spring/web";
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

export default function profile() {
  const springNumbers = useSpring({
    from: { val: 0 },
    to: { val: 20.8 },
    config: config.molasses,
  });
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

      <div className="flex flex-col justify-center items-center w-full h-[300px]">
        <div className="flex flex-row pb-10">
          <h1 className="text-2xl font-comforta font-light text-white pr-5">
            Your BMI:
          </h1>
          <animated.div className="text-4xl font-comforta font-semibold text-Peach underline">
            {springNumbers.val.interpolate((val) => val.toFixed(2))}
          </animated.div>
          <h1 className="text-xl font-comforta font-semibold text-Peach">
            kg/m<sup>2</sup>
          </h1>
        </div>
        <div className="flex flex-row gap-12 pb-12">
          <h1 className="text-2xl font-comforta font-light text-white">
            Change Your Data:
          </h1>
          <div className="w-28">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">
              Your Height
            </label>
            <input
              type="text"
              id="height"
              class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-Gray dark:border-Navy dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-roboto"
              placeholder="m"
              value="170"
              required
            />
          </div>
          <div className="w-28">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">
              Your Weight
            </label>
            <input
              type="text"
              id="height"
              class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-Gray dark:border-Navy dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-roboto"
              placeholder="kg"
              value="60"
              required
            />
          </div>
          <div className="w-28">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">
              Your Gender
            </label>
            <select
              id="gender"
              name="gender"
              class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:white block w-full p-2.5 dark:bg-Gray dark:border-Navy dark:placeholder-gray-400 dark:text-white font-roboto"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Anything in between</option>
            </select>
          </div>
          <div className="w-28">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">
              Your Age
            </label>
            <input
              type="text"
              id="age"
              class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-Gray dark:border-Navy dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-roboto"
              placeholder="age"
              value="20"
              required
            />
          </div>
        </div>
        <div className="flex flex-row gap-12 pb-7">
          <h1 className="text-2xl font-comforta font-light text-white pb-5 w-full">
            Change your program:
          </h1>
          <div className="flex flex-row w-full justify-center items-center gap-5">
            <Link href="/home">
              <button
                type="button"
                className="text-White font-roboto font-normal text-2xl w-32 h-10 bg-Peach border-2 rounded-lg border-Peach hover:text-Peach hover:bg-Gray transition"
              >
                Bulking
              </button>
            </Link>
            <button
              type="button"
              className="text-White font-roboto font-normal text-2xl w-32 h-10 bg-Peach border-2 rounded-lg border-Peach hover:text-Peach hover:bg-Gray transition"
            >
              Cutting
            </button>
            <button
              type="button"
              className="text-White font-roboto font-normal text-2xl w-32 h-10 bg-Peach border-2 rounded-lg border-Peach hover:text-Peach hover:bg-Gray transition"
            >
              Maintain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
