import { Pipe, PipeTransform } from '@angular/core';
import { UserRole } from '../../core/models/user.model';

@Pipe({
  name: 'roleLabel',
  standalone: true
})
export class RoleLabelPipe implements PipeTransform {
  private roleLabels: Record<UserRole, string> = {
    [UserRole.SUPER_ADMIN]: 'Super Administrador',
    [UserRole.ORG_ADMIN]: 'Administrador de Organización',
    [UserRole.TEACHER]: 'Profesor',
    [UserRole.STUDENT]: 'Estudiante',
    [UserRole.PARENT]: 'Padre/Tutor',
    [UserRole.DOCTOR]: 'Doctor',
    [UserRole.NURSE]: 'Enfermero/a',
    [UserRole.PHARMACIST]: 'Farmacéutico',
    [UserRole.SUPPLIER]: 'Proveedor'
  };

  transform(value: UserRole | string | undefined): string {
    if (!value) return '';
    return this.roleLabels[value as UserRole] || value;
  }
}
