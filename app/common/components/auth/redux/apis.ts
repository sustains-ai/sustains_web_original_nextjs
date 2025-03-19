// Copyright © 2025 Sustains AI, All Rights Reserved
import { mainAxios } from "@/app/common/apiWrapper";
import { LoginActionType, RegisterActionType } from "./actions";

export const registerAPI = async ({ payload }: { payload: RegisterActionType }): Promise<any> => {
  const { data } = await mainAxios.post("/oauth/register", payload);

  return data;
}

export const loginAPI = async ({ payload }: { payload: LoginActionType }): Promise<any> => {
  const { data } = await mainAxios.post("/oauth/login", payload);

  return data;
}

export const userDetailsAPI = async ({ userId }: { userId: string }): Promise<any> => {
  const { data } = await mainAxios.get(`/oauth/user/${userId}`);

  return data;
}

