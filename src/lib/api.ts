import { TodoType, UserType } from "./api-types";

export const getTodos = async (): Promise<TodoType[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("response", response);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const fetchApi = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  headers?: HeadersInit,
  body?: BodyInit
): Promise<T> => {
  try {
    const response = await fetch(url, { method, headers, body });
    console.log("responsik hihik");
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
