export function setList(state, list) {
  state.list = list.map(({ title, number, state, locked, created_at }) => ({
    title, number, state, locked, created_at
  }));
}

export function setItem(state, issue) {
  state.item = issue;
}

export function lock(state, number) {
  if (state.item.number === number) {
    state.item.locked = true;
  }

  state.list.map((issue, index) => {
    if (issue.number === number) {
      state.list[index].locked = true
    }
  })
}

export function unlock(state, number) {
  if (state.item.number === number) {
    state.item.locked = false;
  }

  state.list.map((issue, index) => {
    if (issue.number === number) {
      state.list[index].locked = false
    }
  })
}
