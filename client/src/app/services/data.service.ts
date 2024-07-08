interface Product {
  group: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
}
export class DataService {
  key = 'myData';
  data: Product[] = [];

  constructor() {
    this.retrieveData();
  }

  retrieveData(): void {
    const storedData = localStorage.getItem(this.key);
    this.data = storedData ? JSON.parse(storedData) : [];
    if (this.data.length === 0) {
      this.data = [
        {
          group: 'vegetable',
          name: 'dummy1',
          type: 'exotic',
          quantity: 100,
          price: 100,
        },
        {
          group: 'fruit',
          name: 'dummy2',
          type: 'regular',
          quantity: 100,
          price: 100,
        },
      ];
    }
  }

  storeData(): void {
    localStorage.setItem(this.key, JSON.stringify(this.data));
  }
}
