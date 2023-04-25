import React from "react";

import { BsFillShieldLockFill, BsNewspaper } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance, GrResources } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Latest News",
    description:
      "We offer the latest news to our users, which makes us stand out",
    icon: iconStyle(BsNewspaper),
    imgClass: "one",
  },
  {
    name: "Ease of Use",
    description: "Our system is easy to use and integrate",
    icon: iconStyle(IoIosOptions),
    imgClass: "two",
  },
  {
    name: "Maintenance",
    description:
      "Our code is written in highest standards, which makes it highly sustainable",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three",
  },
  {
    name: "24/7 Support",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "News by Sources",
    description: "We offer the news from various sources",
    icon: iconStyle(GrResources),
    imgClass: "five",
  },
  {
    name: "Scalable",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six",
  },
];
