# WhatsApp Web Clone

This project reference from [https://www.youtube.com/watch?v=gzdQDxzW2Tw](https://www.youtube.com/watch?v=gzdQDxzW2Tw)

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## FRONTEND STACK

- React.JS
- Firebase for hosting

## BACKEND STACK

- Express.js
- MongoDB Cloud Database
- Heroku for hosting the backend

## `Firebase Setup`

1. Add Project
2. Create a project with the name `whatsapp-web-clone-mern`, click `Continue` button
3. Click `Continue` button
4. Click Web Icon to setup hosting
5. Fill the App nickname with `whatsapp-web-clone-mern`
6. Tick `Also set up Firebase Hosting for this app.`
7. Click `Register app` button
8. Click `Next` button
9. Copy Install Firebase CLI `npm install -g firebase-tools` and run in the terminal
10. Click Next
11. Skip part of Deploy to Firebase Hosting, because we will deploy to firebase after the app done
12. Click `Continue to the console`
13. DONE

## `Firebase Config File`

1. Open firebase console
2. Click `Setting Icon` button and then click `Setting Project`
3. Go down and find <b>Firebase SDK Snippet</b> area
4. Click `Config` radio button
5. Copy the entire script in the Config box
6. Create `firebase.js` file in the src folder
7. Paste the Config file from step 5

## `Install Material-UI`

1. Open Material-UI page [https://material-ui.com/](https://material-ui.com/)
2. Install Material-UI `$ npm install @material-ui/core`
3. Type `Icons` in the `Search...` box
4. Install Material Icons `$ npm install @material-ui/icons`
5. Click `search the full list of these icons.` link for search what icons we looking for.
6. Type `chat` in the `Search icons...` box to search chat icon
7. Choose the first one
8. Copy the script `import ChatIcon from '@material-ui/icons/Chat';` and paste to Sidebar.js
9. Find another icon like DonutLargeIcon and MoreVertIcon.

## `PUSHER`

Do this after you done with whatsapp-web-clone-backend point `## Install CORS` no 1 or after do git `Install cors, for security`

1. Open [https://pusher.com/](https://pusher.com/)
2. Sign in / Sign up
3. Going to your project `whatsapp-web-clone`
4. Click `Getting Started`
5. Copy some script in the file index.html, see in the following below<br/>
   and paste to App.js and edit litle bit

```
var pusher = new Pusher('5967c078021a0ed38791', {
  cluster: 'ap1'
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(JSON.stringify(data));
});
```

6. Install pusher `$ npm i pusher-js`
7. Test the pusher

- Open postman
- Setup to POST request
- Fill the request url with `http://localhost:5000/messages/new`
- Click `Body` > `raw` > change form `Text` to `JSON(application/json)`
- Fill with

```
{
	"message": "heeey anjaay it works",
	"name": "Mang Ali",
	"timestamp": "Im a demo timestamp...",
  "received": false
}
```

- Click `Send` button
- Have a look for result

## `Axios`

1. Install axios `$ npm i axios`
2. Create a axios.js file

![Screenshot Whatsapp web clone](https://github.com/wildenali/whatsapp-web-clone-frontend/blob/master/screenshoot-whatsapp-web-clone.PNG)
