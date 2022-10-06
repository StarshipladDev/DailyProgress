
IF OBJECT_ID(N'dbo.Releases') IS NOT NULL  
   DROP TABLE [Releases];  
GO

IF OBJECT_ID(N'dbo.Abilities') IS NOT NULL  
   DROP TABLE [Abilities];  
GO
IF OBJECT_ID(N'dbo.Cards') IS NOT NULL  
   DROP TABLE [Cards];  
GO


CREATE TABLE Releases(
	Id 		INT AUTO_INCREMENT PRIMARY KEY,/*IDENTITY(1,1)*/ 
	Name 	VARCHAR(4000) NOT NULL
);

CREATE TABLE Abilities(
	Id 				INT AUTO_INCREMENT PRIMARY KEY,/*IDENTITY(1,1)*/ 
	Name 			VARCHAR(4000) NOT NULL,
	Description 	VARCHAR(4000) NOT NULL,
	WinsRequired	INT NOT NULL
);

CREATE TABLE Cards(
	Id 				INT AUTO_INCREMENT PRIMARY KEY,/*IDENTITY(1,1)*/ 
	ReleaseId 		INT ,
	Name 			VARCHAR(4000) NOT NULL,
	CardType		VARCHAR(255) NOT NULL,
	Ability1Id		INT ,
	Ability2Id		INT ,
	Ability3Id		INT ,
    FOREIGN KEY (Ability1Id) REFERENCES Abilities(Id),
    FOREIGN KEY (Ability2Id) REFERENCES Abilities(Id),
    FOREIGN KEY (Ability3Id) REFERENCES Abilities(Id),
	FOREIGN KEY (ReleaseId) REFERENCES Releases(Id)

)
GO;

INSERT INTO Cards(
CardType,
Name,
ReleaseId
) 
VALUES(
	'Gun',
	'Test Card',
	1
)
INSERT INTO Abilities(
	Name,
	Description,
	WinsRequired
)
VALUES(
	'TestAbility',
	'Tests That This Text Displays',
	3
)
INSERT INTO Releases(Name)
VALUES(
	'TestRelease'
)

INSERT INTO Cards(
Id,
CardType,
Name,
ReleaseId
) 
VALUES(
	2,
	'Armour',
	'Armour Pf Gpd',
	1
)


INSERT INTO Cards(
ReleaseId,
Name,
CardType
) 
VALUES 
1,
'Ganja',
'Drug'
)
