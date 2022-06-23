import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStyles } from '@mantine/core';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import html_gen from './joes-tools/html'
import { useRef } from 'react';
import { RadioGroup, Radio } from '@mantine/core';
const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      [`& .${getRef('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // assign ref to element
    ref: getRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

function App() {
  const { classes } = useStyles();
  const ref = useRef<HTMLInputElement>();
  return (
    <RadioGroup
      label="Select your favorite framework/library"
      description="This is anonymous"
      required
    >
      <Radio value="button" label="Button" />
      <Radio value="color" label="Color Picker" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </RadioGroup>
  );

}


export default App;
