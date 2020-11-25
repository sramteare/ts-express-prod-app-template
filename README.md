# Express based API microservice template.
node express based production app Template written in Type Script
Features:
- jest based testing
    - watch support
    - coverage support in non watch mode
    - coverage threshold
    - easy module inclusion using @app in import path to include modules inside src/server/
- rate limit
- routing with versioning
- separation of concerns
- secure headers and cors support
- lanuage support
- script to debug
- Examples included
    - unit test
    - integration api test
    - example api

## How to install
```console
git clone git_url 
cd repo_folder
npm i
```
## How to run
```console
npm start
```
## How to build
```console
npm build
```
## How to test
```console
npm run test
```
## How to develop with testing watch
```console
npm run test:watch
```
## How to test debug (console)
```console
/** add `debugger` in the code where you want the debugging to break
    open chrome://inspect
    click on `Open dedicated DevTools for Node` to open debugger tools and
    run following command in console.
*/
npm run test:debug test/unit/server.test.ts
```
## How to test debug (vs code)
> click on run tab on left hand to open run launcher
> click on the cog(gear) icon to open launch.json
> in launch.json add the following to the end of configuration array
```javascript
,{
    "type": "node",
    "request": "launch",
    "name": "test debug",
    "skipFiles": [
        "<node_internals>/**"
    ],
    "cwd": "${workspaceFolder}",
    "runtimeExecutable": "npm",
    "runtimeArgs": ["run", "test:debug"]

}
```
> add debug breakpoint in the test code
> select `test debug` reference in run launcher and
> click run to run tests in debug.