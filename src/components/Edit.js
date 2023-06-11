//import React,{useEffect,useState,useContext} from "react";
import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import './style.css'
import { Grid, TextField } from "@material-ui/core";



  function clearform() { 
    document.getElementById("formedit").reset();
  }

function Edit() {


  const [open, setOpen] = React.useState(false);
 // const [loading, setLoading] = useState(false);  
  const [fields, setFields] = useState(null);
  
   let invoice_currency;
   let cust_payment_terms;
   

  const handleChange = (fieldName, e) => {
    setFields({ ...fields, [fieldName]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <>
      <form id="form">
          <Button id="edit" variant="outlined" onClick={handleClickOpen}
          style={{ borderColor: "#57b3fb", color:"white", paddingRight:"70px",paddingLeft:"68px" }}
          size="small" >
        Edit
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }} > 

          Edit Invoice
        </DialogTitle>
        <DialogContent  className="adddialog" dividers>
          <br></br>
        
          <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"  >

               <TextField label="Invoice currency" className="addtext" type="text" value={invoice_currency} InputProps={{ disableUnderline: true }}
                onChange={(e) => handleChange("invoice_currency", e)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <TextField label="Customer Payment Terms" className="addtext" type="text" value={cust_payment_terms} InputProps={{ disableUnderline: true }}
                onChange={(e) => handleChange("cust_payment_terms", e)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              </Grid>
        </DialogContent>
        
        <DialogActions className="adddialog">
        <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{ color: "#14AFF1",}} >
            Cancel
          </Button>
          </Grid>
          <Button
          //  disabled={loading}
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF" }}
            onClick={clearform}
            id="resetedit" >
            Reset
          </Button>
          <Button
            autoFocus  
            onClick={handleClose}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF" }} >
            Save
          </Button>
        </DialogActions>
        
      </Dialog>
      </form>
    </>
  );
}

export default Edit;



// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });


// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);


   //const ActionContext = createContext();
  // const { actionData } = useContext(ActionState);
  //  const {actionData} = useState({
  //   edit: {
  //     editActive: false,
  //     editData: null,
  //   }})



// 
// const [loading, setLoading] = useState(false);  
// const [fields, setFields] = useState(null);


// useEffect(() => {
//   if (edit.editData !== null) {
//     setFields({
//       invoice_currency: editData[0].invoice_currency,
//       cust_payment_terms: editData[0].cust_payment_terms,
//     });
//   }
// }, [actionData.edit]);




// const handleSubmit = () => {
//   setLoading(true);
//   const dataToPost = {
//     sl_no: actionData.edit.editData[0].sl_no,
//     invoice_currency: fields.invoice_currency,
//     cust_payment_terms: fields.cust_payment_terms,
//   };
//   console.log("posting data", dataToPost);
//   axios
//   .get(
//     `http://localhost:8080/HRC-backend/UpdateEditData?sl_no=${actionData.edit.editData[0].sl_no}&invoice_currency=${fields.invoice_currency}&cust_payment_terms=${fields.cust_payment_terms}`
//   )
//   .then((res) => {
//     setLoading(false);
//     // console.log("in then block", res.data);
//     handleClose();
//   })
//   .catch((err) => {
//     setLoading(false);
//     console.log(err);
//   });
// };