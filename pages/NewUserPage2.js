"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
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

export default function NewUserPage2() {
  const springNumbers = useSpring({
    from: { val: 0 },
    to: { val: 20.8 },
    config: config.molasses,
  });

  return (
    <div className="container flex flex-col justify-center h-screen max-w-full items-center gap-8">
      <h1 className="text-7xl font-comforta font-semibold text-Peach">KalT</h1>
      <h1 className="py-2 text-2xl font-comforta font-light text-white pb-5">
        Your BMI is:
      </h1>
      <div className="flex flex-row">
        <animated.div className="text-4xl font-comforta font-semibold text-Peach underline">
          {springNumbers.val.interpolate((val) => val.toFixed(2))}
        </animated.div>
        <h1 className="text-xl font-comforta font-semibold text-Peach">
          kg/m<sup>2</sup>
        </h1>
      </div>

      <h1 className="py-2 text-2xl font-comforta font-light text-white pb-5">
        Choose your program:
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
  );
}
