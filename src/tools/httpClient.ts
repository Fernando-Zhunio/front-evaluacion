import { Enviroments } from "../enviroments";

export default class HttpClient {
  static url = Enviroments.API_URL;
  constructor() {}

  public static async get(path: string) {
    const response = await fetch(`${this.url}/${path}`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
    // return data;
  }

  public static async post(path: string, body: unknown) {
    const response = await fetch(`${this.url}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }

  public static async put(path: string, body: unknown) {
    const response = await fetch(`${this.url}/${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }

  public static async delete(path: string) {
    const response = await fetch(`${this.url}/${path}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }
}
