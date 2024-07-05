import { Employee } from '../interfaces/Employee';

export class EmployeeData {
  static getEmployeeData(): Employee {
    // Example static data (replace with actual data fetching logic)
    return {
      name: 'L SAJEV',
      employerID: 'LUCK89067',
      basicSalary: '$70,000',
      housingAllowance: '$10,000',
      transportAllowance: '$5,000',
      tax: '$10,000',
      insurance: '$5,000',
      netSalary: '$60,000',
    };
  }
}
