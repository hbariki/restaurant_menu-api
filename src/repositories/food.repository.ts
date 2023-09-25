import fs from 'fs';

export class FoodRepository {
    private readonly dataFilePath: string;

    constructor(dataFilePath: string) {
      this.dataFilePath = dataFilePath
    }

    // simply reading data from the file
    getAllFood() {
      const rawData = fs.readFileSync(this.dataFilePath, 'utf-8');
      return JSON.parse(rawData);
    }
}