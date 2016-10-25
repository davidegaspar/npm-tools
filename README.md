# npm-tools

npm tools

## use

```
npm install --save spacepaperplane/npm-tools#1.0.0
```

and add to package.json

```json
...
"scripts": {
  "clean": "clean",
  "version": "version",
  "push": "push",
  "pull": "pull",
  "deploy": "deploy",
  "health": "health",
  "...":"..."
},
...
```

## modules

optional `[target]` defaults to `target`

`<argument>` are required

#### package

```
npm run package name
npm run package version
```

#### clean

removes dir

```
npm run clean [target]
```

#### version

creates a file with version information

```
npm run version <tag> [target]
```

#### push

compress, tag and push target to S3 repo

```
npm run push <tag> <repo_bucket> [target]
```

#### pull

pull and decompress tag in S3 repo to target

```
npm run pull <tag> <repo_bucket> [target]
```

#### deploy

push contents of target to S3 environment

```
npm run deploy <env_bucket> [target]
```

#### health

GET request to /version endpoint and compare version

```
npm run pull <tag> <env_url> [target]
```

#### uglify

cli for [uglify-js](https://www.npmjs.com/package/uglify-js)

```
npm run uglify <glob_pattern>
```

#### cssify

node-sass + cssnano

```
npm run cssify <source_file> <target_file>
```

#### copy

copies files matching `[regex]` recursively from `<source>` to `[target]`

`[regex]` defaults to `.`

```
npm run copy <source> [regex] [target]
```

#### reactify

compile react app

```
npm run reactify <source_file> [target_file]
```
