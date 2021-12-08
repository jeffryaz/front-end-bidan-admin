import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  createFolder,
  createInput,
  deleteFolders,
  deleteInput,
  getFormformat,
  ListMedKindPagination,
} from "../_redux/CrudAdministrator";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  CardHeaderTitle,
} from "../../../../_metronic/_partials/controls";
import { MODAL } from "../../../../service/modalSession/ModalService";
import * as auth from "../../Auth/_redux/ActionAuth";
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DualListBoxs from "../../../components/dualListbox/dualListBoxs";
import { makeStyles } from "@material-ui/core/styles";
import { cloneDeep, assign } from "lodash";

const data_ops = [
  {
    label: "LABEL.ADD_LABEL_GROUP",
    icon: "fas fa-layer-group text-primary",
    type: "group",
  },
];

const data_ops_sub = [
  {
    label: "LABEL.ADD_LABEL_GROUP",
    icon: "fas fa-layer-group text-primary",
    type: "group",
  },
  {
    label: "LABEL.ADD_MEDICAL_TYPE",
    icon: "fas fa-file-prescription text-primary",
    type: "item",
  },
];

const exampleData = [];

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  heading_new: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "93.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  details: {
    alignItems: "center",
    display: "block",
  },
  column: {
    flexBasis: "33.33%",
  },
}));

function OpenScreeningSetting(props) {
  const { intl } = props;
  const id = props.match.params.id;
  const suhbeader = useSubheader();
  const classes = useStyles();
  const [dataCustom, setDataCustom] = React.useState(exampleData);
  const [dialog, setDialog] = useState({
    open: false,
    data: null,
  });
  const [dialogDeleteFolder, setDialogDeleteFolder] = useState({
    open: false,
    data: null,
  });
  const [dialogMedical, setDialogMedical] = useState(false);
  const [selectPoli, setSelectPoli] = useState([]);
  const [dataMedKin, setDataMedKin] = useState({});
  const [listItemScreening, setListItemScreening] = useState([]);
  const [loadingCreateFolder, setLoadingCreateFolder] = useState(false);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/screening-setting`,
        title: intl.formatMessage({ id: "LABEL.SCREENING_SETTING" }),
      },
      {
        pathname: `/administrator/screening-setting/${id}`,
        title: intl.formatMessage({ id: "LABEL.SCREENING_SETTING_DETAIL" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.SCREENING_SETTING" }));
  }, []);

  const handleAction = (type, data) => {
    setDialog({ open: true, data: null });
  };

  const parsingListBox = (data) => {
    const optionData = [];
    data.forEach((element) => {
      var item = {
        value: element.medkind.id,
        label: element.medkind.nama,
        title: element.medkind.unit,
      };
      optionData.push(item);
    });
    return optionData;
  };

  const handleActionSub = async (type, data) => {
    if (type === "group") {
      setDialog({ open: true, data: data });
    } else {
      let listIndex = data.index.split(",");
      let data_ = cloneDeep(dataCustom);
      if (listIndex.length === 1) {
        setSelectPoli(await parsingListBox(data_[listIndex[0]].input));
      } else if (listIndex.length === 2) {
        setSelectPoli(
          await parsingListBox(data_[listIndex[0]].subtitle[listIndex[1]].input)
        );
      } else if (listIndex.length === 3) {
        setSelectPoli(
          await parsingListBox(
            data_[listIndex[0]].subtitle[listIndex[1]].subtitle[listIndex[2]]
              .input
          )
        );
      } else if (listIndex.length === 4) {
        setSelectPoli(
          await parsingListBox(
            data_[listIndex[0]].subtitle[listIndex[1]].subtitle[listIndex[2]]
              .subtitle[listIndex[3]].input
          )
        );
      } else if (listIndex.length === 5) {
        setSelectPoli(
          await parsingListBox(
            data_[listIndex[0]].subtitle[listIndex[1]].subtitle[listIndex[2]]
              .subtitle[listIndex[3]].subtitle[listIndex[4]].input
          )
        );
      }
      setDataMedKin(data);
      setDialogMedical(true);
    }
  };

  const callApiListMedKind = () => {
    ListMedKindPagination()
      .then((result) => {
        var optionPoli_ = [];
        result.data.data.forEach((element) => {
          var item = {
            value: element.id,
            label: element.nama,
            title: element.unit,
          };
          optionPoli_.push(item);
        });
        setListItemScreening(optionPoli_);
      })
      .catch((err) => {
        MODAL.showSnackbar(err.response?.data.messages);
      });
  };

  useEffect(callApiListMedKind, []);

  const callApiDetail = () => {
    getFormformat(id)
      .then((result) => {
        setDataCustom(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(err.response?.data.messages);
      });
  };

  useEffect(callApiDetail, []);

  const saveMedicalForm = (selected, selection) => {
    if (selection && selection.length > 0) {
      let listIndex = dataMedKin.index.split(",");
      let data_ = cloneDeep(dataCustom);
      selection.forEach(async (element) => {
        var checkIndex = selected.findIndex(
          (items) => items.value === element.value
        );
        if (checkIndex !== -1) {
          let item = {
            formformat_id: null,
            medkind_id: element.value,
          };
          if (listIndex.length === 1) {
            item.formformat_id = data_[listIndex[0]].id;
            await callApiSaveInput(item)
              .then(async (result) => {
                data_[listIndex[0]].input.push(element);
                setSelectPoli(await parsingListBox(data_[listIndex[0]].input));
                setDataCustom(data_);
              })
              .catch((err) => {
                MODAL.showSnackbar(err.response?.data.messages);
              });
          } else if (listIndex.length === 2) {
            item.formformat_id = data_[listIndex[0]].subtitle[listIndex[1]].id;
            await callApiSaveInput(item)
              .then(async (result) => {
                data_[listIndex[0]].subtitle[listIndex[1]].input.push(element);
                setSelectPoli(
                  await parsingListBox(
                    data_[listIndex[0]].subtitle[listIndex[1]].input
                  )
                );
                setDataCustom(data_);
              })
              .catch((err) => {
                MODAL.showSnackbar(err.response?.data.messages);
              });
          } else if (listIndex.length === 3) {
            item.formformat_id =
              data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                listIndex[2]
              ].id;
            await callApiSaveInput(item)
              .then(async (result) => {
                data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                  listIndex[2]
                ].input.push(element);
                setSelectPoli(
                  await parsingListBox(
                    data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                      listIndex[2]
                    ].input
                  )
                );
                setDataCustom(data_);
              })
              .catch((err) => {
                MODAL.showSnackbar(err.response?.data.messages);
              });
          } else if (listIndex.length === 4) {
            item.formformat_id =
              data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                listIndex[2]
              ].subtitle[listIndex[3]].id;
            await callApiSaveInput(item)
              .then(async (result) => {
                data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                  listIndex[2]
                ].subtitle[listIndex[3]].input.push(element);
                setSelectPoli(
                  await parsingListBox(
                    data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                      listIndex[2]
                    ].subtitle[listIndex[3]].input
                  )
                );
                setDataCustom(data_);
              })
              .catch((err) => {
                MODAL.showSnackbar(err.response?.data.messages);
              });
          } else if (listIndex.length === 5) {
            item.formformat_id =
              data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                listIndex[2]
              ].subtitle[listIndex[3]].subtitle[listIndex[4]].id;
            await callApiSaveInput(item)
              .then(async (result) => {
                data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                  listIndex[2]
                ].subtitle[listIndex[3]].subtitle[listIndex[4]].input.push(
                  element
                );
                setSelectPoli(
                  await parsingListBox(
                    data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
                      listIndex[2]
                    ].subtitle[listIndex[3]].subtitle[listIndex[4]].input
                  )
                );
                setDataCustom(data_);
              })
              .catch((err) => {
                MODAL.showSnackbar(err.response?.data.messages);
              });
          }
        } else {
          if (listIndex.length === 1) {
            var indexing = data_[listIndex[0]].input.filter(
              (item_) => item_.medkind.id === element.value
            );
            await callApiDeleteInput(indexing[0].id).catch((err) => {
              MODAL.showSnackbar(err.response?.data.messages);
            });
          } else if (listIndex.length === 2) {
            var indexing = data_[listIndex[0]].subtitle[
              listIndex[1]
            ].input.filter((item_) => item_.medkind.id === element.value);
            await callApiDeleteInput(indexing[0].id).catch((err) => {
              MODAL.showSnackbar(err.response?.data.messages);
            });
          } else if (listIndex.length === 3) {
            var indexing = data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
              listIndex[2]
            ].input.filter((item_) => item_.medkind.id === element.value);
            await callApiDeleteInput(indexing[0].id).catch((err) => {
              MODAL.showSnackbar(err.response?.data.messages);
            });
          } else if (listIndex.length === 4) {
            var indexing = data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
              listIndex[2]
            ].subtitle[listIndex[3]].input.filter(
              (item_) => item_.medkind.id === element.value
            );
            await callApiDeleteInput(indexing[0].id).catch((err) => {
              MODAL.showSnackbar(err.response?.data.messages);
            });
          } else if (listIndex.length === 5) {
            var indexing = data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
              listIndex[2]
            ].subtitle[listIndex[3]].subtitle[listIndex[4]].input.filter(
              (item_) => item_.medkind.id === element.value
            );
            await callApiDeleteInput(indexing[0].id).catch((err) => {
              MODAL.showSnackbar(err.response?.data.messages);
            });
          }
        }
      });
    }
  };

  const callApiCreateFolder = (data) => {
    setLoadingCreateFolder(true);
    createFolder(data)
      .then((result) => {
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success",
          3000
        );
        setLoadingCreateFolder(false);
        callApiDetail();
        setDialog({ open: false, data: null });
      })
      .catch((err) => {
        setLoadingCreateFolder(false);
        MODAL.showSnackbar(err.response?.data.messages);
      });
  };

  const callApiDeleteFolder = () => {
    window
      .$(`#saveDeleteFolder`)
      .removeClass("fas fa-save ml-2")
      .addClass("fas fa-spinner fa-pulse px-2");
    window.$(".loadingButtonConfirmDeleteFolder").attr("disabled", true);
    deleteFolders(dialogDeleteFolder.data)
      .then((result) => {
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success",
          3000
        );
        callApiDetail();
        window
          .$(`#saveDeleteFolder`)
          .removeClass("fas fa-spinner fa-pulse px-2")
          .addClass("fas fa-save ml-2");
        window.$(".loadingButtonConfirmDeleteFolder").attr("disabled", false);
        setDialogDeleteFolder({ data: null, open: false });
      })
      .catch((err) => {
        window
          .$(`#saveDeleteFolder`)
          .removeClass("fas fa-spinner fa-pulse px-2")
          .addClass("fas fa-save ml-2");
        window.$(".loadingButtonConfirmDeleteFolder").attr("disabled", false);
        MODAL.showSnackbar(err.response?.data.messages);
      });
  };

  const deleteFolder = (id) => {
    setDialogDeleteFolder({ data: id, open: true });
  };

  const callApiSaveInput = (data) => {
    return new Promise(async (resolve, reject) => {
      await createInput(data)
        .then((result) => {
          return resolve(result);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  const callApiDeleteInput = (id) => {
    return new Promise(async (resolve, reject) => {
      await deleteInput(id)
        .then((result) => {
          return resolve(result);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialogDeleteFolder.open}
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.CONFIRMATIONN" />
        </DialogTitle>
        <DialogContent>
          <FormattedMessage id="LABEL.CONFIRMATIONN.DELETE_FOLDER_DESC" />
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-success loadingButtonConfirmDeleteFolder"
            onClick={() => {
              callApiDeleteFolder();
            }}
          >
            <i id="saveDeleteFolder" className="fas fa-save ml-2"></i>
            <FormattedMessage id="LABEL.OK" />
          </button>
          <button
            type="button"
            className="btn btn-danger loadingButtonConfirmDeleteFolder"
            onClick={() => {
              setDialogDeleteFolder({ ...dialogDeleteFolder, open: false });
            }}
          >
            <FormattedMessage id="LABEL.CANCEL" />
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={dialogMedical}
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>list</DialogTitle>
        <DialogContent>
          <DualListBoxs
            options={listItemScreening}
            select={selectPoli}
            handleSelected={saveMedicalForm}
          />
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setDialogMedical(false);
              callApiDetail();
            }}
          >
            <FormattedMessage id="LABEL.OK" />
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={dialog.open}
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.ADD_LABEL_GROUP" />
        </DialogTitle>
        <form
          className="form"
          autoComplete="off"
          onSubmit={async (e) => {
            e.preventDefault();
            let data = cloneDeep(dataCustom);
            if (!dialog.data) {
              callApiCreateFolder({
                title: `${e.target.title.value}`,
                formformat_id: 0,
                formkind_id: id,
              });
            } else {
              let listIndex = dialog.data.index.split(",");
              callApiCreateFolder({
                title: `${e.target.title.value}`,
                formformat_id: dialog.data.id,
                formkind_id: id,
              });
            }
          }}
        >
          <DialogContent>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                <FormattedMessage id="LABEL.TITLE" />
                <span className="text-danger">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  required
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loadingCreateFolder}
            >
              {loadingCreateFolder ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingCreateFolder ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setDialog({ open: false, data: null });
              }}
            >
              <i className="fas fa-times px-1"></i>
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="LABEL.SCREENING" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ButtonAction
              data={null}
              handleAction={handleAction}
              ops={data_ops}
            />
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {dataCustom.map((item, index) => (
            <ListItem
              key={index.toString()}
              index={index.toString()}
              item={item}
              classes={classes}
              handleActionSub={handleActionSub}
              deleteFolder={deleteFolder}
            />
          ))}
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

function ListItem({ item, classes, handleActionSub, index, deleteFolder }) {
  let children = null;
  children = (
    <div className="w-100">
      <div className="row">
        {item.subtitle.map((i, idx) => (
          <div className="col-12" key={idx.toString()}>
            <ListItem
              item={i}
              index={
                index && typeof index === "string"
                  ? index + "," + idx.toString()
                  : null
              }
              classes={classes}
              handleActionSub={handleActionSub}
              deleteFolder={deleteFolder}
            />
          </div>
        ))}

        {item.input.map((a, adx) => (
          <div className="col-12" key={adx.toString()}>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={a?.medkind?.nama || ""}
                  onChange={() => {}}
                  disabled
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {a?.medkind?.unit || ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ExpansionPanel defaultExpanded={false} className="my-5 rounded-top w-100">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <span className={classes.heading_new} id={index}>
          {item.title}
        </span>

        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <i
            id={`icon-delete-${item.id}`}
            className="btn btn-sm btn-hover-danger fas fa-times-circle text-danger font-size-h4 cursor-pointer"
            onClick={() => {
              deleteFolder(item.id);
            }}
          ></i>
        </span>

        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ marginTop: 5 }}
        >
          <ButtonAction
            data={assign(item, { index })}
            handleAction={handleActionSub}
            ops={
              index && typeof index === "string" && index.split(",").length < 5
                ? data_ops_sub
                : [data_ops_sub[1]]
            }
          />
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        {children}
      </ExpansionPanelDetails>
      <Divider />
    </ExpansionPanel>
  );
}

export default injectIntl(connect(null, auth.actions)(OpenScreeningSetting));
