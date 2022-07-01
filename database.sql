
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"first_name" VARCHAR (255),
	"last_name" VARCHAR (255),
    "email" VARCHAR (255) NOT NULL,
    "phone_number" BIGINT NOT NULL,
    "dob" DATE NOT NULL,
    "city" VARCHAR (255), 
    "profile_pic" VARCHAR (1000),
    "verify_pic" VARCHAR (1000),
    "facebook_link" VARCHAR (1000),
    "twitter_link" VARCHAR (10000),
    "instagram_link" VARCHAR (1000),
    "average_stars" INT,
    "inserted_at" TIMESTAMPTZ DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT now(),
    "is_ally" BOOLEAN DEFAULT false,
    "is_admin" BOOLEAN DEFAULT false,
    "is_reported" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "is_blocked" BOOLEAN DEFAULT false,
    "delete_requested" BOOLEAN DEFAULT false
    	CHECK (phone_number < 9999999999),
    	CHECK (phone_number > 1999999999)    
);

-- NOTE: client-side logic to ensure users are over 18 and have provided valid email and 
-- phone numbers are necessary even with checks. Consider splitting PH into area code and 
-- number and making area code an enum. Look into premade phone number verification options. 

CREATE TABLE "general-comment"(
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"num_stars" INT,
	"comment" VARCHAR (5000),
	"inserted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "requested-call"(
	"id" SERIAL PRIMARY KEY,
	"member_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"time" TIMESTAMPTZ NOT NULL,
	"inserted_at" TIMESTAMPTZ DEFAULT now(),
	"open" BOOLEAN DEFAULT true
);

CREATE TABLE "call"(
	"id" SERIAL PRIMARY KEY,
	"member_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"ally_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"requested_call_id" INT REFERENCES "requested-call" ON DELETE CASCADE NOT NULL,
	"date_time_started" TIMESTAMPTZ,
	"date_time_ended" TIMESTAMPTZ,
	"is_done_member" BOOLEAN DEFAULT false,
	"is_done_ally" BOOLEAN DEFAULT false,
	"accepted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "report"(
	"id" SERIAL PRIMARY KEY,
	"reviewer_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"recipient_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"call_id" INT REFERENCES "call" NOT NULL,
	"comment" VARCHAR (5000) NOT NULL,
	"inserted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "call-rating"(
	"id" SERIAL PRIMARY KEY,
	"reviewer_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"recipient_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"call_id" INT REFERENCES "call" NOT NULL,
	"num_stars" INT,
	"comment" VARCHAR (5000),
	"inserted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "ally-application"(
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"inserted_at" TIMESTAMPTZ DEFAULT now(),
	"updated_at" TIMESTAMPTZ DEFAULT now(),
	"answer_1" VARCHAR (1000),
	"answer_2" VARCHAR (1000),
	"answer_3" VARCHAR (1000),
	"answer_4" VARCHAR (1000),
	"is_complete" BOOLEAN DEFAULT false,
	"is_approved" BOOLEAN
);

INSERT INTO "public"."user"("username","password","first_name","last_name","email","phone_number","dob","profile_pic","verify_pic","facebook_link","twitter_link","instagram_link","average_stars","inserted_at","updated_at","is_ally","is_admin","is_reported","is_active","is_blocked","delete_requested")
VALUES
(E'member',E'$2a$10$Pmc81qgIsgodtZ5oewDgtOMO/VSMN86RpPu8wp6zItpkKk1M.Cq9a',NULL,NULL,E'member@heyallyx.com',2121234567,E'1989-01-21',NULL,NULL,NULL,NULL,NULL,NULL,E'2022-06-21 16:23:55.778121-05',E'2022-06-21 16:23:55.778121-05',FALSE,FALSE,FALSE,TRUE,FALSE,FALSE),
(E'ally',E'$2a$10$uDFEOBXSpXse1vL8uWpEAuE5YPqJKmiENAg8n74ebkQdbWVV3GDjS',NULL,NULL,E'ally@heyallyx.com',9171234567,E'1991-06-21',NULL,NULL,NULL,NULL,NULL,NULL,E'2022-06-21 16:35:35.027964-05',E'2022-06-21 16:35:35.027964-05',TRUE,FALSE,FALSE,TRUE,FALSE,FALSE),
(E'admin',E'$2a$10$MRth28l6HcDfakKNi6pZF.dRh63JnDK1.N9kA2hzeC8oo6UXIHk8W',NULL,NULL,E'admin@heyallyx.com',3471234567,E'1986-06-21',NULL,NULL,NULL,NULL,NULL,NULL,E'2022-06-21 16:36:53.483141-05',E'2022-06-21 16:36:53.483141-05',FALSE,TRUE,FALSE,TRUE,FALSE,FALSE);

