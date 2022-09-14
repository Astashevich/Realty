create table [House] (
	[Id] int IDENTITY(1,1),
	[CreationDateTime] datetime,
	[Address] nvarchar(max),
	[MaxFloor] int,
	[BuildYear] int,
	[WallMaterial] nvarchar(256),
	PRIMARY KEY ([Id])
);

create table [Apartment] (
	[Id] int IDENTITY(1,1),
	[CreationDateTime] datetime,
	[HouseId] int,
	[Floor] int,
	[Price] float,
	[RoomAmount] int,
	[LivingSpace] float,
	PRIMARY KEY ([Id])
);

ALTER TABLE [Apartment] ADD CONSTRAINT
	FK_Apartment_House_HouseId FOREIGN KEY ([HouseId]) REFERENCES [House]([Id]);

CREATE INDEX Apertment_HouseId ON [Apartment] ([HouseId]);

INSERT INTO [House] ([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES ('20210620', 'Minsk, Bogdanovicha st., 123', 1986, 'brick', 7);
INSERT INTO [House] ([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES ('20220513', 'Minsk, Olesheva st., 3', 2016, 'monolith', 10);
INSERT INTO [House] ([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES ('20220914', 'Zhlobin, Kozlova st., 31g', 2020, 'monolith', 11);

INSERT INTO [Apartment] ([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES ('20220321', 1, 6, 65000.99, 1, 43.4);
INSERT INTO [Apartment] ([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount],[LivingSpace]) VALUES ('20220620', 2, 3, 86500.50, 2, 52.3);
INSERT INTO [Apartment] ([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount],[LivingSpace]) VALUES ('20220221', 1, 7, 73000, 3, 86.5);
INSERT INTO [Apartment] ([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount],[LivingSpace]) VALUES ('20220813', 3, 10, 42000, 2, 51.7);