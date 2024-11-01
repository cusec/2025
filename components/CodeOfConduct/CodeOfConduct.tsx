import React from "react";
import Navbar from "../Navbar";
import "../../app/globals.css";

const CodeOfConduct: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="content-container w-11/12 sm:w-8/12 md:w-9/12 lg:w-4/5 p-8 rounded-lg mt-10">
        <h1 className="text-4xl purpleText font-bold mb-6 text-left">
          Code of Conduct
        </h1>
        <p className="textFont mb-4 text-left">
          All participants of CUSEC are expected to abide by our Code of
          Conduct, both online and during in-person events that are hosted
          and/or associated with CUSEC.
        </p>

        <h2 className="text-3xl lightPurpleText font-bold mt-8 mb-4 text-left">
          The Pledge
        </h2>
        <p className="textFont mb-4 text-left">
          In the interest of fostering an open and welcoming environment, we
          pledge to make participation in our project and our community a
          harassment-free experience for everyone, regardless of age, body size,
          disability, ethnicity, gender identity and expression, level of
          experience, nationality, personal appearance, race, religion, or
          sexual identity and orientation.
        </p>

        <h2 className="text-3xl lightPurpleText font-bold mt-8 mb-4 text-left">
          The Standards
        </h2>
        <p className="textFont mb-4 text-left">
          Examples of behaviour that contribute to creating a positive
          environment include:
        </p>
        <ul className="list-disc pl-8 textFont text-left">
          <li>Using welcoming and inclusive language.</li>
          <li>Being respectful of differing viewpoints and experiences.</li>
          <li>Gracefully accepting constructive criticism.</li>
          <li>
            Referring to people by their preferred pronouns and using
            gender-neutral pronouns when uncertain.
          </li>
        </ul>

        <p className="textFont mt-6 mb-4 text-left">
          Examples of unacceptable behaviour by participants include:
        </p>
        <ul className="list-disc pl-8 textFont text-left">
          <li>
            Trolling, insulting/derogatory comments, public or private
            harassment.
          </li>
          <li>Publishing others' private information without permission.</li>
          <li>Not respecting reasonable communication boundaries.</li>
          <li>
            Using sexualized language or imagery, or unwelcome sexual attention.
          </li>
          <li>Swearing, strong or disturbing language.</li>
          <li>Displaying disturbing graphics or content.</li>
          <li>Starting/participating in arguments about politics.</li>
          <li>Promoting inequality of any kind.</li>
          <li>Drug promotion.</li>
          <li>Attacking personal tastes.</li>
          <li>Other conduct inappropriate in a professional setting.</li>
        </ul>

        <h2 className="text-3xl lightPurpleText font-bold mt-8 mb-4 text-left">
          Enforcement
        </h2>
        <p className="textFont mb-4 text-left">
          Violations of the Code of Conduct may be reported by sending an email
          to <strong>incidents@cusec.net</strong>. All reports will be reviewed
          and investigated, resulting in responses deemed appropriate. We
          reserve the right to remove comments or contributions not aligned with
          this Code of Conduct.
        </p>
        <p className="textFont mb-4 text-left">
          Conference staff are available to help participants contact
          hotel/venue security, local law enforcement, provide escorts, or
          assist those experiencing harassment.
        </p>

        <h2 className="text-3xl lightPurpleText font-bold mt-8 mb-4 text-left">
          Contact Information
        </h2>
        <p className="textFont mb-4 text-left">
          Email Address: <strong>incidents@cusec.net</strong>
          <br />
          Non-Emergency Local Law Enforcement (SPVM): +1-(514)-280-2222
          <br />
          Emergency: 911
        </p>
      </div>
    </div>
  );
};

export default CodeOfConduct;
