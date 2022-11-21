// This block of code is to roughly simulate what happens when data is pulled from the server
const objectsCameIn = [
  {
  'name': 'world1',
  'notes': [
    {
      'name': 'note1',
      'code': 'kokkookokkookokookkokokoko',
      'data': 
        {
          "boards": [
            {
              "boardId": 1,
              "unit": "rem",
              "left": 0,
              "top": 0,
              "width": 50,
              "height": 50,
              "backgroundColor": "#531fc2"
            },
            {
              "boardId": 2,
              "unit": "rem",
              "left": 0,
              "top": 50,
              "width": 50,
              "height": 50,
              "backgroundColor": "Red"
            }
          ],
          "elements": [
            {
              "elementId": 1,
              "elementType": "shape",
              "width": 5.5,
              "height": 5.5,
              "left": 2.6875,
              "top": 29.625,
              "unit": "rem",
              "className": "blue circle",
              "text": "me"
            },
            {
              "elementId": 2,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 37.95,
              "top": 28.7875,
              "unit": "rem",
              "className": "pink circle",
              "text": "New"
            },
            {
              "elementId": 3,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 38.5125,
              "top": 1.625,
              "unit": "rem",
              "className": "pink circle",
              "text": "dsf"
            },
            {
              "elementId": 4,
              "elementType": "textBlock",
              "width": 23.125,
              "height": 4.125,
              "left": 3.35,
              "top": 14,
              "unit": "rem",
              "initialText": " ",
              "initialFontColor": "#96ffdc",
              "initialFontSize": 0.59,
              "initialFontName": "andada-pro",
              "initialFontStyle": "twin-color-text"
            }
          ]
        }
    },
    {
      'name': 'note2',
      'code': 'kekekekkekekkeke',
      'data': 
        {
          "boards": [
            {
              "boardId": 1,
              "unit": "rem",
              "left": 0,
              "top": 0,
              "width": 50,
              "height": 50,
              "backgroundColor": "#531fc2"
            },
            {
              "boardId": 2,
              "unit": "rem",
              "left": 0,
              "top": 50,
              "width": 50,
              "height": 50,
              "backgroundColor": "Red"
            }
          ],
          "elements": [
            {
              "elementId": 1,
              "elementType": "shape",
              "width": 5.5,
              "height": 5.5,
              "left": 2.6875,
              "top": 29.625,
              "unit": "rem",
              "className": "blue circle",
              "text": "me"
            },
            {
              "elementId": 2,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 37.95,
              "top": 28.7875,
              "unit": "rem",
              "className": "pink circle",
              "text": "New"
            },
            {
              "elementId": 3,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 38.5125,
              "top": 1.625,
              "unit": "rem",
              "className": "pink circle",
              "text": "dsf"
            },
            {
              "elementId": 4,
              "elementType": "textBlock",
              "width": 23.125,
              "height": 4.125,
              "left": 3.35,
              "top": 14,
              "unit": "rem",
              "initialText": " ",
              "initialFontColor": "#96ffdc",
              "initialFontSize": 0.59,
              "initialFontName": "andada-pro",
              "initialFontStyle": "twin-color-text"
            }
          ]
        }
    },
    {
      'name': 'note3',
      'code': 'kuuiuuukukukukukuku',
      'data': 
        {
          "boards": [
            {
              "boardId": 1,
              "unit": "rem",
              "left": 0,
              "top": 0,
              "width": 50,
              "height": 50,
              "backgroundColor": "#531fc2"
            },
            {
              "boardId": 2,
              "unit": "rem",
              "left": 0,
              "top": 50,
              "width": 50,
              "height": 50,
              "backgroundColor": "Red"
            }
          ],
          "elements": [
            {
              "elementId": 1,
              "elementType": "shape",
              "width": 5.5,
              "height": 5.5,
              "left": 2.6875,
              "top": 29.625,
              "unit": "rem",
              "className": "blue circle",
              "text": "me"
            },
            {
              "elementId": 2,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 37.95,
              "top": 28.7875,
              "unit": "rem",
              "className": "pink circle",
              "text": "New"
            },
            {
              "elementId": 3,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 38.5125,
              "top": 1.625,
              "unit": "rem",
              "className": "pink circle",
              "text": "dsf"
            },
            {
              "elementId": 4,
              "elementType": "textBlock",
              "width": 23.125,
              "height": 4.125,
              "left": 3.35,
              "top": 14,
              "unit": "rem",
              "initialText": " ",
              "initialFontColor": "#96ffdc",
              "initialFontSize": 0.59,
              "initialFontName": "andada-pro",
              "initialFontStyle": "twin-color-text"
            }
          ]
        }
    },
    {
      'name': 'lolnote',
      'code': 'kyyykykykykykkykykykyk',
      'data': 
        {
          "boards": [
            {
              "boardId": 1,
              "unit": "rem",
              "left": 0,
              "top": 0,
              "width": 50,
              "height": 50,
              "backgroundColor": "#531fc2"
            },
            {
              "boardId": 2,
              "unit": "rem",
              "left": 0,
              "top": 50,
              "width": 50,
              "height": 50,
              "backgroundColor": "Red"
            }
          ],
          "elements": [
            {
              "elementId": 1,
              "elementType": "shape",
              "width": 5.5,
              "height": 5.5,
              "left": 2.6875,
              "top": 29.625,
              "unit": "rem",
              "className": "blue circle",
              "text": "me"
            },
            {
              "elementId": 2,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 37.95,
              "top": 28.7875,
              "unit": "rem",
              "className": "pink circle",
              "text": "New"
            },
            {
              "elementId": 3,
              "elementType": "shape",
              "width": 7,
              "height": 7,
              "left": 38.5125,
              "top": 1.625,
              "unit": "rem",
              "className": "pink circle",
              "text": "dsf"
            },
            {
              "elementId": 4,
              "elementType": "textBlock",
              "width": 23.125,
              "height": 4.125,
              "left": 3.35,
              "top": 14,
              "unit": "rem",
              "initialText": " ",
              "initialFontColor": "#96ffdc",
              "initialFontSize": 0.59,
              "initialFontName": "andada-pro",
              "initialFontStyle": "twin-color-text"
            }
          ]
        }
      }
    ],
  },
  {
    'name': 'The Cat and the Canary',
    'notes': [
      {
        'name': 'we still break the rules',
        'code': 'gaaaagagagagagagagagaga',
        'data': 
          {
            "boards": [
              {
                "boardId": 1,
                "unit": "rem",
                "left": 0,
                "top": 0,
                "width": 50,
                "height": 50,
                "backgroundColor": "#531fc2"
              },
              {
                "boardId": 2,
                "unit": "rem",
                "left": 0,
                "top": 50,
                "width": 50,
                "height": 50,
                "backgroundColor": "Red"
              }
            ],
            "elements": [
              {
                "elementId": 1,
                "elementType": "shape",
                "width": 5.5,
                "height": 5.5,
                "left": 2.6875,
                "top": 29.625,
                "unit": "rem",
                "className": "blue circle",
                "text": "me"
              },
              {
                "elementId": 2,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 37.95,
                "top": 28.7875,
                "unit": "rem",
                "className": "pink circle",
                "text": "New"
              },
              {
                "elementId": 3,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 38.5125,
                "top": 1.625,
                "unit": "rem",
                "className": "pink circle",
                "text": "dsf"
              },
              {
                "elementId": 4,
                "elementType": "textBlock",
                "width": 23.125,
                "height": 4.125,
                "left": 3.35,
                "top": 14,
                "unit": "rem",
                "initialText": " ",
                "initialFontColor": "#96ffdc",
                "initialFontSize": 0.59,
                "initialFontName": "andada-pro",
                "initialFontStyle": "twin-color-text"
              }
            ]
          }
      },
      {
        'name': 'you and me',
        'code': 'guuuuuguguguuguguguguguguug',
        'data': 
          {
            "boards": [
              {
                "boardId": 1,
                "unit": "rem",
                "left": 0,
                "top": 0,
                "width": 50,
                "height": 50,
                "backgroundColor": "#531fc2"
              },
              {
                "boardId": 2,
                "unit": "rem",
                "left": 0,
                "top": 50,
                "width": 50,
                "height": 50,
                "backgroundColor": "Red"
              }
            ],
            "elements": [
              {
                "elementId": 1,
                "elementType": "shape",
                "width": 5.5,
                "height": 5.5,
                "left": 2.6875,
                "top": 29.625,
                "unit": "rem",
                "className": "blue circle",
                "text": "me"
              },
              {
                "elementId": 2,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 37.95,
                "top": 28.7875,
                "unit": "rem",
                "className": "pink circle",
                "text": "New"
              },
              {
                "elementId": 3,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 38.5125,
                "top": 1.625,
                "unit": "rem",
                "className": "pink circle",
                "text": "dsf"
              },
              {
                "elementId": 4,
                "elementType": "textBlock",
                "width": 23.125,
                "height": 4.125,
                "left": 3.35,
                "top": 14,
                "unit": "rem",
                "initialText": " ",
                "initialFontColor": "#96ffdc",
                "initialFontSize": 0.59,
                "initialFontName": "andada-pro",
                "initialFontStyle": "twin-color-text"
              }
            ]
          }
      },
      {
        'name': 'were gonna be just fine',
        'code': 'gyyyyygyyggyggygyygygyg',
        'data': 
          {
            "boards": [
              {
                "boardId": 1,
                "unit": "rem",
                "left": 0,
                "top": 0,
                "width": 50,
                "height": 50,
                "backgroundColor": "#531fc2"
              },
              {
                "boardId": 2,
                "unit": "rem",
                "left": 0,
                "top": 50,
                "width": 50,
                "height": 50,
                "backgroundColor": "Red"
              }
            ],
            "elements": [
              {
                "elementId": 1,
                "elementType": "shape",
                "width": 5.5,
                "height": 5.5,
                "left": 2.6875,
                "top": 29.625,
                "unit": "rem",
                "className": "blue circle",
                "text": "me"
              },
              {
                "elementId": 2,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 37.95,
                "top": 28.7875,
                "unit": "rem",
                "className": "pink circle",
                "text": "New"
              },
              {
                "elementId": 3,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 38.5125,
                "top": 1.625,
                "unit": "rem",
                "className": "pink circle",
                "text": "dsf"
              },
              {
                "elementId": 4,
                "elementType": "textBlock",
                "width": 23.125,
                "height": 4.125,
                "left": 3.35,
                "top": 14,
                "unit": "rem",
                "initialText": " ",
                "initialFontColor": "#96ffdc",
                "initialFontSize": 0.59,
                "initialFontName": "andada-pro",
                "initialFontStyle": "twin-color-text"
              }
            ]
          }
      },
      {
        'name': 'oooOoooooooooooooo',
        'code': 'geegegegegegegegegegegege',
        'data': 
          {
            "boards": [
              {
                "boardId": 1,
                "unit": "rem",
                "left": 0,
                "top": 0,
                "width": 50,
                "height": 50,
                "backgroundColor": "#531fc2"
              },
              {
                "boardId": 2,
                "unit": "rem",
                "left": 0,
                "top": 50,
                "width": 50,
                "height": 50,
                "backgroundColor": "Red"
              }
            ],
            "elements": [
              {
                "elementId": 1,
                "elementType": "shape",
                "width": 5.5,
                "height": 5.5,
                "left": 2.6875,
                "top": 29.625,
                "unit": "rem",
                "className": "blue circle",
                "text": "me"
              },
              {
                "elementId": 2,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 37.95,
                "top": 28.7875,
                "unit": "rem",
                "className": "pink circle",
                "text": "New"
              },
              {
                "elementId": 3,
                "elementType": "shape",
                "width": 7,
                "height": 7,
                "left": 38.5125,
                "top": 1.625,
                "unit": "rem",
                "className": "pink circle",
                "text": "dsf"
              },
              {
                "elementId": 4,
                "elementType": "textBlock",
                "width": 23.125,
                "height": 4.125,
                "left": 3.35,
                "top": 14,
                "unit": "rem",
                "initialText": " ",
                "initialFontColor": "#96ffdc",
                "initialFontSize": 0.59,
                "initialFontName": "andada-pro",
                "initialFontStyle": "twin-color-text"
              }
            ]
          }
        }
    ],
  },
];

for (let i of objectsCameIn) {
    i["visible"] = false;
}

export const objects = [...objectsCameIn];
// end simulation of data retrieval