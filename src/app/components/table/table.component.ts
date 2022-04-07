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

/**

const arrIP =
	[
		'193.168.112.10',
		'194.161.220.0',
		'63.112.2.110',
		'93.8.223.116',
		'103.118.212.150',
		'196.118.12.210',
		'196.0.0.1',
		'96.118.12.210'
	]

console.log(arrIP);


const modifyIpToNumber = (arrayIP) => {

	return arrayIP.map((item, idx) => {
		return +item.split('.').map((i) => {
			// console.log(`октет item_${idx}__`, i)
			while (i.length < 3) {
				i = '0' + i
				// console.log(i);
			}
			return i
		}).join('')

	});
}

console.log(modifyIpToNumber(arrIP));

const modifyNumberToIp = (arrayNum) => {
	return arrayNum.map((item) => {
		let newItem = item.toString()
		if (newItem.length < 12)
			while (newItem.length < 12) {
				newItem = '0' + newItem
			}
		// console.log(newItem)
		let modifyIP = []
		for (let i = 0; i <= 9; i = i + 3) {
			let octette = newItem
			// console.log(`octette ${i}:`, +octette.substr(i, 3));
			modifyIP.push(+octette.substr(i, 3))
			// console.log(modifyIP)
		}
		// let modifyIP = ''
		// for (let i = 0; i <= 9; i = i + 3) {
		// 	let octette = newItem
		// 	console.log(`octette ${i}:`, +octette.substr(i, 3));
		// 	if (i < 9) {
		// 		modifyIP += +octette.substr(i, 3) + '.'
		// 	}
		// 	if (i >= 9) {
		// 		modifyIP += +octette.substr(i, 3)
		// 	}
		// 	console.log(modifyIP)
		// }
		return modifyIP.join('.')
	})
}

console.log(modifyNumberToIp(modifyIpToNumber(arrIP)));
// splitIP.map((item) => {
// 	item[0]
// })

// function compare(a, b, isAsc = true) {
// 	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }

// const sortedData = arrIP.sort((a, b) => {
// 	return compare(a.address, b.address);
// });

// console.log('sortedData:', sortedData);




// Побитовое

// IP-адрес имеет длину 4 байта и обычно записывается в виде четырех чисел, представляющих значения каждого байта в десятичной форме и разделенных точками, например, 128.10.2.30 - традиционная десятичная форма представления адреса, а 10000000 00001010 00000010 00011110 - двоичная форма представления этого же адреса.



 */
