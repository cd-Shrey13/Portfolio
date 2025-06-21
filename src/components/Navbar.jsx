import { twMerge } from "tailwind-merge";
import { nameLogo, mailLogo } from "../assets/asset.js";
import { useState } from "react";

export default function Navbar({ className }) {
  const [themeSelectMenuVisible, setThemeSelectMenuVisible] = useState(false);
  const colorVarients = ["Default","Black", "Purple"];
  const themeVarients = {
    Default: {
      primaryBackground: "#0f0c29",
      secondaryBackground: "#0f0c29",
      primaryFont: "#ffffff",
      secondaryFont: "",
      buttonPrimary: "#241f57",
      buttonHover: "oklch(43.482% 0.08354 306.699)",
      buttonActive: "#68676b",
      buttonBorder: "#68638c",
      cardPrimary: "#0f0c29",
      cardBorder: "#282637",
    },
    Black: {
      primaryBackground: "#232526",
      secondaryBackground: "#414345",
      primaryFont: "#ffffff",
      secondaryFont: "",
      buttonPrimary: "#222529",
      buttonHover: "#454b52",
      buttonActive: "#68676b",
      buttonBorder: "#68676b",
      cardPrimary: "#1c1d1e",
      cardBorder: "#68676b",
    },
    Purple: {
      primaryBackground: "#6441A5",
      secondaryBackground: "#2a0845",
      primaryFont: "#ffffff",
      secondaryFont: "",
      buttonPrimary: "#9261ec",
      buttonHover: "#c8aff7",
      buttonActive: "",
      buttonBorder: "#7149bc",
      cardPrimary: "#251233",
      cardBorder: "rgb(139, 114, 214)",
    },
  };

  function changeThemeColor(themeColor) {
    const selectedTheme = themeVarients[themeColor];
    const documentObject = document.documentElement;
    documentObject.style.setProperty(
      "--color-background-primary",
      selectedTheme.primaryBackground,
    );
    documentObject.style.setProperty(
      "--color-background-secondary",
      selectedTheme.secondaryBackground,
    );
    documentObject.style.setProperty(
      "--color-font-primary",
      selectedTheme.primaryFont,
    );
    documentObject.style.setProperty(
      "--color-font-secondary",
      selectedTheme.secondaryFont,
    );
    documentObject.style.setProperty(
      "--color-button-primary",
      selectedTheme.buttonPrimary,
    );
    documentObject.style.setProperty(
      "--color-button-hover",
      selectedTheme.buttonHover,
    );
    documentObject.style.setProperty(
      "--color-button-border",
      selectedTheme.buttonActive,
    );
    documentObject.style.setProperty(
      "--color-card-primary",
      selectedTheme.buttonBorder,
    );
    documentObject.style.setProperty(
      "--color-card-primary",
      selectedTheme.cardPrimary,
    );
    documentObject.style.setProperty(
      "--color-card-border",
      selectedTheme.cardBorder,
    );
  }
  return (
    <>
      <nav
        className={twMerge(
          "flex h-[10vh] w-full items-center justify-between bg-[rgba(11,11,11,.25)] px-4 md:px-8",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          <img src={nameLogo} alt="Logo" className="md:h-6" />
        </div>

        <span className="flex items-center justify-center">
          <span
            className={
              themeSelectMenuVisible
                ? "absolute mt-40 mr-48 flex flex-col gap-2 rounded-lg bg-[#2c2c2c] p-1 lg:mt-40 lg:mr-58 border-solid border-[1px] border-[#68676b]"
                : "hidden"
            }
          >
            {colorVarients.map((color) => {
              const selectedTheme = themeVarients[color];
              return (
                <button
                  className="flex items-center justify-between gap-3 rounded-md bg-[#2c2c2c] p-1 text-(--color-font-primary) active:bg-[#c9c9c9]"
                  onClick={() => {
                    changeThemeColor(color);
                  }}
                >
                  <p>{color}</p>
                  <div className="flex items-start justify-center">
                    <div
                      style={{
                        backgroundColor: selectedTheme.primaryBackground,
                      }}
                      className={`rounded-full border-[1px] border-solid border-white p-[8px]`}
                    ></div>
                    <div
                      style={{ backgroundColor: selectedTheme.primaryFont }}
                      className={`ml-[-5px] rounded-full border-[1px] border-solid border-white p-[8px]`}
                    ></div>
                    <div
                      style={{ backgroundColor: selectedTheme.cardBorder }}
                      className={`ml-[-5px] rounded-full border-[1px] border-solid border-white p-[8px]`}
                    ></div>
                  </div>
                </button>
              );
            })}
          </span>
          <button
            className="mr-2 rounded-full border-solid bg-white p-3"
            onClick={() => {
              setThemeSelectMenuVisible((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
          <a
            href="mailto:shreyprajapati13@gmail.com"
            title="Send Mail"
            rel="noreferrer"
          >
            <img src={mailLogo} alt="Mail" className="md:size-16 lg:size-12" />
          </a>
        </span>
      </nav>
      {/* <span className="h-1 w-[100%] lg:border-b lg:border-solid lg:border-[#d9d9d9]"></span> */}
    </>
  );
}
