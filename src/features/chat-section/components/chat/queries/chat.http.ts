import onDemandAPI from "@/clientAPI";
import * as types from "./types";

const chatApi = {
  createChatSession: async ({
    body,
  }: {
    body: types.CreateChatSessionBody;
  }): Promise<types.ChatSessionResponse> => {
    const { data } = await onDemandAPI.post("/sessions", body);
    return data;
  },
  getAllChatSession: async (
    params: types.GetAllSessionsParams
  ): Promise<types.ChatAllSessionResponse> => {
    const { data } = await onDemandAPI.get("/sessions", { params });
    return data;
  },
  getChatSession: async ({
    query,
  }: {
    query: { sessionId: string };
  }): Promise<types.ChatSessionResponse> => {
    const { data } = await onDemandAPI.get(`/sessions/${query.sessionId}`);
    return data;
  },
  getChatMessages: async ({
    query,
  }: {
    query: { sessionId: string };
  }): Promise<types.ChatMessagesResponse> => {
    const { data } = await onDemandAPI.get(
      `/sessions/${query.sessionId}/messages`
    );
    return data;
  },
  sendMessage: async ({
    query,
    body,
  }: {
    query: { sessionId: string };
    body: types.SendMessageBody;
  }): Promise<types.ChatQueryResponse> => {
    const { data } = await onDemandAPI.post(
      `/sessions/${query.sessionId}/query`,
      body
    );
    return data;
  },
};
export default chatApi;
