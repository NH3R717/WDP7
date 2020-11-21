# Project Setup & Notes

git reset --soft HEAD~1


stage branch git command –
git subtree push --prefix reactapp capstone-project-2009-NH3R717 stage

new packages –
npm i --save-dev sequelize-cli && npm i sequelize && npm i pg && npm i express && npm i body-parser && npm i axios && npm i fs

sequelize int

- npx sequelize init --force
- npx sequelize db:create
- npx sequelize db:migrate

- npx sequelize db:migrate:undo:all
- npx sequelize db:migrate:undo --name 20201028123541-create-users && npx sequelize db:migrate:undo --name 20201028123542-create-notifications && npx sequelize db:migrate:undo:all


- npx sequelize-cli db:seed:all
- npx sequelize-cli db:seed:undo:all

https://sequelize.org/master/manual/migrations.html

/api \$ npx sequelize init --force
/api \$ npx sequelize db:create

## migration – tables statements

npx sequelize model:create --name Users --attributes id:uuid,username:string,email:string,password:string,position:enum:'{technician,management,admin}',about:string,avatar:string,city:string --force && npx sequelize model:create --name Notifications --attributes id:uuid,flags:enum:'{office,shop,field,all}' --force && npx sequelize model:create --name Audios --attributes id:uuid,audioLink1:string,audioLink2:string --force && npx sequelize model:create --name Images --attributes id:uuid,imageLink1:string,imageLink2:string,imageLink3:string --force && npx sequelize model:create --name NotificationsTexts --attributes id:uuid,messageText:string --force npx sequelize model:create --name Videos --attributes id:uuid,videoLink1:string,videoLink2:string --force

## migration – tables statements update

npx sequelize model:create --name Users --attributes id:uuid,username:string,password:string,position:enum:'{technician,management,admin}',about:string,avatar:string,city:string --force && npx sequelize model:create --name Notifications --attributes id:uuid,flags:enum:'{office,shop,field,all}' --force && npx sequelize model:create --name Audios --attributes id:uuid,notificationId:uuid,audioLink1:string,audioLink2:string --force && npx sequelize model:create --name Images --attributes id:uuid,notificationId:uuid,imageLink1:string,imageLink2:string,imageLink3:string --force && npx sequelize model:create --name NotificationsTexts --attributes id:uuid,notificationId:uuid,messageText:string --force npx sequelize model:create --name Videos --attributes id:uuid,notificationId:uuid,videoLink1:string,videoLink2:string --force

- npx sequelize model:create --name Notifications --attributes id:uuid,flags:enum:'{office,shop,field,all}',audiosIs:uuid,imagesId:uuid,notificationsTextsId:uuid,videosId:uuid --force

## migration – relations statements

npx sequelize migration:generate --name Notifications-relationships

npx sequelize migration:generate --name Users-Notifications-relationship && npx sequelize migration:generate --name Notifications-NotificationsTexts-relationship && npx sequelize migration:generate --name Notifications-Images-relationship && npx sequelize migration:generate --name Notifications-Audios-relationship && npx sequelize migration:generate --name Notifications-Video-relationship

## seed creations statements

npx sequelize-cli seed:generate --name Users && npx sequelize-cli seed:generate --name Notifications && npx sequelize-cli seed:generate --name NotificationsTexts && npx sequelize-cli seed:generate --name Images && npx sequelize-cli seed:generate --name Audios && npx sequelize-cli seed:generate --name Videos

## NPM Install eslint/air-bnb

npm i eslint --save-dev && npm i eslint-config-airbnb --save-dev && npm i eslint-config-airbnb-base --save-dev && npm i eslint-config-prettier --save-dev && npm i eslint-plugin-import --save-dev && npm i eslint-plugin-jsx-a11y --save-dev && npm i eslint-plugin-prettier --save-dev && npm i eslint-plugin-react --save-dev && npm i lint-staged --save-dev && npm i husky --save-dev && npm i prettier --save-dev