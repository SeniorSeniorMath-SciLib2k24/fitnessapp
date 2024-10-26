import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Workouts = ({ setSelectedPage }: Props) => {
  return (
    <section id="workouts" className="w-full bg-primary-100 pt-40">
      <motion.iframe
        src="https://comp491-todolist.netlify.app/"
        title="Workouts"
        className="w-full"
        width="100%"
        height="900px"
        onViewportEnter={() => setSelectedPage(SelectedPage.Workouts)}
        style={{ border: "none", overflow: "hidden" }}
      ></motion.iframe>
    </section>
  );
};

export default Workouts;
