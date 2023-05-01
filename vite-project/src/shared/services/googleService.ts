/* eslint-disable react-hooks/rules-of-hooks */
import { useGoogleDao } from "../dao/gogleDao";
import { useQuery } from "@tanstack/react-query";
import { IGoogle } from "../types/google";

const { profile: profileDao } = useGoogleDao();

export const useGoogleService = () => {
  const profile = (accessToken?: string) =>
    useQuery<IGoogle, Error>(
      ["google_user"],
      () => profileDao(accessToken || ""),
      {
        enabled: !!accessToken,
      }
    );

  return {
    profile,
  };
};
