export const REVUEBASEURL = "https://www.getrevue.co/api";
export const RevueAuthHeader = {
  headers: {
    Authorization: `Token ${process.env.NEXT_PUBLIC_REVUE_KEY}`
  }
};
