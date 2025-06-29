import { arrowImage } from "../assets/asset";
export default function Card({ image, title, url, tag }) {
  return (
    <>
      <div className="horizontal_card flex min-h-80 w-[80vw] flex-col justify-between gap-4 rounded-[12px] border-[1px] border-solid border-(--color-card-border) bg-(--color-card-primary) p-4 shadow-2xl transition-all md:w-full lg:w-[300px] lg:hover:-translate-y-1">
        <div className="flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={image}
            alt="Image"
            className="transition-transform duration-300 hover:scale-[1.2]"
          />
        </div>
        <div className="grid grid-cols-4 grid-rows-1">
          <span className="col-span-3 flex flex-col items-start justify-between">
            <h3 className="font-Poppins mb-2 flex text-xl font-bold text-white">
              {title}
            </h3>
            <div className="mb-2 flex flex-wrap items-center justify-start gap-1 wrap-normal">
              {tag.map((technology) => {
                return (
                  <span className="font-Inter rounded-md border-1 border-(--color-button-border) bg-(--color-button-primary) px-[.8rem] py-[.2rem] text-[.65rem] font-bold text-(--color-font-primary) shadow-2xl hover:cursor-pointer hover:bg-(--color-button-hover)">
                    {technology}
                  </span>
                );
              })}
            </div>
            <p className="text-(--color-font-primary)">Website</p>
          </span>
          <span className="flex items-end justify-end">
            <a
              href={url}
              className="flex size-8 items-center justify-center rounded-full border-[1px] border-solid border-(--color-button-border) p-2 transition-all duration-100 ease-out hover:bg-(--color-button-hover)"
            >
              <img src={arrowImage} alt="image" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
