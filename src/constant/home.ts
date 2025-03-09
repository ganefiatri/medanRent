import Chart from "@/assets/svg/chart.svg";
import Money from "@/assets/svg/money.svg";
import Percent from "@/assets/svg/percent.svg";
import Car1 from "@/assets/images/car-gla200.webp";
import Car2 from "@/assets/images/car-velfire.webp";
import Car3 from "@/assets/images/car-glc300.webp";

type Provide = {
  title: string;
  description: string;
  icon: string;
};

type OurCars = {
  title: string;
  img: string;
};

export const provides: Provide[] = [
  {
    title: "High Trade-in Value",
    description:
      "Get the best possible trade-in value for your current vehicle. We ensure a transparent and fair assessment process, giving you more money to put towards your next dream car.",
    icon: Chart.src,
  },

  {
    title: "0% Down Payment",
    description:
      "Drive away without the hassle of upfront costs. With our 0% downpayment option, you can hit the roads in your new car today without breaking the bank.",
    icon: Percent.src,
  },

  {
    title: "Flexible Financing Scheme",
    description:
      "Our financing options are designed with flexibility in mind. Whether you’re looking for lower monthly payments or a shorter term, we offer customisable plans to fit your financial situation.",
    icon: Money.src,
  },
];

export const ourCars: OurCars[] = [
  {
    title: "Mercedes-Benz GLA 200",
    img: Car1.src,
  },
  {
    title: "Toyota Vellfire",
    img: Car2.src,
  },
  {
    title: "Mercedes-Benz GLC300",
    img: Car3.src,
  },
];
