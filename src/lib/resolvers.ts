import { uri } from "./apollo-client";

export const peopleCollection = async (
  _root: any,
  variables: any,
  { cache, getCacheKey }: any
) => {
  const response = await fetch(`${uri}people/`);
  const data = await response.json();
  console.log({ data: data.results });
  return {
    __typename: "star_wars_people_collection",
    people: data.results,
    count: data.count,
    next: data.next
  };
};

export default {
  peopleCollection
};
