"use client";

import React, { useState } from "react";
import { 
  Copy, 
  Check, 
  RotateCcw, 
  Sliders, 
  Palette, 
  Code, 
  Sparkles, 
  Layout, 
  Eye,
  Settings,
  Info
} from "lucide-react";

// Curated harmonious preset colors
const COLOR_PRESETS = [
  { name: "Electric Purple", hex: "#7d2ae8" },
  { name: "Sunset Orange", hex: "#ff5e36" },
  { name: "Emerald Green", hex: "#10b981" },
  { name: "Neon Pink", hex: "#ff007f" },
  { name: "Ocean Cyan", hex: "#00bfff" },
  { name: "Golden Amber", hex: "#f5a623" },
  { name: "Royal Blue", hex: "#2563eb" },
  { name: "Deep Crimson", hex: "#dc2626" },
];

export default function ButtonsPlayground() {
  // State variables for button customization
  const [btnColor, setBtnColor] = useState("#7d2ae8");
  const [textColor, setTextColor] = useState("#ffffff");
  const [buttonText, setButtonText] = useState("Hover Me");
  const [borderRadius, setBorderRadius] = useState(6);
  const [paddingY, setPaddingY] = useState(10);
  const [paddingX, setPaddingX] = useState(22);
  const [fontSize, setFontSize] = useState(16);
  
  // Canvas configuration
  const [canvasBg, setCanvasBg] = useState("grid-dark"); // grid-dark, grid-light, white, dark
  const [copiedState, setCopiedState] = useState<"css" | "react" | null>(null);
  const [activeTab, setActiveTab] = useState<"controls" | "presets">("controls");

  // Reset to default Uiverse.io values
  const handleReset = () => {
    setBtnColor("#7d2ae8");
    setTextColor("#ffffff");
    setButtonText("Hover Me");
    setBorderRadius(6);
    setPaddingY(10);
    setPaddingX(22);
    setFontSize(16);
  };

  // Copy CSS styles to clipboard
  const copyToClipboard = (type: "css" | "react") => {
    const textToCopy = type === "css" ? getGeneratedCSS() : getGeneratedReact();
    navigator.clipboard.writeText(textToCopy);
    setCopiedState(type);
    setTimeout(() => setCopiedState(null), 2000);
  };

  // Generate CSS string
  const getGeneratedCSS = () => {
    return `/* From Uiverse.io by zjssun (Modified for custom colors) */
.button {
  position: relative;
  padding: ${paddingY}px ${paddingX}px;
  border-radius: ${borderRadius}px;
  border: none;
  color: ${textColor};
  font-size: ${fontSize}px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${btnColor};
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1;
  background-repeat: no-repeat;
  pointer-events: none;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, ${btnColor} 20%, transparent 30%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, ${btnColor} 15%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, ${btnColor} 15%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%),
    radial-gradient(circle, ${btnColor} 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}`;
  };

  // Generate React JS Component string
  const getGeneratedReact = () => {
    return `"use client";

import React from 'react';
import './button.css'; // containing the CSS copied from the CSS tab

export default function BubbleButton() {
  return (
    <button className="button">
      ${buttonText}
    </button>
  );
}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7d2ae8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Style tag injected dynamically for CSS Custom Properties */}
      <style>{`
        .playground-button-container {
          --btn-color: ${btnColor};
          --text-color: ${textColor};
          --radius: ${borderRadius}px;
          --padding-y: ${paddingY}px;
          --padding-x: ${paddingX}px;
          --font-size: ${fontSize}px;
        }

        .playground-button-container .custom-bubble-btn {
          position: relative;
          padding: var(--padding-y) var(--padding-x);
          border-radius: var(--radius);
          border: none;
          color: var(--text-color);
          font-size: var(--font-size);
          font-weight: 600;
          cursor: pointer;
          background-color: var(--btn-color);
          transition: all 0.2s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          outline: none;
          z-index: 10;
        }

        .playground-button-container .custom-bubble-btn:active {
          transform: scale(0.95);
        }

        .playground-button-container .custom-bubble-btn:before,
        .playground-button-container .custom-bubble-btn:after {
          position: absolute;
          content: "";
          width: 150%;
          left: 50%;
          height: 100%;
          transform: translateX(-50%);
          z-index: -1;
          background-repeat: no-repeat;
          pointer-events: none;
        }

        .playground-button-container .custom-bubble-btn:hover:before {
          top: -70%;
          background-image: radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, transparent 20%, var(--btn-color) 20%, transparent 30%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, var(--btn-color) 15%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%);
          background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
            10% 10%, 18% 18%;
          background-position: 50% 120%;
          animation: greentopBubbles 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          /* We can set it to infinite on preview focus or single run. Let's make it single run as original */
          animation-iteration-count: 1;
        }

        .playground-button-container .custom-bubble-btn:hover:after {
          bottom: -70%;
          background-image: radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, var(--btn-color) 15%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%),
            radial-gradient(circle, var(--btn-color) 20%, transparent 20%);
          background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
          background-position: 50% 0%;
          animation: greenbottomBubbles 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          animation-iteration-count: 1;
        }

        @keyframes greentopBubbles {
          0% {
            background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
              40% 90%, 55% 90%, 70% 90%;
          }
          50% {
            background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
              50% 50%, 65% 20%, 90% 30%;
          }
          100% {
            background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
              50% 40%, 65% 10%, 90% 20%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }

        @keyframes greenbottomBubbles {
          0% {
            background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
              70% -10%, 70% 0%;
          }
          50% {
            background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
              105% 0%;
          }
          100% {
            background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
              110% 10%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow z-10">
        
        {/* Header section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Interactive CSS Customizer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
            Bubble Button Lab
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Customize and export the famous Uiverse bubble-explosion button animation in real-time. Choose colors, adjust geometry, and copy modular CSS.
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Preview Canvas */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 p-6 flex flex-col flex-grow min-h-[400px] shadow-2xl relative">
              
              {/* Canvas Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-300">Live Preview</span>
                </div>
                
                {/* Canvas BG Selector */}
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button 
                    onClick={() => setCanvasBg("grid-dark")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${canvasBg === "grid-dark" ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dark Grid
                  </button>
                  <button 
                    onClick={() => setCanvasBg("grid-light")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${canvasBg === "grid-light" ? "bg-slate-200 text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Light Grid
                  </button>
                  <button 
                    onClick={() => setCanvasBg("dark")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${canvasBg === "dark" ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dark
                  </button>
                  <button 
                    onClick={() => setCanvasBg("white")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${canvasBg === "white" ? "bg-white text-slate-950 shadow-sm" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    White
                  </button>
                </div>
              </div>

              {/* Render Canvas */}
              <div className={`flex-grow rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-300 min-h-[250px] ${
                canvasBg === "grid-dark" ? "bg-slate-950 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]" :
                canvasBg === "grid-light" ? "bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" :
                canvasBg === "white" ? "bg-white text-slate-900" : "bg-slate-900"
              }`}>
                {/* Button Container mapping styles */}
                <div className="playground-button-container relative">
                  <button className="custom-bubble-btn">
                    {buttonText || "Hover Me"}
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-800/80 text-[10px] text-slate-400 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Hover to trigger bubbles
                </div>
              </div>

              {/* Reset Control */}
              <div className="flex justify-end gap-3 mt-4 pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-xl transition-all border border-slate-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Default
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Customizer Control Panel */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 flex flex-col h-full shadow-2xl overflow-hidden">
              
              {/* Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/60">
                <button
                  onClick={() => setActiveTab("controls")}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all border-b-2 ${activeTab === "controls" ? "border-purple-500 text-white bg-slate-900/40" : "border-transparent text-slate-400 hover:text-slate-200"}`}
                >
                  <Settings className="w-4 h-4" />
                  Controls
                </button>
                <button
                  onClick={() => setActiveTab("presets")}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all border-b-2 ${activeTab === "presets" ? "border-purple-500 text-white bg-slate-900/40" : "border-transparent text-slate-400 hover:text-slate-200"}`}
                >
                  <Palette className="w-4 h-4" />
                  Presets & Code
                </button>
              </div>

              <div className="p-6 flex-grow overflow-y-auto space-y-6">
                
                {/* TAB 1: Controls */}
                {activeTab === "controls" && (
                  <div className="space-y-6">
                    {/* Color Section */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Button Primary Color</label>
                      <div className="flex gap-4 items-center">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-800 cursor-pointer shadow-inner shrink-0">
                          <input 
                            type="color" 
                            value={btnColor}
                            onChange={(e) => setBtnColor(e.target.value)}
                            className="absolute inset-0 w-full h-full scale-150 cursor-pointer border-0 bg-transparent p-0"
                          />
                        </div>
                        <div className="flex-grow">
                          <input 
                            type="text" 
                            value={btnColor}
                            onChange={(e) => setBtnColor(e.target.value)}
                            placeholder="#7d2ae8"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Color Section */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Button Text Color</label>
                      <div className="flex gap-4 items-center">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-800 cursor-pointer shadow-inner shrink-0">
                          <input 
                            type="color" 
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            className="absolute inset-0 w-full h-full scale-150 cursor-pointer border-0 bg-transparent p-0"
                          />
                        </div>
                        <div className="flex-grow">
                          <input 
                            type="text" 
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            placeholder="#ffffff"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Custom Text input */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Button Text</label>
                      <input 
                        type="text"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                        placeholder="Button Text"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>

                    {/* Geometry Options */}
                    <div className="border-t border-slate-800/80 pt-6 space-y-5">
                      <div className="flex items-center gap-2 mb-1">
                        <Sliders className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-slate-200">Geometry Settings</span>
                      </div>

                      {/* Border Radius */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-400">Border Radius</span>
                          <span className="text-purple-400 font-mono">{borderRadius}px</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="40" 
                          value={borderRadius}
                          onChange={(e) => setBorderRadius(Number(e.target.value))}
                          className="w-full accent-purple-500 bg-slate-950 cursor-pointer rounded-lg h-2"
                        />
                      </div>

                      {/* Font Size */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-400">Font Size</span>
                          <span className="text-purple-400 font-mono">{fontSize}px</span>
                        </div>
                        <input 
                          type="range" 
                          min="12" 
                          max="28" 
                          value={fontSize}
                          onChange={(e) => setFontSize(Number(e.target.value))}
                          className="w-full accent-purple-500 bg-slate-950 cursor-pointer rounded-lg h-2"
                        />
                      </div>

                      {/* Padding X */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-400">Horizontal Padding</span>
                          <span className="text-purple-400 font-mono">{paddingX}px</span>
                        </div>
                        <input 
                          type="range" 
                          min="12" 
                          max="50" 
                          value={paddingX}
                          onChange={(e) => setPaddingX(Number(e.target.value))}
                          className="w-full accent-purple-500 bg-slate-950 cursor-pointer rounded-lg h-2"
                        />
                      </div>

                      {/* Padding Y */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-400">Vertical Padding</span>
                          <span className="text-purple-400 font-mono">{paddingY}px</span>
                        </div>
                        <input 
                          type="range" 
                          min="6" 
                          max="30" 
                          value={paddingY}
                          onChange={(e) => setPaddingY(Number(e.target.value))}
                          className="w-full accent-purple-500 bg-slate-950 cursor-pointer rounded-lg h-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Presets & Code */}
                {activeTab === "presets" && (
                  <div className="space-y-6">
                    {/* Presets Grid */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Color Presets</label>
                      <div className="grid grid-cols-2 gap-3">
                        {COLOR_PRESETS.map((preset) => (
                          <button
                            key={preset.hex}
                            onClick={() => setBtnColor(preset.hex)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-left group"
                          >
                            <span 
                              className="w-4 h-4 rounded-full border border-white/10 shrink-0 block transition-transform group-hover:scale-110" 
                              style={{ backgroundColor: preset.hex }} 
                            />
                            <span className="text-xs font-medium text-slate-300 truncate">{preset.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CSS Export Panel */}
                    <div className="space-y-3 pt-4 border-t border-slate-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-purple-400" />
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">CSS Styles</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard("css")}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500 hover:bg-purple-600 text-xs font-semibold text-white transition-all shadow-md active:scale-95"
                        >
                          {copiedState === "css" ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Copy CSS
                            </>
                          )}
                        </button>
                      </div>
                      
                      <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-4 max-h-[220px] overflow-y-auto">
                        <pre className="text-xs text-purple-300/90 font-mono whitespace-pre overflow-x-auto leading-relaxed">
                          {getGeneratedCSS()}
                        </pre>
                      </div>
                    </div>

                    {/* React Export Panel */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-purple-400" />
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">React Component</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard("react")}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-all border border-slate-700 active:scale-95"
                        >
                          {copiedState === "react" ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Copy JSX
                            </>
                          )}
                        </button>
                      </div>

                      <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-4 max-h-[160px] overflow-y-auto">
                        <pre className="text-xs text-slate-300 font-mono whitespace-pre overflow-x-auto leading-relaxed">
                          {getGeneratedReact()}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Info Footer */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex gap-2 items-start">
                <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-400 leading-normal">
                  Pseudo-elements (:before and :after) dynamically match the button primary color by compiling custom variables straight into the DOM runtime.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section: Variety Gallery */}
        <div className="mt-16 space-y-6">
          <div className="border-t border-slate-800 pt-10">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Layout className="w-5 h-5 text-purple-400" />
              Design Showcase & Presets
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              See the bubble explosion effect rendered across different shapes, geometries, and colors. Click any to load it in the customizer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Variation 1: Rounded Pill */}
            <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-slate-700/80 transition-all group">
              <div className="playground-button-container" style={{ "--btn-color": "#ff007f", "--text-color": "#ffffff", "--radius": "9999px", "--padding-y": "12px", "--padding-x": "26px", "--font-size": "15px" } as React.CSSProperties}>
                <button className="custom-bubble-btn">
                  Pill Button
                </button>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-300 mb-1">Modern Pill</h3>
                <button 
                  onClick={() => {
                    setBtnColor("#ff007f");
                    setBorderRadius(9999);
                    setPaddingY(12);
                    setPaddingX(26);
                    setFontSize(15);
                  }}
                  className="text-[10px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider"
                >
                  Load Style
                </button>
              </div>
            </div>

            {/* Variation 2: Sharp Corner */}
            <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-slate-700/80 transition-all group">
              <div className="playground-button-container" style={{ "--btn-color": "#ff5e36", "--text-color": "#ffffff", "--radius": "0px", "--padding-y": "14px", "--padding-x": "28px", "--font-size": "16px" } as React.CSSProperties}>
                <button className="custom-bubble-btn">
                  SHARP ACTION
                </button>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-300 mb-1">Sharp Angular</h3>
                <button 
                  onClick={() => {
                    setBtnColor("#ff5e36");
                    setBorderRadius(0);
                    setPaddingY(14);
                    setPaddingX(28);
                    setFontSize(16);
                    setButtonText("SHARP ACTION");
                  }}
                  className="text-[10px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider"
                >
                  Load Style
                </button>
              </div>
            </div>

            {/* Variation 3: Seafoam Glow */}
            <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-slate-700/80 transition-all group">
              <div className="playground-button-container" style={{ "--btn-color": "#10b981", "--text-color": "#ffffff", "--radius": "12px", "--padding-y": "10px", "--padding-x": "24px", "--font-size": "15px" } as React.CSSProperties}>
                <button className="custom-bubble-btn">
                  Check Out
                </button>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-300 mb-1">Smooth Corner</h3>
                <button 
                  onClick={() => {
                    setBtnColor("#10b981");
                    setBorderRadius(12);
                    setPaddingY(10);
                    setPaddingX(24);
                    setFontSize(15);
                    setButtonText("Check Out");
                  }}
                  className="text-[10px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider"
                >
                  Load Style
                </button>
              </div>
            </div>

            {/* Variation 4: Dark contrast */}
            <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-slate-700/80 transition-all group">
              <div className="playground-button-container" style={{ "--btn-color": "#ffffff", "--text-color": "#090d16", "--radius": "6px", "--padding-y": "10px", "--padding-x": "22px", "--font-size": "16px" } as React.CSSProperties}>
                <button className="custom-bubble-btn">
                  Inverted
                </button>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-300 mb-1">Inverted Contrast</h3>
                <button 
                  onClick={() => {
                    setBtnColor("#ffffff");
                    setTextColor("#090d16");
                    setBorderRadius(6);
                    setPaddingY(10);
                    setPaddingX(22);
                    setFontSize(16);
                    setButtonText("Inverted");
                  }}
                  className="text-[10px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider"
                >
                  Load Style
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
