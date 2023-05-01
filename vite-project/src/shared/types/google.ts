export interface IGoogle {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export interface IGoogleError {
  error: string;
  error_description?: string;
  error_uri?: string;
}

export type IGoogleResponse = Omit<IGoogle, "responseProps">;
