import Button from "../../components/Button";

export default function Projects() {
  return (
    <>
      <section className="animate mt-8 w-full bg-[var(--color-black-background)]">
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <span className="flex w-full items-center justify-between">
            <h1 className="name text-nowrap bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-[36px] font-[800] leading-[2.8rem] text-transparent">
              Projects
            </h1>

            <Button>View All</Button>
          </span>

          <span className="horizontal_wraper item-center flex w-full justify-center">
            <span className="horizontal_container border-2 border-solid border-black overflow-x-scroll grid grid-flow-col grid-rows-1 gap-4 w-[28rem]">
              <div className="horizontal_card h-[24rem] w-[21rem] bg-[var(--color-black-foreground)] rounded-[12px]">
                Hello from div
              </div>

              <div className="horizontal_card h-[24rem] w-[21rem] bg-[var(--color-black-foreground)] rounded-[12px]">
                Hello from div
              </div>

            </span>
          </span>
        </div>
      </section>
    </>
  );
}
