# ioco

To test app, use this url http://128.199.39.177:8000/app/#/employees

This shows a list of employees.  This list can also be searched by name or surname.
When you click on an employee it will take you to another page that has more info on the employee.

Tech used:


mysql for the db


node express for the backend server


angularjs for the front end


deployed to digitalocean


Filesystem:
iocoserver : This runs the middleware to connect to the db
ioco-front-end : Angularjs front end

Shortcomings:
This somehow took much longer than I expected and I did not get to finish the following things:
Did not get the app running in docker so ran it from digitalocean.
There is no update,new or delete functionality for employees.
No testing/tdd.

