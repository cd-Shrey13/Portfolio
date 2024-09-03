import Button from "../../components/Button";
import CurleyBraces from "../../components/CurleyBraces";
import {
  tileMasterMockUpImage,
  quickBiteMockupImage,
} from "../../assets/asset";
import Card from "../../components/ProjectCard";
export default function Projects() {
  return (
    <>
      <section className="animate mt-8 w-full items-center justify-center bg-[var(--color-black-background)] p-4 md:mt-12 md:px-8 lg:mb-36 lg:flex">
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-4 lg:gap-6">
          <div className="flex w-full items-center justify-between">
            <h1 className="name bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-2xl font-[800] text-transparent md:text-5xl md:md:leading-[5.5rem] lg:font-[600]">
              Projects
            </h1>
            <CurleyBraces className="-ml-8 mt-0 hidden">Projects</CurleyBraces>

            <Button className="">View All</Button>
          </div>

          <span className="horizontal_wraper item-center flex w-full justify-center">
            <span className="horizontal_container grid w-full grid-flow-col grid-rows-1 gap-4 overflow-x-scroll md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 lg:grid-rows-1">
              <Card
                id="1"
                image={tileMasterMockUpImage}
                title="Tile Master Game"
              />
              <Card image={quickBiteMockupImage} title="QuickBite" />
              <Card image={tileMasterMockUpImage} title="Tile Master Game" />
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
