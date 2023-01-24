import React, { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


export default function Example() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    

    return (
            <Fragment>
                <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                    <AccordionHeader className="text-xl subheader">
                    <p className="my-0  w-11/12 text-left text-xl">                How will your coaching and small business advisory services help my business?</p>
                    </AccordionHeader>
                    <AccordionBody>
                    <p>                Anything that gets measured improves. This applies to every aspect of your business. Even a mild amount of monthly attention to the ratios and measurements will make a huge difference.</p>
  
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                        What types of reports can I expect to see each month?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="">
                        It will depend on your focus and business model, but for most organizations:
                        </p>
                    <li className="text-base">Gross Profitability Report, showing where the primary cost drivers are</li>
                    <li className="text-base">Budget vs. Actual Performance</li>
                    <li className="text-base">Projected / Forecasted Revenue</li>
                            
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                        Can you also work with members of my team?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p>
                        Definitely! We can work with leaders in the following functional areas of your business - Production, Operations, Sales, Finance, and Accounting.
                        </p>

                    </AccordionBody>
                </Accordion>
            </Fragment>
    );
}