CREATE SCHEMA `stv`;

/*Creating table to store Country data*/
CREATE TABLE stv.Country (
  Id int(11),
  Name varchar(50),
  Active tinyint(1),
PRIMARY KEY (Id));

CREATE TABLE stv.City (
  Id int(11),
  Country_id int(11),
  Name varchar(50),
  Active tinyint(1),
  PRIMARY KEY (Id),
  FOREIGN KEY (Country_id) REFERENCES Country (Id));

CREATE TABLE stv.Package (
  Id int(11),
  Name varchar(50),
  Channels varchar(100),
  Pack_price decimal(11,2),
  Validity int(5),
  Active tinyint(1),
PRIMARY KEY (Id));

CREATE TABLE stv.Customer (
  Id int(11),
  Name varchar(50),
  Gender varchar(1),
  Email_id varchar(50),
  Mobile_no varchar(12),
  Photo varchar(50),
  Address1 varchar(50),
  Address2 varchar(50),
  City_id int(11),
  Country_id int(11),
  Active tinyint(1),
  PRIMARY KEY (Id),
  FOREIGN KEY (Country_id) REFERENCES Country (Id),
  FOREIGN KEY (City_id) REFERENCES City (Id));
  
  CREATE TABLE stv.Subscription (
  Id int(11),
  Customer_id int(11),
  Package_id int(11),
  Start_date date,
  End_date date,
  Active tinyint(1),
  PRIMARY KEY (Id),
  FOREIGN KEY (Customer_id) REFERENCES Customer (Id),
  FOREIGN KEY (Package_id) REFERENCES Package (Id));

INSERT INTO stv.Country (`Id`,`Name`, `Active`) VALUES (1234,'India',1);
INSERT INTO stv.City (`Id`, `Country_id`, `Name`, `Active`) VALUES(5678,1234,'Pune',1);
INSERT INTO stv.City (`Id`, `Country_id`, `Name`, `Active`) VALUES(901,1234,'Mumbai',1);