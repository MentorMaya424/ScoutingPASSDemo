{
  "title": "Great Pit Scout 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "k": "Kit of Parts<br>",
        "w": "West Coast/Custom 6 Wheel Tank<br>",
        "t": "Custom 8 Wheel Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
  ],
  "auton": [
    { "name": "Intake 1",
      "code": "In1",
      "type": "radio",
      "choices": {
        "r": "Roller<br>",
        "c": "claw<br>",
        "v": "vacuum<br>",
        "n": "none"
      },
      "defaultValue": "n"
    { "name": "Intake 2",
      "code": "In2",
      "type": "radio",
      "choices": {
        "r": "Roller<br>",
        "c": "claw<br>",
        "v": "vacuum<br>",
        "n": "none"
      },
      "defaultValue": "n"
    { "name": "Effective Intake Width in Inches",
      "code": "eiw",
      "type": "number",
      "defaultValue": "0"
     },
    { "name": "High Node Scorer",
      "code": "arm",
      "type": "radio",
      "choices": {
        "r": "Roller<br>",
        "c": "claw<br>",
        "v": "vacuum<br>",
        "n": "none"
      },
      "defaultValue": "n" 
    { "name": "Forks",
      "code": "fk",
      "type": "bool"
      },
  ],
  "teleop": [
    { "name": "Degree of Freedom 1",
      "code": "dof1",
      "type": "radio",
      "choices": {
        "e": "Elevator<br>",
        "r": "Rack and Pinion<br>",
        "t": "Telescope<br>",
        "m": "motor rotation<br>",
        "s": "servo<br>",
        "p": "pnuematic<br>",
        "l": "lead screw<br>",
        "o": "Other"
        "n": "Other"
      },
      "defaultValue": "n"
   { "name": "Degree of Freedom 2",
      "code": "dof2",
      "type": "radio",
      "choices": {
        "e": "Elevator<br>",
        "r": "Rack and Pinion<br>",
        "t": "Telescope<br>",
        "m": "motor rotation<br>",
        "s": "servo<br>",
        "p": "pnuematic<br>",
        "l": "lead screw<br>",
        "o": "Other"
        "n": "Other"
      },
      "defaultValue": "n"     
    { "name": "Degree of Freedom 3",
      "code": "dof3",
      "type": "radio",
      "choices": {
        "e": "Elevator<br>",
        "r": "Rack and Pinion<br>",
        "t": "Telescope<br>",
        "m": "motor rotation<br>",
        "s": "servo<br>",
        "p": "pnuematic<br>",
        "l": "lead screw<br>",
        "o": "Other"
        "n": "Other"
      },
      "defaultValue": "n"      
    { "name": "Degree of Freedom 4",
      "code": "dof4",
      "type": "radio",
      "choices": {
        "e": "Elevator<br>",
        "r": "Rack and Pinion<br>",
        "t": "Telescope<br>",
        "m": "motor rotation<br>",
        "s": "servo<br>",
        "p": "pnuematic<br>",
        "l": "lead screw<br>",
        "o": "Other"
        "n": "Other"
      },
      "defaultValue": "n" 
    { "name": "Degree of Freedom 5",
      "code": "dof5",
      "type": "radio",
      "choices": {
        "e": "Elevator<br>",
        "r": "Rack and Pinion<br>",
        "t": "Telescope<br>",
        "m": "motor rotation<br>",
        "s": "servo<br>",
        "p": "pnuematic<br>",
        "l": "lead screw<br>",
        "o": "Other"
        "n": "Other"
      },
      "defaultValue": "n"  
  "endgame": [

  ],
  "postmatch": [
  ]
  ],
