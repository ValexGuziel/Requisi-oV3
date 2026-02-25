
export enum OrderStatus {
  OPEN = 'ABERTA',
  COMPLETED = 'CONCLUIDA'
}

export enum MaintenanceType {
  CORRECTIVE = 'Corretiva',
  PREVENTIVE = 'Preventiva',
  PREDICTIVE = 'Preditiva'
}

export interface Equipment {
  tag: string;
  name: string;
  sector: string;
}

export interface ServiceOrder {
  id: string;
  requester: string;
  tag: string;
  equipmentName: string;
  sector: string;
  maintenanceType: MaintenanceType;
  problemDescription: string;
  status: OrderStatus;
  createdAt: string;
  completedAt?: string;
}

export type ViewType = 'dashboard' | 'create' | 'list';
export type FilterType = 'all' | 'open' | 'completed';
