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

export default function ranked() {
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

      <div className="flex flex-row justify-center items-center w-full h-[300px] gap-5">
        <div class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-Navy dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-White font-comforta">
              Individual Streak Leaderboard
            </h1>
            <div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <Image
                  className="rounded-full"
                  src="/diamonds.jpg"
                  height={30}
                  width={30}
                  alt="pp"
                />
                <p className="text-xs text-OffWhite font-normal ">joever</p>
                <p className="text-xs text-OffWhite font-normal ">
                  70
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <Image
                  className="rounded-full"
                  src="/bidenblast.jpg"
                  height={30}
                  width={30}
                  alt="pp"
                />
                <p className="text-xs text-OffWhite font-normal ">xijinping</p>
                <p className="text-xs text-OffWhite font-normal ">
                  42
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <Image
                  className="rounded-full"
                  src="/Screenshot 2022-09-12 220519.png"
                  height={30}
                  width={30}
                  alt="pp"
                />
                <p className="text-xs text-OffWhite font-normal ">udil921</p>
                <p className="text-xs text-OffWhite font-normal ">
                  39
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <Image
                  className="rounded-full"
                  src="/profile.jpg"
                  height={30}
                  width={30}
                  alt="pp"
                />
                <p className="text-xs text-OffWhite font-normal ">ligma</p>
                <p className="text-xs text-OffWhite font-normal ">
                  39
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <Image
                  className="rounded-full"
                  src="/3568289.png"
                  height={30}
                  width={30}
                  alt="pp"
                />
                <p className="text-xs text-OffWhite font-normal ">stevejobs</p>
                <p className="text-xs text-OffWhite font-normal ">
                  20
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-Navy dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-White font-comforta">
              Guild Streak Leaderboard
            </h1>
            <div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <p className="text-sm text-OffWhite font-normal ">china</p>
                <p className="text-sm text-OffWhite font-normal ">
                  539
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <p className="text-sm text-OffWhite font-normal ">
                  sugondese14
                </p>
                <p className="text-sm text-OffWhite font-normal ">
                  495
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <p className="text-sm text-OffWhite font-normal ">roejogan</p>
                <p className="text-sm text-OffWhite font-normal ">
                  480
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <p className="text-sm text-OffWhite font-normal ">androtate</p>
                <p className="text-sm text-OffWhite font-normal ">
                  428
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
              <div className="flex flex-row bg-Navy w-full h-12 justify-start items-center gap-3 pl-3 border-b">
                <p className="text-sm text-OffWhite font-normal ">
                  thewongames
                </p>
                <p className="text-sm text-OffWhite font-normal ">
                  311
                  <WhatshotIcon className="text-Peach text-sm" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
