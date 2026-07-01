import MaterialTable from "@material-table/core"
import { useSelector } from "react-redux"

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from "../store/slices/Slicer"

import { Grid, TextField, Button, Dialog, DialogActions, DialogContent } from "@mui/material"
export default function DisplayProduct() {
    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [productRate, setProductRate] = useState('')

    const [productPicture, setProductPicture] = useState({ bytes: '', url: '' })
    const [dialogState, setDialogState] = useState(false)
    const dispatch = useDispatch()
    // state = is the entire Redux store.
    // ? = "If state exists, then access product; otherwise, return undefined."
    var data = useSelector((state) => state?.product)
    //    console.log("DAAAAATA:",data)
    try {
        // data is object but material table accept array conver object to array
        // key are remove
        var productdata = Object.values(data)
    }
    catch (e) { var productdata = [] }

    const handleClick = () => {
        var body = {
            productId,
            productName,
            productRate,
            picture: productPicture.url,
        };
        var payload = [productId, body];
        dispatch(addProduct(payload));
        setDialogState(false)

    }



    function editInterface() {
        return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', padding: 5, width: '40%', margin: 20 }}>
                <Grid container spacing={2} >
                    <Grid size={12} >
                        <TextField value={productId} onChange={(e) => setProductId(e.target.value)} fullWidth variant='outlined' label="Product Id" />
                    </Grid>
                    <Grid size={12}>
                        <TextField value={productName} onChange={(e) => setProductName(e.target.value)} fullWidth variant='outlined' label="Product Name" />
                    </Grid>
                    <Grid size={12}>
                        <TextField value={productRate} onChange={(e) => setProductRate(e.target.value)} fullWidth variant='outlined' label="Product Rate" />
                    </Grid>




                </Grid>

            </div>

        </div>)
    }
    function handleDelete() {
        var payload = [productId]
        dispatch(removeProduct(payload))
        setDialogState(false)
    }

    function showDialog() {
        return <div>
            <Dialog open={dialogState}>
                <DialogContent>
                    {editInterface()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    }

    function setEditData(rowData) {
        setProductId(rowData.productId)
        setProductName(rowData.productName)
        setProductRate(rowData.productRate)
        setProductPicture({ bytes: '', url: rowData.picture })
        setDialogState(true)
    }
    function SimpleAction() {
        return (
            <MaterialTable
                title="Simple Action Preview"
                columns={[
                    { title: 'ID', field: 'productId' },
                    { title: 'Name', field: 'productName' },
                    { title: 'Rate', field: 'productRate' },
                    { title: 'Picture', render: (rowdata) => <img src={rowdata.picture} width={50} /> },
                ]}
                data={productdata}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit User',
                        onClick: (event, rowData) => setEditData(rowData)
                    }
                ]}
            />
        )
    }


    return (<div>
        {SimpleAction()}
        {showDialog()}
    </div>)
}