# Inventory Tracker

#### By _**Jacob Palaoro**_  

#### _a react application whith firebase database created for tracking pro motocross and have fantasy scoring profiles for users.WIP_  

---

## Table of Contents

**[Technologies Used](#technologies-used)  
[Description](#description)  
[Setup/Installation Requirements](#setup-and-installation-requirements)  
[Known Bugs](#known-bugs)  
[License](#license)**

---

## Technologies Used

* _Javascript_
* _React_
* _HTML_
* _CSS_
* _Node_
* _Jest_
* _firebase_
* _axios_
---
## Description

_This is my first self prompted application that is also my capstone project for epicodus. the application is set out to be able to track the ama pro motocross season, and keep track of riders results and give users fantasy points based off of finishing results._

---
## Setup and Installation Requirements

<details>
<summary><strong>Initial Setup</strong></summary>
<ol>
<li>Copy the git repository url
<li>Open a shell program and navigate to your desktop.
<li>Clone the repository for this project using the "git clone" command and including the copied URL.
<li>While still in the shell program, navigate to the root directory of the newly created file named "Fantasy_mx_sx/mx-results".
<li>From the root directory run npm install.
<li>create a firebase database
<li>create an env file with the following code, and your corresponding firebase database info. REACT_APP_FIREBASE_API_KEY =
REACT_APP_FIREBASE_AUTH_DOMAIN =
REACT_APP_FIREBASE_PROJECT_ID =
REACT_APP_FIREBASE_STORAGE_BUCKET =
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 
REACT_APP_FIREBASE_APP_ID = 
<li>then finally run npm run start, and you will be up and running. 

---
## Known Bugs

* _unfinsished project_

## License

_[MIT License](license)_

Copyright (c) 10/8/2022 Jacob Palaoro

### Research and Planning Log
####
Tuesday 8/30
*3:00pm 3:30pm email an ama rep on getting an official api to start project, hoping they can help.

*5:30pm - 7:00pm researching fantasy websites with devtools console.
#### Friday 9/16
* 8:40am - 10:10am look at ama motocross/supercross websites that live track riders using devtools console to try to trace api.
*  10:10am - 10:40am research data scraping.
* 10:40am - 11:05am write full proposal 
* 11:10am - 12:30pm more research of data scraping(scraping api, and web scraping) 
* 8:55pm - 9:10pm sending out another email to the ama trying to get access to live timing and scoring 
* 9:10pm - 9:40pm quickly finding out I'm not going to be able to use someone elses web scraper $$$$, and I'm going to have to build my own(:
* 9:50 - 10:30 researching creating my own web scraper.
* 10:50pm - 11:07pm  researching creating my own web scraper.

#### Sunday 9/18
* 10:00pm - 11:45pm start building web scraper.

#### monday 9/19
* 12:00pm - 1:00pm more web scraper research

#### tuesday 9/20
* 12:00pm - 1:00pm more web scraper work/research

#### wednesday 9/21
* 12:00pm - 1:00pm more web scraper work/research
* 5:30pm - 7:00pm try working with  webscraping service, but I think I just want to still build my own web scraper so i can work on quicker updates.
#### thursday 9/22
* 12:00pm - 1:00pm more web scraper work/research
* worked on a web scraper specifically for tables.

#### friday 9/23

* 10:30am - 11:30am re evauluate the different web scraper approaches, and update the log.
* 11:30am - 12:15pm found out how to get the fully build api from xhr request from live scoring on american motoctoss's website with url = http://americanmotocrosslive.com/xml/mx/RaceResults.json in postman!!
* 12:15pm - 1:15pm working on reverse engineering xhr url with postman.

#### saterday 9/24

* 5:30pm - 6:30pm working more on reverse engineering api to a react app.

#### sunday 9/25

* 1:50pm - 4:10pm still working on how to properly retrieve the data from postman
* 4:10pm - 7:00pm add infrastructure to extract the data into new objects.

#### wednesday 9/28
*5:30pm - 7:00pm

#### sunday 10/02
* 11:40pm - 3:45pm working on how to properly work with cors.
* 3:45pm - 5:15pm researching more on cors
* 5:15pm - 6:30pm still trying to find a way to use the data from the json file from americanmotocrosslive.com in my application without tripping cors

#### monday 10/03
* 3:00pm - 5:20pm realy dug through the headers from where the api comes from and couldnt figure outhow to break in, now going to just not have live scoring and manually update results at the end of race.

#### tuesday 10/04
8:15am - 9:05am find an example of help queue project with hooks, firebase and authorization and study it.

9:05am - 9:40am reorganizing project, and deleting files that are irrelevant .

9:40am - 1:50pm build out project to use json data built in instead of through api.

1;50 - 2:25pm format results into a table.

#### wednesday  
* 8:45am - 9:30am start building team file in components.
* 9:30am - 11:35am studying other fantasy sport apps, and add a few empty files.
* 1:15pm - 5:30pm making huge push to build project off help queue to try to get mvp.
* 11:00pm - 12:40am last ditch effort to get project to at least have an apealing front end before its presented.

#### thursday 10/06
* 8:40am -10:25am try to adjust css again to make the form look good again, but took it off again.



