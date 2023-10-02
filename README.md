# MOVIE LIST PAGE
    1. This page loads initially with Top-10 IMDB movies when user has not searched anything yet.
    2. Have used skeleton loader for cards as it drastically improves performance by reducing cummulative layout shift (CLS)
    3. The navigation bar has home button, search bar and liked-movies button.
        a.Home button will take you to the  starting page "https://solanki-julo.netlify.app/",
            but when user is in searching and alreading using the home page, nothing will happen
        b.Search bar has input field and search button, search button will only work when user provides a new search query
            For any 'invalid entry' in search input, website shows a 'Could not find results' in page title, and the fallback top-10
            movies list is shown
        c.Liked movies button takes us to LIKED MOVIES LIST page
    4. When user searches any movie name, website gets list of matching named movies. 
        a. This list is served by 'infinite scroll' (custom made by using custom made intersection observer). I have also used skeleton cards
            for improving user experience.
        b. Refreshing the page will take us back to the fallback list of top-10 movies. I can add query params for 
            search query to solve this and persist the search page.
    5. User can click on top right icon of "+" to add movies to favorites list. Clicking on it again will remove that movie from that list.
    6. Clicking on the Movie card user will be directed to movie-detail page.

# MOVIE DETAIL PAGE
    1. Will show details of movie.

# LIKED-MOVIE LIST PAGE
    1. Will have chosen movies, these are stored in local storage for persistence of information for users.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
