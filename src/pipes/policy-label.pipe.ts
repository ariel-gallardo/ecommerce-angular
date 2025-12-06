import { Pipe, PipeTransform } from '@angular/core';
import { Policy, POLICY_CONFIG } from '@models/policy';

@Pipe({ name: 'PolicyLabel', standalone: false })
export class PolicyLabelPipe implements PipeTransform {
  transform(policy: string) {
    return POLICY_CONFIG[policy as Policy] ?? { label: 'Desconocido', color: '#b51701', icon: 'help' };
  }
}
