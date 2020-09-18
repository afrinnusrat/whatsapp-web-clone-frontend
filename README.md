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
5. Click `search the full list of these icons.` link for search what icons we need.
