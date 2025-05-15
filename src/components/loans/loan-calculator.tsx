/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Slider, Input, Card, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "../ui/select";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(75000);
  const [loanTenor, setLoanTenor] = useState(36);
  const interestRate = 9.5; // Fixed APR
  const maxLoan = 150000;
  const minLoan = 0;

  // Calculate EMI (Equated Monthly Installment)
  const monthlyRate = interestRate / 100 / 12;
  const emi =
    loanTenor > 0
      ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTenor))
      : 0;

  const loan_summary = [
    {
      title: "Estimated Loan Amount",
      value: `₵ ${loanAmount.toLocaleString()}`,
    },
    { title: "Interest Rate", value: `${interestRate}%` },
    {
      title: "Equated Monthly Installment (EMI)",
      value: `₵ ${emi.toFixed(2)}`,
    },
  ];

  return (
    <div id="loan-calculator" className="lg:py-12">
      <div className="max-w-7xl border border-gray-300/70 rounded-4xl mx-auto mt-12 pt-12 lg:pb-10 gap-6 px-6 sm:px-12 lg:px-0">
        {/* Section Header */}
        <div className="mb-4 md:mb-10 text-left md:text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Loan Calculator
          </h2>
          <p className="text-[#929292] mt-2 text-lg md:text-xl">
            Estimate your monthly payments and find the loan that works for you.
          </p>
        </div>
        <div className="bg-white py-5 md:px-28 mx-auto rounded-4xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
            {/* Loan Input Section */}
            <div className="flex-1 lg:border-r border-gray-300 lg:pr-10 md:min-w-[365px]">
              <div className="mb-5 text-base lg:text-lg">
                <p className="flex justify-between items-center font-medium">
                  Loan Type
                </p>
                <Select>
                  <SelectTrigger className="w-full md:text-base p-5 mt-2">
                    <SelectValue placeholder="Select a loan type" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Select Loan Type</SelectLabel>
                      <SelectItem value="personal">Personal Loan</SelectItem>
                      <SelectItem value="home">Home Loan</SelectItem>
                      <SelectItem value="auto">Auto Loan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-5 text-base lg:text-lg">
                <p className="flex justify-between items-center font-medium">
                  Loan Amount <span className="text-[#242424]">9.5% APR</span>
                </p>
                <Slider
                  className="w-full sm:max-w-[97%]"
                  minValue={minLoan}
                  maxValue={maxLoan}
                  step={1000}
                  value={loanAmount}
                  classNames={{
                    thumb: "bg-[#226EA6] mt-1",
                    track: ["bg-[#225EA6]/20", "h-1.5"],
                    filler: "bg-[#225EA6]",
                  }}
                  onChange={(val: any) => setLoanAmount(val)}
                />
                <div className="flex gap-2 w-full items-center mt-5 ">
                  <p className="text-xl font-bold text-white bg-[#225EA6] py-1.5 px-3 rounded-lg">
                    ₵
                  </p>
                  <Input
                    type="number"
                    value={loanAmount.toString()}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full text-lg bg-white border rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-10">
                <p className="font-medium text-base lg:text-lg mb-3">
                  Loan Tenor (Months)
                </p>
                <div className="flex flex-wrap gap-3">
                  {[12, 24, 36, 48, 60].map((tenor) => (
                    <button
                      key={tenor}
                      onClick={() => setLoanTenor(tenor)}
                      className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                        loanTenor === tenor
                          ? "bg-[#225EA6] text-white border-[#225EA6]"
                          : "bg-white text-black border-gray-300 hover:border-[#225EA6]"
                      }`}
                    >
                      {tenor} months
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-betwee">
              {/* Loan Summary Card */}
              <Card className="border rounded-md flex flex-col justify-between md:min-w-[365px] lg:w-[450px]">
                {loan_summary.map((item, index) => (
                  <>
                    <p
                      key={index}
                      className=" p-4 flex items-center justify-between w-full"
                    >
                      <p className=" text-base lg:text-lg font-light  w-[50%]">
                        {item.title}
                      </p>
                      <p className="font-medium text-lg lg:text-xl w-full flex justify-between">
                        <p></p>
                        <p className="">{item.value}</p>
                      </p>
                    </p>
                    {index < loan_summary.length - 1 && (
                      <Divider className="bg-[#acacac]  h-[0.08px]" />
                    )}
                  </>
                ))}
              </Card>

              {/* Apply Button */}
              <div className="w-full flex justify-end mt-5 md:mt-10">
                <Button
                  onClick={() =>
                    window.open(
                      "https://digital.foundry-platform.com/ubuntu-capital",
                      "_blank"
                    )
                  }
                  className="border border-[#225EA6] bg-[#225EA6] text-base p-6  rounded-full"
                >
                  Apply Now
                  <Icon
                    icon="material-symbols-light:arrow-right-alt-rounded"
                    fontSize={30}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
