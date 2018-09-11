import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const categories = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
      { id: 4, name: 'Test 4' },
      { id: 5, name: 'Test 5' },
      { id: 6, name: 'Test 6' }
    ];

    const subcategories = [
      { id: 1, categoryid: 1, name: 'Sub Test 1' },
      { id: 2, categoryid: 1, name: 'Sub Test 2' },
      { id: 3, categoryid: 1, name: 'Sub Test 3' },
      { id: 4, categoryid: 1, name: 'Sub Test 4' },
      { id: 5, categoryid: 2, name: 'Sub Test 1' },
      { id: 6, categoryid: 2, name: 'Sub Test 2' },
      { id: 7, categoryid: 3, name: 'Sub Test 1' },
      { id: 8, categoryid: 4, name: 'Sub Test 1' },
      { id: 9, categoryid: 5, name: 'Sub Test 1' },
      { id: 10, categoryid: 5, name: 'Sub Test 2' },
      { id: 11, categoryid: 6, name: 'Sub Test 1' },
      { id: 12, categoryid: 6, name: 'Sub Test 2' },
      { id: 13, categoryid: 6, name: 'Sub Test 3' }
    ]

    return { categories, subcategories };
  }
}
