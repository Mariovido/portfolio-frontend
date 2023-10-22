# PORTFOLIO FRONTEND

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This repository will be the repository containing the the frontend of the Portfolio.

The main functionality of this app is to make a visual page that retrieves the data from a backend or from a data file.

### Built With

The frameworks/libraries used to complete this project are:

- [React](https://react.dev)
- [Yarn](https://yarnpkg.com)
- [Vite](https://vitejs.dev)

<p align="right">(<a href="#portfolio-frontend">Back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before installing the software you must have installed the npm package. You can do it using the next command.

- npm
  ```bash
  npm install --global yarn
  ```

### Installation

_The steps to get working the project are the following ones:_

1. Clone the repo
    ```bash
    git clone https://github.com/Mariovido/portfolio-frontend.git
    ```
2. Run the following command.
    ```bash
    yarn install
    ```
3. Create an .env file called `.env` on the root directory and fill the fields with your data.
    ```env
    VITE_REACT_APP_USE_SERVER="ENTER IF YOU'RE USING AN API"
    VITE_REACT_APP_WEB_TITLE="ENTER YOUR TITLE OF THE PAGE"
    VITE_REACT_APP_BASE_URL="ENTER YOUR BASE URL"
    VITE_REACT_APP_BACKEND_URL="ENTER YOUR BACKEND URL"
    VITE_REACT_APP_USER_ID="ENTER YOUR USER ID"
    ```

<p align="right">(<a href="#portfolio-frontend">Back to top</a>)</p>

## Usage
_To start using the app you need to run the following steps:_

1. Open a terminal on the root folder
2. If you want to use it in dev purpose run the following command
    ```bash
    $ yarn dev
3. If you want to use it to run the tests run the following commands
    ```bash
    # unit tests
    $ yarn test

    # test coverage
    $ yarn test:cov
    ```
4. If you want to test if your build is working run the following commands
    ```bash
    # build the app
    $ yarn build

    # runs the built app
    $ yarn preview
    ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#portfolio-frontend">Back to top</a>)</p>

## Contact
Your Name - [@mariovido](https://github.com/Mariovido) - mario.vidaldom@gmail.com

Project Link: [https://github.com/Mariovido/portfolio-frontend](https://github.com/Mariovido/portfolio-frontend)

<p align="right">(<a href="#portfolio-frontend">Back to top</a>)</p>
