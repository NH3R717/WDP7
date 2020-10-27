stage branch git command –
git subtree push --prefix reactapp capstone-project-2009-NH3R717 stage

new packages –
npm i --save-dev sequelize-cli && npm i sequelize && npm i pg && npm i express && npm i body-parser && npm i axios && npm i fs

sequelize int

- sequelize db:migrate:undo:all
- npx sequelize-cli db:seed:all

https://sequelize.org/master/manual/migrations.html

/api \$ npx sequelize init --force

/api \$ npx sequelize db:create

migration statements

npx sequelize model:create --name Users --attributes id:uuid,username:string,password:string,position:enum'{technician,management,admin}'about:text,avatar:string,city:string --force

npx sequelize model:create --name Notifications --attributes id:uuid,posterId:string,flags:enum'{office,shop,field,all}',notificationTextId:string,imageId:string,audioId:string,videoId:string --force

npx sequelize model:create --name NotificationsTexts --attributes id:uuid,messageText:string --force

npx sequelize model:create --name Images --attributes id:uuid,imageLink1:string,imageLink2:string,imageLink3:string --force

npx sequelize model:create --name Audios --attributes id:uuid,audioLink1:string,audioLink2:string --force

npx sequelize model:create --name Videos --attributes id:uuid,videoLink1:string,videoLink2:string --force

npx sequelize migration:generate --name Notifications-Users-relationship
