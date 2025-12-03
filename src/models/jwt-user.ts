import {JwtPayload} from 'jwt-decode';
export interface JwtUser extends JwtPayload{
  role: string;              
  nameIdentifier: string;    
  name: string;              
  email: string;             
  givenName: string;         
  surname: string;           
  street: string;            
  number: string;            
  neighborhood: string;      
  description: string;       
  latitude: string;          
  longitude: string;         
}