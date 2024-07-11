-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "data_birthday" DATETIME NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
