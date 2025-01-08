import React from "react";
import Navbar from "../Navbar/Navbar";
import "../../app/globals.css";
import { useNav } from "../../components/Navbar/NavContext";

const PrivacyPolicy: React.FC = () => {
  const { isOpen } = useNav();

  return (
    <div
      className={`w-full flex justify-center transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="content-container w-11/12 sm:w-8/12 md:w-9/12 lg:w-4/5 p-8 rounded-lg mt-10">
        <h1 className="text-4xl purpleText font-bold mb-6 text-left">
          Privacy Policy
        </h1>
        <p className="textFont mb-4 text-left">
          Your privacy is important to us. It is CUSEC's policy to respect your
          privacy regarding any information we may collect from you across our
          website,
          <a href="https://2024.cusec.net" className="hover:underline">
            {" "}
            https://2025.cusec.net
          </a>
          , and other sites we own and operate.
        </p>

        <p className="textFont mb-4 text-left">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>

        <p className="textFont mb-4 text-left">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use, or
          modification.
        </p>

        <p className="textFont mb-4 text-left">
          We don’t share any personally identifying information publicly or with
          third parties, except when required by law. Our website may link to
          external sites that are not operated by us. Please be aware that we
          have no control over the content and practices of these sites, and
          cannot accept responsibility or liability for their respective privacy
          policies.
        </p>

        <p className="textFont mb-4 text-left">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services. Your continued use of our website will be
          regarded as acceptance of our practices around privacy and personal
          information.
        </p>

        <p className="textFont mb-4 text-left">
          If you have any questions about how we handle user data and personal
          information, feel free to contact us.
        </p>

        <p className="textFont mt-8 text-left">
          This policy is effective as of 15 September 2020.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
