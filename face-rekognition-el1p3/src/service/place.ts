import { Http } from "./http";
import authHeader from "../hooks/auth-header";

export class PlaceService extends Http {
  static async getPlace() {
    return await Http.get(`places`, { headers: authHeader() });
  }
  static async putPlace() {
    return await Http.put(`places`, { headers: authHeader() });
  }
}
