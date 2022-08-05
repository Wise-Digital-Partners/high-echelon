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
                        <p className="my-0  w-11/12 text-left text-xl">Do I have to pay if I file an extension?</p>
                    </AccordionHeader>
                    <AccordionBody>
                            <p>There is no penalty for filing an extension, and it’s advised if you can’t pay your taxes on time, pay enough,
                                or are unable to file altogether. Although there is no penalty when filing an extension, you will be charged
                                 interest on the unpaid balance until it’s paid in full.</p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                            What happens if I don’t pay my taxes on time?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="">
                            If you’re late paying your taxes, the IRS will assess a Failure to Pay Penalty, and interest will accrue.
                            The penalty is 0.5% for each month (or part of a month) that you don’t pay but won’t exceed 25% of your unpaid taxes.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                            How can I avoid the alternative minimum tax?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p>
                            To minimize your Alternative Minimum Tax (AMT) liability, you’ll want to keep your adjusted gross income (AGI) as low as possible.
                            To do so, you can participate in a 401(k), 403(b), SARSEP​, 457(b) plan, or SIMPLE IRA by making the maximum allowable salary deferral contributions.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} onClick={() => handleOpen(4)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                            Is the purchase of a new car tax-deductible?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p>
                            You can’t write off the entire purchase, but there are some deductions the IRS allows when buying a car for personal or business use.
                            For example, you can deduct local and state sales taxes or local and state income taxes (just not both).
                            You can also deduct the costs of operating a vehicle for business, charity, medical, or moving expenses.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} onClick={() => handleOpen(4)}>
                    <AccordionHeader className="text-xl subheader">
                        <p className="my-0 w-11/12 text-left text-xl">
                            What are the tax implications of selling my home?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p>
                            Home sales profits are considered capital gains, taxed at federal rates of 0%, 15%, or 20% in 2021, depending on income.
                            The IRS offers a write-off for homeowners, allowing single filers to exclude up to $250,000 of profit, and married couples filing together can subtract up to $500,000.
                        </p>
                    </AccordionBody>
                </Accordion>
            </Fragment>
    );
}