# Tweet Explorer App - README

Welcome to Tweet Explorer, your one-stop app to explore, search, and interact with over 100,000 tweets on 20+ topics! This README provides an overview of the app's features, installation instructions, and usage guidelines.

## Table of Contents

1. [Introduction](#1-introduction)
2. [Features](#2-features)
3. [Installation](#3-installation)
4. [Usage](#4-usage)
5. [Authentication](#5-authentication)
6. [Routes](#6-routes)
7. [Pagination](#7-pagination)
8. [Feedback and Support](#8-feedback-and-support)

## 1. Introduction

Tweet Explorer is a powerful web application that allows users to explore a vast collection of tweets from various topics. With the app's user-friendly interface, users can search for tweets based on keywords or categories. The home page showcases the top 100 most liked tweets, providing a quick glimpse into trending content. Additionally, registered users can interact with tweets, including liking, favoriting, posting, and deleting tweets.

## 2. Features

- **Diverse Topics**: Tweet Explorer offers a wide range of topics, allowing users to explore tweets related to their interests.
- **Top 100 Liked Tweets**: The home page displays the top 100 most liked tweets, making it easy to discover trending content.
- **Search by Keyword**: Users can search for tweets by entering specific keywords.
- **Search by Category**: Explore tweets by selecting from 20+ pre-defined categories.
- **User Authentication**: Sign up and log in to access personalized features.
- **Interact with Tweets**: Authenticated users can like, favorite, post, and delete tweets.
- **Pagination**: Convenient pagination on each route for smooth navigation through tweet results.

## 3. Installation

To run Tweet Explorer locally on your machine, follow these steps:

Clone the repository from [GitHub Repo](https://github.com/dayarmush/tweet-explorer) URL.

Navigate to the project directory.

Install the required dependencies using the package manager of your choice:
`npm install`

Start the JSON Server to simulate the backend with the following command:
`npm run json-server --watch new-db.json`

In a separate terminal or command prompt, run the app locally:
`npm start`

The npm run json-server command will start the JSON Server and serve the tweet data from the provided JSON file. It will act as the backend API for your Tweet Explorer app during the development phase.

## 4. Usage

Visit the app's home page to get started. Non-authenticated users can explore the top 100 most liked tweets and use the search functionality. To access personalized features, such as liking, favoriting, posting, and deleting tweets, sign up or log in.

## 5. Authentication

Tweet Explorer provides user authentication to enable personalized interactions. Users can create an account and log in securely. We utilize JSON Web Tokens (JWT) for authentication and user session management.

## 6. Routes

- **Home**: Displays the top 100 most liked tweets.
- **Search by Keyword**: Allows users to search for tweets based on keywords.
- **Search by Category**: Explore tweets from specific pre-defined categories.
- **User Profile**: View and manage user account details.

## 7. Pagination

To enhance the user experience, we have implemented pagination on all routes that display tweet results. Pagination splits the tweets into pages, making it easier to navigate and reducing loading times.

## 8. Feedback and Support

We value your feedback. If you have any suggestions, or need assistance, please don't hesitate to reach out.

Thank you for using Tweet Explorer! Happy tweeting and exploring! 🐦



