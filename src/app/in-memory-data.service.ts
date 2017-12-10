import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CARDS = [
      { name: 'Mr. Nice', description:'hdghrth', priority:1, status:'To do', owner: '', id: 11 },
      { name: 'Narco', description:'hdghrth', priority:3, status:'To do', owner: '', id: 12 },
      { name: 'Bombasto', description:'hdghrth', priority:1, status:'To do', owner: '', id: 13 },
      { name: 'Celeritas', description:'hdghrth', priority:2, status:'In progress', owner: 'rhsrth', id: 14,},
      { name: 'Magneta', description:'hdghrth', priority:2, status:'In progress', owner: 'trhsdrt', id: 15,},
      { name: 'RubberMan', description:'hdghrth', priority:1, status:'In progress', owner: 'srthsr', id: 16,},
      { name: 'Dynama', description:'hdghrth', priority:3, status:'Testing', owner: 'srthsrt', id: 17 },
      { name: 'Dr IQ', description:'hdghrth', priority:2, status:'Testing', owner: 'strhsrt', id: 18 },
      { name: 'Magma', description:'hdghrth', priority:3, status:'Testing', owner: 'srthsrth', id: 19 },
      { name: 'Tornado', description:'hdghrth', priority:2, status:'Done', owner: 'strhsrth', id: 20 },
      { name: 'Colorado', description:'hdghrth', priority:2, status:'Done', owner: 'srthsrth', id: 21 },
      { name: 'Alend', description:'hdghrth', priority:1, status:'Done', owner: 'dhtrheshs', id: 22 },
      { name: 'Mr. Nice', description:'hdghrth', priority:2, status:'To do', owner: '', id: 23 },
      { name: 'Narco', description:'hdghrth', priority:3, status:'To do', owner: '', id: 24 },
      { name: 'Bombasto', description:'hdghrth', priority:2, status:'To do', owner: '', id: 25 },
    ];

    const USERS = [
      {name: 'Nikola', age: 22, login: 'log1', pwd:'1' , id: 11 },
      {name: 'Vasia', age: 56, login: '2', pwd:'2', id: 12 },
      {name: 'Alesha', age: 48, login: '3', pwd:'3', id: 13 },
    ]
    return {CARDS, USERS};
  }
}