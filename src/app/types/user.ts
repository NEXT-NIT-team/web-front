

import {Doctor} from "./doctor"
import {client} from "./client"

export interface User <T = Doctor |client>{
    _id: string;
    firstname: string;
    lastname: string;
    name: string;
    tel: number;
    email: string;
    password: string;
    role: "Client" | "Doctor";
    createdAt?: Date;
    updatedAt?: Date;
  //  picture?: Attachment;
  details: T
   
  }

