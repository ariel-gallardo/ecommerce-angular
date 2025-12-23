import { Pipe, PipeTransform } from '@angular/core';
import { Permission } from '@api/security/models/permission.model';
import { Action, ACTION_CONFIG } from '@models/action';
import { Colors } from '@models/colors';

@Pipe({
  name: 'PolicyAccess',
  standalone: false,
})
export class PolicyAccessPipe implements PipeTransform {

  transform(permission: Permission | any) {
    if(permission.url)
      return { label: permission.url, color: '#fff', icon: 'http' }
    else if(permission.controller && permission.action)
    {
      const action = ACTION_CONFIG[permission.action as Action] ?? { label: '', color: Colors.Unknown, icon: 'api' };
      return {...action, label: action.label != '' ? `${permission.controller} | ${action.label}` 
      : `${permission.controller} | ${permission.action}`} 
    }
    else return { label: 'Desconocido', color: '#fff', icon: 'help' };
  }

}
