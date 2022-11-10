# A-Z Node Api Books

## Info init project

You **don't have to do this**, I already executed it while project initialization.

(Tu **n'as pas à executer**, c'est ce que j'ai fais pour initialiser le projet)

Initialization of `.git` hidden folder

```bash
git init
```

Initialization of `.gitignore` file and add node_modules in it

```bash
echo node_modules >> .gitignore
echo dist >> .gitignore
```

Connect my local repo and remote repo by url ([REPO_URL] to change with yours)

```bash
git remote add origin [REPO_URL]
```

Initialization of `package.json` file

```bash
npm init -y
```

Initialization of `tsconfig.json` file

```bash
tsc --init
```

and in the file `tsconfig.json`, and uncomment/modify this option `"outDir": "./dist"` (l.52)

---

Installation of dependencies :

```bash
npm i express cors
```

Installation of dev dependencies :

```bash
npm i -D typescript @types/express ts-node nodemon @types/cors
```
