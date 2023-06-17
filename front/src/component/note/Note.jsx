import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import * as React from "react";
import Typography from "@mui/material/Typography";

const noteTmp = [
  {
    id: 45566,
    name: "文章",
    desc: "我的小日記",
  },

  {
    id: 45567,
    name: "文章2",
    desc: "記住一件事情",
  },

  {
    id: 45568,
    name: "文章3",
    desc: "When rendering a list within a component that defines its own gutters, ListItem gutters can be disabled with disableGutters.",
  },
];


function Note(props) {
  const [open, setOpen] = React.useState(true);
  const [notes, setNotes] = React.useState(noteTmp);
  const [selectedNote, setSelectedNote] = React.useState(null);

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
            {notes.length !== 0 ? (
              notes.map((note) => {
                return <ListItemButton
                  alignItems="flex-start"
                  onClick={() => selectNot(note)}
                  key={note.id}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: open ? 0 : 2.5,
                    "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                  }}
                >
                  <ListItemText primary={note.name} />
                </ListItemButton>;
              })
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                No Notes
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={10}>
          {selectedNote !== null? (
            selectedNote.desc
          ) : (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Please select a note
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Note;
