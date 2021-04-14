const { nutritionData } = require("../DB/nutritionData");

let nonMutatedNutritionData = [...nutritionData];
const resolvers = {
  Query: {
    getDesserts() {
      return nonMutatedNutritionData;
    }
  },
  Mutation: {
    createDessert(_, { DessertInfo }) {
      console.log('DessertInfo :>> ', DessertInfo);
      nonMutatedNutritionData.push(DessertInfo);
      return nonMutatedNutritionData;
    },
    deleteDessert(_, { DessertNames }) {
      console.log("DessertName :>> ", DessertNames);
      if (DessertNames.length > 0) {
        nonMutatedNutritionData = nonMutatedNutritionData.filter(
          (dessertObject) => !DessertNames.includes(dessertObject.dessert)
        );
      }
      return nonMutatedNutritionData;
    },
    resetData() {
      nonMutatedNutritionData = [...nutritionData];
      return nonMutatedNutritionData;
    },
  },
};

module.exports = { resolvers };
