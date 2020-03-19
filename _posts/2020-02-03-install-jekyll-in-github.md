---
title:  "Install jekyll in github"
published: true
permalink: installjekyllingithub.html
summary: "building own blog in github by jekyll."
tags: [jekyll, git]
---

## First : creating a new repository 
In your own github, create a new repository and the name is {username}.github.io, then push a index.html to this repository. Now you can give it a shot to access the URL - https://{username}.github.io

## Second : installing Ruby and Jekyll
- Download and install RubyInstallers for windows 10.

Access URL - [RubyInstallers](https://rubyinstaller.org/downloads/) and download Ruby+Devkit x.x.x (x64).

- Download and install RubyGems

Access URL - [RubyGems](https://rubygems.org/pages/download/) and download ZIP version (x64).
Unpack the zip file, then enter the folder and run the following commands in CMD.
```
cd xxx\rubygems-x.x.x 
ruby setup.rb
```
- Install jekyll

Run the following commands in CMD.
```
gem install jekyll
```
- Create a new jekyll blog demo and run the serve

Run the following commands in CMD.
```
jekyll new testblog
cd testblog
jekyll serve
```
Access the localhost:4000

- Troubleshooting

The following line in the error message says it all.
```
jekyll is not currently included in the bundle, perhaps you meant to add it to your Gemfile?
```
Edit Gemfile to include the jekyll gem:
```
gem "jekyll", "~> 4.0"
```
or try
```
$ gem update --system
gem update
```
{% include links.html %}

- Download template from [Jekyll website](http://jekyllthemes.org/)

My template is the Jekyll Doc Theme 6.0 and run by the following commands
```
cd /documentation-theme-jekyll-gh-pages
jekyll serve
```
- Troubleshooting

If run the server is not successful, copy the Gemfile and Gemfile.lock from testblog folder to documentation-theme-jekyll-gh-pages folder and replace them.

## Third : uploading Jekyll blog to github
I used the VSCode to connect github. The details is shown in [Usage for github with VSCode](usage_for_github_with_vscode).
