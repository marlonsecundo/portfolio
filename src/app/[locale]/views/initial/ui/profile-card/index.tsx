import React from "react";
import DeveloperText from "../developer-text";
import Image from "next/image";

import a from "@/../public/imgs/profile.jpg";

import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const ProfileCard: React.FC = () => {
  const t = useTranslations("initial.profileCard");

  return (
    <div
      className={twMerge(
        "flex flex-col items-center bg-base-200 p-5 rounded-2xl shadow",
        "lg:items-start lg:p-10 lg:col-span-1 w-fit lg:w-full max-w-xl lg:animate-fadeLeft"
      )}
    >
      <Image
        className="max-w-[10rem] md:max-w-[14rem] object-contain mask mask-circle animate-float"
        alt="Marlon Secundo Profile Picture"
        src={a.src}
        width={300}
        height={300}
      ></Image>

      <div className="mt-2 lg:self-start">
        <DeveloperText></DeveloperText>
      </div>

      <p className="mt-3 text-justify text-base w-fit">
        {t("text1")}
        <br></br>
        {t("text2")}
      </p>

      <p className="mt-3 text-secondary">{t("text3")}</p>
    </div>
  );
};

export default ProfileCard;
