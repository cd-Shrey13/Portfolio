import Image from "../assets/profile-pic (2).png";
export default function About() {
  return (
    <>
      <section className="h-[100vh] w-full bg-[#181818] flex flex-col items-center justify-start py-[2rem]">
        <span className="flex flex-col justify-center items-start mt-[2rem]">
          <p className="text-white font-Cascadia text-[28px]">
            Hello,
            <br />
            My self
          </p>

          <span>
            <h1 className="heading font-Poppins font-[800] text-[2.5rem] leading-[2.8rem] bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-transparent">
              Shrey Prajapati
            </h1>
            <svg
              className="star relative top-[-5rem] right-[-20rem] size-[2rem]"
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
              width="294"
              height="9"
              viewBox="0 0 294 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative bottom-[1.5rem] left-[1rem]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M292.109 5.34422C234.2 0.634599 175.311 3.23955 117.255 2.39158C78.8658 1.82423 40.4737 0.457678 2.11221 0.000136838C0.962076 -0.0120643 0.0161615 0.793184 0.000187416 1.80587C-0.0150922 2.81856 0.90584 3.64826 2.05528 3.66046C40.4126 4.118 78.8005 5.48455 117.186 6.0519C175.137 6.89988 233.915 4.28881 291.72 8.99233C292.866 9.08384 293.88 8.3457 293.991 7.33911C294.096 6.33252 293.248 5.44183 292.109 5.34422Z"
                fill="#7700FF"
              />
            </svg>
          </span>
        </span>
        <div>
          <img src={Image} alt="Picture" className="size-52" />
        </div>
        <ul>
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
        </ul>
      </section>
    </>
  );
}
