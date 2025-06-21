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
    url: "https://tilemaster.vercel.app/",
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
            <h1 className="name text-(--color-font-primary) font-Poppins  text-2xl font-extrabold  md:text-5xl md:md:leading-22 lg:font-semibold">
              Projects
            </h1>
            <Button className="text-(--color-font-primary) bg-(--color-button-primary) hover:bg-(--color-button-hover) active:bg-(--color-button-active) border-solid border-[1px] border-(--color-button-border) transition duration-300 ease-in-out transform hover:translate-y-1">View All</Button>
          </div>

          <span className="horizontal_wraper item-center hide-scrollbar flex w-full justify-center">
            <span className="horizontal_container grid grid-flow-col grid-rows-3 gap-4 overflow-x-hidden md:grid-cols-2 md:grid-rows-2 md:gap-8 ppb-8">
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
