import RH from './request-handler';

export const getMovementLogs = async (id: number) => await RH.get(`/employees/${id}/movements`);
