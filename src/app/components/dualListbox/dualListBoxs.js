import React from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Paper } from "@material-ui/core";
import DualListBox from "react-dual-listbox";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";

const option = [
  { value: "contoh_1", label: "Option 1" },
  { value: "contoh_2", label: "Option 2" },
];

const useStyles = makeStyles((theme) => ({
  dualListboxPadding: {
    padding: "10px",
  },
}));

const DualListBoxs = (props) => {
  const {
    intl,
    disabled = false,
    options = option,
    select = [],
    handleSelected,
  } = props;
  const [selected, setSelected] = React.useState(select);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.dualListboxPadding}>
        <DualListBox
          allowDuplicates={false}
          canFilter
          filterPlaceholder={intl.formatMessage({
            id: "LABEL.SEARCH",
          })}
          simpleValue={false}
          disabled={disabled}
          options={options}
          selected={selected}
          onChange={(selected, selection) => {
            if (typeof handleSelected === "function")
              handleSelected(selected, selection);
            setSelected(selected);
          }}
          showHeaderLabels={true}
        />
      </Paper>
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(DualListBoxs));
