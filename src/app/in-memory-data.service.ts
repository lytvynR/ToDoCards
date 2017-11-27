import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CARDS = [
      { id: 11, name: 'Mr. Nice', description:'hdghrth', decorator:1},
      { id: 12, name: 'Narco', description:'hdghrth', decorator:2 },
      { id: 13, name: 'Bombasto', description:'hdghrth', decorator:3 },
      { id: 14, name: 'Celeritas', description:'hdghrth', decorator:4 },
      { id: 15, name: 'Magneta', description:'hdghrth', decorator:1 },
      { id: 16, name: 'RubberMan', description:'hdghrth', decorator:2},
      { id: 17, name: 'Dynama', description:'hdghrth', decorator:3},
      { id: 18, name: 'Dr IQ', description:'hdghrth', decorator:4},
      { id: 19, name: 'Magma', description:'hdghrth', decorator:1},
      { id: 20, name: 'Tornado', description:'hdghrth', decorator:2}
    ];
    return {CARDS};
  }
}