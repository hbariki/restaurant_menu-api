import fs from 'fs';

class FoodRepository {
    private dataFilePath = './src/data/food.json' ;

    constructor() {
        // Ensure that the data file exists
        if (!fs.existsSync(this.dataFilePath)) {
          throw new Error(`Data file not found at ${this.dataFilePath}`);
        }
      }

      getAllFood() {
        console.log(3);
        const data = this.readDataFile();
        // Implement logic to extract and return the food data as needed
        return data;
      }

      private readDataFile(): any {
        const rawData = fs.readFileSync(this.dataFilePath, 'utf-8');
        return JSON.parse(rawData);
      }
}

export default new FoodRepository();