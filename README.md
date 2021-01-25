# Proyecto tecnoeduca

A plataform for management of class in school. 

# Description

A plataform for management of class in school.  Written in JavaScript using
NodeJS, express.js.


## DataBase in Mongo Atlass

### Teachers

The information of Teachers.

| Name | Type |
| --- | --- | 
| teacherid | Objectid | 
| username | String | 
| password  | String | 
| email | string | 
| name | string |
| asignatura | string | 
| course | array object | 

 
### Students

The information of Students.

| Name | Type |
| --- | --- | 
| studentid | Objectid|
| username | String | 
| password  | String | 
| email | string | 
| asignatura | string | 
| name | String | 
| notas | number | 
| works | string |
| media | number | 
| course | array object | 

### Course

The information of Course.

| Name | Type |
| --- | --- | 
| courseid | Objectid | 
| teacherid | Objectid | 
| name | String | 
| studentid| Objectid | 
