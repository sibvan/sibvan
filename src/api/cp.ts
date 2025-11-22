const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getData = async (query: string) => {
  while (true) {
    try {
      const response = await fetch(apiUrl + query, {
        method: "GET",
        headers: {
          "api-key": apiKey,
        },
      });
      const result = await response.json();
      return result;
    } catch {
      await new Promise((res) => setTimeout(res, 1000));
    }
  }
};
