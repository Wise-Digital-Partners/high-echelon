import React, { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import "../../sass/global.scss"

export default function Example() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    

    return (
            <Fragment>
                <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0  w-11/12 text-left">What expenses can I deduct through my business?</p>
                    </AccordionHeader>
                    <AccordionBody>
                        <ul>
                            <p>The most commonly deducted business expenses are:</p>
                            <li>Salaries and employee benefits</li>
                            <li>Office expenses and supplies</li>
                            <li>Advertising</li>
                            <li>Rent or mortgage</li>
                            <li>Rent or mortgage</li>
                            <li>Business insurance</li>
                            <li>Taxes</li>
                            <li>Depreciation</li>
                            <li>Utilities</li>
                            <li>Loan interest payments</li>
                            <li>Repairs and maintenance</li>
                            <li>Professional services (legal, accounting, etc.)</li>
                            <li>Professional subscriptions</li>
                        </ul>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left">
                            How do I know whether I need to make estimated tax payments throughout the year?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="mb-0">
                        Most tax-paying citizens fulfill the estimated tax payment requirement
                        through the federal and state withholdings that are withheld via payroll. 

                        However, you're not on someone else's payroll when you're self-employed.
                        The rule is that if you expect to owe more than $1,000 in taxes (earning
                        roughly $5,000 in self-employment income), you're required to pay estimated taxes.

                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left">
                            When should an LLC become an Scorp?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="mb-0">
                            Tax advisors will tell you it's wise to convert an LLC into an S corp
                            when the self-employment tax exceeds the tax burden the S corp faces.
                            In general, if your business has around $40,000 of net income, you should consider converting to an S corp.
                        </p>
                    </AccordionBody>
                </Accordion>
            </Fragment>
    );
}