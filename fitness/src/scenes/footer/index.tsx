import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/HomePageGraphic.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-[150px]" />
          <p className="my-5">
            At Megan's Gym, we are committed to helping you meet your fitness
            goals. From personalized workout plans to state-of-the-art
            facilities, we provide everything you need to stay fit and healthy.
          </p>
          <p>© Megan's Gym. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-5 text-lg">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            <a
              href="https://maps.google.com/?q=221b+Baker+St,+Marylebone,+London+NW1+6XE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-duration-500 hover:text-primary-500"
            >
              221b Baker St, Marylebone, London NW1 6XE
            </a>
          </p>
          <p>
            <a
              href="tel:02072243688"
              className="transition-duration-500 hover:text-primary-500"
            >
              020 7224 3688
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
