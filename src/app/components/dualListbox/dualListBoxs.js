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
          icons={{
            moveLeft: <span className="fa fa-chevron-left" />,
            moveAllLeft: [
              <span key={0} className="fa fa-chevron-left" />,
              <span key={1} className="fa fa-chevron-left" />,
            ],
            moveRight: <span className="fa fa-chevron-right" />,
            moveAllRight: [
              <span key={0} className="fa fa-chevron-right" />,
              <span key={1} className="fa fa-chevron-right" />,
            ],
            moveDown: <span className="fa fa-chevron-down" />,
            moveUp: <span className="fa fa-chevron-up" />,
            moveTop: <span className="fa fa-double-angle-up" />,
            moveBottom: <span className="fa fa-double-angle-down" />,
          }}
        />
      </Paper>
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(DualListBoxs));
