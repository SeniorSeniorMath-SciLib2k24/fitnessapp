import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Workouts = ({ setSelectedPage }: Props) => {
  const [iframeHeight, setIframeHeight] = useState<number>(500);

  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      // Ensure the message comes from the correct source
      if (event.origin !== "https://comp491-todolist.netlify.app") return;

      const { iframeHeight } = event.data;
      if (iframeHeight) {
        setIframeHeight(iframeHeight);
      }
    };

    window.addEventListener("message", handleIframeMessage);
    return () => window.removeEventListener("message", handleIframeMessage);
  }, []);

  return (
    <section id="workouts" className="w-full bg-primary-100 py-40">
      <motion.iframe
        src="https://comp491-todolist.netlify.app/"
        title="Workouts"
        className="w-full"
        width="100%"
        height={iframeHeight}
        onViewportEnter={() => setSelectedPage(SelectedPage.Workouts)}
        style={{ border: "none", overflow: "hidden" }}
      ></motion.iframe>
    </section>
  );
};

export default Workouts;
