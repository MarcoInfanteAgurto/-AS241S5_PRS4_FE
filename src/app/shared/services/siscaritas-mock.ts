// Datos mock para los módulos de Productos
// Fuente: siscaritasMock copy.js

export const preciosConsulta = [
    { id: 'PCO001', specialty: 'Medicina General', precio: 20, status: 'ACTIVE' },
    { id: 'PCO002', specialty: 'Odontologia', precio: 25, status: 'ACTIVE' },
    { id: 'PCO003', specialty: 'Pediatria', precio: 22, status: 'ACTIVE' },
];

export const kitsLaboratorio = [
    { id: 'KIT001', nombre: 'Kit control adulto mayor', pruebas: 'Hemograma, glucosa, orina', precioKit: 48, status: 'ACTIVE' },
    { id: 'KIT002', nombre: 'Kit escolar preventivo', pruebas: 'Hemograma, parasitologico', precioKit: 36, status: 'ACTIVE' },
];

export const medicamentos = [
    { id: 'MED001', denominacionComercial: 'Paracetamol 500 MG', denominacionGenerica: 'Paracetamol', categoria: 'TABLETA', laboratorio: 'Genfar', costoUnitario: 0.28, precioVenta: 0.5, vencimiento: '2026-12-30', status: 'ACTIVE' },
    { id: 'MED002', denominacionComercial: 'Cefalexina 500 MG', denominacionGenerica: 'Cefalexina', categoria: 'TABLETA', laboratorio: 'Portugal', costoUnitario: 0.34, precioVenta: 0.5, vencimiento: '2027-06-30', status: 'ACTIVE' },
    { id: 'MED003', denominacionComercial: 'Ibuprofeno 400 MG', denominacionGenerica: 'Ibuprofeno', categoria: 'TABLETA', laboratorio: 'Medifarma', costoUnitario: 0.42, precioVenta: 0.8, vencimiento: '2026-09-15', status: 'ACTIVE' },
    { id: 'MED004', denominacionComercial: 'Amoxicilina 500 MG', denominacionGenerica: 'Amoxicilina', categoria: 'CAPSULA', laboratorio: 'AC Farma', costoUnitario: 0.55, precioVenta: 1.2, vencimiento: '2026-06-10', status: 'INACTIVE' },
];

export const terapiasPrecios = [
    { id: 'TPR001', tipoCliente: 'Beneficiario Social', specialty: 'Terapia Fisica', precio: 18, status: 'ACTIVE' },
    { id: 'TPR002', tipoCliente: 'Paciente Externo', specialty: 'Terapia Fisica', precio: 30, status: 'ACTIVE' },
    { id: 'TPR003', tipoCliente: 'Convenio', specialty: 'Terapia Fisica', precio: 24, status: 'ACTIVE' },
];

export const tratamientos = [
    { id: 'TRA001', nombre: 'Profilaxis dental', specialty: 'Odontologia', precio: 45, descripcion: 'Limpieza dental preventiva', status: 'ACTIVE' },
    { id: 'TRA002', nombre: 'Curacion simple', specialty: 'Odontologia', precio: 35, descripcion: 'Restauracion dental basica', status: 'ACTIVE' },
    { id: 'TRA003', nombre: 'Terapia lumbar', specialty: 'Terapia Fisica', precio: 30, descripcion: 'Sesion de rehabilitacion lumbar', status: 'ACTIVE' },
];
