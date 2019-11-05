import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(): void {
    let that = this;
    let data: Array<Student> = [{
      ID: 1,
      FullName: "Nguyễn Thanh Hải",
      ClassID: 1
    },
    {
      ID: 2,
      FullName: "Lư Tuấn Đạt",
      ClassID: 1
    },
    {
      ID: 3,
      FullName: "Phạm Đình Khang",
      ClassID: 2
    },
    {
      ID: 4,
      FullName: "Cao Thị Kim Phụng",
      ClassID: 2
    },
    {
      ID: 5,
      FullName: "Huỳnh Thị Mỹ Linh",
      ClassID: 2
    }];

    let dataMap: Array<number> = [
      1, 2, 3, 4, 5
    ]
    // console.log(that.displayListPrime(0, 100));
    // console.log(that.bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
    // console.log(that.filterDataByClass(1, data));
    // console.log(that.findDataByID(1, data));
    // console.log(that.mapDataMultiple(dataMap));

  }

  /**
   * Kiểm tra 1 số có phải là số nguyên tố
   * @param num
   */
  isPrime(num: number): boolean {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  /**
   * hiển thị số nguyên số start-end
   * @param start 
   * @param end 
   */
  displayListPrime(start: number, end: number): Array<[]> {
    let that = this;
    const arr = [];
    for (let i = start; i <= end; i++) {
      if (that.isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;
  }

  /**
   * thuật toán Bubble Sort
   * @param arr 
   */
  bubbleSort(arr: Array<number>): Array<number> {
    let swapp;
    let n = arr.length - 1;
    let x = arr;
    do {
      swapp = false;
      for (let i = 0; i < n; i++) {
        if (x[i] < x[i + 1]) {
          let temp = x[i];
          x[i] = x[i + 1];
          x[i + 1] = temp;
          swapp = true;
        }
      }
      n--;
    } while (swapp);
    return x;
  }

  /**
   * using filter => return []
   * @param ClassID 
   * @param data 
   */
  filterDataByClass(ClassID: number, data: Array<Student>): Array<Student> {
    let that = this;
    let result = data.filter(item => {
      return item.ClassID == ClassID;
    })

    return result;
  }

  /**
   * using find => return Object
   * @param ID 
   * @param data 
   */
  findDataByID(ID: number, data: Array<Student>): Student {
    let that = this;
    let result = data.find(item => {
      return item.ID == ID;
    })

    return result;
  }

  /**
   * using map => biến đổi data
   * @param data 
   */
  mapDataMultiple(data: Array<number>): Array<number> {
    let that = this;
    let result = data.map(item => {
      return item * 2;
    })

    return result;
  }
}


/**
 * Create Model
 */
interface Student {
  ID: number;
  FullName: string;
  ClassID: number;
}