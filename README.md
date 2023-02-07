# vymoMTSA

#Backend
flow of control : in order of execution
app.js -> execution file calls the userRouter on callig "/api/user"
userRouter -> exported from user.router.js creates a post request to create user
createUser -> exported from user.controller.js creates a post request to create
create -> exported from user.service.js creates a entry to create user in database
database.js -> creates pool for database
.env -> environment file contains sensitive data


#Frontend 
flow of control : in order of execution
Index.tsx -> app.tsx -> contains routes for different pages 
each page contains a component with sub components
there are 2 pages  
first landing page that user interats with ,
second is the registration page only for registration of restaurants , rest pages are not implemented.

folders structure is broken  into assets(static files), components(render files) , styles(contains all scss in nested form)

A form is created to register user for a given restaurant, it uses react form , calls the  post request , sends the data and returns status code.

for better handling of data and states Redux could be used but it has no use in this application.