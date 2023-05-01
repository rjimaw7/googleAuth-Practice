import axios from "axios";
import { IGoogle } from "../types/google";

export const useGoogleDao = () => {
  const profile = async (accessToken: string) => {
    const response = await axios.get<IGoogle>(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  };

  return {
    profile,
  };
};
