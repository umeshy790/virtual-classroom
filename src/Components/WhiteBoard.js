import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ButtonBase, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import RedoIcon from "@material-ui/icons/Redo";
import UndoIcon from "@material-ui/icons/Undo";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#201224",
    position: "relative"
  },
  editingToolPanel: {
    position: "absolute",
    bottom: "12px",
    height: "48px",
    width: "90%",
    border: "1px solid #80808061",
    right: "10px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 5px",
    boxSizing: "border-box",
    overflowX: "auto",
    overflowY: "hidden"
  },
  editingToolsColors: {
    height: "30px",
    minWidth: "30px",
    borderRadius: "4px",
    marginRight: "10px",
    "&:nth-child(1)": {
      background: "yellow"
    },
    "&:nth-child(2)": {
      background: "blue"
    },
    "&:nth-child(3)": {
      background: "black"
    }
  }
});

function EditingToolAction(props) {
  const { Icon } = props;

  return (
    <IconButton>
      <Icon />
    </IconButton>
  );
}

function WhiteBoard() {
  const classes = useStyles();
  const colors = [...Array(3).keys()];
  const icons = [EditIcon, InsertPhotoIcon, ZoomInIcon, ZoomOutIcon, UndoIcon, RedoIcon];

  return (
    <div className={classes.root}>
      <span>This is a white board</span>
      <div className={classes.editingToolPanel}>
        {colors.map(color => (
          <ButtonBase key={color} className={classes.editingToolsColors}></ButtonBase>
        ))}
        {icons.map((Icon, index) => (
          <EditingToolAction key={index.toString()} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

export default WhiteBoard;
