import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "../../sass/global.scss";

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader className="text-xl subheader">
          <p className="my-0  w-11/12 text-left text-xl">
            How many days before payroll is due would the funds need to be
            available?
          </p>
        </AccordionHeader>
        <AccordionBody>
          <p>
            You’ll need to have the funds available two business days before
            payroll is due.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader className="text-xl subheader">
          <p className="my-0 w-11/12 text-left text-xl">
            When would I need to pay payroll taxes?
          </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-0">
            It depends on the frequency of payroll being run. The payroll
            management system provides substantial communications before taxes
            are due.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader className="text-xl subheader">
          <p className="my-0 w-11/12 text-left text-xl">
            Would I be able to pay contractors via direct deposit?
          </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-0">
            Yes. You can pay contractors via direct deposit within the online
            payroll management system.
          </p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
