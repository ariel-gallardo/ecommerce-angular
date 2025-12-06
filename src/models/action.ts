import { Colors } from "./colors";

export enum Action {
  Add = 'Add',
  Update = 'Update',
  Delete = 'Delete',
  Search = 'Search',
  SearchFirst = 'SearchFirst',
}


export const ACTION_CONFIG: Record<Action, { label: string; color: string; icon: string }> = {
  [Action.Add]: { label: 'Agregar', color: Colors.Add, icon: 'add' },
  [Action.Update]: { label: 'Actualizar', color: Colors.Update, icon: 'update' },
  [Action.Delete]: { label: 'Eliminar', color: Colors.Delete, icon: 'delete' },
  [Action.Search]: { label: 'Buscar', color: Colors.Search, icon: 'search' },
  [Action.SearchFirst]: { label: 'Buscar uno', color: Colors.Search, icon: 'zoom_in' },
};
 