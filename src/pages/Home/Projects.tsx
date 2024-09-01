import Button from "../../components/Button";
import tileMasterMockUpImage from "../../assets/Group 16.png";
import quickBiteMockupImage from '../../assets/QuickbytesMockup.png'

export default function Projects() {
  
  return (
    <>
      <section className="animate bg-[var(--color-black-background) mt-8 w-full items-center justify-center p-4 md:mt-12 md:px-8 lg:mb-36 lg:flex">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="flex w-full items-center justify-between">
            <h1 className="name bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-2xl font-[800] text-transparent md:text-5xl md:md:leading-[5.5rem]">
              Projects
            </h1>

            <Button>View All</Button>
          </span>

          <span className="horizontal_wraper item-center flex w-full justify-center">
            <span className="horizontal_container grid w-full grid-flow-col grid-rows-1 gap-4 overflow-x-scroll md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 lg:grid-rows-1">
              <Card image={tileMasterMockUpImage} title='Tile Master Game'/>
              <Card image={quickBiteMockupImage} title='QuickBite'/>
            </span>
          </span>
        </div>
      </section>
    </>
  );
}

function Card({image, title, url}:{image:string, title:string, url?:string}) {
  return (
    <>
      <div className="horizontal_card flex h-[24rem] w-[92vw] flex-col gap-4 rounded-[12px] bg-[var(--color-black-foreground)] p-4 md:w-full lg:w-[300px]">
        <div className="fit- flex h-56 items-center justify-center overflow-hidden rounded-xl">
          <img
            src={image}
            alt="Image"
            className=" transition-transform duration-700 hover:scale-[1.2] hover:blur-[1px] "
          />
        </div>
        <span className="flex">
          <h1 className="flex font-Poppins text-xl font-bold text-white">
            {title}{url}
          </h1>
        </span>
      </div>
    </>
  );
}
