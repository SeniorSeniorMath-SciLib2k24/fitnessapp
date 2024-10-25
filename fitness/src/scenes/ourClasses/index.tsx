import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.webp";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.webp";
import image4 from "@/assets/image4.webp";
import image5 from "@/assets/image5.webp";
import image6 from "@/assets/image6.webp";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle mass with our weight training classes. These classes will help you get stronger and leaner.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve your flexibility and strength with our yoga classes. Our yoga classes are suitable for all levels.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Get a stronger core with our ab core classes. These classes will help you tone your abs and improve your posture.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Get out of your comfort zone with our adventure classes. These classes will help you build strength and endurance.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Improve your overall fitness with our fitness classes. These classes will help you get stronger and leaner.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Get stronger and fitter with our training classes. These classes will help you get stronger and leaner.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              {" "}
              At Megan's Gym, we offer a variety of fitness classes designed for
              all fitness levels. Whether you're aiming to build strength,
              increase flexibility, or improve your overall endurance, our
              expert trainers have a class for you. From high-intensity cardio
              and strength training to calming yoga and Pilates, our group
              sessions will keep you motivated and engaged. Join us and be part
              of a supportive fitness community dedicated to helping you achieve
              your goals.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => {
              return (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ourClasses;
