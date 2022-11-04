import { Http } from "./http";
import authHeader from "../hooks/auth-header";

export class ParticipantService extends Http {
  static async getParticipant() {
    return await Http.get(`events/participants`, { headers: authHeader() });
  }
  static async getParticipantHere() {
    return await Http.get(`events/participants?status=here`, { headers: authHeader() });
  }
  static async getParticipantExpected() {
    return await Http.get(`events/participants?status=expected`, { headers: authHeader() });
  }
  static async getParticipantMissing() {
    return await Http.get(`events/participants?status=missing`, { headers: authHeader() });
  }
  static async putParticipant() {
    return await Http.put(`events/participants`, { headers: authHeader() });
  }
//   static async putEventUpdate() {
//     return await Http.put(`events/{id}`);
//   }
}
