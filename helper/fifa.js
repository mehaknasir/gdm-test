import imageUrlBuilder from "@sanity/image-url";
import client from "../api/client";

export const parseListData = (data) => {
  const builder = imageUrlBuilder(client);
  if (data?.length > 0) {
    return data.map((elem) => {
      const imageOption = builder.image(elem.cardImage);
      const { source } = imageOption.options;
      return {
        id: elem._id,
        name: elem.name,
        ovr: elem.rating,
        pos: elem.position,
        type: elem.cardType,
        pac: elem.statistics.pace,
        sho: elem.statistics.shooting,
        pas: elem.statistics.passing,
        dri: elem.statistics.dribbling,
        def: elem.statistics.defense,
        phy: elem.statistics.physical,
        wr: elem.workRatesAttacking,
        img: builder.image(source).url(),
      };
    });
  }
  return [];
};
