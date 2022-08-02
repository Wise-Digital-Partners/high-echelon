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
                        <p className="my-0  w-11/12 text-left text-xl">What is classified as a business expense vs. what is personal?</p>
                    </AccordionHeader>
                    <AccordionBody>
                            <p>Business expenses are deductible. They can lower your taxable income and reduce the amount of tax you owe.</p>
                            <p>Understanding the difference between business and personal expenses is crucial for small business owners. 
                                The IRS doesn’t have a comprehensive list of all allowable business deductions. Instead, it offers the general
                                rule that any expense that is ordinary and necessary for running your business is deductible. If not, then it’s a personal expense.</p>
                            <p>Some of the most common business expenses include:</p>

                            <li className="text-base">Salaries and employee benefits</li>
                            <li className="text-base">Office expenses and supplies</li>
                            <li className="text-base">Advertising</li>
                            <li className="text-base">Rent or mortgage</li>
                            <li className="text-base">Business insurance</li>
                            <li className="text-base">Taxes</li>
                            <li className="text-base">Depreciation</li>
                            <li className="text-base">Utilities</li>
                            <li className="text-base">Loan interest payments</li>
                            <li className="text-base">Repairs and maintenance</li>
                            <li className="text-base">Professional services (legal, accounting, etc.)</li>
                            <li className="text-base">Professional subscriptions</li>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                            If I travel for work, what portion of a trip can I deduct?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="">
                         When traveling for work, you can deduct:
                        </p>
                            <li className="text-base">Actual expenses or the standard mileage rate</li>
                            <li className="text-base">Business-related tolls and parking fees</li>
                            <li className="text-base">Business-use portion of the expenses of renting a car</li>
                            <li className="text-base">Lodging</li>
                            <li className="text-base">Non-entertainment-related meals</li>
                            <li className="text-base">Dry cleaning</li>
                            <li className="text-base">Laundry</li>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                            Can I deduct my car payment through the business?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p>
                            If you own a business or are self-employed, you can deduct car expenses on your tax returns if you use the vehicle for business.
                        </p>
                        <p>
                            When a vehicle is used for business and personal needs, you’re required to track and split the expenses.
                            The portion of mileage used for your business is what can be deducted from your tax returns.
                        </p>
                    </AccordionBody>
                </Accordion>
            </Fragment>
    );
}