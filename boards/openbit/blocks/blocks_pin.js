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
        [ "P0", "26" ],
        [ "P1", "32" ],
        [ "P2", "25" ],
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
        [ "P0", "26" ],
        [ "P1", "32" ],
        [ "P2", "25" ],
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P5", "5" ],
        [ "P6", "36" ],
        [ "P7", "39" ],
        [ "P8", "4" ],
        [ "P9", "34" ],
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
        [ "P3", "13" ],
        [ "P4", "27" ],
        [ "P8", "4" ],
        [ "P10", "14" ],
        [ "P11", "12" ],
        [ "P12", "15" ],
        [ "P16", "2" ],
      ]
    }
  ],
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
        [ "P1", "32" ],
        [ "P6", "36" ],
        [ "P7", "39" ],
        [ "P9", "34" ],
      ]
    }
  ],
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
        [ "P0", "26" ],
        [ "P1", "32" ],
        [ "P2", "25" ],
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
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2C3E50",
  "tooltip": "",
  "helpUrl": ""
}
]);