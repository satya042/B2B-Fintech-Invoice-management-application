import React,{useContext} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import './style.css';
//import ActionContext from "../context/action/ActionContext"
import axios from "axios";
import { Grid } from "@material-ui/core";

function clearform() {
  document.getElementById("form").reset();
}


function Add() {
  const [open, setOpen] = React.useState(false);

  const [business_code, setBusinessCode] = React.useState("")
  const [cust_number, setCustNumber] = React.useState("");
  const [clear_date, setClearDate] = React.useState("");
  const [buisness_year, setBuisnessYear] =React.useState(""); 
  const [doc_id, setDocid] = React.useState("")
  const [posting_date, setPostingDate] = React.useState("");
  const [document_create_date, setdocument_create_date] = React.useState("");
  const [due_in_date, setDueDate ] =React.useState("");
  const [invoice_currency, setInvoiceCurrency] = React.useState("")
  const [document_type, setDocumentType] = React.useState("");
  const [posting_id, setPostingId ]= React.useState("");
  const [total_open_amount, setTotalAmount] = React.useState(""); 
  const [baseline_create_date, setBaselineCreateDate] = React.useState("");
  const [cust_payment_terms, setCustPaymentTerms] = React.useState("");
  const [invoice_id, setInvoiceId] = React.useState("");

  //const { actionData, setActionData } = useContext(ActionContext);
 

  const fetchData = async() => {
    await axios
     .get(`http://localhost:8080/HRC-backend/addData?business_code=${business_code}&cust_number=${cust_number}&_clear_date=${clear_date}&buisness_year=${buisness_year}&doc_id=${doc_id}&posting_date=${posting_date}&document_create_date=${document_create_date}&due_in_date=${due_in_date}&invoice_currency=${invoice_currency}&document_type=${document_type}&posting_id=${posting_id}&total_open_amount=${total_open_amount}&baseline_create_date=${baseline_create_date}&cust_payment_terms=${cust_payment_terms}&invoice_id=${invoice_id}`)
     .then((response) => {
     // setActionData({ ...actionData, refresh: actionData.refresh + 1 });
       console.log(response);
     })
     .catch((error) => {
       console.log(error);
     });
 };

  const createNewinv = (e) => {
    e.preventDefault(); 
    console.log(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date, cust_payment_terms, invoice_id);
    fetchData();
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
      <Button
        id="add"
        variant="outlined"
        style={{borderColor:"#57b3fb", color:"white", paddingRight:"70px",paddingLeft:"70px"}}
        size="small"
        onClick={handleClickOpen} >
        Add
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        height="60%" >

        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }} >
          Add Invoice
        </DialogTitle>
        <DialogContent className="adddialog" dividers>
        
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start" >

                <TextField label="Business Code" className="addtext" type="text" value={business_code} InputProps={{ disableUnderline: true }}
                onChange={(e) => setBusinessCode(e.target.value)}  /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


              <TextField label="Customer Number" className="addtext" type="text" value={cust_number}  InputProps={{ disableUnderline: true }}   
                onChange={(e) => setCustNumber(e.target.value)} />         
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              

              <TextField label="Clear date"  className="addtext" type="date" value={clear_date} InputProps={{ disableUnderline: true }} InputLabelProps={{shrink: true,}} 
                onChange={(e) => setClearDate(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <TextField label="Buisness Year" className="addtext" type="date" value={buisness_year}  InputProps={{ disableUnderline: true }} InputLabelProps={{shrink: true,}} 
                onChange={(e) => setBuisnessYear(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Grid>
            <br></br>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
               <TextField label="Document Id" className="addtext" type="text" value={doc_id}  InputProps={{ disableUnderline: true }}
                onChange={(e) => setDocid(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <TextField label="Posting Date" className="addtext" type="date" value={posting_date}  InputProps={{ disableUnderline: true }} InputLabelProps={{shrink: true,}} 
                onChange={(e) => setPostingDate(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         

              <TextField label="document_create_date" className="addtext" type="date"  value={document_create_date} InputProps={{ disableUnderline: true }} InputLabelProps={{shrink: true,}} 
                onChange={(e) => setdocument_create_date(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
             
              <TextField label="Due Date" className="addtext" type="date" value={due_in_date}  InputProps={{ disableUnderline: true }} InputLabelProps={{shrink: true,}} 
                onChange={(e) => setDueDate(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            </Grid>
            <br></br>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
             <TextField label="Invoice currency" className="addtext" type="text" value={invoice_currency}  InputProps={{ disableUnderline: true }}
              onChange={(e) => setInvoiceCurrency(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField label="Document Type" className="addtext" type="text" value={document_type}  InputProps={{ disableUnderline: true }}
              onChange={(e) => setDocumentType(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <TextField label="Posting Id" className="addtext" type="text" value={posting_id}  InputProps={{ disableUnderline: true }}
              onChange={(e) => setPostingId(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <TextField label="Total Open Amount" className="addtext" type="text" value={total_open_amount} InputProps={{ disableUnderline: true }}
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </Grid>
          <br></br>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <TextField label="Baseline Create date " className="addtext"  type="date" value={baseline_create_date} InputProps={{ disableUnderline: true }} InputLabelProps={{shrink: true,}} 
                onChange={(e) => setBaselineCreateDate(e.target.value)} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
              <TextField label="Customer Payment Terms" className="addtext" type="text" value={cust_payment_terms} InputProps={{ disableUnderline: true }}
              onChange={(e) => setCustPaymentTerms(e.target.value)}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <TextField label="InvoiceId" className="addtext" type="text" value={invoice_id} InputProps={{ disableUnderline: true }}
              onChange={(e) => setInvoiceId(e.target.value)}
            />
              </Grid>
              <br></br>
              
              
            </Grid>
            
            <Divider light />
        <Grid
                container
                direction="row"
                style={{marginTop:"2vh"}}
              >
        <Grid
                container
                item xs={6}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                width="50%"
              >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{ color: "#14AFF1" }}
            size="small"
          >
            Cancel
          </Button>
            </Grid>
            <Grid
                container
                item xs={6}
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
          <Button
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF", float:"right", marginRight:"2vh" }}
            onClick={clearform}
            id="clearadd"
            size="small"
          >
            Clear
          </Button>
          <Button
            autoFocus
            type="submit"
            onClick={(e) => { createNewinv(e) }}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF", float:"right" }}
            size="small"
          >
                Add
            </Button>
           </Grid>
         </Grid>
        </DialogContent>
      </Dialog>
      </form>
    </>
  );
}
export default Add;




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
//     padding: theme.spacing(5),
//   },
// }))(MuiDialogContent);
