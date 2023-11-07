export default function filterReducer(filterData, action) {
  switch (action.type) {
    case 'productSorting':
      return { ...filterData, productSorting: action.value };
    case 'unselectProductSorting':
      return { ...filterData, productSorting: '' };
    case 'maxPrice':
      return { ...filterData, maxPrice: action.value };
    case 'unselectCategory':
      return { ...filterData, productCategory: '' };

    case 'selectCategory':
      return { ...filterData, productCategory: action.value };

    default:
      return { ...filterData };
  }
}
