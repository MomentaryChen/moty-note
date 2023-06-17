import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Divider } from "@mui/material";

const noteTmp = [
  {
    nid: 45566,
    title: "文章",
    content: "我的小日記",
  },

  {
    nid: 45567,
    title: "文章2",
    content: "記住一件事情",
  },

  {
    nid: 45568,
    title: "文章3",
    content:
      "When rendering a list within a component that defines its own gutters, ListItem gutters can be disabled with disableGutters.",
  },
];

const config = {
  headers: { "Content-Type": "application/json" },
};

function Note(props) {
  const [open, setOpen] = React.useState(true);
  const [notes, setNotes] = React.useState(noteTmp);
  const [selectedNote, setSelectedNote] = React.useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_NOTES, config).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setNotes(res.data.notes);
      }
    });
  }, []);

  function selectNot(note) {
    setSelectedNote(note);
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box
            sx={{
              bgcolor: "rgba(71, 98, 130, 0.2)",
              minHeight: "100vh",
            }}
          >
            {notes !== null ? (
              notes.map((note) => {
                return (
                  <>
                    <ListItemButton
                      alignItems="flex-start"
                      onClick={() => selectNot(note)}
                      key={note.nid}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: open ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: open ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText primary={note.title} />
                    </ListItemButton>
                    <Divider />
                  </>
                );
              })
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t("noteApp.noNoteExist")}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={10}>
          {selectedNote !== null ? (
            <>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                {selectedNote.title}
              </Typography>
              <p>{selectedNote.content}</p>
            </>
          ) : (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t("noteApp.selectedNoteTip")}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Note;
