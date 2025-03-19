import { action } from "@/app/common/store/typeSafe";

export type RegisterActionType = {
    email: string;
    password: string;
    name: string;
}

export const registerAction = (payload?: RegisterActionType): any => action("src/common/components/auth/redux/actions/registerAction", payload);

export type LoginActionType = Omit<RegisterActionType, "name">

export const loginAction = (payload?: LoginActionType): any => action("src/common/components/auth/redux/actions/loginAction", payload);

export const loggedInSuccessfullyAction = (): any => action("src/common/components/auth/redux/actions/loggedInSuccessfullyAction");

export type StoreUserDetailsActionType = {
    email: string;
    name: string;
    id: string;
}

export const storeUserDetailsAction = (payload: StoreUserDetailsActionType): any => action("src/common/components/auth/redux/actions/storeUserDetailsAction", payload);

export const logoutAction = (): any => action("src/common/components/auth/redux/actions/logoutAction");

export const resetLoginReducerAction = (): any => action("src/common/components/auth/redux/actions/resetLoginReducerAction");
