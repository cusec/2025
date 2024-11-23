import FAQItem from "./FAQItem";
import { useNav } from "../Navbar/NavContext";

const FAQ = () => {
  const { isOpen } = useNav();

  return (
    <div
      id="faq"
      className={`flex flex-col items-center w-full py-8 px-4 transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#FFFFFF", 
      }}
    >
      {/* FAQ Container */}
      <div
        className="rounded-xl p-6 w-full max-w-3xl "
      >
        <h2 className="text-5xl font-bold purpleText text-center mb-6">FAQ</h2>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FAQItem
            question="When and where is CUSEC 2025 happening?"
            answer={
              <>
                CUSEC 2025 will be held in Montreal from January 9th to 11th,
                2025 at:
                <br />
                <strong>Le Centre Sheraton Montreal Hotel</strong>
                <br />
                1201 René-Lévesque Blvd W, Montreal, Quebec H3B 2L7
              </>
            }
          />
          <FAQItem
            question="Where can I find the conference schedule, speakers, and sponsors?"
            answer={
              <>
                The schedule will be available on the website soon, along with
                our list of speakers and sponsors! We are working to create the
                best conference experience for you, we promise.
              </>
            }
          />
          <FAQItem
            question="Who can attend? Are there any costs?"
            answer={
              <>
                High school, undergraduate, and graduate students from all
                across Canada are welcome to attend.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>Student Ticket</strong>: $80 CAD - For students
                    still registered as of January 2024.
                  </li>
                  <li>
                    <strong>Professional Ticket</strong>: $200 CAD - For
                    professionals or students who have graduated by January
                    2024.
                  </li>
                </ul>
                <p className="mt-2">
                  Tickets do not include travel or accommodation costs. Check
                  the Pricing Plans section for more details on ticket benefits.
                </p>
              </>
            }
          />
          <FAQItem
            question="How can I get a ticket?"
            answer={
              <>
                <strong>Pre-sale</strong> for schools with a Head Delegate
                starts on October 23 at 12:00am ET and closes on November 6 at
                11:59pm ET (or until tickets are sold out). Speak with your Head
                Delegate about potential pre-purchased tickets for your school.
                <br />
                <br />
                <strong>General Admission</strong> opens on November 12 at
                5:00pm ET and remains open until tickets are sold out.
              </>
            }
          />
          <FAQItem
            question="Where should I book my hotel room? How much does it cost?"
            answer={
              <>
                We’ve partnered with Le Centre Sheraton to provide a discounted
                rate of <strong>$203 CAD</strong> per room per night for up to
                two adults. Additional adults can be added for{" "}
                <strong>$10 per night per person</strong>.
                <br />
                <br />
                Book soon to secure your rate. Contact us with any questions.
              </>
            }
          />
          <FAQItem
            question="Can I get a refund or resell my ticket?"
            answer={
              <>
                Reselling a CUSEC ticket above the purchased price is
                prohibited.
                <br />
                Refunds are available up to{" "}
                <strong>30 days after purchase</strong> or until December 27,
                2024, at 23:00 ET, whichever is earlier.
                <br />
                <br />
                If you cannot attend, please email{" "}
                <strong>info@cusec.net</strong> and CC your Head Delegate if
                applicable. We will do our best to assist you.
              </>
            }
          />
          <FAQItem
            question="Will meals be provided during our stay?"
            answer={
              <>
                Refreshments will be available for delegates. While meals are
                not provided, there are numerous nearby dining options to
                explore Montreal's culinary scene!
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
