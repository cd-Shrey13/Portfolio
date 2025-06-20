import Button from "../../components/Button.jsx";
import Card from "../../components/ProjectCard.jsx";
import {
  tileMasterMockUpImage,
  netflixMockupIllustration,
  weatherAppMockup,
} from "../../assets/asset.js";

const projectDetails = [
  {
    title: "Tile Maste Game",
    image: tileMasterMockUpImage,
    url: "https://cd-shrey13.github.io/Tile-Master/",
  },
  {
    title: "Landing-page clone",
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
      <section className="project animate w-full items-center justify-center p-4 md:mt-12 md:px-8 lg:flex">
        <div className="hide-scrollbar flex flex-col items-center justify-center gap-4 rounded-xl p-4 lg:gap-6">
          <div className="project_animate flex w-full items-center justify-between">
            <h1 className="name font-Poppins bg-linear-to-b from-[#ffffff] to-[#ffffff] bg-clip-text text-2xl font-extrabold text-transparent md:text-5xl md:md:leading-22 lg:font-semibold">
              Projects
            </h1>
            <Button className="bg-(--color-button-primary) hover:bg-(--color-button-hover) transition duration-300 ease-in-out transform hover:translate-y-1">View All</Button>
          </div>

          <span className="horizontal_wraper item-center hide-scrollbar flex w-full justify-center">
            <span className="horizontal_container grid w-full grid-flow-col grid-rows-1 gap-4 overflow-x-hidden py-2 md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {projectDetails.map(({ title, image, url }, index) => {
                return (
                  <Card key={index} image={image} title={title} url={url} />
                );
              })}
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
