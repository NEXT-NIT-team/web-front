import { client } from "./client"
import { Doctor } from "./doctor"
import { User } from "./user"

export interface Appoin {
    id:string
    date:string
    reason:string
    patient:User<client>
    
}
