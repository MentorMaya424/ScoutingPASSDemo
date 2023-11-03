var config_data = `
{
    "dataFormat": "kvs",
    "title": "Scouting PASS 2023",
    "page_title": "Charged Up",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Scouter Initials",
            "code": "s",
            "type": "scouter",
            "size": 5,
            "maxSize": 5,
            "required": "true"
        },
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2023tnkn",
            "required": "true",
            "disabled": "true"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999
        }
    ],
    "auton": [
        {
            "name": "Width",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Length",
            "code": "len",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Height",
            "code": "hei",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Weight",
            "code": "wei",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Highest Fulcrum",
            "code": "hf",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Drivetrain",
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
        {
            "name": "Other Drivetrain",
            "code": "odt",
            "type": "text",
            "size": 20,
            "maxSize": 50
        }
    ],
    "teleop": [
        {
            "name": "Intake 1",
            "code": "In1",
            "type": "radio",
            "choices": {
                "r": "Roller<br>",
                "c": "claw<br>",
                "v": "vacuum<br>",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Intake 2",
            "code": "In2",
            "type": "radio",
            "choices": {
                "r": "Roller<br>",
                "c": "claw<br>",
                "v": "vacuum<br>",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Effective Intake Width in Inches",
            "code": "eiw",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "High Node Scorer",
            "code": "arm",
            "type": "radio",
            "choices": {
                "r": "Roller<br>",
                "c": "claw<br>",
                "v": "vacuum<br>",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Forks",
            "code": "fk",
            "type": "bool"
        }
    ],
    "endgame": [
        {
            "name": "Degree of Freedom 1",
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
                "o": "other",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Degree of Freedom 2",
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
                "o": "other",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Degree of Freedom 3",
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
                "o": "other",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Degree of Freedom 4",
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
                "o": "other",
                "n": "none"
            },
            "defaultValue": "n"
        },
        {
            "name": "Degree of Freedom 5",
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
                "o": "other",
                "n": "none"
            },
            "defaultValue": "n"
        }
    ],
    "postmatch": [
        {
            "name": "Comments",
            "code": "co",
            "type": "text",
            "size": 15,
            "maxSize": 55
        }
    ]
}`;
