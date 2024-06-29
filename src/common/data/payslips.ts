
export interface Payslip {
  id: number;
  fromDate: string;
  toDate: string;
  file: string;
}

const payslips: Payslip[] = [
  {
    id: 1,
    fromDate: '2023-01-01',
    toDate: '2023-01-31',
    file: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'
  },
  {
    id: 2,
    fromDate: '2023-02-01',
    toDate: '2023-02-28',
    file: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'
  },
  {
    id: 3,
    fromDate: '2023-03-01',
    toDate: '2023-03-31',
    file: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'
  },
  {
    id: 4,
    fromDate: '2023-04-01',
    toDate: '2023-04-30',
    file: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'
  },
  {
    id: 5,
    fromDate: '2023-05-01',
    toDate: '2023-05-31',
    file: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'
  }
];

export const getPayslips = () => payslips;

export const getPayslip = (id: number) => payslips.find(payslip => payslip.id === id);