import {
  mongoDbIcon,
  expressIcon,
  reactIcon,
  nodeIcon,
  typescriptIcon,
  tailwindIcon,
} from "../assets/asset";

export default function Techstack() {
  return (
    <>
      <section className="about_animate mt-8 flex w-full items-center justify-evenly bg-[var(--color-black-background)] md:mt-4 ">
        <div className="grid-row-2 grid w-full grid-cols-4 items-center justify-center gap-8 px-6 py-4 lg:flex">
          <span>
            <img
              className="size-16 md:size-24 lg:size-16"
              src={mongoDbIcon}
              alt="Image"
              title="Mongo DB"
            />
          </span>

          <span>
            <img
              className="size-16 md:size-24 lg:size-16"
              src={expressIcon}
              alt="Image"
              title="Express.js"
            />
          </span>

          <span>
            <img
              className="size-16 md:size-24 lg:size-16"
              src={reactIcon}
              alt="Image"
              title="React.js"
            />
          </span>

          <span>
            <img
              className="size-16 md:size-24 lg:size-16"
              src={nodeIcon}
              alt="Image"
              title="Node.js"
            />
          </span>

          <span className="col-start-2">
            <img
              className="size-16 md:size-24 lg:size-16"
              src={typescriptIcon}
              alt="Image"
              title="TypeScript"
            />
          </span>

          <span title="Tailwind">
            <img
              className="size-16 md:size-24 lg:size-16"
              src={tailwindIcon}
              alt="Image"
            />
          </span>
        </div>
      </section>
    </>
  );
}
