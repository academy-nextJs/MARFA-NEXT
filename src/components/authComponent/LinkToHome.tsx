"use client";

import Link from "next/link";
import React from "react";
import { ButtonBack } from "../common/Button/button";

const LinkToHome = () => {
  return (
    <Link href="/">
      <ButtonBack>صفحه اصلی</ButtonBack>
    </Link>
  );
};

export default LinkToHome;
