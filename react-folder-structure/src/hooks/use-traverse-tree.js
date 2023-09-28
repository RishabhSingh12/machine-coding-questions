const useTraverseTree = () => {
  const insertNode = (tree, itemId, item, isFolder) => {
    //if the root id is equal to the itemId
    if (tree.id === itemId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) =>
      insertNode(obj, itemId, item, isFolder)
    );

    return { ...tree, items: latestNode };
  };

  const editNode = (tree, itemId, item, isFolder) => {
    if (tree.id === itemId) {
      tree.name = item;
      tree.isFolder = isFolder;

      return tree;
    }

    tree.items.map((obj) => editNode(obj, itemId, item, isFolder));

    return { ...tree };
  };

  const deleteNode = (tree, itemId) => {
    for (let i = 0; i < tree.items.length; i++) {
      let currentItem = tree.items[i];
      if (currentItem.id === itemId) {
        tree.items.splice(i, 1);
        return tree;
      } else {
        deleteNode(currentItem, itemId);
      }
    }
    return tree;
  };

  return { insertNode, editNode, deleteNode };
};

export default useTraverseTree;
