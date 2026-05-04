import axios from "axios";
import { mockGems } from "../data/mockData";
const baseURL = import.meta.env.VITE_Base_URL;

export async function getGemByIdAPI(id) {
  try {
    const { data } = await axios.get(baseURL + `/gems/${id}`);
    return data;
  } catch (error) {
    console.error("API Error, falling back to mock data:", error);
    const mockGem = mockGems.find(g => g._id === id);
    return mockGem ? { result: mockGem } : { error: "Gem not found" };
  }
}

export async function getGemsAPI(params = {}) {
  try {
    const queryString = new URLSearchParams(params).toString();
    const { data } = await axios.get(baseURL + `/gems?${queryString}`);
    return data;
  } catch (error) {
    console.error("API Error, falling back to mock data:", error);
    return { result: mockGems };
  }
}

export async function updateGemAPI(gemId, gemData) {
  try {
    const { data } = await axios.put(baseURL + `/gems/${gemId}`, gemData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return error.response ? error.response.data : { error: "Network error" };
  }
}

export async function deleteGemAPI(gemId) {
  try {
    const { data } = await axios.delete(baseURL + `/gems/${gemId}`);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return error.response ? error.response.data : { error: "Network error" };
  }
}
