"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Box,
  TextField,
  AppBar,
  Toolbar,
  InputAdornment,
  Button,
} from "@mui/material";
import Router from "next/router";

export default function NewUserPage() {
  return (
    <div className="container flex flex-col justify-center h-screen max-w-full items-center gap-8">
      <h1 className="text-7xl font-comforta font-semibold text-Peach">KalT</h1>
      <h1 className="py-2 text-4xl font-comforta font-light text-white pb-5">
        Tell us a little bit about you...
      </h1>
      <div className="flex flex-row gap-12">
        <div className="w-28">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">
            Your Height
          </label>
          <input
            type="text"
            id="height"
            class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-Gray dark:border-Navy dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-roboto"
            placeholder="cm"
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
            required
          />
        </div>
      </div>
      <Link href="/NewUserPage2">
        <button
          type="button"
          className="text-White font-bold text-2xl w-10 h-10 bg-Peach border-2 rounded-lg border-Peach hover:text-Peach hover:bg-Gray transition"
        >
          +
        </button>
      </Link>
    </div>
  );
}
