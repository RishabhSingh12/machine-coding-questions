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

  return { insertNode };
};

export default useTraverseTree;
