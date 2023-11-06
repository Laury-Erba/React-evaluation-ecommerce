// ajout d'un article dans le Panier

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// supression d'un article dans le Panier
export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
