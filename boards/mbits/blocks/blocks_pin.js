Blockly.defineBlocksWithJsonArray([
{
  "type": "pin_digital_write",
  "message0": "digital write %1 to pin %2",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "Boolean",
        "Number"
      ]
    },
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "P0", "25" ],
        [ "P1", "32" ],
        [ "P2", "33" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P5", "5" ],
        [ "P8", "4" ],
        [ "P10", "14" ],
        [ "P11", "12" ],
        [ "P12", "15" ],
        [ "P13", "18" ],
        [ "P14", "19" ],
        [ "P15", "23" ],
        [ "P16", "2" ],
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2C3E50",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_digital_read",
  "message0": "digital read pin %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "P0", "25" ],
        [ "P1", "32" ],
        [ "P2", "33" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P5", "5" ],
        [ "P6", "34" ],
        [ "P7", "35" ],
        [ "P8", "4" ],
        [ "P9", "36" ],
        [ "P10", "14" ],
        [ "P11", "12" ],
        [ "P12", "15" ],
        [ "P13", "18" ],
        [ "P14", "19" ],
        [ "P15", "23" ],
        [ "P16", "2" ],
      ]
    }
  ],
  "output": [
    "Number",
    "Boolean"
  ],
  "inputsInline": true,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_touch_read",
  "message0": "touch read pin %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "P1", "32" ],
        [ "P2", "33" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P8", "4" ],
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_analog_read",
  "message0": "analog read pin %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "P0", "25" ],
        [ "P1", "32" ],
        [ "P2", "33" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P6", "34" ],
        [ "P7", "35" ],
        [ "P8", "4" ],
        [ "P9", "36" ],
        [ "P10", "14" ],
        [ "P11", "12" ],
        [ "P12", "15" ],
        [ "P16", "2" ],
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_analog_write",
  "message0": "PWM write %1 to pin %2",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "P0", "25" ],
        [ "P1", "32" ],
        [ "P2", "33" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P5", "5" ],
        [ "P8", "4" ],
        [ "P10", "14" ],
        [ "P11", "12" ],
        [ "P12", "15" ],
        [ "P13", "18" ],
        [ "P14", "19" ],
        [ "P15", "23" ],
        [ "P16", "2" ],
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2C3E50",
  "tooltip": "",
  "helpUrl": ""
},
// Servo
{
  "type": "servo_write",
  "message0": "Servo pin %1 set angle %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "P0", "25" ],
        [ "P1", "32" ],
        [ "P2", "33" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P5", "5" ],
        [ "P8", "4" ],
        [ "P10", "14" ],
        [ "P11", "12" ],
        [ "P12", "15" ],
        [ "P13", "18" ],
        [ "P14", "19" ],
        [ "P15", "23" ],
        [ "P16", "2" ],
      ]
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2C3E50",
  "tooltip": "",
  "helpUrl": ""
}
]);