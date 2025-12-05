import {JwtPayload} from 'jwt-decode';
export interface JwtUser extends JwtPayload{
  role: string;              
  nameidentifier: string;    
  name: string;              
  emailaddress: string;             
  givenname: string;         
  surname: string;           
  street: string;            
  number: string;            
  neighborhood: string;      
  description: string;       
  latitude: string;          
  longitude: string;         
}