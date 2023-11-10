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
