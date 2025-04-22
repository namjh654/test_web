export interface LoginFormInputs {
    loginId: string;
    password: string;
  };
  

export interface LoginResponse {
    token:string;
    regionCode:string;
    regionGroup:string;
}

export interface User {
    id:string;
    name:string;

}