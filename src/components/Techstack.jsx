import {
  mongoDbIcon,
  expressIcon,
  reactIcon,
  nodeIcon,
  javascriptIcon,
  tailwindIcon,
} from "../assets/asset";
import Card from "./Card";

export default function Techstack() {
  const skills = {
    "Computer Science": [
      "Data Structures and Algorithm",
      "Object Oriented Programming",
      "Software Engineering",
      "Database Management System",
    ],
    "Programming Languages": ["C", "Java", "javaScipt"],
    "Framework and Libraries": [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Spring MVC",
    ],
    "Tools and Technlogies": ["Git & Github", "Postman", "MySQL", "MongoDB"],
  };
  return (
    <>
      <section className="about py-8 w-full flex-col items-center justify-center gap-8 ">
        <div className="flex flex-col items-center justify-center gap-8 p-4">
          <h2 className="text-center text-4xl font-bold text-(--color-heading-primary)">
            <span class="underline decoration-(--color-highlight) decoration-8 underline-offset-3 ">
              Technical Skills
            </span>
          </h2>

          <div className="flex gap-4 flex-col md:grid grid-cols-2 lg:grid-cols-3 md:w-11/12">
            {Object.keys(skills).map((obj, i) => {
              return (
                <Card className={"h-full w-full space-y-4"}>
                  <h3 class="text-2xl font-bold text-(--color-heading-secondary)">{obj}</h3>
                  <div>
                    <ul class="space-y-4 text-left text-(--color-font-primary)">
                      {skills[obj].map((technology, idx) => {
                        return (
                          <li class="flex items-center space-x-3 rtl:space-x-reverse" key={idx}>
                            <svg
                              class="h-3.5 w-3.5 shrink-0 text-green-500 dark:text-green-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 16 12"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5.917 5.724 10.5 15 1.5"
                              />
                            </svg>
                            <span>{technology}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
