# ToDo App

This is a simple ToDo application built with React.

## Overview

The ToDo app allows users to add tasks, mark tasks as completed, and delete tasks. It provides a visual representation of the tasks to be done, along with statistics on the number of pending tasks.

## Demo

![ToDo App Demo](https://github.com/MehekFatima/React-ToDo/blob/master/chrome-capture-2024-3-29.gif?raw=true)


## Getting Started

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.

## Features

- Add tasks: Users can input tasks to be added to their to-do list.
- Mark tasks as completed: Users can check off tasks as they are completed.
- Delete tasks: Users can remove tasks from the list.
- Statistics: The app provides statistics on the number of pending tasks.

## Usage

### Components

The app consists of the following components:

- **App**: The main component that orchestrates the application.
- **TaskInput**: Component for adding new tasks.
- **TaskItems**: Component for displaying individual tasks.
- **Stats**: Component for displaying statistics.

### Adding a Task

- Enter the task name in the input field.
- Press the "+" button or hit Enter to add the task to the list.

### Marking a Task as Completed

- Click on the checkbox next to the task name to mark it as completed.

### Deleting a Task

- Click on the delete icon (trash can) next to the task to delete it from the list.

### Statistics

- The statistics component displays the number of pending tasks.

## Implementation Details

### Local Storage

The application uses local storage to persist tasks even after the page is refreshed. Tasks are stored as an array of objects in the local storage under the key "todoList".


## Dependencies

The application uses the following dependencies:

- React: JavaScript library for building user interfaces.
- react-icons: Library for icons in React applications.





