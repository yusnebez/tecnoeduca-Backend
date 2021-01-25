# Proyecto tecnoeduca

Create plataform for management of class in school. 

DataBase

## Teachers

The information of Teachers.

| Teacher Bd|
| --- | --- | 
| teacherid | Objectid | 
| username | String | 
| password  | String | 
| email | string | 
| name | string |
| asignatura | string | 
| course | array object | 

 
## Students

The information of Students.

| Students Bd|
| --- | --- | 
| studentid | Objectid | 
| username | String | 
| password  | String | 
| email | string | 
| asignatura | string | 
| name | String | 
| notas | number | 
| works | string |
| media | number | 
| course | array object | 

## Course

The information of Course.

| Course Bd|
| --- | --- | 
| courseid | Objectid | 
| teacherid | Objectid | 
| name | String | 
| studentid| Objectid | 
