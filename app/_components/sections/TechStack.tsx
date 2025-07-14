import { SkillData } from "@/data/content/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TechStack = () => (
  <section
    id="tech-stack"
    className="flex flex-col justify-center font-clash min-h-[calc(100vh-var(--header-height))]"
  >
    <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 md:mb-8 xl:mb-12">
      Tech Stack
    </h2>
    <div
      className="
          grid grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          gap-x-5 xl:gap-x-10 gap-y-3 md:gap-y-5 lg:gap-y-6 xl:gap-y-8
        "
    >
      {Object.entries(SkillData).map(([category, stacks]) => (
        <div key={category}>
          <h3 className="text-xl xl:text-2xl font-medium mb-1 lg:mb-2 xl:mb-4">
            {category}
          </h3>
          <Accordion type="multiple">
            {stacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-base xl:text-lg">
                    <div className="flex items-center gap-3">
                      <Icon
                        className="size-4 md:size-5 xl:size-6"
                        style={{ color: stack.color }}
                      />
                      {stack.name}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="xl:text-base">
                    <div>
                      <ul className="list-disc pl-4 space-y-1">
                        {stack.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
