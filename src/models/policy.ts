export enum Policy {
  Unknown = 'Access.Unknown',
  Public = 'Access.Public',
  Administrator = 'Access.Administrator',
  Support = 'Access.Support',
  Client = 'Access.Client',
}

export const POLICY_CONFIG: Record<Policy, { label: string; color: string; icon: string }> = {
  [Policy.Unknown]: { label: 'Desconocido', color: '#b51701', icon: 'help' },
  [Policy.Public]: { label: 'Público', color: '#1db954', icon: 'public' },
  [Policy.Administrator]: { label: 'Administrador', color: '#77ffe7', icon: 'admin_panel_settings' },
  [Policy.Support]: { label: 'Soporte', color: '#F7D600', icon: 'support_agent' },
  [Policy.Client]: { label: 'Cliente', color: '#FFFF55', icon: 'account_circle' },
};
 