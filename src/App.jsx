import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const brandColor = "#0074D9";
const years = Array.from({ length: 2025 - 2011 + 1 }, (_, i) => 2011 + i);

const data = {
  "2011": ["Social Awareness through Local Public Events and Programs during Festivals"],
  "2012": ["National Flag Pride Rally", "Socio cultural program for youth motivation"],
  "2013": ["National Flag Pride Rally", "Socio cultural program for youth motivation", "Summer camps", "Winter camps"],
  "2014": ["National Flag Pride Rally", "Summer camps", "Winter camps"],
  "2015": ["National Flag Pride Rally", "P3 Pre Primary", "Summer camps", "Winter camps"],
  "2016": ["National Flag Pride Rally", "P3 Pre Primary", "Youth motivation programs"],
  "2017": ["National Flag Pride Rally", "FANACT", "DANSEN", "P3 Pre Primary"],
  "2018": ["National Flag Pride Rally", "FANACT", "Legal Awareness Seminar", "AABAA", "P3 Pre Primary", "Digi Womania Seminar", "Notebooks distribution"],
  "2019": ["National Flag Pride Campaign", "Legal Awareness Seminars", "DIGI WOMANIA Seminar", "P3 Pre Primary", "Kerala flood donation", "Medical camp"],
  "2020": ["National Flag Pride Campaign", "Food Distribution", "Water Distribution", "Masks and Sanitiser Distribution", "Medical camp", "Sanitary pad distribution"],
  "2021": ["National Flag Pride Campaign", "Food Distribution", "Water Distribution", "Masks and Sanitiser Distribution", "Medical Aid under Project ASHA", "Juhu beach cleaning"],
  "2022": ["National Flag Pride Campaign", "Food Distribution", "Water Distribution", "Masks and Sanitiser Distribution", "Stationary kit distribution", "Sanitary pad distribution"],
  "2023": ["Project ASHA", "Feed The Need", "Stationary kit distribution"],
  "2024": ["Project ASHA", "Feed The Need", "Stationary kit distribution", "Food distribution"],
  "2025": ["Project ASHA", "Feed The Need", "Stationary kit distribution", "Food distribution"]
};

export default function App() {
  const [year, setYear] = useState("2011");
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8" style={{ color: brandColor }}>
        Our Journey
      </h1>

      <div className="relative w-full overflow-x-auto mb-10 px-2 py-4">
  <div className="flex space-x-6 min-w-max items-center">
    {years.map((year) => (
      <button
        key={year}
        onClick={() => {
          setSelectedYear(String(year));
          setExpandedIndex(null);
        }}
        className={`relative group transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center px-3 py-2
          ${selectedYear === String(year)
            ? "text-white bg-[#0074D9] shadow-lg scale-110"
            : "text-[#0074D9] bg-white border border-[#0074D9] hover:bg-[#0074D9]/10"}
          rounded-full`}
        style={{
          minWidth: "64px",
          fontWeight: "bold",
        }}
      >
        <span className="text-sm">{year}</span>
        <span className={`w-2 h-2 rounded-full mt-1 transition-all duration-300 ${
          selectedYear === String(year) ? "bg-white" : "bg-[#0074D9]"
        }`}></span>
      </button>
    ))}
  </div>
</div>
