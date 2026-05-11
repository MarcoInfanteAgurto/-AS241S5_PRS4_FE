export interface Doctor {
  id?: number;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  licenseNumber: string;
  specialtyId: number;
  specialty?: Specialty;
  phone: string;
  email: string;
  address?: string;
  schedule?: DoctorSchedule[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DoctorSchedule {
  id?: number;
  doctorId: number;
  dayOfWeek: number; // 0=Domingo, 1=Lunes, ..., 6=Sábado
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Specialty {
  id?: number;
  name: string;
  description?: string;
  isActive: boolean;
}
