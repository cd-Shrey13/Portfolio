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
}) {
  return (
    <>
      <div className="card horizontal_card flex min-h-[20rem] w-[80vw] flex-col justify-between gap-4 rounded-[12px] border-[.5px] border-solid border-[#c9c9c9] p-4 md:w-full lg:w-[300px]">
        <div className=" flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={image}
            alt="Image"
            className="transition-transform duration-700 hover:scale-[1.2]"
          />
        </div>
        <span className="flex items-center justify-between">
          <span>
            <h1 className="flex font-Poppins text-xl font-bold text-white">
              {title}
            </h1>
            <p className="text-[#c9c9c9]">Website</p>
          </span>

          <a
            href={url}
            className="flex items-center justify-center rounded-full border-2 border-solid border-[#c9c9c9] p-2"
          >
            <img src={arrowImage} alt="image" />
          </a>
        </span>
      </div>
    </>
  );
}
