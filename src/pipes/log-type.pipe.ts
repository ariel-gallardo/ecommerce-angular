import { Pipe, PipeTransform } from '@angular/core';
import { Log } from '@api/logs/models/log.model';
import { Colors } from '@models/colors';

@Pipe({
  name: 'LogType',
  standalone: false,
})
export class LogTypePipe implements PipeTransform {

  transform(log: Log){
    if(log.errorId) return {label: 'Error', icon: 'error',color: Colors.Delete}
    return {label: 'Info', icon: 'info',color: Colors.Update}
  }

}
