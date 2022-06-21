
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (255) NOT NULL,
    "phone_number" BIGINT NOT NULL,
    "dob" DATE NOT NULL, 
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
	"user_id" INT REFERENCES "user" NOT NULL,
	"num_stars" INT,
	"comment" VARCHAR (5000),
	"inserted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "requested-call"(
	"id" SERIAL PRIMARY KEY,
	"member_id" INT REFERENCES "user" NOT NULL,
	"time" TIMESTAMPTZ NOT NULL,
	"inserted_at" TIMESTAMPTZ DEFAULT now(),
	"open" BOOLEAN DEFAULT true
);

CREATE TABLE "call"(
	"id" SERIAL PRIMARY KEY,
	"member_id" INT REFERENCES "user" NOT NULL,
	"ally_id" INT REFERENCES "user" NOT NULL,
	"date_time_started" TIMESTAMPTZ,
	"date_time_ended" TIMESTAMPTZ,
	"is_done_member" BOOLEAN DEFAULT false,
	"is_done_ally" BOOLEAN DEFAULT false,
	"accepted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "report"(
	"id" SERIAL PRIMARY KEY,
	"reviewer_id" INT REFERENCES "user" NOT NULL,
	"recipient_id" INT REFERENCES "user" NOT NULL,
	"call_id" INT REFERENCES "call" NOT NULL,
	"comment" VARCHAR (5000) NOT NULL,
	"inserted_at" TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "call-rating"(
	"id" SERIAL PRIMARY KEY,
	"reviewer_id" INT REFERENCES "user" NOT NULL,
	"recipient_id" INT REFERENCES "user" NOT NULL,
	"call_id" INT REFERENCES "call" NOT NULL,
	"num_stars" INT,
	"comment" VARCHAR (5000),
	"inserted_at" TIMESTAMPTZ DEFAULT now()
);

-- ALLY APPLICATION TO BE ADDED ONCE WE RECEIVE THE INFORMATION FROM ALEX
