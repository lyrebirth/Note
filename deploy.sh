#!/usr/bin/env sh
###
 # @Author: liyi
 # @Date: 2022-05-13 11:15:42
 # @LastEditors: liyi
 # @LastEditTime: 2022-05-13 11:47:47
 # @Description: 
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:BoneSakura/NoteWeb.git master

cd -