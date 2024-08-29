const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

// Fonction pour récupérer toutes les données d'utilisateur
function getUserMainData() {
  return new Promise((resolve, reject) => {
    // Simuler une latence de réponse de l'API
    setTimeout(() => {
      resolve(USER_MAIN_DATA);
    }, 1000);
  });
}

// Exporter les fonctions et les données nécessaires
export default {
  getUserMainData,
};
