const startingState  = {
  columns: {
    sortedColumns: [],
    hiddenColumns: [],
  },
  filters: {
    searchFilter: '',
    isMarriedFilter: false,
    shirtSizeFilter: [],
  },
  general: {
    selectedRows: [],
    data: [],
    loading: true,
    virtualization: true,
  }
}

const loadState = () => {
return startingState
}

const saveState = (args) => {
try {
  args.forEach(el => {
    const serializedData = JSON.stringify(el.data);
    localStorage.setItem(el.key, serializedData)
  })
} catch (err) {
}
}

export {
loadState,
saveState,
}