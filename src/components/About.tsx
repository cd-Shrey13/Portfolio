import { useGSAP } from "@gsap/react";
import Image from "../assets/profile-pic (2).png";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

export default function About() {
  useGSAP(() => {
    gsap.to("#name", {
      // display: 'none',
      // opacity: 0,
      duration: 1,
      // ease: 'bounce.in',
      text: "Shrey Prajapati",
      scrollTrigger: {
        trigger: ".about",
        start: "top 15%",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <>
      <section className="about z-[9999] horizonal-scroll_section h-[100vh] w-[100vw] bg-[#181818] flex flex-col items-center justify-start  gap-6 pt-[4rem]">
        <span className="w-[28rem]  flex justify-start  flex-col pl-8">
          <span className="flex flex-col justify-center items-start z-10 mt-[3rem] ml-5">
            <p className="text-white font-Cascadia text-[28px]">
              Hello,
              <br />
              My self
            </p>
          </span>

          <span className="flex items-center justify-start mt-6">
            <svg
              width="19"
              height="45"
              viewBox="0 0 19 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[3rem] md:size-[6rem]"
            >
              <path
                d="M14.125 44.0156C9.03906 44.0156 5.14844 40.7578 6.10938 35.3438C6.57812 32.6484 8.03125 30.2109 8.03125 27.4688C8.03125 25.0078 3.34375 24.3047 0.765625 24.3047V20.6016C3.25 20.6016 8.03125 19.3125 8.03125 17.0156C8.03125 14.1562 6.57812 11.8359 6.10938 9.14062C5.17188 3.9375 9.03906 0.890625 14.125 0.890625C15.9531 0.890625 17.0781 1.07812 18.1094 1.35938L17.5469 5.4375C16.4453 5.29688 15.4141 5.20312 14.5469 5.20312C12.3203 5.20312 10.7031 6.65625 11.125 9.14062C11.5938 11.9062 13.1406 14.2031 13.1406 16.9219C13.1406 20.1562 10.5156 21.9844 6.0625 22.0547V22.8516C10.5156 22.9219 13.1406 24.7031 13.1406 27.5625C13.1406 30.3984 11.5938 32.6953 11.125 35.3438C10.6328 38.1094 12.3203 39.7031 14.5469 39.7031C15.4141 39.7031 16.4453 39.6094 17.5469 39.4688L18.1094 43.5469C17.0781 43.8281 15.9531 44.0156 14.125 44.0156Z"
                fill="white"
              />
            </svg>
            <h1
              id="name"
              className="name font-Poppins font-[800] text-[1.9rem] leading-[2.8rem] bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-transparent text-nowrap"
            >
              ...
            </h1>

            <svg
              width="18"
              height="45"
              viewBox="0 0 18 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[3rem] md:size-[6rem]"
            >
              <path
                d="M4 44.0156C2.17188 44.0156 1.04688 43.8281 0.015625 43.5469L0.578125 39.4688C1.67969 39.6094 2.71094 39.7031 3.57812 39.7031C5.80469 39.7031 7.49219 38.1094 7 35.3438C6.53125 32.6953 4.98438 30.3984 4.98438 27.5625C4.98438 24.7031 7.60938 22.9219 12.0625 22.8516V22.0547C7.60938 21.9844 4.98438 20.1562 4.98438 16.9219C4.98438 14.2031 6.53125 11.9062 7 9.14062C7.42188 6.65625 5.80469 5.20312 3.57812 5.20312C2.71094 5.20312 1.67969 5.29688 0.578125 5.4375L0.015625 1.35938C1.04688 1.07812 2.17188 0.890625 4 0.890625C9.08594 0.890625 12.9531 3.9375 12.0156 9.14062C11.5469 11.8359 10.0938 14.1562 10.0938 17.0156C10.0938 19.3125 14.875 20.6016 17.3594 20.6016V24.3047C14.7812 24.3047 10.0938 25.0078 10.0938 27.4688C10.0938 30.2109 11.5469 32.6484 12.0156 35.3438C12.9766 40.7578 9.08594 44.0156 4 44.0156Z"
                fill="white"
              />
            </svg>
          </span>
        </span>
        <div className="z-10">
          <img src={Image} alt="Picture" className="size-52" />
        </div>
        <p >
          I’m a student currently pursuing my bachlor's degree in Computer Science from LD College of
          Engineering (LDCE), with a solid background in creating responsive and
          efficient web applications. My expertise centers around the MERN
          stack, and I’m skilled in developing applications that are both
          high-performing and user-friendly.
        </p>
        {/* <ul>
          <li>
            <p className="text-white font-Cascadia text-[12px] max-w-[50ch]">
              I am pursuing bachelors degree in computer science from{" "}
              <strong>L.D. College of Engineering</strong>.
            </p>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </section>
    </>
  );
}
