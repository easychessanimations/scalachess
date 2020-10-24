
node bump.js

call npm publish --access=public

git add .

git commit -m "Bump"

git push github master

git push gitlab master
