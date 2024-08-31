import techIcons from "../../assets/TechIcon";

export default function Techstack() {
  return (
    <>
      <section className="lg:mb-36 mt-8 animate flex  w-full items-center justify-evenly bg-[var(--color-black-background)] md:mt-4">
        <div className="grid-row-2 grid  w-full grid-cols-4 gap-8 px-6 py-4 lg:flex  items-center justify-center">
          <span>
            <img className="size-16 md:size-24 lg:size-16" src={techIcons.mongoDbIcon} alt="Image" title='Mongo DB'/>
          </span>

          <span>
            <img className="size-16 md:size-24 lg:size-16" src={techIcons.expressIcon} alt="Image" title='Express.js'/>
          </span>

          <span>
            <img className="size-16 md:size-24 lg:size-16" src={techIcons.reactIcon} alt="Image" title='React.js'/>
          </span>

          <span>
            <img className="size-16 md:size-24 lg:size-16" src={techIcons.nodeIcon} alt="Image" title='Node.js'/>
          </span>

          <span className="col-start-2">
            <img className="size-16 md:size-24 lg:size-16" src={techIcons.typescriptIcon} alt="Image" title='TypeScript'/>
          </span>

          <span title='Tailwind'>
            <img className="size-16 md:size-24 lg:size-16" src={techIcons.tailwindIcon} alt="Image" />
          </span>
        </div>
      </section>
    </>
  );
}
