import { ofetch } from "ofetch";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = ofetch.create({
  baseURL: BASE_URL,
  credentials: "include",

  onResponseError({ response }) {
    const error = new Error(response._data?.message || "Something went wrong");

    throw error;
  },
});

export default apiClient;
