<h1 align="center">📚 MERN Book Store Web App 📚</h1>

<p align="center">
  <strong>No License Used</strong>
</p>

<p>This project was created to understand the MERN stack's basic CRUD operations, face more problems, and gain experience.</p>

<h2>🚀 Steps to Run This Project:</h2>

<ol>
  <li>Create a MongoDB connection from the <a href="https://www.mongodb.com">MongoDB website</a>.</li>
  <li>Clone my repository.</li>
  <li>Navigate to the <code>backend</code> folder in your code editor terminal.</li>
  <li>Create a config file called <code>config.js</code> in the root of the <code>backend</code> folder and define <code>PORT</code> and <code>mongoDBURL</code>. For example:
    <pre>
<code>export const PORT = 5555;
export const mongoDBURL = 'mongodb+srv://**********:******@*************.mongodb.net/**************/*****************************&*************'</code>
    </pre>
  </li>
  <li>In your <code>backend</code> folder, type <code>npm install</code>. After that, type <code>npm run dev</code>.</li>
  <li>Next, navigate to the <code>frontend</code> folder from your terminal and type <code>npm install</code>. After that, type <code>npm run dev</code>.</li>
</ol>

<h2>📖 Book Store Explanation:</h2>

<p>After running the book store project, you will see the table view (home page). If you run this project for the first time, you will see an empty table. Follow these steps to manage your books:</p>

<ol>
  <li>
    <strong>Add a Book:</strong>
    <ul>
      <li>Click the plus icon in the top right corner to navigate to the "Create Book" page.</li>
      <li>Fill in the book name, author, and publish year to create a new book.</li>
      <li>After creating a new book, you will be redirected to the home page where the new book will be listed.</li>
    </ul>
  </li>
  <li>
    <strong>Switch Views:</strong>
    <ul>
      <li>At the top center of the home page, there are two buttons: "Table" and "Card".</li>
      <li>The default view is the table. Click the "Card" button to see your added books in card view.</li>
    </ul>
  </li>
  <li>
    <strong>Edit a Book:</strong>
    <ul>
      <li>Both the card and table views have edit icons.</li>
      <li>Click the edit icon to navigate to the edit book page.</li>
      <li>Make the necessary changes to the book details and save them.</li>
    </ul>
  </li>
  <li>
    <strong>Delete a Book:</strong>
    <ul>
      <li>Both the card and table views have delete icons.</li>
      <li>Click the delete icon to navigate to the delete book page.</li>
      <li>Confirm the deletion to remove the book from the list.</li>
    </ul>
  </li>
  <li>
    <strong>Navigate Back:</strong>
    <ul>
      <li>Each page (except the home page) has a back button to navigate to the previously opened page.</li>
    </ul>
  </li>
</ol>

<h2>📷 Screenshots:</h2>

<h3>Home Page (Table View):</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/24e1614b-b4e6-45f4-87f1-8493b7268ab9" alt="Home Page Table View Screenshot" width="600">
</p>

<h3>Home Page (Card View):</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/830ec704-a569-4427-894a-ec0509e38dc2" alt="Home Page Card View Screenshot" width="600">
</p>

<h3>Create Book:</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/7bf3533f-f193-4fea-9a77-7942d219b349" alt="Create Book View Screenshot" width="600">
</p>

<h3>Edit Book:</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/d875a3e0-893d-4a0d-a48b-38bf3aaae87a" alt="Edit Book View Screenshot" width="600">
</p>

<h3>Delete Book:</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/be1044fd-d812-4846-b271-fc0e2fe4b92f" alt="Delete Book View Screenshot" width="600">
</p>

<h3>Show Book:</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/f4c0c413-5a64-43b3-a7f0-a16c5e36e493" alt="Show Book View Screenshot" width="600">
</p>

<h2>📝 How to Get MongoDB URL:</h2>

<p>To get the MongoDB URL:</p>
<ol>
  <li>Log in to your MongoDB account at <a href="https://www.mongodb.com">MongoDB website</a>.</li>
  <li>Create a new cluster or select an existing one.</li>
  <li>In the cluster view, click on the "Connect" button.</li>
  <li>Select "Connect your application" from the options.</li>
  <li>Copy the provided connection string (MongoDB URL).</li>
</ol>
