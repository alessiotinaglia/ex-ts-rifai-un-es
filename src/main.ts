// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una 

// ricetta e deve:

// Recuperare la ricetta da https://dummyjson.com/recipes/{id}

// Estrarre la proprietà userId dalla ricetta

// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}

// Restituire la data di nascita dello chef

// Note del docente

// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

// Esempio di utilizzo

// getChefBirthday(1)
//   .then(birthday => console.log("Data di nascita dello chef:", birthday))
//   .catch(error => console.error("Errore:", error.message));

// Esempio di output atteso
// Data di nascita dello chef: 1990-06-15

// _____________________________________________________________________________________________________________________________

// esercizio compleanno dello chef 

// async function getChefBirthday(id) {
//     const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
//     const recipe = await recipeResponse.json();   
//     const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
//     const chef = await chefResponse.json();
//     return chef.birthDate;
// }

// (async () => {
//     try {
//         const birthday = await getChefBirthday(1);
//         console.log("data di nascita :", birthday);
//     } catch (error) {
//         console.log("error", error.message);
//     }
// })();

//  codice con typescript 

// dichiarazioni delle interface
interface Recipe {
  id: number;
  name: string;
  userId: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
}


async function getChefBirthday(id: number): Promise<string> {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!recipeResponse.ok) {
      throw new Error(`Errore nel recupero della ricetta con id ${id}`);
    }
    const recipe: Recipe = await recipeResponse.json();

    const userResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    if (!userResponse.ok) {
      throw new Error(`Errore nel recupero dello chef con id ${recipe.userId}`);
    }
    const user: User = await userResponse.json();

    return user.birthDate;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Errore: ${error.message}`);
    } else {
      throw new Error("Errore sconosciuto");
    }
  }
}

// come utilizzarlo 
getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));
