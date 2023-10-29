"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [age, setAge] = useState("--");

  const [monthError, mError] = useState(false);
  const [yearError, yError] = useState(false);
  const [dayError, dError] = useState(false);

  function calculateAge() {
    // get the days from the inputs
    const inputDay = parseInt(document.getElementById("dayInput").value, 10);
    const inputMonth = parseInt(
      document.getElementById("monthInput").value,
      10
    );
    const inputYear = parseInt(document.getElementById("yearInput").value, 10);

    // fetch the current days and calculate the difference
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const isValidMonth = validMonth(inputMonth);
    const isValidYear = validYear(inputYear);
    const isValidDay = validDay(inputDay);

    if (!isValidMonth) {
      mError(true); // set error state to true
    } else {
      mError(false);
    }

    if (!isValidYear) {
      yError(true);
    } else {
      yError(false);
    }

    if (!isValidDay) {
      dError(true);
    } else {
      dError(false);
    }

    if (!isValidMonth || !isValidYear || !isValidDay) {
      return;
    }

    let age = currentYear - inputYear;
    let month = currentMonth - inputMonth;
    let day = currentDay - inputDay;

    if (month < 0 || (month === 0 && day < 0)) {
      age--;
      month = 12 + month;
    }
    if (day < 0) {
      month--;
      day = new Date(currentYear, currentMonth - 1, 0).getDate() + day;
    }

    setAge(age);
    setMonth(month);
    setDay(day);
  }

  function validDay(day) {
    const inputMonth = parseInt(
      document.getElementById("monthInput").value,
      10
    );

    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //alert(currentMonth);
    return !isNaN(day) && day >= 1 && day <= months[inputMonth - 1];
  }

  function validMonth(month) {
    return !isNaN(month) && month <= 12 && month >= 1;
  }

  function validYear(year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return !isNaN(year) && year <= currentYear && year >= 1900;
  }

  return (
    <div className="w-full h-full justify-center items-center flex bg-[#F0F0F0]">
      <div className="w-[600px] h-[500px] bg-[#ffffff] rounded-lg rounded-br-[175px]">
        <div className="outerlabeldiv h-[100px] w-[65%] mt-[50px] ml-[50px] border-0 border-black grid gap-4 grid-cols-3">
          <div>
            <label className="block" htmlFor="dayInput">
              <p
                className={`tracking-widest text-xs pb-1 ${
                  dayError ? "text-red-500" : "text-gray-500"
                }`}
              >
                DAY
              </p>
            </label>
            <input
              className={`textarea1 w-full h-12 text-2xl font-bold border-2 resize-none rounded-lg pt-[6.5px] pl-[10px] ${
                dayError ? "border-red-500" : "border-grey"
              }`}
              type="number"
              id="dayInput"
              placeholder="DD"
            />
          </div>
          <div>
            <label className="block" htmlFor="monthInput">
              <p
                className={`tracking-widest text-xs pb-1 ${
                  monthError ? "text-red-500" : "text-gray-500"
                }`}
              >
                MONTH
              </p>
            </label>
            <input
              className={`textarea1 w-full h-12 text-2xl font-bold border-2 resize-none rounded-lg pt-[6.5px] pl-[10px] ${
                monthError ? "border-red-500" : "border-grey"
              }`}
              type="number"
              id="monthInput"
              placeholder="MM"
            />
          </div>
          <div>
            <label className="block" htmlFor="yearInput">
              <p
                className={`tracking-widest text-xs pb-1 ${
                  yearError ? "text-red-500" : "text-gray-500"
                }`}
              >
                YEAR
              </p>
            </label>
            <input
              className={`textarea1 w-full h-12 text-2xl font-bold border-2 resize-none rounded-lg pt-[6.5px] pl-[10px] ${
                yearError ? "border-red-500" : "border-grey"
              }`}
              type="number"
              id="yearInput"
              placeholder="YYYY"
            />
          </div>
        </div>
        <div className="border-grey border-b-2 w-[77%] ml-[50px]"></div>
        <div className="outerlabeldiv h-[270px] w-[65%] mt-[50px] ml-[50px] border-0 border-black grid gap-4 grid-cols-3">
          {age !== null && (
            <p className="text-7xl col-span-4 italic font-black text-purple-500">
              {age} <span className="text-black">years</span>
              <br />
              {month} <span className="text-black">months</span>
              <br />
              {day} <span className="text-black">days</span>
            </p>
          )}
        </div>
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
    </div>
  );
}
