import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme();

export default {
  tabs: {
    backgroundColor: theme.toolbar.backgroundColor,
    textColor: theme.toolbar.color,
    selectedTextColor: theme.toolbar.hoverColor,
  },
  inkBar: {
    backgroundColor: theme.toolbar.separatorColor,
  },
};
