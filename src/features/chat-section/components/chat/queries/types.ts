export type CreateChatSessionBody = {
  externalUserId: string;
  pluginIds?: unknown[];
};

export type ChatSessionResponse = {
  message: string;
  data: ChatSessionData;
};

export type ChatAllSessionResponse = {
  message: string;
  data: ChatSessionData[];
};

export type ChatSessionData = {
  id: string;
  companyId: string;
  externalUserId: string;
  pluginIds: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type ChatMessagesResponse = {
  message: string;
  data: ChatMessage[];
  pagination: Pagination;
};

export type ChatMessage = {
  id: string;
  sessionId: string;
  companyId: string;
  externalUserId: string;
  pluginIds: string[];
  responseMode: string;
  endpointId: string;
  status: string;
  type: string;
  media: unknown;
  query: string;
  answer: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type Pagination = {
  next: string;
  limit: number;
};

export type SendMessageBody = {
  endpointId: "predefined-openai-gpt4o";
  query: string;
  pluginIds?: string[];
  responseMode: "sync";
};

export type ChatQueryResponse = {
  message: string;
  data: ChatQueryData;
};

export type ChatQueryData = {
  sessionId: string;
  messageId: string;
  answer: string;
  status: string;
};
export type GetAllSessionsParams = {
  sort?: "asc";
  limit: number;
  externalUserId: string;
};
