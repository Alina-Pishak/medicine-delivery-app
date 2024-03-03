import axios from "axios";

export const axiosBaseQuery =
  (
    { baseUrl } = { baseUrl: "https://medicine-delivery-backend.onrender.com" }
  ) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

// axios.defaults.baseURL = "https://medicine-delivery-backend.onrender.com";
