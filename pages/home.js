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
import { animated, useSpring, config } from "@react-spring/web";
import {
  Box,
  TextField,
  AppBar,
  Toolbar,
  InputAdornment,
  Button,
} from "@mui/material";
import Router from "next/router";

export default function home() {
  const [streak, setStreak] = useState(0);
  const [calories, setCalories] = useState();

  const springNumbers = useSpring({
    from: { val: 0 },
    to: { val: 1800.48 },
    config: config.molasses,
  });

  const change = (event) => {
    setCalories(event.target.value);
  };

  const increaseStreak = () => {
    if (calories == 1800.48) {
      setStreak(streak + 1);
    } else {
      setStreak((delstreak) => delstreak - streak);
    }
  };

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

      <div className="flex flex-row justify-center items-center w-full h-[300px] divide-x-8 divide-Teal divide-double">
        <div className="flex flex-col h-full justify-center items-center w-1/2">
          <h1 className="text-lg font-roboto text-White mb-10">
            Today's Calorie Intake
          </h1>
          <form class="w-full max-w-xs">
            <div class="flex items-center border-b border-Peach py-2">
              <input
                class="appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none font-roboto"
                type="text"
                placeholder="Calories (Kj)"
                onChange={change}
                value={calories}
              />
              <button
                class="flex-shrink-0 bg-Peach hover:bg-transparent border-Peach text-lg border-2 font-semibold text-white w-10 h-10 rounded-lg"
                type="button"
                onClick={increaseStreak}
              >
                +
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col h-full justify-center items-center w-1/2">
          <div className="flex flex-row">
            <animated.div className="text-5xl font-comforta font-medium  text-OffWhite">
              {springNumbers.val.interpolate((val) => val.toFixed(2))}
            </animated.div>
            <ElectricBoltIcon fontSize="large" className="text-Peach" />
          </div>
          <h1 className="text-lg font-roboto text-White mb-10">
            Target Daily Calories
          </h1>
          <h1 className="text-5xl font-comforta text-OffWhite">
            {streak}
            <WhatshotIcon fontSize="large" className="text-Peach" />
          </h1>
          <h1 className="text-lg font-roboto text-White mb-10">Streak</h1>
        </div>
      </div>
    </div>
  );
}
