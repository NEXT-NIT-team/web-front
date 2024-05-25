import { Component } from '@angular/core';
import { Appoin } from '../types/appoin';
//import usermock from '../../mock/users';

@Component({
  selector: 'app-appoin',
  templateUrl: './appoin.component.html',
  styleUrl: './appoin.component.css'
})
export class AppoinComponent {

  oppoints: any[] = [
    {
        id: 1,
        patient: {
            name: 'John Doe',
            tel: '123-456-7890',
            details: { isMale: 'Male' },
            height: '180 cm',
            weight: '75 kg',
            bloodGlucoseBeforeMeal: '90 mg/dL',
            bloodGlucoseAfterMeal: '140 mg/dL',
            temperature: '37.5 °C',
            bloodPressure: '120/80 mmHg'
        },
        date: '2023-05-25',
        time: '10:00 AM'
    },
    {
        id: 2,
        patient: {
            name: 'Jane Smith',
            tel: '987-654-3210',
            details: { isMale: 'Female' },
            height: '165 cm',
            weight: '60 kg',
            bloodGlucoseBeforeMeal: '85 mg/dL',
            bloodGlucoseAfterMeal: '135 mg/dL',
            temperature: '36.8 °C',
            bloodPressure: '130/90 mmHg'
        },
        date: '2023-05-26',
        time: '11:00 AM'
    },
    {
        id: 3,
        patient: {
            name: 'Robert Johnson',
            tel: '456-789-0123',
            details: { isMale: 'Male' },
            height: '170 cm',
            weight: '80 kg',
            bloodGlucoseBeforeMeal: '95 mg/dL',
            bloodGlucoseAfterMeal: '150 mg/dL',
            temperature: '37.0 °C',
            bloodPressure: '125/85 mmHg'
        },
        date: '2023-05-27',
        time: '09:00 AM'
    },
    {
        id: 4,
        patient: {
            name: 'Emily Davis',
            tel: '321-654-0987',
            details: { isMale: 'Female' },
            height: '160 cm',
            weight: '55 kg',
            bloodGlucoseBeforeMeal: '100 mg/dL',
            bloodGlucoseAfterMeal: '145 mg/dL',
            temperature: '36.5 °C',
            bloodPressure: '115/75 mmHg'
        },
        date: '2023-05-28',
        time: '02:00 PM'
    },
    {
        id: 5,
        patient: {
            name: 'Michael Wilson',
            tel: '789-012-3456',
            details: { isMale: 'Male' },
            height: '175 cm',
            weight: '70 kg',
            bloodGlucoseBeforeMeal: '85 mg/dL',
            bloodGlucoseAfterMeal: '130 mg/dL',
            temperature: '37.3 °C',
            bloodPressure: '118/78 mmHg'
        },
        date: '2023-05-29',
        time: '01:00 PM'
    },
    {
        id: 6,
        patient: {
            name: 'Sarah Miller',
            tel: '654-098-1234',
            details: { isMale: 'Female' },
            height: '168 cm',
            weight: '65 kg',
            bloodGlucoseBeforeMeal: '92 mg/dL',
            bloodGlucoseAfterMeal: '138 mg/dL',
            temperature: '37.1 °C',
            bloodPressure: '122/82 mmHg'
        },
        date: '2023-05-30',
        time: '11:30 AM'
    },
    {
        id: 7,
        patient: {
            name: 'David Brown',
            tel: '543-210-6789',
            details: { isMale: 'Male' },
            height: '182 cm',
            weight: '85 kg',
            bloodGlucoseBeforeMeal: '88 mg/dL',
            bloodGlucoseAfterMeal: '132 mg/dL',
            temperature: '37.4 °C',
            bloodPressure: '124/84 mmHg'
        },
        date: '2023-06-01',
        time: '10:30 AM'
    },
    {
        id: 8,
        patient: {
            name: 'Laura Martinez',
            tel: '432-109-8765',
            details: { isMale: 'Female' },
            height: '158 cm',
            weight: '50 kg',
            bloodGlucoseBeforeMeal: '94 mg/dL',
            bloodGlucoseAfterMeal: '140 mg/dL',
            temperature: '36.9 °C',
            bloodPressure: '118/76 mmHg'
        },
        date: '2023-06-02',
        time: '09:30 AM'
    },
    {
        id: 9,
        patient: {
            name: 'James Taylor',
            tel: '321-098-7654',
            details: { isMale: 'Male' },
            height: '178 cm',
            weight: '77 kg',
            bloodGlucoseBeforeMeal: '91 mg/dL',
            bloodGlucoseAfterMeal: '137 mg/dL',
            temperature: '37.2 °C',
            bloodPressure: '120/80 mmHg'
        },
        date: '2023-06-03',
        time: '01:30 PM'
    },
    {
        id: 10,
        patient: {
            name: 'Jessica Garcia',
            tel: '210-987-6543',
            details: { isMale: 'Female' },
            height: '170 cm',
            weight: '68 kg',
            bloodGlucoseBeforeMeal: '89 mg/dL',
            bloodGlucoseAfterMeal: '135 mg/dL',
            temperature: '37.0 °C',
            bloodPressure: '119/79 mmHg'
        },
        date: '2023-06-04',
        time: '03:00 PM'
    },
    {
        id: 11,
        patient: {
            name: 'William Moore',
            tel: '109-876-5432',
            details: { isMale: 'Male' },
            height: '174 cm',
            weight: '72 kg',
            bloodGlucoseBeforeMeal: '90 mg/dL',
            bloodGlucoseAfterMeal: '140 mg/dL',
            temperature: '37.1 °C',
            bloodPressure: '121/81 mmHg'
        },
        date: '2023-06-05',
        time: '04:00 PM'
    },
    {
        id: 12,
        patient: {
            name: 'Emma Anderson',
            tel: '098-765-4321',
            details: { isMale: 'Female' },
            height: '165 cm',
            weight: '62 kg',
            bloodGlucoseBeforeMeal: '87 mg/dL',
            bloodGlucoseAfterMeal: '133 mg/dL',
            temperature: '36.8 °C',
            bloodPressure: '118/78 mmHg'
        },
        date: '2023-06-06',
        time: '02:30 PM'
    },
    {
        id: 13,
        patient: {
            name: 'Ethan Lee',
            tel: '987-654-3219',
            details: { isMale: 'Male' },
            height: '180 cm',
            weight: '76 kg',
            bloodGlucoseBeforeMeal: '93 mg/dL',
            bloodGlucoseAfterMeal: '142 mg/dL',
            temperature: '37.2 °C',
            bloodPressure: '122/82 mmHg'
        },
        date: '2023-06-07',
        time: '11:00 AM'
    },
    {
        id: 14,
        patient: {
            name: 'Olivia Harris',
            tel: '876-543-2108',
            details: { isMale: 'Female' },
            height: '162 cm',
            weight: '57 kg',
            bloodGlucoseBeforeMeal: '90 mg/dL',
            bloodGlucoseAfterMeal: '136 mg/dL',
            temperature: '37.0 °C',
            bloodPressure: '119/77 mmHg'
        },
        date: '2023-06-08',
        time: '09:00 AM'
    },
    {
        id: 15,
        patient: {
            name: 'Mason Clark',
            tel: '765-432-1098',
            details: { isMale: 'Male' },
            height: '177 cm',
            weight: '78 kg',
            bloodGlucoseBeforeMeal: '88 mg/dL',
            bloodGlucoseAfterMeal: '133 mg/dL',
            temperature: '37.3 °C',
            bloodPressure: '123/83 mmHg'
        },
        date: '2023-06-09',
        time: '08:30 AM'
    },
    {
        id: 16,
        patient: {
            name: 'Sophia Lewis',
            tel: '654-321-0987',
            details: { isMale: 'Female' },
            height: '168 cm',
            weight: '63 kg',
            bloodGlucoseBeforeMeal: '92 mg/dL',
            bloodGlucoseAfterMeal: '139 mg/dL',
            temperature: '36.7 °C',
            bloodPressure: '117/76 mmHg'},
            date: '2023-06-09',
            time: '08:30 AM'}];

  expandedRows: any = {};
  value!:string;

  constructor() { }

  onRowExpand(event: any) {
    console.log('Row expanded:', event.data);
    this.expandedRows[event.data.id] = true;
  }

  onRowCollapse(event: any) {
    console.log('Row collapsed:', event.data);
    delete this.expandedRows[event.data.id];
  }
}
