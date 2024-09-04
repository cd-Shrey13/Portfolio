import Button from "../../components/Button";
import Card from "../../components/ProjectCard";
import {
  tileMasterMockUpImage,
  // quickBiteMockupImage,
  netflixMockupIllustration,
  weatherAppMockup,
} from "../../assets/asset";

type projectDetails = {
  title: string;
  image: string;
  URL: string;
};

const projectDetails: projectDetails[] = [
  {
    title: "Tile Master Game",
    image: tileMasterMockUpImage,
    URL: "https://cd-shrey13.github.io/Tile-Master/",
  },
  {
    title: "Netflix UI clone",
    image: netflixMockupIllustration,
    URL: "https://cd-shrey13.github.io/BHARATINTERN-Netflix-Landing-Page/",
  },
  {
    title: "Weather App",
    image: weatherAppMockup,
    URL: "https://cd-shrey13.github.io/BHARATINTERN-Weather_App/",
  },
];

export default function Projects() {
  return (
    <>
      <section className="animate mt-8 w-full items-center justify-center bg-[var(--color-black-background)] p-4 md:mt-12 md:px-8 lg:mb-36 lg:flex">
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-4 lg:gap-6">
          <div className="flex w-full items-center justify-between">
            <h1 className="name bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-2xl font-[800] text-transparent md:text-5xl md:md:leading-[5.5rem] lg:font-[600]">
              Projects
            </h1>
            <Button className="">View All</Button>
          </div>

          <span className="horizontal_wraper item-center flex w-full justify-center">
            <span className="horizontal_container grid w-full grid-flow-col grid-rows-1 gap-4 overflow-x-scroll md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 lg:grid-rows-1">
              {projectDetails.map((project, index) => {
                return (
                  <Card
                    title={project.title}
                    image={project.image}
                    url={project.URL}
                    key={index}
                  />
                );
              })}
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
