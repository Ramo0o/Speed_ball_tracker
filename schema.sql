-- CREATE TABLE "players"{
--     "id" INTEGER,
--     "first_name" TEXT UNIQUE,
--     "last_name" TEXT UNIQUE,
--     "gender" CHECK (gender IN ("male","female"),
--     "age_group" INTEGER CHECK ("age_group" IN (9,11,1)),
--     PRIMARY KEY("id")
-- };

CREATE TABLE "numbers"(
    "id" INTEGER,
    "first_name" TEXT UNIQUE,
    "last_name" TEXT UNIQUE,
    "player_id" ,
    "left" INTEGER,
    "right" INTEGER,
    "front" INTEGER,
    "back" INTEGER,
    "duration" INTEGER CHECK("duration" IN (15,30,60)),
    "date" DEFAULT(CURRENT_DATE)
);