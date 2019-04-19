export function loading(state, loading) {
  state.loading = !!loading;
}

export function setUser(state, { name, login, avatar_url }) {
  state.user = {
    name,
    username: login,
    avatar: avatar_url
  }
}

export function setRepositories(state, repositories) {
  state.repositories = repositories;
}

export function setRepository(state, repository) {
  state.repository = repository;
}

export function setIssues(state, issues) {
  state.issues = issues.map(({ title, number, state, locked, created_at }) => ({
    title, number, state, locked, created_at
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
