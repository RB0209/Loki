import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10" style={{ color: brandColor }}>
        Our Timeline Journey
      </h1>

      <div className="flex overflow-x-auto gap-3 pb-6 justify-center">
        {years.map((y) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            key={y}
            onClick={() => {
              setYear(String(y));
              setExpanded(null);
            }}
            style={{
              backgroundColor: year === String(y) ? brandColor : "white",
              color: year === String(y) ? "white" : brandColor,
              border: `2px solid ${brandColor}`,
              fontWeight: "bold"
            }}
            className="px-4 py-2 rounded-lg shadow transition-all"
          >
            {y}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data[year] || []).map((title, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`bg-white p-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
              expanded === i ? "ring-4 ring-blue-200" : ""
            }`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="h-40 overflow-hidden rounded-lg mb-3 bg-gray-200">
              <img
                src={`/images/project${(i % 6) + 1}.jpg`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-bold mb-1">{title}</h2>
            <p className="text-sm text-gray-600">Short description of the initiative.</p>
            {expanded === i && (
              <p className="text-sm mt-2 text-gray-800">
                Full details shown here on click. Replace with your actual project description.
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
