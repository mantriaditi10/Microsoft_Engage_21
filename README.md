## Microsoft Engage 2021 - BLOGSPOT
A social tool to share and explore ideas in the form of blogs and articles to increase engagement with peers and studies during the pandemic.

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

