import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Workouts = ({ setSelectedPage }: Props) => {
  const [iframeHeight, setIframeHeight] = useState<number>(800);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const adjustIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      const newHeight =
        iframe.contentWindow.document.documentElement.scrollHeight;
      setIframeHeight(newHeight + 300);
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Adjust height on iframe load
    iframe.addEventListener("load", adjustIframeHeight);

    // Observer to handle content changes in iframe
    const observer = new MutationObserver(adjustIframeHeight);
    if (iframe.contentDocument) {
      observer.observe(iframe.contentDocument, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      iframe.removeEventListener("load", adjustIframeHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="workouts" className="w-full bg-primary-100 pt-40">
      <motion.iframe
        ref={iframeRef}
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
