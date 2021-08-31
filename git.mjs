
const stroeName = `${Math.random()*100}`
const storeUrl ="https://github.com/droog126/typescript-lab.git"
await $`git init`
await $`git add .`
try {
    await $`git commit -m "first commit"`
} catch (err) {
    console.log('你没有做出更改')
}

try {
    await $`git remote rm ${stroeName}`
} catch (err) {
    console.log('没有这个远程仓库')
}

await $`git remote add ${stroeName}  ${storeUrl} `
await $`git push ${stroeName} master`