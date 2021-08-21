import React, {
  useState,
  // useEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import { listPatientPagination } from "../_redux/CrudPatient";

function Address(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);

  return <React.Fragment>Address</React.Fragment>;
}

export default injectIntl(connect(null, null)(Address));
