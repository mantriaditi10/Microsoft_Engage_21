## Microsoft Engage 2021 - BLOGSPOT
A social tool to share and explore ideas in the form of blogs and articles to increase engagement with peers and studies during the pandemic.

---
### Built With 
* Server side Developement: 
  * [Node.js](https://nodejs.org/en/)
  * [Express.js](https://expressjs.com/) 
* Client Side Developement: 
  * [React.js](https://reactjs.org/)
  * [Material UI](https://mui.com/)
* Databse and Storage:
  * [MongoDB Atlas](https://www.mongodb.com/atlas) (Database)
  * [Cloudinary](https://cloudinary.com/products/programmable_media?utm_source=google&utm_medium=cpc&utm_campaign=RCore&utm_content=559354598371&utm_term=cloud%20image%20storage&gclid=Cj0KCQiAy4eNBhCaARIsAFDVtI0smqz_Ks7g8S6gQvVK56GI_ICNlTAMHm1beW0-kOGG7FagPVSZ2I8aAhpsEALw_wcB) (For Storing Media)
---
### Prerequisites
To locally set up this project, you will require Node js. 
If you already have Node js, you can skip this step. Otherwise, you can install it from the URL below:
* [Install Node js](https://nodejs.org/en/download/)
* Check correct installation by checking version:
  ```sh
  node -v
  ```
  ```sh
  npm -v
  ```
---
### Environment Setup
1. Clone the repo or download the zip file.
   ```sh
   git clone https://github.com/mantriaditi10/Microsoft_Engage_21.git
   ```
2. Install NPM packages and nodemon for Server Side:
   Move to Microsoft_Enagage_21 directory
    ```sh
   cd server
   ```
   ```sh
   npm install
   ```
   ```sh
   npm install nodemon
   ```
3. Install NPM packages for Client Side:
   Move to Microsoft_Enagage_21 directory
    ```sh
   cd client
   ```
   ```sh
   npm install
   ```
4. Migrate to the server and client directories in separate cmd promts and run
    ```sh
   npm start
   ```
   in both to launch the server side and client side.
   
   Prototype will be launched on [http://localhost:3000](http://localhost:3000)
   (if not automatically launched on browser, navigate to browser and open the URL)
   
---
   
## Understanding the Folder Structure for the project

### in `/client/src`
 * `index.js`: the entry point file for the application. It renders the main `<App>` component.
 * `App.js`: the main application component.
 * `/actions`: 
   * `auth.js`: funtions to dispatch Signin, Signup related actions
   * `blogPosts.js`: functions to dispatch all actions related to blogs.(ex. fetch blog(s), create, like, bookmark, comment)
 * `/api`: 
   * `index.js`: logic to make HTTP requests to our server-side APIs
 * `/components`: 
   * `Auth`: contains `<Auth>` and `<Input>` components used for Signin Signup Pages
   * `BlogPost`: all Blog related components
      * `BlogPage`: `<MainPage>` -> (`<FilterSideBar>` and (`<Posts>` -> `<Post>`)) forming the Landing Page.
      * `PostForm`: `<CreatePost>` page for creating a new post.
      * `SingleBlog`: `<SingleBlogPost>` -> `<CommentSection>` Page rendering a single post and its comment section.
   * `NavBar`: `<NavBar>` buttons to redirect to Home Page and Logging Out
 * `/constants`:
   * `actionTypes.js`: stores various actionTypes as variables to avoid errors due to spelling mistakes
 * `/reducers`:
  * `auth.js`: reducer functions for authentication related actions
  * `blogPosts.js`: reducer functions for blog related actions
  * `index.js`: sets up root reducer by using `combineReducers` 
---
### in `/server`
 * `controllers`: all business logic 
   * `blogPosts.js`: contains logic for all blog related actions
   * `user.js`: contains sigin, signup related business logic
 * `middlewares`: 
   * `authentication.js`: business logic for using Jwt as authentication module
 * `models`: contains all ORM models (called `Schemas` in mongoose terminology)
   * `blogPost.js`: BlogPost Schema
   * `user.js`: User Schema
 * `routes`: contain all express routes
   * `blogPosts.js`: routes related to blogs
   * `user.js`: routes related to user signup, signin
 * `.gitignore`: contains the list of files that should not be committed in a git push.
 * `index.js`: entry point to the application
 * `package.json`: holds all the metadata and dependencies required for the project
---
