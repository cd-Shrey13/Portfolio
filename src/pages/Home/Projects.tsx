import Button from "../../components/Button";
import Card from "../../components/ProjectCard";
import {
  tileMasterMockUpImage,
  netflixMockupIllustration,
  weatherAppMockup,
} from "../../assets/asset";

type projectDetail = {
  title: string;
  image: string;
  url: string;
};

const projectDetails: projectDetail[] = [
  {
    title: "Tile Maste Game",
    image: tileMasterMockUpImage,
    url: "https://cd-shrey13.github.io/Tile-Master/",
  },
  {
    title: "Netflix Landing-page clone",
    image: netflixMockupIllustration,
    url: "https://cd-shrey13.github.io/Netflix-Landing-Page/",
  },
  {
    title: "Weather App",
    image: weatherAppMockup,
    url: "https://cd-shrey13.github.io/Weather-App/",
  },
];
export default function Projects() {
  return (
    <>
      <section className="project animate w-full items-center justify-center bg-[var(--color-black-background)] p-4 md:mt-12 md:px-8 lg:flex">
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-4 lg:gap-6">
          <div className="project_animate flex w-full items-center justify-between">
            <h1 className="name bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-2xl font-[800] text-transparent md:text-5xl md:md:leading-[5.5rem] lg:font-[600]">
              Projects
            </h1>
            <Button className="">View All</Button>
          </div>

          <span className="horizontal_wraper item-center flex w-full justify-center">
            <span className="horizontal_container grid w-full grid-flow-col grid-rows-1 gap-4 overflow-x-scroll md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 lg:grid-rows-1">
             {projectDetails.map(({title, image, url}, index) => {
               return(
                <Card
                key={index}
                image={image}
                title={title}
                url={url}
              />
               )
             }) }
             
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
