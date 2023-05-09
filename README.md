## A test task for Eltex company

The application is an Angular 15 SPA application
with the Devices page, which contains
the following functions:

- A table that displays a list of devices (random or pre-entered data), has sorting, filtering and pagination.

  ![Table sorting](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBlMWY3MDE4ZDBhNzAwZTI3MGJkM2RlM2NlODQ4ZWU3ODQyMGQ0MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/6o0hK7EsJA4mYHlWzz/giphy.gif)


- The "Add custom device" button, which opens a modal window with a form for entering data about the device.

  ![Create custom device](https://media.giphy.com/media/oRnk8Tz8HQnW8Y0ueq/giphy.gif)


- The "Add random device" button, which creates a device with randomly generated data.

  ![Create random device](https://media.giphy.com/media/0ExZkLD5zANOJDHTTq/giphy.gif)


- The "Delete device(s)" button, which is available only if at least one device is selected in the table.
  ![Remove selected devices](https://media.giphy.com/media/xLqb4FM2lWQCnlxsMK/giphy.gif)

## To start the application, do the following:

- Clone repository:
  ```
  git clone git@github.com:nnabse/test-eltex.git
  ```
- Install dependencies (npm):

  ```
  npm install
  ```
- Install dependencies (yarn):
  ```
  yarn
  ```
- Run application (npm)
  ```
  npm run start
  ```
- Run application (yarn)
  ```
  yarn run start
  ```

The application should run on http://localhost:4200, please make sure that port **4200 is NOT** busy.

The repository has branches **main** and **feat/subjects**.

The **feat/subjects** branch has the same functionality as the **main** branch,
but runs on RxJS BehaviorSubjects.
