---
title: "Material UI for react"
excerpt: "Material UI"

categories:
  - UI

toc: true
toc_sticky: true
last_modified_at:
---

---

## 1.설치

> [Material UI official site](https://material-ui.com/){:target="\_blank"}

```bash
$ yarn add @material-ui/core
```

## 2.Button

> [Material UI Button](https://material-ui.com/components/buttons/){:target="\_blank"}

- button 에 variant 설정후에 색 설정 클릭 시 alert 메세지창 뜨기

```jsx
// in App.js

// import Button
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <Button
        variant="contained"
        color="secondary"
        onClick={() => alert("hello")}
      >
        Hello world!
      </Button>
    </div>
  );
}
```

- 링크 버튼 만들기

```jsx
function App() {
  return (
    <div className="App">
      <Button href="https://naver.com" variant="contained" color="secondary">
        Hello world!
      </Button>
    </div>
  );
}
```

- 버튼 사이즈 조정

```jsx
function App() {
  return (
    <div className="App">
      <Button
        size="small" // medium, large 있음
        variant="contained"
        color="secondary"
      >
        Hello world!
      </Button>
    </div>
  );
}
```

- disable 버튼 (클릭이 안되게끔 만들기)

```jsx
function App() {
  return (
    <div className="App">
      <Button size="small" disabled variant="contained" color="secondary">
        Hello world!
      </Button>
    </div>
  );
}
```

- 버튼에 개별적인 css 적용하기 (폰트사이즈 20 적용하기)

```jsx
function App() {
  return (
    <div className="App">
      <Button
        size="small"
        style={{
          fontSize: 20,
        }}
        disabled
        variant="contained"
        color="secondary"
      >
        Hello world!
      </Button>
    </div>
  );
}
```

- 버튼에 icon 추가 하기

  - icon material 설치

  ```bash
  $ yarn add @material-ui/icons
  ```

```jsx
// import saveIcon

import SaveIcon from "@material-ui/icons/Save";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<SaveIcon />} // 버튼 시작지점에 아이콘 넣기
          endIcon={<SaveIcon />} // 버큰 끝나는 지점에 아이콘 넣기
          size="large"
          variant="contained"
          color="secondary"
        >
          Hello world!
        </Button>
      </header>
    </div>
  );
}
```

- 버튼 그룹 만들기 (공통되는 사항이 있으면 그룹핑해주는것)

```jsx
// import ButtonGroup
import { ButtonGroup } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" color="primary" size="large">
          <Button startIcon={<SaveIcon />}>Save</Button>
          <Button startIcon={<DeleteIcon />}>Discard</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}
```

![image](https://user-images.githubusercontent.com/28912774/126060546-785f10a0-e1f4-4334-9fc4-112b45c5f43a.png)

## 3.CheckBox

- sample checkbox 만들기

```jsx
import Checkbox from "@material-ui/core/Checkbox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample></CheckboxExample> // check box example component 연결
        <ButtonGroup variant="contained" color="primary" size="large">
          <Button startIcon={<SaveIcon />}>Save</Button>
          <Button startIcon={<DeleteIcon />}>Discard</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color="primary" //
        disabled // checkbox disable
      />
    </div>
  );
}
```

```jsx
// FormControlLabel import
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel //  label 을 클릭하게 되면 checkbox 도 자동으로 클릭하게 만듬
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}
```

![image](https://user-images.githubusercontent.com/28912774/126265078-6cf1e997-a54c-47b6-a13a-6d623c987b2a.png)

![image](https://user-images.githubusercontent.com/28912774/126265105-4970c1f8-97cd-4649-b913-9c287a796588.png)

## 4.Text Field

### 일반 text box

```jsx
// import TextField
import  TextField  from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="outlined"
          color="secondary"
        />

```

![image](https://user-images.githubusercontent.com/28912774/126265631-8d095f5e-c662-45f0-bc71-e24d7b8085a6.png)

### Date

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="outlined"
          color="secondary"
          type="date"
        />
```

![image](https://user-images.githubusercontent.com/28912774/126265782-35dad57c-f359-4154-a4eb-136a315d0e7a.png)

### Time

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="outlined"
          color="secondary"
          type="time"
        />
```

![image](https://user-images.githubusercontent.com/28912774/126265834-186fec04-a0b0-43ec-850c-bc4a84e792ce.png)

### Time label

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="filled"
          color="secondary"
          type="time"
          label= "The Time"
        />

```

![image](https://user-images.githubusercontent.com/28912774/126266026-279d8855-867b-44af-82fc-2769b79b5ad5.png)

### Email

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          label="Your email"
          placeholder="test@test.com"
        />
```

![image](https://user-images.githubusercontent.com/28912774/126266164-51920a8c-3386-4acb-b04b-8e27f36de6d0.png)

## 5.makeStyles for Buttons

```jsx
// import makeStyles

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: '#FF8E53',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />

```

![image](https://user-images.githubusercontent.com/28912774/126267815-8d7da73a-de3b-4bd0-9ff8-5d9219be767e.png)

## 6.Themes with ThemeProvider

```jsx
// import ThemProvider and colors

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    // return 전체 부분을 ThemProvider tag 로 묶어 줘서 전체 Primary, secondary color 를 변경해서 사용할 수 있음
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="Your email"
            placeholder="test@test.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary" size="large">
            <Button startIcon={<SaveIcon />}>Save</Button>
            <Button startIcon={<DeleteIcon />}>Discard</Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}
```

![image](https://user-images.githubusercontent.com/28912774/126269013-235d3356-9ce6-4b6e-ad71-bedb90c48c82.png)

## 7.Typography

- roboto font 적용

```bash
$ yarn add fontsource-roboto
```

```jsx
// import roboto font and Typography

import 'fontsource-roboto'
import  Typography  from '@material-ui/core/Typography';


const theme = createMuiTheme({
  // 폰트사이즈 세부 설정
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
        // h2, subtitle, body 등 variant 를 통해 tag 설정 하고, component 에서 추가 tag 설정 가능
          <Typography variant="h2" component="div">
            Welcome to TestPage
          </Typography>
          <Typography variant="subtitle1">
            Learn how to use Material Ui
          </Typography>

```

![image](https://user-images.githubusercontent.com/28912774/126269950-301fc5ab-11e9-482b-a873-6c815d28dfc5.png)

## 8.Containers and Grids

```jsx
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      // Container 설정
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}
```

![image](https://user-images.githubusercontent.com/28912774/126273518-6c839471-9bb1-45f0-9a8a-67fc1f9a2498.png)

## 9.Responsive Design

```jsx
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={ {height: 75, width:'100%',} }/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={ {height: 75, width: '100%',} }/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={ {height: 75, width:'100%',} }/>
            </Grid>
          </Grid>
```

## 10.App Bar

```jsx

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">

          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Test Page
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
```

![image](https://user-images.githubusercontent.com/28912774/126277834-7d9cb58b-b329-4551-90c8-4bf0c46a1947.png)


## Example whole code

```jsx
// in App.js

import React from 'react'
import './App.css';

import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles({
  root: {
    background: '#FF8E53',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    }
  }
})



function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">

          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Test Page
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
    
          <Typography variant="h2" component="div">
            Welcome to TestPage
          </Typography>
          <Typography variant="subtitle1">
            Learn how to use Material Ui
          </Typography>
          <ButtonStyled />
          
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={ {height: 75, width:'100%',} }/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={ {height: 75, width: '100%',} }/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={ {height: 75, width:'100%',} }/>
            </Grid>
          </Grid>

          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary" size="large">
            <Button
              startIcon={<SaveIcon />}>
                Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}>
                Discard
            </Button>
          </ButtonGroup>
        </header>
      </div>
      </Container>
    </ThemeProvider>
  );
}


function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel  //  label 을 클릭하게 되면 checkbox 도 자동으로 클릭하게 만듬
        control={<Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color='primary'
        inputProps={{
          'aria-label' : 'secondary checkbox'
        }}
        />}
        label= "Testing Checkbox"
      />
    </div>
  )
}

export default App;

```


🔶 🔷 📌 🔑

## Reference

- Material UI official site - [https://material-ui.com](https://material-ui.com){:target="\_blank"}

- Material UI React Tutorial from Traversy Media - [https://www.youtube.com/watch?v=vyJU9efvUtQ](https://www.youtube.com/watch?v=vyJU9efvUtQ)