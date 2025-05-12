"use client";

import Link from "next/link";
import React from "react";
// import { ButtonBack } from "../common/Button/button";
import { Button } from "@heroui/react";

const LinkToBack = () => {
  return (
    <Link href="/register">
      <Button>بازگشت  </Button>
    </Link>
  );
};

export default LinkToBack;
