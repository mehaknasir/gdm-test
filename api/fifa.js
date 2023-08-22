import { parseListData } from "../helper/fifa";
import client from "./client";

export const getFifaPlayerList = async () => {
  try {
        const res = await client.fetch('*[_type == "fifaCard"]');
        const parsedData = parseListData(res);
        return parsedData;
    } catch (err) {
        return err;
    }
};
