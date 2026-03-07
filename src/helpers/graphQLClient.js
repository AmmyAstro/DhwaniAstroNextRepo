import { graphqlEndpoint } from "@/app/redux/config/apiConfig";
import axios from "axios";
export const graphQLClient = async (query, variables = {}) => {
  const response = await axios.post(
    graphqlEndpoint,
    {
      query,
      variables
    },
    {
      headers: { "Content-Type": "application/json" }
    }
  );

  return response.data;
};
