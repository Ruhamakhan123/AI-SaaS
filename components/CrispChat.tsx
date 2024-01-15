"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fbaa26e1-3740-473b-a332-bd947dec77ab");
  }, []);
  return null;
};

export default CrispChat;
