import {
  FaIndianRupeeSign,
  FaBoxOpen,
  FaDollarSign,
  FaGift,
  FaTrophy,
} from "react-icons/fa6";

export const prizeCards = [
  {
    id: 1,
    icon: FaIndianRupeeSign,
    amount: "1,00,000",
    title: "CASH PRIZES",
    description: "Cash prizes for the top 3 winners of HACKHAZARDS'25",
    gradient: "from-[#80a653] to-[#121f02]",
  },
  {
    id: 2,
    icon: FaBoxOpen,
    amount: "2,00,000",
    title: "T-SHIRTS",
    description: "Worth of T-shirts for the top 100 teams",
    gradient: "from-[#80a653] to-[#121f02]",
  },
  {
    id: 3,
    icon: FaDollarSign,
    amount: "$ 6,500+",
    title: "TRACK PRIZES",
    description: "Worth of prizes across 5 specialized tracks",
    gradient: "from-[#80a653] to-[#121f02]",
  },
];

export const nationalWinners = [
  {
    id: 1,
    rank: 1,
    amount: "50,000",
    title: "FIRST PLACE",
    description: "Cash prize for the national winner",
  },
  {
    id: 2,
    rank: 2,
    amount: "30,000",
    title: "SECOND PLACE",
    description: "Cash prize for the runner-up",
  },
  {
    id: 3,
    rank: 3,
    amount: "20,000",
    title: "THIRD PLACE",
    description: "Cash prize for the second runner-up",
  },
];

export const benefitsCard = {
  icon: FaGift,
  amount: "$ 250,000",
  title: "TOTAL BENEFITS",
  description: "Worth of benefits for all participants",
  extra: "Over ₹2.1 Crore in Digital Credits, Vouchers and Benefits",
};
