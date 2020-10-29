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
- npx sequelize-cli db:seed:all

https://sequelize.org/master/manual/migrations.html

/api \$ npx sequelize init --force
/api \$ npx sequelize db:create

- seed creations
  npx sequelize-cli seed:generate --name Users && npx sequelize-cli seed:generate --name Notifications && npx sequelize-cli seed:generate --name NotificationsText && npx sequelize-cli seed:generate --name Images && npx sequelize-cli seed:generate --name Images && npx sequelize-cli seed:generate --name Users && npx sequelize-cli seed:generate --name Audios && npx sequelize-cli seed:generate --name Users

- migration statements

npx sequelize model:create --name Users --attributes id:uuid,username:string,password:string,position:enum:'{technician,management,admin}',about:string,avatar:string,city:string --force && npx sequelize model:create --name Notifications --attributes id:uuid,posterId:string,flags:enum:'{office,shop,field,all}',notificationTextId:string,imageId:string,audioId:string,videoId:string --force && npx sequelize model:create --name NotificationsTexts --attributes id:uuid,messageText:string --force && npx sequelize model:create --name Images --attributes id:uuid,imageLink1:string,imageLink2:string,imageLink3:string --force && npx sequelize model:create --name Audios --attributes id:uuid,audioLink1:string,audioLink2:string --force && npx sequelize model:create --name Videos --attributes id:uuid,videoLink1:string,videoLink2:string --force && npx sequelize migration:generate --name Users-Notifications-relationship && npx sequelize migration:generate --name Notifications-NotificationsTexts-relationship && npx sequelize migration:generate --name Notifications-Images-relationship && npx sequelize migration:generate --name Notifications-Audios-relationship && npx sequelize migration:generate --name Notifications-Video-relationship
