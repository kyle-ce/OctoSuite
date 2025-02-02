// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

const mockUserData = {
  login: "kyle-ce",
  id: 108813795,
  node_id: "U_kgDOBnxd4w",
  avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/kyle-ce",
  html_url: "https://github.com/kyle-ce",
  followers_url: "https://api.github.com/users/kyle-ce/followers",
  following_url: "https://api.github.com/users/kyle-ce/following{/other_user}",
  gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
  starred_url: "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
  organizations_url: "https://api.github.com/users/kyle-ce/orgs",
  repos_url: "https://api.github.com/users/kyle-ce/repos",
  events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
  received_events_url: "https://api.github.com/users/kyle-ce/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  notification_email: null,
  public_repos: 14,
  public_gists: 1,
  followers: 0,
  following: 1,
  created_at: "2022-07-06T13:36:36Z",
  updated_at: "2025-01-29T09:59:26Z",
};

const mockRepositoryData = [
  {
    id: 783320995,
    node_id: "R_kgDOLrCHow",
    name: "api",
    full_name: "kyle-ce/api",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/api",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/api",
    forks_url: "https://api.github.com/repos/kyle-ce/api/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/api/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/api/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/api/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/api/events",
    assignees_url: "https://api.github.com/repos/kyle-ce/api/assignees{/user}",
    branches_url: "https://api.github.com/repos/kyle-ce/api/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/api/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/api/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kyle-ce/api/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kyle-ce/api/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/api/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kyle-ce/api/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/api/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/api/stargazers",
    contributors_url: "https://api.github.com/repos/kyle-ce/api/contributors",
    subscribers_url: "https://api.github.com/repos/kyle-ce/api/subscribers",
    subscription_url: "https://api.github.com/repos/kyle-ce/api/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/api/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/kyle-ce/api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/api/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/kyle-ce/api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/api/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/api/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/api/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/api/downloads",
    issues_url: "https://api.github.com/repos/kyle-ce/api/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/api/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/api/labels{/name}",
    releases_url: "https://api.github.com/repos/kyle-ce/api/releases{/id}",
    deployments_url: "https://api.github.com/repos/kyle-ce/api/deployments",
    created_at: "2024-04-07T15:10:37Z",
    updated_at: "2024-08-31T17:51:12Z",
    pushed_at: "2024-08-31T17:51:09Z",
    git_url: "git://github.com/kyle-ce/api.git",
    ssh_url: "git@github.com:kyle-ce/api.git",
    clone_url: "https://github.com/kyle-ce/api.git",
    svn_url: "https://github.com/kyle-ce/api",
    homepage: null,
    size: 15,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 584855433,
    node_id: "R_kgDOItwviQ",
    name: "Calculator",
    full_name: "kyle-ce/Calculator",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/Calculator",
    description: "Simple macOS Clone Calculator JS",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/Calculator",
    forks_url: "https://api.github.com/repos/kyle-ce/Calculator/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/Calculator/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/Calculator/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/Calculator/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/Calculator/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/Calculator/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/Calculator/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/Calculator/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/Calculator/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/Calculator/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/Calculator/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/Calculator/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/Calculator/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/Calculator/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/Calculator/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/Calculator/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/Calculator/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/Calculator/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/Calculator/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/Calculator/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/Calculator/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/Calculator/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/Calculator/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/Calculator/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/Calculator/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/Calculator/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/Calculator/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/Calculator/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/Calculator/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/Calculator/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/Calculator/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/Calculator/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/Calculator/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/Calculator/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/Calculator/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/Calculator/deployments",
    created_at: "2023-01-03T17:30:59Z",
    updated_at: "2024-08-31T17:19:21Z",
    pushed_at: "2024-08-31T17:19:18Z",
    git_url: "git://github.com/kyle-ce/Calculator.git",
    ssh_url: "git@github.com:kyle-ce/Calculator.git",
    clone_url: "https://github.com/kyle-ce/Calculator.git",
    svn_url: "https://github.com/kyle-ce/Calculator",
    homepage: null,
    size: 51,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 802879198,
    node_id: "R_kgDOL9r23g",
    name: "clock-out",
    full_name: "kyle-ce/clock-out",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/clock-out",
    description: "Calculates 8hr clock out time with adjustable lunch period",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/clock-out",
    forks_url: "https://api.github.com/repos/kyle-ce/clock-out/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/clock-out/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/clock-out/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/clock-out/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/clock-out/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/clock-out/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/clock-out/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/clock-out/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/clock-out/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/clock-out/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/clock-out/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/clock-out/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/clock-out/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/clock-out/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/clock-out/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/clock-out/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/clock-out/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/clock-out/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/clock-out/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/clock-out/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/clock-out/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/clock-out/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/clock-out/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/clock-out/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/clock-out/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/clock-out/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/clock-out/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/clock-out/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/clock-out/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/clock-out/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/clock-out/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/clock-out/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/clock-out/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/clock-out/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/clock-out/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/clock-out/deployments",
    created_at: "2024-05-19T14:16:43Z",
    updated_at: "2024-05-19T18:09:17Z",
    pushed_at: "2024-05-19T18:09:14Z",
    git_url: "git://github.com/kyle-ce/clock-out.git",
    ssh_url: "git@github.com:kyle-ce/clock-out.git",
    clone_url: "https://github.com/kyle-ce/clock-out.git",
    svn_url: "https://github.com/kyle-ce/clock-out",
    homepage: null,
    size: 336,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 811166315,
    node_id: "R_kgDOMFlqaw",
    name: "clock-out-mobile",
    full_name: "kyle-ce/clock-out-mobile",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/clock-out-mobile",
    description: "Android App to calculate time",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/clock-out-mobile",
    forks_url: "https://api.github.com/repos/kyle-ce/clock-out-mobile/forks",
    keys_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/clock-out-mobile/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/clock-out-mobile/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/clock-out-mobile/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/clock-out-mobile/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/clock-out-mobile/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/clock-out-mobile/deployments",
    created_at: "2024-06-06T04:21:59Z",
    updated_at: "2024-08-31T17:55:44Z",
    pushed_at: "2024-06-16T20:50:19Z",
    git_url: "git://github.com/kyle-ce/clock-out-mobile.git",
    ssh_url: "git@github.com:kyle-ce/clock-out-mobile.git",
    clone_url: "https://github.com/kyle-ce/clock-out-mobile.git",
    svn_url: "https://github.com/kyle-ce/clock-out-mobile",
    homepage: null,
    size: 485,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Kotlin",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 834673189,
    node_id: "R_kgDOMcAaJQ",
    name: "cube-runner",
    full_name: "kyle-ce/cube-runner",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/cube-runner",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/cube-runner",
    forks_url: "https://api.github.com/repos/kyle-ce/cube-runner/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/cube-runner/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/cube-runner/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/cube-runner/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/cube-runner/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/cube-runner/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/cube-runner/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/cube-runner/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/cube-runner/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/cube-runner/deployments",
    created_at: "2024-07-28T02:20:18Z",
    updated_at: "2024-07-28T02:20:35Z",
    pushed_at: "2024-07-28T02:20:31Z",
    git_url: "git://github.com/kyle-ce/cube-runner.git",
    ssh_url: "git@github.com:kyle-ce/cube-runner.git",
    clone_url: "https://github.com/kyle-ce/cube-runner.git",
    svn_url: "https://github.com/kyle-ce/cube-runner",
    homepage: null,
    size: 6,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 616148854,
    node_id: "R_kgDOJLmvdg",
    name: "dalle-bot",
    full_name: "kyle-ce/dalle-bot",
    private: true,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/dalle-bot",
    description:
      "Discord bot that generates images from texts using openai API.",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/dalle-bot",
    forks_url: "https://api.github.com/repos/kyle-ce/dalle-bot/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/dalle-bot/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/dalle-bot/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/dalle-bot/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/dalle-bot/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/dalle-bot/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/dalle-bot/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/dalle-bot/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/dalle-bot/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/dalle-bot/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/dalle-bot/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/dalle-bot/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/dalle-bot/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/dalle-bot/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/dalle-bot/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/dalle-bot/deployments",
    created_at: "2023-03-19T18:43:56Z",
    updated_at: "2023-03-19T21:47:23Z",
    pushed_at: "2024-05-05T04:21:42Z",
    git_url: "git://github.com/kyle-ce/dalle-bot.git",
    ssh_url: "git@github.com:kyle-ce/dalle-bot.git",
    clone_url: "https://github.com/kyle-ce/dalle-bot.git",
    svn_url: "https://github.com/kyle-ce/dalle-bot",
    homepage: null,
    size: 89144,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "private",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 886342046,
    node_id: "R_kgDONNSBng",
    name: "discord-bot",
    full_name: "kyle-ce/discord-bot",
    private: true,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/discord-bot",
    description: "Default Discord Bot Template",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/discord-bot",
    forks_url: "https://api.github.com/repos/kyle-ce/discord-bot/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/discord-bot/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/discord-bot/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/discord-bot/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/discord-bot/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/discord-bot/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/discord-bot/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/discord-bot/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/discord-bot/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/discord-bot/deployments",
    created_at: "2024-11-10T19:13:04Z",
    updated_at: "2024-11-10T19:28:09Z",
    pushed_at: "2024-11-10T22:02:27Z",
    git_url: "git://github.com/kyle-ce/discord-bot.git",
    ssh_url: "git@github.com:kyle-ce/discord-bot.git",
    clone_url: "https://github.com/kyle-ce/discord-bot.git",
    svn_url: "https://github.com/kyle-ce/discord-bot",
    homepage: null,
    size: 32,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "private",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 825239093,
    node_id: "R_kgDOMTAmNQ",
    name: "kickstart.nvim",
    full_name: "kyle-ce/kickstart.nvim",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/kickstart.nvim",
    description: "A launch point for your personal nvim configuration",
    fork: true,
    url: "https://api.github.com/repos/kyle-ce/kickstart.nvim",
    forks_url: "https://api.github.com/repos/kyle-ce/kickstart.nvim/forks",
    keys_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/kickstart.nvim/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/kickstart.nvim/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/kickstart.nvim/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/kickstart.nvim/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/kickstart.nvim/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/kickstart.nvim/deployments",
    created_at: "2024-07-07T08:05:57Z",
    updated_at: "2024-07-07T08:05:57Z",
    pushed_at: "2024-07-07T06:15:18Z",
    git_url: "git://github.com/kyle-ce/kickstart.nvim.git",
    ssh_url: "git@github.com:kyle-ce/kickstart.nvim.git",
    clone_url: "https://github.com/kyle-ce/kickstart.nvim.git",
    svn_url: "https://github.com/kyle-ce/kickstart.nvim",
    homepage: null,
    size: 555,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 850419439,
    node_id: "R_kgDOMrBe7w",
    name: "kyle-ce.github.io",
    full_name: "kyle-ce/kyle-ce.github.io",
    private: true,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/kyle-ce.github.io",
    description: "Portfolio - To do: update this ",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io",
    forks_url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/forks",
    keys_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/kyle-ce.github.io/deployments",
    created_at: "2024-08-31T18:05:17Z",
    updated_at: "2024-08-31T19:29:16Z",
    pushed_at: "2024-08-31T18:08:40Z",
    git_url: "git://github.com/kyle-ce/kyle-ce.github.io.git",
    ssh_url: "git@github.com:kyle-ce/kyle-ce.github.io.git",
    clone_url: "https://github.com/kyle-ce/kyle-ce.github.io.git",
    svn_url: "https://github.com/kyle-ce/kyle-ce.github.io",
    homepage: null,
    size: 690,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "private",
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 837705326,
    node_id: "R_kgDOMe5ebg",
    name: "megamenu",
    full_name: "kyle-ce/megamenu",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/megamenu",
    description: "Modern Mega Menu",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/megamenu",
    forks_url: "https://api.github.com/repos/kyle-ce/megamenu/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/megamenu/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/megamenu/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/megamenu/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/megamenu/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/megamenu/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/megamenu/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/megamenu/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/megamenu/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/megamenu/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/megamenu/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/megamenu/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/megamenu/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/megamenu/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/megamenu/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/megamenu/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/megamenu/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/megamenu/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/megamenu/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/megamenu/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/megamenu/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/megamenu/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/megamenu/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/megamenu/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/megamenu/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/megamenu/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/megamenu/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/megamenu/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/megamenu/downloads",
    issues_url: "https://api.github.com/repos/kyle-ce/megamenu/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/megamenu/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/megamenu/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/megamenu/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/megamenu/labels{/name}",
    releases_url: "https://api.github.com/repos/kyle-ce/megamenu/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/megamenu/deployments",
    created_at: "2024-08-03T19:11:51Z",
    updated_at: "2024-08-05T03:42:58Z",
    pushed_at: "2024-08-04T19:09:16Z",
    git_url: "git://github.com/kyle-ce/megamenu.git",
    ssh_url: "git@github.com:kyle-ce/megamenu.git",
    clone_url: "https://github.com/kyle-ce/megamenu.git",
    svn_url: "https://github.com/kyle-ce/megamenu",
    homepage: null,
    size: 49,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 918841254,
    node_id: "R_kgDONsRnpg",
    name: "nextjs-server-action",
    full_name: "kyle-ce/nextjs-server-action",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/nextjs-server-action",
    description: "Ron",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/nextjs-server-action",
    forks_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/forks",
    keys_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/teams",
    hooks_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/nextjs-server-action/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/nextjs-server-action/deployments",
    created_at: "2025-01-19T01:56:10Z",
    updated_at: "2025-01-19T01:56:37Z",
    pushed_at: "2025-01-19T02:26:05Z",
    git_url: "git://github.com/kyle-ce/nextjs-server-action.git",
    ssh_url: "git@github.com:kyle-ce/nextjs-server-action.git",
    clone_url: "https://github.com/kyle-ce/nextjs-server-action.git",
    svn_url: "https://github.com/kyle-ce/nextjs-server-action",
    homepage: null,
    size: 62,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 914721889,
    node_id: "R_kgDONoWMYQ",
    name: "OctoSuite",
    full_name: "kyle-ce/OctoSuite",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/OctoSuite",
    description: "Easy webpage to delete github repos",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/OctoSuite",
    forks_url: "https://api.github.com/repos/kyle-ce/OctoSuite/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/OctoSuite/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/OctoSuite/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/OctoSuite/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/OctoSuite/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/OctoSuite/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/OctoSuite/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/OctoSuite/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/OctoSuite/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/OctoSuite/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/OctoSuite/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/OctoSuite/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/OctoSuite/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/OctoSuite/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/OctoSuite/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/OctoSuite/deployments",
    created_at: "2025-01-10T07:07:14Z",
    updated_at: "2025-02-01T23:58:39Z",
    pushed_at: "2025-02-01T23:58:36Z",
    git_url: "git://github.com/kyle-ce/OctoSuite.git",
    ssh_url: "git@github.com:kyle-ce/OctoSuite.git",
    clone_url: "https://github.com/kyle-ce/OctoSuite.git",
    svn_url: "https://github.com/kyle-ce/OctoSuite",
    homepage: null,
    size: 360,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 3,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 912246307,
    node_id: "R_kgDONl_GIw",
    name: "tic-tac-toe",
    full_name: "kyle-ce/tic-tac-toe",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/tic-tac-toe",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/tic-tac-toe",
    forks_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/tic-tac-toe/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/tic-tac-toe/deployments",
    created_at: "2025-01-05T02:43:20Z",
    updated_at: "2025-01-05T03:30:41Z",
    pushed_at: "2025-01-05T03:30:39Z",
    git_url: "git://github.com/kyle-ce/tic-tac-toe.git",
    ssh_url: "git@github.com:kyle-ce/tic-tac-toe.git",
    clone_url: "https://github.com/kyle-ce/tic-tac-toe.git",
    svn_url: "https://github.com/kyle-ce/tic-tac-toe",
    homepage: null,
    size: 3801,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 8,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 8,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 898782069,
    node_id: "R_kgDONZJTdQ",
    name: "todo-list",
    full_name: "kyle-ce/todo-list",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/todo-list",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/kyle-ce/todo-list",
    forks_url: "https://api.github.com/repos/kyle-ce/todo-list/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/todo-list/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/todo-list/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/todo-list/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/todo-list/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/todo-list/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/todo-list/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/todo-list/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/todo-list/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/todo-list/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/todo-list/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/todo-list/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/todo-list/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/todo-list/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/todo-list/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/todo-list/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/todo-list/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/todo-list/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/todo-list/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/todo-list/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/todo-list/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/todo-list/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/todo-list/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/todo-list/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/todo-list/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/todo-list/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/todo-list/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/todo-list/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/todo-list/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/todo-list/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/todo-list/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/todo-list/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/todo-list/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/todo-list/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/todo-list/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/todo-list/deployments",
    created_at: "2024-12-05T02:54:12Z",
    updated_at: "2024-12-05T02:54:12Z",
    pushed_at: "2024-12-05T02:09:33Z",
    git_url: "git://github.com/kyle-ce/todo-list.git",
    ssh_url: "git@github.com:kyle-ce/todo-list.git",
    clone_url: "https://github.com/kyle-ce/todo-list.git",
    svn_url: "https://github.com/kyle-ce/todo-list",
    homepage: null,
    size: 157,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 747510851,
    node_id: "R_kgDOLI4cQw",
    name: "travel-site-clone",
    full_name: "kyle-ce/travel-site-clone",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/travel-site-clone",
    description: "Simple HTML and CSS project ",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/travel-site-clone",
    forks_url: "https://api.github.com/repos/kyle-ce/travel-site-clone/forks",
    keys_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/travel-site-clone/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/travel-site-clone/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/travel-site-clone/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/travel-site-clone/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/travel-site-clone/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/travel-site-clone/deployments",
    created_at: "2024-01-24T04:24:24Z",
    updated_at: "2024-01-24T04:27:07Z",
    pushed_at: "2024-01-24T04:31:03Z",
    git_url: "git://github.com/kyle-ce/travel-site-clone.git",
    ssh_url: "git@github.com:kyle-ce/travel-site-clone.git",
    clone_url: "https://github.com/kyle-ce/travel-site-clone.git",
    svn_url: "https://github.com/kyle-ce/travel-site-clone",
    homepage: null,
    size: 1100,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 903630585,
    node_id: "R_kgDONdxO-Q",
    name: "ui-dashboard",
    full_name: "kyle-ce/ui-dashboard",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/ui-dashboard",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/ui-dashboard",
    forks_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/tags",
    blobs_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/languages",
    stargazers_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/contributors",
    subscribers_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/subscription",
    commits_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/ui-dashboard/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/downloads",
    issues_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kyle-ce/ui-dashboard/deployments",
    created_at: "2024-12-15T05:39:02Z",
    updated_at: "2024-12-24T06:11:32Z",
    pushed_at: "2024-12-24T06:11:29Z",
    git_url: "git://github.com/kyle-ce/ui-dashboard.git",
    ssh_url: "git@github.com:kyle-ce/ui-dashboard.git",
    clone_url: "https://github.com/kyle-ce/ui-dashboard.git",
    svn_url: "https://github.com/kyle-ce/ui-dashboard",
    homepage: null,
    size: 58,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 766767756,
    node_id: "R_kgDOLbPyjA",
    name: "weather",
    full_name: "kyle-ce/weather",
    private: false,
    owner: {
      login: "kyle-ce",
      id: 108813795,
      node_id: "U_kgDOBnxd4w",
      avatar_url: "https://avatars.githubusercontent.com/u/108813795?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kyle-ce",
      html_url: "https://github.com/kyle-ce",
      followers_url: "https://api.github.com/users/kyle-ce/followers",
      following_url:
        "https://api.github.com/users/kyle-ce/following{/other_user}",
      gists_url: "https://api.github.com/users/kyle-ce/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kyle-ce/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kyle-ce/subscriptions",
      organizations_url: "https://api.github.com/users/kyle-ce/orgs",
      repos_url: "https://api.github.com/users/kyle-ce/repos",
      events_url: "https://api.github.com/users/kyle-ce/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kyle-ce/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/kyle-ce/weather",
    description: "Learn Angular 1",
    fork: false,
    url: "https://api.github.com/repos/kyle-ce/weather",
    forks_url: "https://api.github.com/repos/kyle-ce/weather/forks",
    keys_url: "https://api.github.com/repos/kyle-ce/weather/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kyle-ce/weather/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kyle-ce/weather/teams",
    hooks_url: "https://api.github.com/repos/kyle-ce/weather/hooks",
    issue_events_url:
      "https://api.github.com/repos/kyle-ce/weather/issues/events{/number}",
    events_url: "https://api.github.com/repos/kyle-ce/weather/events",
    assignees_url:
      "https://api.github.com/repos/kyle-ce/weather/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kyle-ce/weather/branches{/branch}",
    tags_url: "https://api.github.com/repos/kyle-ce/weather/tags",
    blobs_url: "https://api.github.com/repos/kyle-ce/weather/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kyle-ce/weather/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kyle-ce/weather/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kyle-ce/weather/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kyle-ce/weather/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kyle-ce/weather/languages",
    stargazers_url: "https://api.github.com/repos/kyle-ce/weather/stargazers",
    contributors_url:
      "https://api.github.com/repos/kyle-ce/weather/contributors",
    subscribers_url: "https://api.github.com/repos/kyle-ce/weather/subscribers",
    subscription_url:
      "https://api.github.com/repos/kyle-ce/weather/subscription",
    commits_url: "https://api.github.com/repos/kyle-ce/weather/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kyle-ce/weather/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kyle-ce/weather/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kyle-ce/weather/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kyle-ce/weather/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kyle-ce/weather/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kyle-ce/weather/merges",
    archive_url:
      "https://api.github.com/repos/kyle-ce/weather/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kyle-ce/weather/downloads",
    issues_url: "https://api.github.com/repos/kyle-ce/weather/issues{/number}",
    pulls_url: "https://api.github.com/repos/kyle-ce/weather/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kyle-ce/weather/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kyle-ce/weather/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kyle-ce/weather/labels{/name}",
    releases_url: "https://api.github.com/repos/kyle-ce/weather/releases{/id}",
    deployments_url: "https://api.github.com/repos/kyle-ce/weather/deployments",
    created_at: "2024-03-04T04:50:42Z",
    updated_at: "2024-03-04T04:52:35Z",
    pushed_at: "2024-03-04T04:52:32Z",
    git_url: "git://github.com/kyle-ce/weather.git",
    ssh_url: "git@github.com:kyle-ce/weather.git",
    clone_url: "https://github.com/kyle-ce/weather.git",
    svn_url: "https://github.com/kyle-ce/weather",
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
];

export const handlers = [
  http.get("https://api.github.com/user", () => {
    return HttpResponse.json(mockUserData);
  }),
  http.get("https://api.github.com/user/repos", () => {
    return HttpResponse.json(mockRepositoryData);
  }),
];
