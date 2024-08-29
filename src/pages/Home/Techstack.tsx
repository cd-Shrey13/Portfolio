import techIcons from "../../assets/TechIcon";

export default function Techstack() {
  return (
    <>
      <section className="mt-8 animate flex  w-full items-center justify-evenly bg-[var(--color-black-background)]">
        <div className="grid-row-2 grid  w-full grid-cols-4 gap-8 px-6 py-4">
          <span>
            <img className="size-16" src={techIcons.mongoDbIcon} alt="Image" />
          </span>

          <span>
            <img className="size-16" src={techIcons.expressIcon} alt="Image" />
          </span>

          <span>
            <img className="size-16" src={techIcons.reactIcon} alt="Image" />
          </span>

          <span>
            <img className="size-16" src={techIcons.nodeIcon} alt="Image" />
          </span>

          <span className="col-start-2">
            <img className="size-16" src={techIcons.typescriptIcon} alt="Image" />
          </span>

          <span>
            <img className="size-16" src={techIcons.tailwindIcon} alt="Image" />
          </span>
        </div>
      </section>
    </>
  );
}
