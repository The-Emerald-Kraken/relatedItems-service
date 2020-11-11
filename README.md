# Recreational Engineer Interface

> Recreational Engineer InterfaceAlso Known as R.E.I. is an interactive ecommerce experience constructed with service oriented architecture, MVC and the MERN stack. MongoDB, Express, ReactJS, NodeJS.

> This specific component is the related items section, similar to what you would see in any e-commerce site (Amazon, google shopping, etc). It is a carousel gallery that shows a list of items that other user were interested in. This is completed by utilizing the main products id (i.e. the originally selected item) and searches the database for the most view products with relation to the item.


## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)

## Usage

> 1. Fork and clone the repo 
> 2. Npm install
> 3. Start the server via terminal with the commands npm start    ( all script commands can be found in package.json ) 
> 4. Run webpack via terminal with the commands npm run react-dev ( all script commands can be found in package.json ) 
> 5. Open Browser to localhost:3004                               ( port can be found in server/server.js )

# API DOCS
Find My Furry Friend

## Open Endpoints
Open Endpoints require no Authentication

* Add to lost pets in the database: `Post /api/LostForm`
* Retrieve List of pets: `Get /api/Pets`

## Endpoints that require Authentication
* Send SMS: `Post /leads` (this requires Twilio.Config.js to be set up )

## Contact
- Logan Smith - Lsmith2895@gmail.com
- Profile     - https://github.com/Lsmith2895
- LinkedIn    - https://www.linkedin.com/in/logansmith2895/
