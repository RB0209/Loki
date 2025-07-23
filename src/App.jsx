import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import "./index.css"; // Ensure styles are loaded

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
        Our Journey (2011–2025)
      </h1>

      <div className="flex overflow-x-auto space-x-3 px-2 pb-4 justify-center mb-8">
        {years.map((y) => (
          <Button
            key={y}
            onClick={() => {
              setYear(String(y));
              setExpanded(null);
            }}
            style={{
              backgroundColor: year === String(y) ? brandColor : "#ffffff",
              color: year === String(y) ? "#ffffff" : brandColor,
              border: `2px solid ${brandColor}`,
              boxShadow: year === String(y)
                ? "0 4px 14px rgba(0, 116, 217, 0.4)"
                : "0 2px 8px rgba(0, 116, 217, 0.2)",
              transform: year === String(y) ? "scale(1.1)" : "scale(1)",
              fontWeight: "bold"
            }}
            className="min-w-[80px] text-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:-rotate-1"
          >
            {y}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data[year] || []).map((title, i) => (
          <Card
            key={i}
            className={`cursor-pointer bg-white shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-[0.5deg] hover:shadow-2xl ${
              expanded === i ? "scale-105 shadow-2xl z-20" : ""
            }`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <CardContent>
              <div className={`w-full overflow-hidden rounded-lg bg-gray-200 mb-3 relative transition-all duration-500 ease-in-out ${expanded === i ? "h-64" : "h-40"}`}>
                <img
                  src={`/images/project${(i % 6) + 1}.jpg`}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-600">This is a short summary of the project.</p>
              {expanded === i && (
                <p className="text-sm text-gray-800 mt-2">
                  This is a longer description with full project details. It appears when the tile is clicked and expands.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
