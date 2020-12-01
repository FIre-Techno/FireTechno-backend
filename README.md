<p align="center">
  <img src="https://user-images.githubusercontent.com/70737408/100704735-91fa8900-33d8-11eb-8a7e-927eca2c5c61.jpg" width="500" height="500">
</p>

RESTful API Ankasa Ticketing built with Express Js and MySQL

## Tools
  * Node Js
  * Express Js
  * MySQL
  
## Getting Started
Before using our RESTful API, please install the method below

And clone our code using:
```git
$ git clone https://github.com/FIre-Techno/FireTechno-backend.git
```

## Installation
Before installing, make sure you already have installed [Node.js](https://nodejs.org/en/) and [XAMPP](https://www.apachefriends.org/download.html)

The installation process will immediately be carried out when you write the command below:
```bash
$ npm install
or
$ yarn
```

## Run API

##### Run with npm
```bash
$ npm start
```

##### Run with yarn
```bash
$ yarn start
```

##### Run with nodemon
```bash
$ nodemon start
```

## Table Structure in MySQL

##### Airpots
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT
|name|varchar(255)|NO||NULL|
|photo|varchar(255)|NO||NULL|
|star|varchar(10)|NO||NULL|
|review|varchar(100)|NO||NULL|

##### bubble_chat
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|total|varchar(100)|NO||NULL||NULL
|id_sender|int(11)|YES|FK|NULL|users.id|
|id_receiver|int(11)|YES|FK|NULL|users.id|

##### chats
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|created_at|datetime|YES||current_timestamp()||
|message|longtext|NO||NULL||
|id_sender|int(11)|YES|FK|NULL|users.id|
|id_receiver|int(11)|YES|FK|NULL|users.id|

##### cities
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|name|varchar(50)|NO||NULL||

##### classes
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|name|varchar(100)|NO||NULL||
|price|varchar(100)|NO||NULL||
|estimate|varchar(100)|NO||NULL||
|terminal|varchar(10)|NO||NULL||
|gate|varchar(10)|NO||NULL||
|id_destination|int(11)|YES|FK|NULL|destinations.id|
|id_airport|int(11)|YES|FK|NULL|airports.id|

##### destinations
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|name|varchar(100)|NO||NULL||
|city|varchar(50)|NO||NULL||
|photo|varchar(255)|NO||NULL||
|status|int(11)|NO||NULL||

##### notifications
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|is_open|int(11)|NO||NULL||
|title|varchar(255)|NO||NULL|
|description|longtext|NO||NULL|
|created_at|datetime|YES||current_timestamp||
|id_user|int(11)|YES|FK|NULL|users.id|

##### profiles
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|username|varchar(100)|NO||NULL||
|addres|longtext|YES||NULL||
|postcode|varchar(15)|YES||NULL||
|created_at|datetime|YES||current_timestamp()||
|id_user|int(11)|YES|FK|NULL|users.id|
|id_city|int(11)|YES|FK|NULL|cities.id|

##### transactions
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|unique_code|varchar(100)|NO||NULL||
|status|int(11)|NO||0||
|child|varchar(10)|NO||0||
|adult|varchar(10)|YES||0||
|type|int(11)|NO||0||
|departure_at|datetime|YES||NULL||
|created_at|datetime|NO||current_timestamp()||
|id_class|int(11)|YES|FK|NULL|classes.id|
|id_user|int(11)|YES|FK|NULL|users.id|

##### users
|Field|Type|Null|Key|Default|Extra|
|  ---| ---| ---|---|    ---|  ---|
|id|int(11)|NO|PRI|NULL|AUTO_INCREMENT|
|email|varchar(50)|NO||NULL||
|password|varchar(100)|NO||NULL||
|created_at|datetime|YES||current_timestamp()||
|phone|varchar(30)|YES||NULL||
|status|int(11)|NO||0||
|gcm_token|varchar(200)|YES||NULL||
