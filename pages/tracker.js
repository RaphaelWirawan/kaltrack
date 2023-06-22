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

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "6/21",
    uv: 4000,
    calories: 1800.48,
    amt: 2400,
  },
  {
    name: "6/22",
    uv: 3000,
    calories: 1800.48,
    amt: 2210,
  },
  {
    name: "6/23",
    uv: 2000,
    calories: 1600,
    amt: 2290,
  },
  {
    name: "6/24",
    uv: 2780,
    calories: 3908,
    amt: 2000,
  },
  {
    name: "6/25",
    uv: 1890,
    calories: 2000,
    amt: 2181,
  },
  {
    name: "6/27",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "6/28",
    uv: 3490,

    amt: 2100,
  },
];

export default function tracker() {
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
        <h1 className="text-3xl font-comforta font-medium text-OffWhite mb-5">
          Your Progress for the past week
        </h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis stroke="#E4E4EF" dataKey="name" />
            <YAxis stroke="#E4E4EF" />
            <Tooltip />
            <Legend />
            <ReferenceLine y={1800.48} stroke="#E4E4EF" />
            <Bar dataKey="calories" fill="#F07B7B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
