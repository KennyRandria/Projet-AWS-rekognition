import { Http } from "./http";
import authHeader from "../hooks/auth-header";

export class EventService extends Http {

  static async getEvent() {
    return await Http.get(`events`, { headers: authHeader() });
  }
  static async putEvent() {
    return await Http.put(`events`, { headers: authHeader() });
  }
  static async putEventUpdate() {
    return await Http.put(`events`, { headers: authHeader() });
  }
}
