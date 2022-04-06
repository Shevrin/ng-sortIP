import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  // inital data:
  routes: Route[] = [
    {
      uuid: '1',
      address: '0.0.0.0',
      mask: '0',
      gateway: '193.0.174.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '2',
      address: '10.1.30.0',
      mask: '24',
      gateway: '0.0.0.0',
      interface: 'Гостевая сеть',
    },
    {
      uuid: '3',
      address: '192.168.1.0',
      mask: '24',
      gateway: '0.0.0.0',
      interface: 'Домашняя сеть',
    },
    {
      uuid: '4',
      address: '193.0.174.0',
      mask: '24',
      gateway: '0.0.0.0',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '5',
      address: '193.0.175.0',
      mask: '25',
      gateway: '193.0.174.10',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '6',
      address: '193.0.175.22',
      mask: '32',
      gateway: '193.0.174.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '7',
      address: '193.0.175.21',
      mask: '32',
      gateway: '193.0.24.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '8',
      address: '193.0.175.21',
      mask: '32',
      gateway: '193.0.24.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '9',
      address: '192.168.1.25',
      mask: '24',
      gateway: '0.0.0.26',
      interface: 'Подключение Ethernet',
    },
  ];
  // sorted data:
  sortedData: Route[];

  constructor() {
    // in start sort data = initial data
    this.sortedData = this.routes.slice();
  }
  // sorting
  sortData(sort: Sort) {
    console.log(sort);

    //to array
    const data = this.routes.slice();
    // checking if sort is active
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    // make sort data
    this.sortedData = data.sort((a, b) => {
      // create a boolean-flag of direction of sort (asc or desc)
      // $event is the sort object whith 'active' and 'direction' porps
      const isAsc = sort.direction === 'asc';
      console.log(isAsc);

      switch (sort.active) {
        case 'address':
          return compare(a.address, b.address, isAsc);
        case 'gateway':
          return compare(a.gateway, b.gateway, isAsc);
        case 'interface':
          return compare(a.interface, b.interface, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

// const arrIP = ['193.168.112.10', '194.161.220.0', '63.112.2.110', '93.8.223.116', '103.118.212.150', '196.118.12.210']

// console.log(arrIP.sort());

// const splitIP = arrIP.map((item, idx) => {
// 	console.log(`item ${idx}__:`, item);
// 	console.log('первый октет', +item.split('.')[0]);
// 	return item.split('.').map((i) => {
// 		console.log(`октет item_${idx}__`, +i)
// 		return +i
// 	})
// })
// console.log(splitIP);

// splitIP.map((item) => {
// 	item[0]
// })
