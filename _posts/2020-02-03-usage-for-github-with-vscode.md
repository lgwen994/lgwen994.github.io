---
title:  "Usage for github with VSCode"
published: true
permalink: usage_for_github_with_vscode.html
summary: "Usage for github with VSCode."
tags: [git]
---

## First : creating a new repository 
In your own github, create a new repository and the name is {username}.github.io, then push a index.html to this repository. Now you can give it a shot to access the URL - https://{username}.github.io

## Second : using VSCode
- Open the folder of programs, for example 'documentation-theme-jekyll-gh-pages'
{% include image.html file="vscode_openfolder.png" alt="vscode_openfolder" caption="open folder in VSCode" %}

- Init the git for this folder
Choose View -> Command Palette -> Git: Initialize Repository
{% include image.html file="vscode_git_init.png" alt="vscode_git_init" caption="init git for this folder" %}
The '.git' folder is created. 
- setting the config
Open the file '\documentation-theme-jekyll-gh-pages\.git\config' and add the followed scripts.
```
[remote "origin"]
	url = https://github.com/{username}/{repositoryname}
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
	rebase = false
```
- Choose the 'source control' tab, then operate resources

1. changes stage of files are shown in CHANGES
2. click the '+' to staged changes
3. click the 'right mark' to commit
4. click the 'pull' button
5. click the 'push' button
{% include image.html file="vscode_git_operation.png" alt="vscode_git_operation" caption="operate git" %}
- Troubleshooting

If there is the error message "fatal: refusing to merge unrelated histories" when git pull, using the command as below.
```
git pull origin master --allow-unrelated-histories
```