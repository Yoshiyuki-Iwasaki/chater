import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);

  // stringが変化したタイミングで発火,文字が入力された時のみdisabledを削除する
  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              width: "100%", // Fix IE11 issue.
              mt: 1,
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={e => setString(e.target.value)}
              onKeyDown={e => {
                if (isComposed) return; //isComposedがtrueの時にアーリーリターン

                if (e.key === "Enter") {
                  setName(e.target.value); // エンターを押したらnameを更新する
                  e.preventDefault();
                }
              }}
              onCompositionStart={() => setIsComposed(true)}
              onCompositionEnd={() => setIsComposed(false)}
            />
            <Button
              disabled={disabled} // ボタンの初期値をdisabledにする
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setName({ string }); // ボタンを押したらnameを更新する
              }}
            >
              はじめる
            </Button>
          </Box>
        </Box>
      </div>
    </Container>
  );
}
