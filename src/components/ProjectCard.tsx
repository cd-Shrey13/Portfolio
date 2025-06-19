import { arrowImage } from "../assets/asset";
export default function Card({
  image,
  title,
  url,
  
}: {
  image: string;
  title: string;
  url?: string;
  id?: string;
  className?: string
}) {
  return (
    <>
      <div className="project_animate horizontal_card flex min-h-80 w-[80vw] flex-col justify-between gap-4 rounded-[12px] border-[.5px] border-solid border-[#c9c9c9] p-4 transition-all md:w-full lg:w-[300px] lg:hover:-translate-y-1">
        <div className="fit- flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={image}
            alt="Image"
            className="transition-transform duration-300 hover:scale-[1.2]"
          />
        </div>
        <span className="flex items-center justify-between">
          <span>
            <h1 className="flex font-Poppins text-xl font-bold text-white">
              {title}
            </h1>
            <p className="text-[#c9c9c9]">Website</p>
          </span>
          <span>
            <a href={url} className="flex items-center justify-center rounded-full p-2 transition-all duration-100 ease-out hover:bg-(--color-blue-foreground)">
              <img src={arrowImage} alt="image" />
            </a>
          </span>
        </span>
      </div>
    </>
  );
}
