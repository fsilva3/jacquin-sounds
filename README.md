# Jacquin Sounds

Jacquin Sounds is a web application that plays various sound clips when you click the buttons on the page. The project is built using React and can be run locally or deployed to Firebase.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- Firebase CLI (for deployment)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/fsilva3/jacquin-sounds.git
    cd jacquin-sounds
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running Locally

To run the application locally, use the following command:
```sh
npm start
```
This will start the development server and open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, use the following command:
```sh
npm run build
```
This will generate a `build` folder containing the optimized production files.

### Deployment

To deploy the application to Firebase Hosting, use the following command:
```sh
npm run deploy
```
Make sure you have configured Firebase CLI with your project before deploying.

## Project Structure

- [public](http://_vscodecontentref_/1): Contains static assets and the HTML template.
- [src](http://_vscodecontentref_/2): Contains the source code of the application.
    - `components/`: Contains React components.
    - `store/`: Contains the sound data and context.
    - `App.js`: Main application component.
    - `index.js`: Entry point of the application.
    - `index.scss`: Global styles.

## License

This project is licensed under the MIT License.