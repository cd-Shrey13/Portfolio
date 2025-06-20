import { arrowImage } from "../assets/asset";
export default function Card({ image, title, url }) {
  const technologies = ["HTML", "CSS", "JavaScript"];
  return (
    <>
      <div className="project_animate horizontal_card flex min-h-80 w-[80vw] flex-col justify-between gap-4 rounded-[12px] bg-[#0f0c29] p-4 shadow-2xl transition-all md:w-full lg:w-[300px] lg:hover:-translate-y-1">
        <div className=" flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={image}
            alt="Image"
            className="transition-transform duration-300 hover:scale-[1.2]"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="flex flex-col items-start justify-between">
            <h3 className="font-Poppins flex text-xl font-bold text-white mb-2">
              {title}
            </h3>
            <div className="flex items-center justify-start gap-1 mb-2">
              {technologies.map((technology) => {
                return (
                  <span className="font-Inter rounded-lg border-1 border-[#645cc6] bg-[#302b63] px-[.8rem] py-[.2rem] text-[.75rem] font-bold shadow-2xl hover:cursor-pointer hover:bg-purple-300">
                    {technology}
                  </span>
                );
              })}
            </div>
            <p className="text-[#c9c9c9]">Website</p>
          </span>
          <span>
            <a
              href={url}
              className="flex items-center justify-center rounded-full p-2 transition-all duration-100 ease-out hover:bg-(--color-button-hover) "
            >
              <img src={arrowImage} alt="image" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
