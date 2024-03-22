'use strict'

/**
 * Parser: @typescript-eslint/parser 5.59.11 (TS 5.1.3)
 * Source code:
 * Math.pow(a, b) as any
 */

exports.parse = () => ({
  type: 'Program',
  body: [
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'TSAsExpression',
        expression: {
          type: 'CallExpression',
          callee: {
            type: 'MemberExpression',
            object: {
              type: 'Identifier',
              decorators: [],
              name: 'Math',
              optional: false,
              range: [0, 4],
              loc: {
                start: {
                  line: 1,
                  column: 0,
                },
                end: {
                  line: 1,
                  column: 4,
                },
              },
            },
            property: {
              type: 'Identifier',
              decorators: [],
              name: 'pow',
              optional: false,
              range: [5, 8],
              loc: {
                start: {
                  line: 1,
                  column: 5,
                },
                end: {
                  line: 1,
                  column: 8,
                },
              },
            },
            computed: false,
            optional: false,
            range: [0, 8],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 8,
              },
            },
          },
          arguments: [
            {
              type: 'Identifier',
              decorators: [],
              name: 'a',
              optional: false,
              range: [9, 10],
              loc: {
                start: {
                  line: 1,
                  column: 9,
                },
                end: {
                  line: 1,
                  column: 10,
                },
              },
            },
            {
              type: 'Identifier',
              decorators: [],
              name: 'b',
              optional: false,
              range: [12, 13],
              loc: {
                start: {
                  line: 1,
                  column: 12,
                },
                end: {
                  line: 1,
                  column: 13,
                },
              },
            },
          ],
          optional: false,
          range: [0, 14],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 1,
              column: 14,
            },
          },
        },
        typeAnnotation: {
          type: 'TSAnyKeyword',
          range: [18, 21],
          loc: {
            start: {
              line: 1,
              column: 18,
            },
            end: {
              line: 1,
              column: 21,
            },
          },
        },
        range: [0, 21],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 21,
          },
        },
      },
      range: [0, 21],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 21,
        },
      },
    },
  ],
  comments: [],
  range: [0, 21],
  sourceType: 'script',
  tokens: [
    {
      type: 'Identifier',
      value: 'Math',
      range: [0, 4],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 4,
        },
      },
    },
    {
      type: 'Punctuator',
      value: '.',
      range: [4, 5],
      loc: {
        start: {
          line: 1,
          column: 4,
        },
        end: {
          line: 1,
          column: 5,
        },
      },
    },
    {
      type: 'Identifier',
      value: 'pow',
      range: [5, 8],
      loc: {
        start: {
          line: 1,
          column: 5,
        },
        end: {
          line: 1,
          column: 8,
        },
      },
    },
    {
      type: 'Punctuator',
      value: '(',
      range: [8, 9],
      loc: {
        start: {
          line: 1,
          column: 8,
        },
        end: {
          line: 1,
          column: 9,
        },
      },
    },
    {
      type: 'Identifier',
      value: 'a',
      range: [9, 10],
      loc: {
        start: {
          line: 1,
          column: 9,
        },
        end: {
          line: 1,
          column: 10,
        },
      },
    },
    {
      type: 'Punctuator',
      value: ',',
      range: [10, 11],
      loc: {
        start: {
          line: 1,
          column: 10,
        },
        end: {
          line: 1,
          column: 11,
        },
      },
    },
    {
      type: 'Identifier',
      value: 'b',
      range: [12, 13],
      loc: {
        start: {
          line: 1,
          column: 12,
        },
        end: {
          line: 1,
          column: 13,
        },
      },
    },
    {
      type: 'Punctuator',
      value: ')',
      range: [13, 14],
      loc: {
        start: {
          line: 1,
          column: 13,
        },
        end: {
          line: 1,
          column: 14,
        },
      },
    },
    {
      type: 'Identifier',
      value: 'as',
      range: [15, 17],
      loc: {
        start: {
          line: 1,
          column: 15,
        },
        end: {
          line: 1,
          column: 17,
        },
      },
    },
    {
      type: 'Identifier',
      value: 'any',
      range: [18, 21],
      loc: {
        start: {
          line: 1,
          column: 18,
        },
        end: {
          line: 1,
          column: 21,
        },
      },
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 1,
      column: 21,
    },
  },
})
