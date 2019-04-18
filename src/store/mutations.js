export function loading(state, loading) {
  state.loading = !!loading;
}

export function setUsername(state, username) {
  state.username = username;
}

export function setRepository(state, repository) {
  state.repository = repository;
}

export function setIssues(state, issues) {
  state.issues = issues.map(({ title, number, state, locked }) => ({
    title, number, state, locked
  }));
}

export function setIssue(state, issue) {
  state.issue = issue;
}

export function setToken(state, token) {
  state.token = token;
}

export function lockIssue(state, number) {
  if (state.issue.number === number) {
    state.issue.locked = true;
  }

  state.issues.map((issue, index) => {
    if (issue.number === number) {
      state.issues[index].locked = true
    }
  })
}

export function unlockIssue(state, number) {
  if (state.issue.number === number) {
    state.issue.locked = false;
  }

  state.issues.map((issue, index) => {
    if (issue.number === number) {
      state.issues[index].locked = false
    }
  })
}
