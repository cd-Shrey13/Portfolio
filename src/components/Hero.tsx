import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(Draggable);

export default function Hero() {
  useEffect(() => {
    Draggable.create(".orange_star");
    Draggable.create(".yellow_star");
    Draggable.create(".green_star");

    gsap.fromTo(
      ".orange_star",
      { opacity: 0, delay: 4 },
      {
        opacity: 1,
        duration: 1.7,
        rotate: "360deg",
        delay: 0.5,
        repeat: -1,
        ease: "power4.out",
        yoyo: true,

      }
    );

    gsap.fromTo(
      ".yellow_star",
      { opacity: 0, delay: 4 },
      {
        opacity: 1,
        duration: 1.5,
        rotate: "360deg",
        delay: 1,
        repeat: -1,
        ease: "power4.out",
        yoyo: true,

      }
    );

    gsap.fromTo(
      ".green_star",
      { opacity: 0, delay: 4 },
      {
        opacity: 1,
        duration: 1.5,
        rotate: "360deg",
        delay: 1.5,
        ease: "power4.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <>
      <section className="h-[90vh] text-center w-full bg-background-texture flex items-center justify-center">
        <div className="flex flex-col items-center justify-evenly">
          <svg
            className="orange_star relative top-[10rem] left-[-10rem] size-[4rem]"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6671 0C26.0441 13.6552 37.0251 24.6362 50.6804 25.0133C37.0251 25.3903 26.0441 36.3713 25.6671 50.0266C25.29 36.3713 14.309 25.3903 0.653809 25.0133C14.309 24.6362 25.29 13.6552 25.6671 0Z"
              fill="#F2711A"
            />
          </svg>
          <svg
            className="yellow_star relative top-[19rem] right-[-3rem] size-[3rem]"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6671 0C26.0441 13.6552 37.0251 24.6362 50.6804 25.0133C37.0251 25.3903 26.0441 36.3713 25.6671 50.0266C25.29 36.3713 14.309 25.3903 0.653809 25.0133C14.309 24.6362 25.29 13.6552 25.6671 0Z"
              fill="#FFE02E"
            />
          </svg>
          <svg
            className="green_star relative right-[-10rem] top-[6rem] size-[2rem]"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6671 0C26.0441 13.6552 37.0251 24.6362 50.6804 25.0133C37.0251 25.3903 26.0441 36.3713 25.6671 50.0266C25.29 36.3713 14.309 25.3903 0.653809 25.0133C14.309 24.6362 25.29 13.6552 25.6671 0Z"
              fill="#00FF88"
            />
          </svg>

          <p className="text-white font-Cascadia text-[28px]">I am a</p>
          <h1 className="heading font-Poppins font-[800] text-[2.5rem] leading-[2.8rem] bg-clip-text bg-gradient-to-b from-[#9945F9] to-[#ffffff] text-transparent">
            Full Stack
            <br />
            Web Developer
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              type="button"
              className="bg-[#FEECEC] rounded-[12px] px-8 py-2 flex items-center justify-center text-black font-Cascadia font-[500]"
            >
              Contact
            </button>
            <button
              type="button"
              className="bg-[#FEECEC] rounded-[12px] px-6 py-2 flex items-center justify-center text-black font-Cascadia font-[500]"
            >
              Know More
            </button>
          </div>
          <svg
            className="relative bottom-[-2rem] left-[-9rem]"
            width="217"
            height="68"
            viewBox="0 0 217 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M125.782 46.4898C149.782 44.7842 174.891 38.9846 194.801 25.0313C202.046 19.955 207.774 13.6463 213.695 7.2365C214.111 6.78763 214.09 6.10735 213.648 5.7192C213.203 5.33259 212.504 5.38444 212.087 5.83722C206.28 12.1224 200.676 18.3232 193.571 23.3013C173.944 37.0567 149.166 42.7065 125.513 44.3586L125.475 44.0061C125.066 40.1781 121.558 36.3605 116.499 33.1916C109.248 28.6481 98.8741 25.3352 91.0223 24.795C87.4939 24.553 84.4545 24.8833 82.3625 25.8376C80.7309 26.5807 79.6232 27.6985 79.1401 29.1755C78.1126 32.3235 80.0987 35.4216 84.0164 38.0323C92.2083 43.4948 108.761 47.1844 116.386 46.9603C118.767 46.8895 121.168 46.7836 123.581 46.6347C123.671 47.3052 123.757 47.9624 123.811 48.6063C123.959 50.4418 123.839 52.1984 122.679 54.0573C120.868 56.9526 117.88 59.0789 114.475 60.6838C109.16 63.1848 102.822 64.3987 98.0123 65.0565C71.2246 68.7181 51.0184 59.1127 35.6401 46.4881C20.1117 33.7358 9.47303 17.9072 1.95427 9.3257C1.56847 8.8835 0.873955 8.85119 0.40277 9.24869C-0.0684162 9.64619 -0.136099 10.328 0.252224 10.7687C7.81876 19.4061 18.5439 35.326 34.1778 48.1614C49.9616 61.1246 70.7198 70.947 98.2177 67.1905C103.228 66.5057 109.823 65.2209 115.357 62.616C119.187 60.8112 122.51 58.3738 124.547 55.1152C126.375 52.1902 126.165 49.4872 125.782 46.4898ZM123.3 44.5009L123.282 44.3251C122.925 40.9788 119.673 37.7908 115.248 35.0205C108.281 30.6545 98.3148 27.4632 90.7656 26.945C88.1775 26.7657 85.8864 26.8996 84.1276 27.4389C82.6774 27.8855 81.6136 28.5941 81.2407 29.7425C80.8834 30.8259 81.1187 31.8761 81.7478 32.883C82.4844 34.0666 83.7331 35.1808 85.3147 36.2365C93.187 41.4846 109.094 45.024 116.421 44.8079C118.696 44.7391 120.991 44.6391 123.3 44.5009Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M214.414 2.95667C214.567 3.39622 214.586 4.05526 214.597 4.7645C214.625 6.45381 214.393 8.41223 214.322 9.33797C214.277 9.93367 214.736 10.4267 215.342 10.4441C215.95 10.4598 216.479 9.9918 216.523 9.3961C216.608 8.26209 216.912 5.6518 216.762 3.73285C216.681 2.70361 216.444 1.85019 216.081 1.3549C215.465 0.510304 214.385 0.404875 212.934 1.33227C211.219 2.43035 208.491 5.22241 205.18 5.87125C204.58 5.98781 204.166 6.55948 204.261 7.13961C204.354 7.72364 204.917 8.10062 205.52 7.98253C208.676 7.36236 211.406 5.07871 213.314 3.65756C213.677 3.38794 214.138 3.11455 214.414 2.95667Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
