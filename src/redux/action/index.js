// ajout d'un article dans le Panier

export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// supression d'un article dans le Panier
export const deleteItem = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};

// mise à jour des info utilisateurs
export const submitUser = (form) => {
  return {
    type: "SUBMITUSER",
    payload: form,
  };
};