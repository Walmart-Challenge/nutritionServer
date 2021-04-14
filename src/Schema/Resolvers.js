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
      nonMutatedNutritionData.push(DessertInfo);
      return nonMutatedNutritionData;
    },
    deleteDessert(_, { DessertNames }) {
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
