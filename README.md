# Project REST-Rant

##Routes

|   Method  |       Path                |          Purpose                                |
|   GET     |       '/'                 | Home page                                       |
|   GET     | `/places`                 | Places index page                               |
|   POST    | `/places`                 | Create new place                                |
|   GET     | `/places/new`             | Form page for creating a new place              |
|   GET     | `/places/:id`             | Details about a particlar place                 |
|   PUT     | `/places/:id`             | Update a particular place                       |
|   GET     | `/places/:id/edit`        | Form page for editing an existing place       |  
|   DELETE  | `/places/:id`             | Delete a particular place                       |
|   POST    | `/places/:id/rant`        | Create a rant (comment) about a particular place|
|   DELETE  | `/places/:id/rant/:rantId`| Delete a rant (comment) about a particular place|
|   GET     |   *                       | 404 page (matches any route not define above)|   


REST-Rant is an app where users can review restaurants.

//Building a project Rest-Rant for the completion of the Back-End Devt & APIs
//This app will have a full CRUD in the project setup, stub three routes, and also for creatinga README file.

## Databases

**places**

|   Field    |    Type      |
|   _id      | Object ID    |
|   name     | string       |
|   city     | string       |
|   state    | string       |
|   cuisines | string       |
|   pic      | string       |

**reviews**

|   Field        |    Type               |
|   _id          | Object ID             |
|   place_id     | ref(places) Object_Id |
|   review       | Boolean               |
|   rating       | Number                |
|   comment      | String                |
|   reviewer     | String                |
