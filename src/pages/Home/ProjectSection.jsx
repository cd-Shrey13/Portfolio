import Button from "../../components/Button.jsx";
import Card from "../../components/ProjectCard.jsx";
import {
  tileMasterMockUpImage,
  netflixMockupIllustration,
  weatherAppMockup,
  spaceshipGameMockupImage,
  quickBiteMockupImage,
} from "../../assets/asset.js";
import { useNavigate } from "react-router-dom";

const projectDetails = [
  {
    title: "Tile Maste Game",
    image: tileMasterMockUpImage,
    url: "https://tilemaster.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Spaceship Game",
    image: spaceshipGameMockupImage,
    url: "https://spaceship-game-phi.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "QuickBite",
    image: quickBiteMockupImage,
    url: "https://quick-bite-henna-one.vercel.app/",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDb"],
  },
  {
    title: "Landing-page clone",
    image: netflixMockupIllustration,
    url: "https://cd-shrey13.github.io/Netflix-Landing-Page/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    image: weatherAppMockup,
    url: "https://cd-shrey13.github.io/Weather-App/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
export default function Projects() {
  let navigate = useNavigate();

  return (
    <>
      <section className="project animate w-full items-center justify-center p-4 md:mt-12 md:px-8 lg:flex">
        <div className="hide-scrollbar flex flex-col items-center justify-center gap-4 rounded-xl p-4 lg:gap-6">
          <div className="project_animate flex w-full items-center justify-between lg:justify-center">
            <h1 className="name font-Poppins text-2xl font-extrabold text-(--color-font-primary) md:text-5xl md:md:leading-22 lg:font-semibold">
              Projects
            </h1>
            <Button
              onClickHandler={() => navigate("/project")}
              className="border-[1px] border-solid border-(--color-button-border) bg-(--color-button-primary) text-(--color-font-primary) transition duration-300 ease-in-out hover:translate-y-1 hover:bg-(--color-button-hover) active:bg-(--color-button-active) lg:hidden"
            >
              View All
            </Button>
          </div>

          <span className="horizontal_wraper item-center hide-scrollbar flex w-full justify-center">
            <span className="horizontal_container grid grid-flow-col grid-rows-3 gap-4 overflow-x-hidden pb-2 md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {projectDetails.map(({ title, image, url, tags }, index) => {
                return (
                  <Card
                    key={index}
                    image={image}
                    title={title}
                    url={url}
                    tag={tags}
                  />
                );
              })}
            </span>
          </span>

          <Button
            onClickHandler={() => navigate("/project")}
            className="hidden border-[1px] border-solid border-(--color-button-border) bg-(--color-button-primary) text-(--color-font-primary) transition duration-300 ease-in-out hover:translate-y-1 hover:bg-(--color-button-hover) active:bg-(--color-button-active) lg:flex"
          >
            View All
          </Button>
        </div>
      </section>
    </>
  );
}
